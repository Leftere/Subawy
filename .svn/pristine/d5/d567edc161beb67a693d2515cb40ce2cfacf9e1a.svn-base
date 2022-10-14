import { Component } from 'react'

import background from '../images/background.jpg'

import vitaminWater from '../images/vitaminWater.png'
import chips from '../images/chips.png'
import dasani from '../images/dasani.png'
import subwayCup from '../images/subwayCup.png'
import cookie from '../images/cookie.png'

import styles from './styles.css'


export default class CompleteYourMealAnimated extends Component {

  state = {
    done: false
  }

  /**
   * Total hack, but this manually sets positioning of some of the elements.
   * For some reason, on the player, when the panel rotates, the fill-mode:forwards
   * isn't respected and it snaps back to the start animation point.
   */
  componentDidMount() {
    this.mounted = true;
    window.setTimeout(() => {
      if (this.mounted) {
        this.setState({ done: true })
      }
    }, 11000);
  }

  componentWillUnmount() {
    this.mounted = false;
  }

  render() {
    const hiddenStyle = this.state.done ? { display: 'none' } : {}

    // Hack - manually set ending positions
    const endingStyle = this.state.done ? {
      transform: 'translate3d(0px, 0px, 0px)'
    } : {}

    return (
      <div className='CompleteYourMealAnimated c-Promotion'>
        <img className='c-Promotion_background' src={background} />

        <img src={dasani} className={'dasani'} style={hiddenStyle} />
        <img src={vitaminWater} className={'vitaminWater'} style={hiddenStyle} />
        <img src={chips} className='chippies' style={hiddenStyle} />


        <img src={subwayCup} className='subwayCup' style={endingStyle} />
        <img src={cookie} className='cookie1' style={endingStyle} />
        <img src={cookie} className='cookie2' style={endingStyle} />
      </div>
    )
  }
}
