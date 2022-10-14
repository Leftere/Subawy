import { Component } from 'react'

import 'gsap'
import 'gsap-then'

import bg from '../images/bg.png'
import final from '../images/final.png'

import l2_4 from '../images/2_4.png'
import r1_3 from '../images/1_3.png'

import lHalf from '../images/left.png'
import rHalf from '../images/right.png'

//import bigSub from '../images/sub.png'

import './styles.css'

const FADE_IN_TIME  = 0.25
const OVERLAP_TIME = "-=0.5"

export default class MakeTurkeyPromoQuad extends Component {

componentDidMount() {
    new TimelineMax({ delay: 0.5 })
      .set(this.bg, { left: 0, top: 0 })

      .set(this.left, { left: -960 })
      .set(this.right, { left: 1920 })

      .set(this.l2_4, { left: 1920 })
      .set(this.r1_3, { left: -1033 })

      .set(this.final, { opacity: 0 })
      .set(this.lHalf, { opacity: 0, left: 0 })
      .set(this.rHalf, { opacity: 0, left: 960 })

      //  .set(this.bigSub, { left: 1400, top: 100 })
      //  .set(this.text1, { opacity: 1, left: 75, top: 75 })
      //  .set(this.text2, { opacity: 0, left: 75, top: 75 })
      //  .set(this.finalFrame, { opacity: 1, left: 1920, top: 0 })

      .to(this.left, 1, { left: 0, delay: 2.5 })
      .to(this.right, 1, { left: 960 }, "-=1")

      .to(this.l2_4, 2, { left: 548 }, "3")
      .to(this.r1_3, 2, { left: 442 }, "3")

      .to(this.final, 0, { opacity: 1 }, "7.9")
      .to(this.lHalf, 0, { opacity: 1 }, "7.9")
      .to(this.rHalf, 0, { opacity: 1 }, "7.9")

      .to(this.lHalf, 1.5, { left: -960 }, "8")
      .to(this.rHalf, 1.5, { left: 1920 }, "8")


      //  .to(this.text1, 1, { opacity: 0 }, 1.5)

      //  .to(this.text2, 1, { opacity: 1 }, 2.5)

      //  //.to(this.bg, 2, { left: -1920, top: 0 }, 6)
      //  .to(this.text2, 2, { left: -1920, top: 75 }, 6)
      //  .to(this.finalFrame, 2, { left: 0, top: 0 }, 6)

      // TweenLite.defaultEase = Linear.easeNone;

  }


  render() {
    return (
      <div className='c-Promotion-2018w3-MakeTurkey'>

        <img className='bg' src={bg} ref={(node) => this.bg = node} />

        <div className='panel  left' ref={(node) => this.left = node}>&nbsp;</div>
        <div className='panel right' ref={(node) => this.right = node}>&nbsp;</div>

        <img className='l2_4' src={l2_4} ref={(node) => this.l2_4 = node} />
        <img className='r1_3' src={r1_3} ref={(node) => this.r1_3 = node} />

        <img className='final' src={final} ref={(node) => this.final = node} />

        <img className='panel lHalf' src={lHalf} ref={(node) => this.lHalf = node} />
        <img className='panel rHalf' src={rHalf} ref={(node) => this.rHalf = node} />

      </div>
    )
  }
}
