import { Component } from 'react'

import neocastDataProvider from 'api/neocastDataProvider'

import 'gsap'
import 'gsap-then'

import frame1 from '../images/frame1.png'
import frame2 from '../images/frame2.png'
import frame3 from '../images/frame3.png'
// import frame4 from '../images/frame4.png'
// import frame5 from '../images/frame5.png'
// import frame6 from '../images/frame6.png'

import './styles.css'

const FADE_IN_TIME  = 0.3
const DELAY_TIME = 0.5

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
export default class SteakClubPromoDual extends Component {

componentDidMount() {
    new TimelineMax({ delay: 0.5 })

      .set(this.frame1, { opacity: 1 })
      .set(this.frame2, { opacity: 0 })
      .set(this.frame3, { opacity: 0 })
      .set(this.finalFrame, {opacity: 0})

      .to(this.frame1, FADE_IN_TIME, { opacity: 0, delay: 3 })
      .to(this.frame2, FADE_IN_TIME, { opacity: 1 }, "-=" + DELAY_TIME)

      .to(this.frame2, FADE_IN_TIME, { opacity: 0, delay: 3 })
      .to(this.frame3, FADE_IN_TIME, { opacity: 1 }, "-=" + DELAY_TIME)

      .to(this.finalFrame, FADE_IN_TIME, { opacity: 1 }, "-=" + DELAY_TIME)

      TweenLite.defaultEase = Linear.easeNone;

  }


  render() {
    return (
      <div className='c-Promotion-2018w3-SteakPromo'>

        <img className='steakFrame frame1' src={frame1} ref={(node) => this.frame1 = node} />
        <img className='steakFrame frame2' src={frame2} ref={(node) => this.frame2 = node} />
        <img className='steakFrame frame3' src={frame3} ref={(node) => this.frame3 = node} />

        <div className='finalFrame' ref={(node) => this.finalFrame = node}>
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
