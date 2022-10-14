import { Component } from 'react'

import neocastDataProvider from 'api/neocastDataProvider'

import 'gsap'
import 'gsap-then'

import bg from '../images/bg.png'

import bigSub from '../images/sub.png'
import final from '../images/final.png'

import text1 from '../images/f1_text.png'
import text2 from '../images/f2_text.png'


import './styles.css'

const FADE_IN_TIME  = 0.25
const OVERLAP_TIME = "-=0.5"

@neocastDataProvider([
  'chipotle_southwest_steak_and_cheese_wrap_price',
  'steak_club_price_6in',
  'steak_club_price_12in',
  'chipotle_cheesesteak_price_6in',
  'chipotle_cheesesteak_price_12in',
  'peppercorn_price_6in',
  'peppercorn_price_12in',
  'steak_and_cheese_price_6in',
  'steak_and_cheese_price_12in'
])
export default class SteakClubPromoQuad extends Component {

componentDidMount() {
    new TimelineMax({ delay: 0.5 })
       .set(this.bg, { left: 0, top: 0 })
       .set(this.bigSub, { left: 1400, top: 100 })
       .set(this.text1, { opacity: 1, left: 75, top: 75 })
       .set(this.text2, { opacity: 0, left: 75, top: 75 })
       .set(this.finalFrame, { opacity: 1, left: 1920, top: 0 })

       .to(this.bigSub, 4, { left: -4000, top: 100, delay: 1.5 })
       .to(this.text1, 1, { opacity: 0 }, 1.5)

       .to(this.text2, 1, { opacity: 1 }, 2.5)

       //.to(this.bg, 2, { left: -1920, top: 0 }, 6)
       .to(this.text2, 2, { left: -1920, top: 75 }, 6)
       .to(this.finalFrame, 2, { left: 0, top: 0 }, 6)

      // TweenLite.defaultEase = Linear.easeNone;

  }


  render() {
    return (
      <div className='c-Promotion-2018w3-SteakPromo'>

        <img className='bg' src={bg} ref={(node) => this.bg = node} />

        <img className='text text1' src={text1} ref={(node) => this.text1 = node} />
        <img className='text text2' src={text2} ref={(node) => this.text2 = node} />

        <img className='sub' src={bigSub} ref={(node) => this.bigSub = node} />

        <div className='finalFrame' ref={(node) => this.finalFrame = node}>
          <img className='final' src={final} ref={(node) => this.final = node} />

          <div className='price price1' ref={(node) => this.price1 = node}>
            <p className="price">${this.props.chipotle_southwest_steak_and_cheese_wrap_price}</p>
          </div>

          <div className='price price2' ref={(node) => this.price1 = node}>
            <p className="price">${this.props.steak_and_cheese_price_6in} / ${this.props.steak_and_cheese_price_12in}</p>
          </div>

          <div className='price price3' ref={(node) => this.price1 = node}>
            <p className="price">${this.props.steak_club_price_6in} / ${this.props.steak_club_price_12in}</p>
          </div>
        </div>

      </div>
    )
  }
}
