import { Component } from 'react'

import 'gsap'
import 'gsap-then'

import frame1 from '../images/frame1.png'
import frame2 from '../images/frame2.png'
import frame3 from '../images/frame3.png'

import './styles.css'

const FADE_IN_TIME  = 0.3
const DELAY_TIME = 0.5

export default class MakeTurkeyPromoDual extends Component {

componentDidMount() {
    new TimelineMax({ delay: 0.5 })

      .set(this.frame1, { opacity: 1 })
      .set(this.frame2, { opacity: 0 })
      .set(this.frame3, { opacity: 0 })

      .to(this.frame1, FADE_IN_TIME, { opacity: 0, delay: 4 })
      .to(this.frame2, FADE_IN_TIME, { opacity: 1 }, "-=" + DELAY_TIME)

      .to(this.frame2, FADE_IN_TIME, { opacity: 0, delay: 4 })
      .to(this.frame3, FADE_IN_TIME, { opacity: 1 }, "-=" + DELAY_TIME)

    //   TweenLite.defaultEase = Linear.easeNone;

  }


  render() {
    return (
      <div className='c-Promotion-2018w3-MakeTurkey'>

        <img className='freshFrame frame1' src={frame1} ref={(node) => this.frame1 = node} />
        <img className='freshFrame frame2' src={frame2} ref={(node) => this.frame2 = node} />
        <img className='freshFrame frame3' src={frame3} ref={(node) => this.frame3 = node} />

      </div>
    )
  }
}
