import { Component } from 'react'
import neocastDataProvider from 'api/neocastDataProvider'

import 'gsap'
import 'gsap-then'

import frame1 from '../images/frame1.png'
import frame2 from '../images/frame2.png'

import bg3 from '../images/bg3.png'
import text3 from '../images/text3.png'

import bg4 from '../images/bg4.png'
import frame5 from '../images/frame5.png'

import bg6 from '../images/bg6.png'
import text6 from '../images/text6.png'

import bg7 from '../images/bg7.png'
import bg9 from '../images/bg9.png'

import text8 from '../images/text8.png'
import text9 from '../images/text9.png'

import frame10 from '../images/frame10.png'
import frame11 from '../images/frame11.png'

 import fss1 from '../images/ss1.png'
 import fss2 from '../images/ss2.png'
 import fss3 from '../images/ss3.png'

// import copyright from '../images/copyright.png'

import './styles.css'

@neocastDataProvider([
  'chipotle_southwest_steak_and_cheese_wrap_price',
  'turkey_italiano_melt_wrap_price',
  'buffalo_chicken_wrap_price',
])
export default class SignatureWrapsPromoDual extends Component {

componentDidMount() {

    var beatLength = 1.5

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
      .set(this.frame9, { autoAlpha: 0 })
      .set(this.frame10, { autoAlpha: 0 })
      .set(this.frame11, { autoAlpha: 0 })
      .set(this.fss1, { autoAlpha: 0 })
      .set(this.fss2, { autoAlpha: 0 })
      .set(this.fss3, { autoAlpha: 0 })

      // frame 2
      .set(this.frame1, { autoAlpha: 0, delay: 2.5 })
      .set(this.frame2, { autoAlpha: 1 })

      // frame 3
      .set(this.frame2, { autoAlpha: 0, delay: beatLength })
      .set(this.frame3, { autoAlpha: 1 })

      // frame 4
      .set(this.frame3, { autoAlpha: 0, delay: beatLength })
      .set(this.frame4, { autoAlpha: 1 })

      // frame 5
      .set(this.frame4, { autoAlpha: 0, delay: beatLength })
      .set(this.frame5, { autoAlpha: 1 })

      // frame 6
      .set(this.frame5, { autoAlpha: 0, delay: beatLength })
      .set(this.frame6, { autoAlpha: 1 })

      // frame 7
      .set(this.frame6, { autoAlpha: 0, delay: beatLength })
      .set(this.frame7, { autoAlpha: 1 })

      // frame 8
      .set(this.frame7, { autoAlpha: 0, delay: beatLength })
      .set(this.frame8, { autoAlpha: 1 })

      // frame 9
      .set(this.frame8, { autoAlpha: 0, delay: beatLength })
      .set(this.frame9, { autoAlpha: 1 })

      // frame 10
      .set(this.frame9, { autoAlpha: 0, delay: beatLength })
      .set(this.fss1, { autoAlpha: 1 })

      .set(this.fss1, { autoAlpha: 0, delay: 1.5 })
      .set(this.fss2, { autoAlpha: 1 })

      .set(this.fss2, { autoAlpha: 0, delay: 2 })
      .set(this.fss3, { autoAlpha: 1 })

      // .set(this.frame9, { autoAlpha: 1 })

      // .set(this.frame9, { autoAlpha: 0, delay: 2 })
      .set(this.fss3, { autoAlpha: 0, delay: 2 })
      .set(this.frame11, { autoAlpha: 1 })


    TweenLite.defaultEase = Linear.easeNone;
  }

  render() {
    return (
      <div className='c-Promotion-2018w5-SignatureWrapsPromo'>

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
          <img className="text" src={text3}/>
        </div>

        <div className="frame frame5" ref={(node) => this.frame5 = node}>
          <img src={frame5}/>
        </div>

        <div className="frame frame6" ref={(node) => this.frame6 = node}>
          <img className="bg" src={bg6} ref={(node) => this.bg6 = node}/>
          <img className="text" src={text6}/>
        </div>

        <div className="frame frame7" ref={(node) => this.frame7 = node}>
          <img className="bg" src={bg7} ref={(node) => this.bg7 = node}/>
          <img className="text" src={text6}/>
        </div>

        <div className="frame frame8" ref={(node) => this.frame8 = node}>
          <img className="bg" src={bg9} ref={(node) => this.bg8 = node}/>
          <img className="text" src={text8}/>
        </div>

        <div className="frame frame9" ref={(node) => this.frame9 = node}>
          <img className="bg" src={bg9} ref={(node) => this.bg9 = node}/>
          <img className="text" src={text9}/>
        </div>

        <div className="frame frame10" ref={(node) => this.frame10 = node}>
          <img src={frame10}/>
        </div>


        <div className="frame frame-ss1" ref={(node) => this.fss1 = node}>
          <img src={fss1}/>
        </div>

        <div className="frame frame-ss2" ref={(node) => this.fss2 = node}>
          <img src={fss2}/>
        </div>

        <div className="frame frame-ss3" ref={(node) => this.fss3 = node}>
          <img src={fss3}/>
        </div>

        <div className="frame frame11" ref={(node) => this.frame11 = node}>
          <img src={frame11}/>
          <p className="price price1">${this.props.chipotle_southwest_steak_and_cheese_wrap_price}</p>
          <p className="price price2">${this.props.turkey_italiano_melt_wrap_price}</p>
          <p className="price price3">${this.props.buffalo_chicken_wrap_price}</p>
        </div>

      </div>
    )
  }
}
