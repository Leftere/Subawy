import { Component } from 'react'
import neocastDataProvider from 'api/neocastDataProvider'

import 'gsap'
import 'gsap-then'

import text1 from '../images/text1.png'
import text3 from '../images/text3.png'
import text4 from '../images/text4.png'

import bg1 from '../images/bg1.png'
import bg2 from '../images/bg2.png'
import bg3 from '../images/bg3.png'
import bg4 from '../images/bg4.png'

import frame1 from '../images/frame1.png'
import frame2 from '../images/frame2.png'
import frame5 from '../images/frame5.png'
import frame6 from '../images/frame6.png'
import frame7 from '../images/frame7.png'

import fireBg from '../images/bg6.png'
import fire from '../images/fire6.png'
import text from '../images/text6.png'
// import copyright from '../images/copyright.png'

import './styles.css'

@neocastDataProvider([
  'honey_jalapeno_price',
])
export default class HoneyJalapenoW6PromoQuad extends Component {

componentDidMount() {

    let beatLength = 3.5;

    new TimelineMax()

      // reset
      .set(this.frame1, { autoAlpha: 1 })
      .set(this.frame2, { autoAlpha: 0 })
      .set(this.frame3, { autoAlpha: 0 })
      .set(this.frame4, { autoAlpha: 0 })
      .set(this.frame5, { autoAlpha: 0 })
      .set(this.frame6, { autoAlpha: 0 })
      .set(this.frame7, { autoAlpha: 0 })

      .set(this.fire, { autoAlpha: 0.3, bottom:-400 })
      // frame 1

      // frame 2
      //.to(this.frame2, 1.5,  { autoAlpha: 1, delay: 1 })

      // frame 3
      .set(this.frame1, { autoAlpha: 0, delay: 4.5 })
      .set(this.frame2, { autoAlpha: 0 })
      .set(this.frame3, { autoAlpha: 1 })
      .to(this.bg3, beatLength, { top: "+=50" })

      // frame 4
      .set(this.frame3, { autoAlpha: 0 })
      .set(this.frame4, { autoAlpha: 1 })
      .to(this.bg4, beatLength, { left: "+=50" })

      // frame 5
      .set(this.frame4, { autoAlpha: 0 })
      .set(this.frame5, { autoAlpha: 1 })

      // frame 6
      .to(this.frame6, 1,  { autoAlpha: 1, delay: 1.5 })
      .to(this.fire, 3,  { autoAlpha: 1, bottom:0 }, "-=1")

      // frame 7
      .set(this.frame5, { autoAlpha: 0, delay: 2 })
      .set(this.frame6, { autoAlpha: 0 })
      .set(this.frame7, { autoAlpha: 1 })

    TweenLite.defaultEase = Linear.easeNone;
  }

  render() {
    return (
      <div className='c-Promotion-2018w6-HoneyJalapeno'>

        <div className="frame frame1" ref={(node) => this.frame1 = node}>
          <img src={frame1}/>
        </div>

        <div className="frame frame2" ref={(node) => this.frame2 = node}>
          <img src={frame2}/>
        </div>

        <div className="frame frame3" ref={(node) => this.frame3 = node}>
          <img className="bg" src={bg3} ref={(node) => this.bg3 = node}/>
          <img className="text" src={text3}/>
        </div>

        <div className="frame frame4" ref={(node) => this.frame4 = node}>
          <img className="bg" src={bg4} ref={(node) => this.bg4 = node}/>
          <img className="text" src={text4}/>
        </div>

        <div className="frame frame5" ref={(node) => this.frame5 = node}>
          <img src={frame5}/>
        </div>

        <div className="frame frame6" ref={(node) => this.frame6 = node}>
          <img src={fireBg}/>
          <img src={fire} ref={(node) => this.fire = node}/>
          <img src={text}/>
        </div>

        <div className="frame frame7" ref={(node) => this.frame7 = node}>
          <img src={frame7}/>
          <p className="price price1">${this.props.honey_jalapeno_price}</p>
        </div>

      </div>
    )
  }
}
