import { Component } from 'react'
import neocastDataProvider from 'api/neocastDataProvider'

import 'gsap'
import 'gsap-then'

 import frame1 from '../images/frame1.png'

 import bg2 from '../images/bg2.png'
 import text2 from '../images/text2.png'

 import text3 from '../images/text3.png'

 import bg4 from '../images/bg4.png'
 import text4 from '../images/text4.png'

 import bg6 from '../images/bg6.png'
 import frame5 from '../images/frame5.png'

 import text6 from '../images/text6.png'
 import fss1 from '../images/ss1.png'
 import fss2 from '../images/ss2.png'

 import frame7 from '../images/frame7.png'
 import frame8 from '../images/frame8.png'

// import copyright from '../images/copyright.png'

import './styles.css'

@neocastDataProvider([
  'harvest_turkey_ham_price_6in',
  'harvest_turkey_ham_price_12in',
  'chipotle_cheesesteak_price_6in',
  'chipotle_cheesesteak_price_12in'
])
export default class SunflowerCrunchPromoQuad extends Component {

componentDidMount() {

    var beatLength = 2

    new TimelineMax()

      // reset/frame 1
      .set(this.frame1, { autoAlpha: 1 })
      .set(this.frame2, { autoAlpha: 0 })
      .set(this.frame3, { autoAlpha: 0 })
      .set(this.frame4, { autoAlpha: 0 })
      .set(this.frame5, { autoAlpha: 0 })
      .set(this.frame6, { autoAlpha: 0 })
      .set(this.frame7, { autoAlpha: 0 })
      .set(this.frame8, { autoAlpha: 0 })
      .set(this.fss1, { autoAlpha: 0 })
      .set(this.fss2, { autoAlpha: 0 })

      // frame 2
      .set(this.frame1, { autoAlpha: 0, delay: 2.5 })
      .set(this.frame2, { autoAlpha: 1 })
      .to(this.bg2, beatLength, { left: "+=50" })

      // frame 3
      .set(this.frame2, { autoAlpha: 0 })
      .set(this.frame3, { autoAlpha: 1 })
      .to(this.bg3, beatLength, { left: "+=50" })

      // frame 4
      .set(this.frame3, { autoAlpha: 0 })
      .set(this.frame4, { autoAlpha: 1 })
      .to(this.bg4, beatLength, { top: "-=50" })

      // frame 5
      .set(this.frame4, { autoAlpha: 0 })
      .set(this.frame5, { autoAlpha: 1 })
      .to(this.bg5, beatLength, { top: "-=50" })

      // frame 6
      .set(this.frame5, { autoAlpha: 0 })
      .set(this.frame6, { autoAlpha: 1 })
      .to(this.bg6, 2.5, { top: "-=50" })

      // frame 7
      .set(this.frame6, { autoAlpha: 0 })
      .set(this.fss1, { autoAlpha: 1 })

      .set(this.fss1, { autoAlpha: 0, delay: 2.5 })
      .set(this.fss2, { autoAlpha: 1 })

      .set(this.fss2, { autoAlpha: 0, delay: 3 })
      .set(this.frame8, { autoAlpha: 1 })


    TweenLite.defaultEase = Linear.easeNone;
  }

  render() {
    return (
      <div className='c-Promotion-2018w5-SunflowerCrunchPromo'>

        <div className="frame frame1" ref={(node) => this.frame1 = node}>
          <img src={frame1}/>
        </div>

        <div className="frame frame2" ref={(node) => this.frame2 = node}>
          <img className="bg" src={bg2} ref={(node) => this.bg2 = node}/>
          <img className="text" src={text2}/>
        </div>

        <div className="frame frame3" ref={(node) => this.frame3 = node}>
          <img className="bg" src={bg2} ref={(node) => this.bg3 = node}/>
          <img className="text" src={text3}/>
        </div>

        <div className="frame frame4" ref={(node) => this.frame4 = node}>
          <img className="bg" src={bg4} ref={(node) => this.bg4 = node}/>
          <img className="text" src={text4}/>
        </div>

        <div className="frame frame5" ref={(node) => this.frame5 = node}>
          <img className="bg" src={bg6} ref={(node) => this.bg5 = node}/>
          <img className="text" src={frame5}/>
        </div>

        <div className="frame frame6" ref={(node) => this.frame6 = node}>
          <img className="bg" src={bg6} ref={(node) => this.bg6 = node}/>
          <img className="text" src={text6}/>
        </div>

        <div className="frame frame7" ref={(node) => this.frame7 = node}>
          <img src={frame7}/>
        </div>

        <div className="frame frame-ss1" ref={(node) => this.fss1 = node}>
          <img src={fss1}/>
        </div>

        <div className="frame frame-ss2" ref={(node) => this.fss2 = node}>
          <img src={fss2}/>
        </div>

        <div className="frame frame8" ref={(node) => this.frame8 = node}>
          <img src={frame8}/>
          <p className="price price1">${this.props.harvest_turkey_ham_price_6in} / ${this.props.harvest_turkey_ham_price_12in}</p>
          <p className="price price2">${this.props.chipotle_cheesesteak_price_6in} / ${this.props.chipotle_cheesesteak_price_12in}</p>
        </div>

      </div>
    )
  }
}
