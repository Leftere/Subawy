import { Component } from 'react'
import PropTypes from 'prop-types'
import ReactCSSTransitionReplace from 'react-css-transition-replace'

import 'gsap'
import 'gsap-then'

import './styles.css'

/**
 * Time to transition frames and text
 */
const TRANSITION_DURATION = 1200

/**
 * Time to switch frames
 */
const FRAME_DURATION = 5000


export default class PromoBase extends Component {

  static propTypes = {
    player: PropTypes.oneOf(['dual', 'quad']).isRequired,

    /**
     * Optional style props
     */
    backgroundColor: PropTypes.string,
    textColor: PropTypes.string,

    /**
     * When to change the image over
     */
    changeImageAtIndex: PropTypes.number,
    panClass: PropTypes.string,

    /**
     * Images to show as part of the promo
     */
    imageFrames: PropTypes.arrayOf(PropTypes.node).isRequired,

    frame1Text: PropTypes.node.isRequired,
    frame2Text: PropTypes.node.isRequired,
    frame3Text: PropTypes.node.isRequired,
  };


  static defaultProps = {
    changeImageAtIndex: 1,
    backgroundColor: '#FDBA12',
    textColor: '#008d43',
    panClass: 'panBottomLeft'
  };


  constructor(props) {
    super(props)

    this.frameTexts = [
      this.props.frame1Text,
      this.props.frame2Text,
      this.props.frame3Text
    ]
  }


  state = {
    /**
     * Start at the end frame
     */
    currentFrameIndex: this.props.imageFrames.length - 1,
    currentFrameTextIndex: 0,
    panning: false
  }


  componentDidMount() {
    const { changeImageAtIndex } = this.props

    // After a 5s delay, then show the next animation
    window.setTimeout(() => {

      this.setNextImageFrame()

      // Animate in the triangle
      if (this.props.player === 'dual') {
        new TimelineMax({ delay: 1.4 })
          // 'this.triangle' comes from the ref rendered below
          .set(this.triangle, { left: -700, bottom: -800 })
          .set(this.frame1TextNode, { left: -700, bottom: -800 })

          .to(this.triangle, 1, { left: 0, bottom: 0 }, 0)
          .to(this.frame1TextNode, 1, { left: 50, bottom: 30, delay: 0 }, 0)
      }

      window.setTimeout(() => {
        this.setNextTextFrame(changeImageAtIndex === 1)

        window.setTimeout(() => {
          this.setNextTextFrame(changeImageAtIndex === 2)

          window.setTimeout(this.setNextImageFrame, FRAME_DURATION)

        }, FRAME_DURATION)

      }, FRAME_DURATION)

    }, 15000);
  }


  setNextTextFrame = (changeImage) => {
    this.setState((state) => ({
      currentFrameTextIndex: state.currentFrameTextIndex + 1,
      ...(changeImage ? { currentFrameIndex: state.currentFrameIndex + 1 } : {})
    }))
  }


  setNextImageFrame = () =>
    this.setState((state) => ({
      currentFrameIndex: (state.currentFrameIndex + 1) % this.props.imageFrames.length
    }))


  render() {
    const {
      backgroundColor,
      textColor,
      imageFrames,
      player,
      panClass
    } = this.props

    const {
      currentFrameIndex,
      currentFrameTextIndex
    } = this.state

    const isQuad = player === 'quad'


    return (
      <div className='c-Promotion lmdp-2017-promo'>

        {/* Image */}
        {imageFrames.map((imageFrame, i) =>
          <div className={`frame-panel ${currentFrameIndex === i ? 'shown' : ''}`} style={{ zIndex: i }} key={i}>
            {isQuad
              ? <div className={`frame-panned ${panClass}`}> {imageFrame} </div>
              : imageFrame
            }
          </div>
        )}

        {/* Copy / Triangle */}
        <div className={`triangle-wedge-container ${isQuad ? 'slide-in-wedge' : ''}`}>
          <div
            className='triangle-wedge'
            style={{ borderColor: `transparent transparent transparent ${backgroundColor}` }}
            ref={(node) => this.triangle = node}
          >
            <ReactCSSTransitionReplace
              transitionName={'fade-wait'}
              transitionEnterTimeout={TRANSITION_DURATION}
              transitionLeaveTimeout={TRANSITION_DURATION}
            >

              <div
                className='frame-ingredient-text'
                style={{ color: textColor }}
                key={currentFrameTextIndex}
                ref={(node) => this.frame1TextNode = node}
                /**
                 * Setting inner HTML to allow promos to further customize format and line breaking of text. Originally
                 * this was just a <Node> prop, but the formatting and transitioning text worked very poorly.
                 */
                dangerouslySetInnerHTML={{ __html: this.frameTexts[currentFrameTextIndex] }}
              />

            </ReactCSSTransitionReplace>
          </div>
        </div>

      </div>
    )
  }
}
