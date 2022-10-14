import neocastDataProvider from 'api/neocastDataProvider'
import { Component } from 'react'
import PropTypes from 'prop-types'

import BreakfastMenu from './Menu'
import BreakfastFooter from './Footer'
import BreakfastFeatured from './Featured'

import './styles.css'

let TimerLength = 6000;

export default class Breakfast extends Component {

  // Get the player type
  static propTypes = {
    player: PropTypes.oneOf(['dual', 'quad'])
  }

  constructor(props) {
    super(props);
    this.state = {
      intervalId: null,
      currentFrameCount: 0
    }
  }

  componentDidMount() {
    this.state.intervalId = setInterval(this.timer.bind(this), TimerLength)
  }

  componentWillUnmount() {
   clearInterval(this.state.intervalId);
  }

  timer() {
    this.setState({currentFrameCount: this.state.currentFrameCount + 1})
  }

  render() {
    return (
      <div className={`c-Breakfast`}>

        {/* Screen content */}
        <div className={`c-breakfastContent`}>

          <section className={`s-Menu`}>
            <BreakfastMenu {...this.props} currentFrameCount={this.state.currentFrameCount}/>
          </section>

          <section className={`s-Footer`}>
            <BreakfastFooter {...this.props} currentFrameCount={this.state.currentFrameCount}/>
          </section>

        </div>

      </div>
    );
  }
}
