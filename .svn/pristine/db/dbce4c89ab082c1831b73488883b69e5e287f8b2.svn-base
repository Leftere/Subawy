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

export default class ChickenCaesarPromoQuad extends Component {

componentDidMount() {
    new TimelineMax()

       // reset/frame 1
       .set(this.frame1, { autoAlpha: 1 })
       .set(this.frame2, { autoAlpha: 0 })
       .set(this.frame3, { autoAlpha: 0 })
       .set(this.frame4, { autoAlpha: 0 })
       .set(this.text4, { autoAlpha: 0 })
       .set(this.frame6, { autoAlpha: 0 })
       .set(this.text6, { autoAlpha: 0 })
       .set(this.frame7, { autoAlpha: 0 })

       // frame 2
       .set(this.frame1, { autoAlpha: 0, delay: 3 })
       .set(this.frame2, { autoAlpha: 1 })

       // frame 3
       // .set(this.frame2, { autoAlpha: 0, delay: 2 })
       // .set(this.frame3, { autoAlpha: 1 })
       // .to(this.bg3, 2, { left: -96 })

       // frame 4
       .set(this.frame2, { autoAlpha: 0, delay: 2 })
       .set(this.frame4, { autoAlpha: 1 })
       .to(this.bg4, 2, { left: -100 })
       .set(this.text4, { autoAlpha: 1 })

       // frame 6
       .set(this.frame4, { autoAlpha: 0, delay: 2 })
       .set(this.frame6, { autoAlpha: 1 })
       .to(this.bg6, 2, { top: -50 })
       .set(this.text6, { autoAlpha: 1 })

       // frame 7
       .set(this.frame6, { autoAlpha: 0, delay: 4 })
       .set(this.frame7, { autoAlpha: 1 })
       .to(this.bg7, 6, { left: -200 })

       // end
       // .set(this.text7, { autoAlpha: 0 })

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
        <div className="frame" ref={(node) => this.frame3 = node}>
          <img src={frame3} ref={(node) => this.bg3 = node}/>
        </div>
        <div className="frame" ref={(node) => this.frame4 = node}>
          <img src={frame4} ref={(node) => this.bg4 = node}/>
          <img className="text4" src={text4} ref={(node) => this.text4 = node}/>
        </div>
        <div className="frame" ref={(node) => this.frame6 = node}>
          <img src={frame6} ref={(node) => this.bg6 = node}/>
          <img className="text6" src={text6} ref={(node) => this.text6 = node}/>
        </div>
        <div className="frame" ref={(node) => this.frame7 = node}>
          <img src={frame7} ref={(node) => this.bg7 = node}/>
          <img className="text7" src={text7} ref={(node) => this.text7 = node}/>
          <img className="copyright" src={copyright}/>
        </div>
      </div>
    )
  }
}
