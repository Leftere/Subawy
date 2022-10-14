import { Component } from 'react'
import neocastDataProvider from 'api/neocastDataProvider'

import 'gsap'
import 'gsap-then'

import text1 from '../images/text1.png'
import text2 from '../images/text2.png'
import text3 from '../images/text3.png'
import text4 from '../images/text4.png'
import text5 from '../images/text5.png'

import bg1 from '../images/bg1.png'
import bg2 from '../images/bg2.png'
import bg3 from '../images/bg3.png'
import bg4 from '../images/bg4.png'
import bg5 from '../images/bg5.png'

import frame6 from '../images/frame6.png'

// import copyright from '../images/copyright.png'

import './styles.css'

@neocastDataProvider([
  'steak_and_cheese_price_6in',
  'steak_and_cheese_price_12in',
  'chipotle_southwest_steak_and_cheese_wrap_price',
  'chipotle_cheesesteak_price_6in',
  'chipotle_cheesesteak_price_12in',
])
export default class SteakCollectionW6PromoQuad extends Component {

componentDidMount() {

    let beatLength = 3.5;

    new TimelineMax()

      // reset
      .set(this.frame1, { autoAlpha: 1 })
      .set(this.frame2, { autoAlpha: 0 })
      .set(this.frame3, { autoAlpha: 0 })
      .set(this.frame4, { autoAlpha: 0 })
      .set(this.frame5, { autoAlpha: 0 })
      .set(this.frame6, { autoAlpha: 1 })

      // Add the last frame at the beginning
      .to(this.frame6, 1, { autoAlpha: 0, delay: 5 })

      // frame 1
      .to(this.bg1, 3.5, { left: "+=50" }, "-=1")

      // frame 2
      .set(this.frame1, { autoAlpha: 0 })
      .set(this.frame2, { autoAlpha: 1 })
      .to(this.bg2, beatLength, { left: "-=50" })

      // frame 3
      .set(this.frame2, { autoAlpha: 0 })
      .set(this.frame3, { autoAlpha: 1 })
      .to(this.bg3, beatLength, { left: "-=50" })

      // frame 4
      .set(this.frame3, { autoAlpha: 0 })
      .set(this.frame4, { autoAlpha: 1 })
      .to(this.bg4, beatLength, { left: "+=50" })

      // frame 5
      .set(this.frame4, { autoAlpha: 0 })
      .set(this.frame5, { autoAlpha: 1 })
      .to(this.bg5, 0.75, { top: "+=20" })

      // // frame 6
      .set(this.frame5, { autoAlpha: 0, delay: 2 })
      .set(this.frame6, { autoAlpha: 1 })

    TweenLite.defaultEase = Linear.easeNone;
  }

  render() {
    return (
      <div className='c-Promotion-2018w6-SteakCollection'>

        <div className="frame frame1" ref={(node) => this.frame1 = node}>
          <img className="bg" src={bg1} ref={(node) => this.bg1 = node}/>
          <img className="text" src={text1}/>
        </div>

        <div className="frame frame2" ref={(node) => this.frame2 = node}>
          <img className="bg" src={bg2} ref={(node) => this.bg2 = node}/>
          <img className="text" src={text2}/>
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
          <img className="bg" src={bg5} ref={(node) => this.bg5 = node}/>
          <img className="text" src={text5}/>
        </div>

        <div className="frame frame6" ref={(node) => this.frame6 = node}>
          <img src={frame6}/>
          <p className="price price1">${this.props.steak_and_cheese_price_6in} / ${this.props.steak_and_cheese_price_12in}</p>
          <p className="price price2">${this.props.chipotle_southwest_steak_and_cheese_wrap_price}</p>
          <p className="price price3">${this.props.chipotle_cheesesteak_price_6in} / ${this.props.chipotle_cheesesteak_price_12in}</p>
        </div>

      </div>
    )
  }
}
