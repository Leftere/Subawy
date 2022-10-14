import { Component } from 'react'

import transition from 'animations/transition'

import background from '../images/background.jpg'

import vitaminWater from '../images/vitaminWater.png'
import chips from '../images/chips.png'
import dasani from '../images/dasani.png'
import subwayCup from '../images/subwayCup.png'
import cookie from '../images/cookie.png'

import 'gsap'
import 'gsap-then'

import './styles.css'

const FADE_TIME  = 1

export default class CompleteYourMealAnimatedDual extends Component {

  componentDidMount() {
    new TimelineMax()
      .set(this.vitaminWater, { opacity: 1 })
      .set(this.chips, { opacity: 1 })
      .set(this.dasani, { opacity: 0 })
      .set(this.subwayCup, { opacity: 0 })
      .set(this.cookie1, { opacity: 0 })
      .set(this.cookie2, { opacity: 0 })

      .to(this.vitaminWater, FADE_TIME, { opacity: 0, delay: 2 })
      .to(this.dasani, FADE_TIME, { opacity: 1 })

      .to(this.chips, FADE_TIME, { opacity: 0, delay: 1.5 })
      .to(this.cookie1, FADE_TIME, { opacity: 1}, 6)
      .to(this.cookie2, FADE_TIME, { opacity: 1}, 6)

      .to(this.dasani, FADE_TIME, { opacity: 0, delay: 1.5 })
      .to(this.subwayCup, FADE_TIME, { opacity: 1})
  }


  render() {

    return (
       <div className='c-Promotion CompleteYourMealAnimated'>
        <img className='c-Promotion_background' src={background} />

        <img src={vitaminWater} className={'vitaminWater'} ref={(node) => { this.vitaminWater = node; }} />
        <img src={dasani} className={'dasani'} ref={(node) => { this.dasani = node; }} />
        <img src={chips} className='chippies' ref={(node) => { this.chips = node; }} />

        <img src={subwayCup} className='subwayCup' ref={(node) => { this.subwayCup = node; }} />
        <img src={cookie} className='cookie1' ref={(node) => { this.cookie1 = node; }} />
        <img src={cookie} className='cookie2' ref={(node) => { this.cookie2 = node; }} />

      </div>
    )
  }
}
