import { Component } from 'react'
import neocastDataProvider from 'api/neocastDataProvider'

import 'gsap'
import 'gsap-then'

import frame1 from '../images/frame1.png'
import frame2 from '../images/frame2.png'

import bg3 from '../images/bg3.png'
import text3 from '../images/text3.png'

import bg4 from '../images/bg4.png'
import text4 from '../images/text4.png'

import frame6 from '../images/frame6.png' // Ugh, trying to find consistant verbage
import bg7 from '../images/bg7.png'       // Is a pain...

import text7 from '../images/text7.png'

import frame8 from '../images/frame8.png'
import frame9 from '../images/frame9.png'

 import fss1 from '../images/ss1.png'
 import fss2 from '../images/ss2.png'

// import copyright from '../images/copyright.png'

import './styles.css'

@neocastDataProvider([
  'harvest_turkey_ham_price_6in',
  'harvest_turkey_ham_price_12in',
  'turkey_apple_club_wrap_price',
])
export default class HarvestCollectionPromoQuad extends Component {

componentDidMount() {

    var beatLength = 1.5

    new TimelineMax()

      // reset/frame 1
      .set(this.frame1, { autoAlpha: 1 })
      .set(this.frame2, { autoAlpha: 0 })
      .set(this.frame3, { autoAlpha: 0 })
      .set(this.frame4, { autoAlpha: 0 })
      .set(this.frame6, { autoAlpha: 0 })
      .set(this.frame7, { autoAlpha: 0 })
      .set(this.frame8, { autoAlpha: 0 })
      .set(this.frame9, { autoAlpha: 0 })
      .set(this.fss1, { autoAlpha: 0 })
      .set(this.fss2, { autoAlpha: 0 })

      // frame 2
      .set(this.frame1, { autoAlpha: 0, delay: 3 })
      .set(this.frame2, { autoAlpha: 1 })

      // frame 3
      // .set(this.frame2, { autoAlpha: 0, delay: beatLength })
      // .set(this.frame3, { autoAlpha: 1 })
      // .to(this.bg3, 2, { left: "+=60" })

      // // frame 2
      // .set(this.frame3, { autoAlpha: 0 })
      // .set(this.frame2, { autoAlpha: 1 })

      // frame 4
      .set(this.frame2, { autoAlpha: 0, delay: beatLength })
      .set(this.frame4, { autoAlpha: 1 })
      .to(this.bg4, 2.5, { top: "-=55" })

      // frame 5-6
      .set(this.frame4, { autoAlpha: 0 })
      .set(this.frame6, { autoAlpha: 1 })
      .to(this.bg6, 1, { top: "-=40" })

      // frame 7
      .set(this.frame6, { autoAlpha: 0 })
      .set(this.frame7, { autoAlpha: 1 })
      .to(this.bg7, 3, { top: "-=40" })

      // frame 8
      .set(this.frame7, { autoAlpha: 0 })
      .set(this.frame8, { autoAlpha: 1 })

      .set(this.frame8, { autoAlpha: 0 })
      .set(this.fss1, { autoAlpha: 1 })

      .set(this.fss1, { autoAlpha: 0, delay: 2 })
      .set(this.fss2, { autoAlpha: 1 })

      // frame 9
      .set(this.fss2, { autoAlpha: 0, delay: 2 })
      .set(this.frame9, { autoAlpha: 1 })

    TweenLite.defaultEase = Linear.easeNone;
  }

  render() {
    return (
      <div className='c-Promotion-2018w5-HarvestCollectionPromo'>

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

        <div className="frame frame6" ref={(node) => this.frame6 = node}>
          <img className="bg" src={bg7} ref={(node) => this.bg6 = node}/>
          <img className="text" src={frame6}/>
        </div>

        <div className="frame frame7" ref={(node) => this.frame7 = node}>
          <img className="bg" src={bg7} ref={(node) => this.bg7 = node}/>
          <img className="text" src={text7}/>
        </div>

        <div className="frame frame8" ref={(node) => this.frame8 = node}>
          <img src={frame8}/>
        </div>

        <div className="frame frame-ss1" ref={(node) => this.fss1 = node}>
          <img src={fss1}/>
        </div>

        <div className="frame frame-ss2" ref={(node) => this.fss2 = node}>
          <img src={fss2}/>
        </div>

        <div className="frame frame9" ref={(node) => this.frame9 = node}>
          <img src={frame9}/>
          <p className="price price1">${this.props.harvest_turkey_ham_price_6in} / ${this.props.harvest_turkey_ham_price_12in}</p>
          <p className="price price2">${this.props.turkey_apple_club_wrap_price}</p>
        </div>

      </div>
    )
  }
}
