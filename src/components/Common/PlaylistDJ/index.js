import { Component, cloneElement } from 'react'
import PropTypes from 'prop-types'
import ReactCSSTransitionReplace from 'react-css-transition-replace'
import queue from 'queue'

/**
 * How long before showing the next frame
 * @type {Number}
 */
const DEFAULT_DURATION = 20000

/**
 * Time a frame switch can hang out in the queue
 * @type {Number}
 */
const FADE_DURATION_DELAY = 500

/**
 * Queues for animations transitions.
 * By default, we only want to transition one panel at a time.
 */
const animationQueue = queue({
  concurrency: 10,
  autostart: true
})

export default class PlaylistDJ extends Component {
  static propTypes = {
    /**
     * A list of playlists
     */
    playlists: PropTypes.array.isRequired,

    /**
     * If this animation should be queued with every other transition
     */
    queued: PropTypes.bool,

    /**
     * Quad or Dual player. This gets passed to the frame component to render something conditionally
     */
    player: PropTypes.oneOf(['quad', 'dual']),

    /**
     * Direction of the screens
     */
    layout: PropTypes.oneOf(['L2R', 'R2L']),

    /**
     * Instead of using the playlist id and the frame index to create a key for the transition,
     * use a random (time-based) one instead. You can set this prop to 'true' if you have a playlist
     * that only has a single frame in it, and you want to rotate it with itself. Otherwise,
     * with one frame, the key would always be the same, and it would never transition. This was
     * added to support a single self-rotating feature promo.
     */
    randomKeys: PropTypes.bool,
    transitionType: PropTypes.string,
  };

  static defaultProps = {
    queued: true,
    randomKeys: false,
    transitionType: 'fade-wait',
  };

  constructor(props) {
    super(props)

    const { playlists } = this.props

    if (!playlists) {
      throw new Error('You must specify an array of playlists for PlayListDJ')
    }

    const missingIds = !playlists.every((playlist) => !!playlist.id)

    const hasDuplicateIds = playlists
      .map((playlist) => playlist.id)
      .filter((value, index, self) => self.indexOf(value) !== index)
      .length

    if (missingIds || hasDuplicateIds) {
      throw new Error(`Every playlist must have a unique 'id' attribute. Check to make sure that all
        playlist items have an id, and that they are unique.`)
    }
  }

  state = {
    currentPlaylistId: null,
    currentFrameIndex: 0,
    currentFrame: null
  }

  componentDidMount() {
    this.setNextFrame()
  }

  componentWillUnmount() {
    window.clearRequestTimeout(this.timeout)
  }

  setNextFrame = () => {
    const {
      currentPlaylistId,
      currentFrameIndex
    } = this.state

    /**
     * The next frame index. Used for getting the next frame duration
     * @type {Number}
     */
    let nextFrameIndex = 0

    /**
     * Find the current playlist
     */
    const foundPlaylist = this.getPlaylist()

    const frames = foundPlaylist
      ? this.getFilteredFrames(foundPlaylist)
      : []

    /**
     * No playlist was found or none of the frames have matching condition
     * criteria. We will queue up another playlist/frame change to see if
     * the playlist or frame should change.
     *
     * The filtered frames could be 0 if the franchise has not selected any
     * footer promotions, for example.
     */
    if (!foundPlaylist || frames.length === 0) {
      this.timeout = window.requestTimeout(this.queueNextFrame(), DEFAULT_DURATION)
      return
    }

    /**
     * The playlist has changed. Set the current frame to the first frame of the new playlist.
     */
    if (currentPlaylistId !== foundPlaylist.id) {
      this.setState({
        currentPlaylistId: foundPlaylist.id,
        currentFrameIndex: 0,
        currentFrame: frames[0]
      })

    /**
     * Otherwise, we're still in the same playlist, go to the next frame
     */
    } else {
      nextFrameIndex = (currentFrameIndex + 1) % frames.length

      this.setState({
        currentFrameIndex: nextFrameIndex,
        currentFrame: frames[nextFrameIndex]
      })

    }

    let nextFrame = frames[nextFrameIndex]

    if (!nextFrame.affectsClass) nextFrame.affectsClass = "__none"

    /**
     * Queue up the next frame
     */
    this.timeout = window.requestTimeout(
      this.queueNextFrame(nextFrame.animationDuration),
      nextFrame.duration || DEFAULT_DURATION
    )
  }

