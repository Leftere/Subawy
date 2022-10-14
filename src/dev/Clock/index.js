import { Component } from 'react'
import moment from 'moment'
import PropTypes from 'prop-types'


/**
 * This component is for DEV only. It'll show the current time
 *
 * IMPORTANT: This component modifies global state (window.DEV_MANUALLY_SET_TIME)
 * This will set the time for the playlist conditions
 */
export default class Clock extends Component {
  static propTypes = {
    startTime: PropTypes.object
  };

  static defaultProps = {
    startTime: moment()
  };

  constructor(props) {
    super(props)

    window.DEV_MANUALLY_SET_TIME = this.props.startTime || moment()
  }

  state = {
    time: this.props.startTime || moment()
  }

  componentWillMount() {
    this.interval = setInterval(() => {
      this.setState((state) => {

        const newTime = state.time.add(1, 'second')
        window.DEV_MANUALLY_SET_TIME = newTime

        return {
          time: newTime
        }

      })
    }, 1000)
  }

  componentWillUnmount() {
    clearInterval(this.interval)
  }

  render() {
    return (
      <div style={{ fontSize: 20 }}>
        {moment(this.state.time).format('hh:mm:ss a')}
      </div>
    )
  }
}
