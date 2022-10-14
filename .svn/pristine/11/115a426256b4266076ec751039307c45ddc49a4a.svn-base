import { Component } from 'react'

import 'gsap'
import 'gsap-then'

import frame3 from '../images/frame3.png'
import frame4 from '../images/frame4.png'
import frame5 from '../images/frame5.png'
import frame6 from '../images/frame6.png'
import frame7 from '../images/frame7.png'

import text1 from '../images/f1_text.png'
import text2 from '../images/f2_text.png'
import text4 from '../images/f4_text.png'
import text6 from '../images/f6_text.png'
import text7 from '../images/f7_text.png'

import copyright from '../images/copyright.png'

import './styles.css'

const FADE_IN_TIME  = 0.3
const DELAY_TIME = 0.5

export default class ChickenCaesarPromoDual extends Component {

componentDidMount() {
    new TimelineMax({ delay: 0.5 })

      // reset/frame 1
      .set(this.frame1, { autoAlpha: 1 })
      .set(this.frame2, { autoAlpha: 0 })
      .set(this.frame4, { autoAlpha: 0 })
      .set(this.frame6, { autoAlpha: 0 })
      .set(this.frame7, { autoAlpha: 0 })

      // frame 2
      .to(this.frame1, FADE_IN_TIME, { autoAlpha: 0, delay: 3 })
      .to(this.frame2, FADE_IN_TIME, { autoAlpha: 1 }, "-=" + DELAY_TIME)

      // frame 4
      .to(this.frame2, FADE_IN_TIME, { autoAlpha: 0, delay: 3 })
      .to(this.frame4, FADE_IN_TIME, { autoAlpha: 1 }, "-=" + DELAY_TIME)

      // frame 6
      .to(this.frame4, FADE_IN_TIME, { autoAlpha: 0, delay: 3 })
      .to(this.frame6, FADE_IN_TIME, { autoAlpha: 1 }, "-=" + DELAY_TIME)

      // frame 7
      .to(this.frame6, FADE_IN_TIME, { autoAlpha: 0, delay: 3 })
      .to(this.frame7, FADE_IN_TIME, { autoAlpha: 1 }, "-=" + DELAY_TIME)

    TweenLite.defaultEase = Linear.easeNone;
  }


  render() {
    return (
      <div className='c-Promotion-2018w4-ChickenCaesarPromo'>
        <div className="frame frame1" ref={(node) => this.frame1 = node}>
          <img className="text1" src={text1}/>
        </div>
        <div className="frame frame2" ref={(node) => this.frame2 = node}>
          <img className="text1" src={text1}/>
          <img className="text2" src={text2}/>
        </div>
        <div className="frame" ref={(node) => this.frame4 = node}>
          <img src={frame4}/>
          <img className="text4" src={text4}/>
        </div>
        <div className="frame" ref={(node) => this.frame6 = node}>
          <img src={frame6}/>
          <img className="text6" src={text6}/>
        </div>
        <div className="frame" ref={(node) => this.frame7 = node}>
          <img src={frame7}/>
          <img className="text7" src={text7}/>
          <img className="copyright" src={copyright}/>
        </div>
      </div>
    )
  }
}