  queueNextFrame = (animationDuration = 0) =>
    () => {
      /**
       * This playlist isn't part of the animation pool, just go to the next frame
       */
      if (!this.props.queued) {
        this.setNextFrame()
        return
      }

      animationQueue.push((endJobCallback) => {

        this.setNextFrame()

        /**
         * End the job in the queue after a set amount of time. If the frame has an animation
         * duration, also wait to complete the job for that amount of time. The animation durations
         * are specified as part of the frame in the playlist configuration.
         */
        // window.requestTimeout(endJobCallback, FADE_DURATION_DELAY + animationDuration)
        window.requestTimeout(endJobCallback, FADE_DURATION_DELAY + animationDuration)
      })
    }

  /**
   * Get a playlist that matches all condition criteria.
   *
   * @return {Object}
   */
  getPlaylist = () => {
    const { playlists } = this.props

    return playlists.find((playlist) =>
      (playlist.conditions || [])
        .map((condition) => condition.predicate())
        .every(Boolean)
    )
  }

  /**
   * Frames can be conditionally shown, just like playlists. A typical
   * use case is a misconfigured Neocast key, causing an invalid Component to render. In
   * that case, just skip it.
   *
   * @return {Array}
   */
  getFilteredFrames = (playlist) =>
    playlist.frames
      /**
       * Filter out frames that don't meet all conditions (if they have conditions)
       */
      .filter((frame) =>
        (frame.conditions || [])
          .map((condition) => condition.predicate())
          .every(Boolean)
        )
      /**
       * Filter out frames that have invalid components. This could be the case where,
       * for example, the key `footer_tier_two` is not set, or it is set to something invalid.
       * Mapping for key => Component exists in the playlist given to this DJ.
       *
       * The frame can also have a `fallbackComponent` which will get shown if the key is not
       * specified or invalid. Don't filter these out.
       */
      .filter((frame) => frame.component !== undefined || frame.fallbackComponent !== undefined && frame.component !== null)

  componentWillReceiveProps (nextProps) {
    if (nextProps.value !== this.props.value) {
      this.props.onPlaylistChange(this.state.currentFrame)
    }
  }

  render() {
    const {
      currentPlaylistId,
      currentFrameIndex,
      currentFrame
    } = this.state

    const { randomKeys } = this.props;

    if (!currentFrame) {
      return null
    }

    const key = randomKeys
      ? new Date()
      : `${currentPlaylistId}-${currentFrameIndex}`;

    /**
     * Render the current frame. If a frame changes, this will automatically fade out
     * the old frame and fade in the new one.
     */
    return (
      <ReactCSSTransitionReplace
        transitionName={this.props.transitionType}
        transitionEnterTimeout={FADE_DURATION_DELAY}
        transitionLeaveTimeout={FADE_DURATION_DELAY}
      >
      <div className='dj-content' key={key}>

      <style dangerouslySetInnerHTML={{__html: `
          .cross-fade-leave.cross-fade-leave-active {
            transition-timing-function: cubic-bezier(0.000, 0.000, 1.000, 0);
          }
          .cross-fade-enter.cross-fade-enter-active {
            transition-timing-function: cubic-bezier(0.000, 0.000, 0.000, 1.000);
          }
        `}} />

      <style dangerouslySetInnerHTML={{__html: `
          .${this.state.currentFrame.affectsClass} .c-Menus_title span,
          .${this.state.currentFrame.affectsClass} {
            color: #4c006a !important;
          }
        `}} />

          {cloneElement((currentFrame.component || currentFrame.fallbackComponent), {
            ...this.props
          })}

        </div>

      </ReactCSSTransitionReplace>
    )
  }
}
