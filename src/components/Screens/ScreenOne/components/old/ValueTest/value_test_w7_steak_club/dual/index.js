import { Component } from 'react'

import neocastDataProvider from 'api/neocastDataProvider'

import 'gsap'
import 'gsap-then'

import frame1 from './frame1.jpg'
import frame2 from './frame2.jpg'
import frame3 from './frame3.jpg'

import './styles.css'


const FADE_IN_TIME  = 1

@neocastDataProvider([
  'steak_club_price_6in',
  'steak_club_price_12in',

  'horseradish_chicken_bacon_price_6in',
  'horseradish_chicken_bacon_price_12in',

  // Old keys (missing price) - fallback to using this if franchise has it selected
  'horseradish_chicken_bacon_6in',
  'horseradish_chicken_bacon_12in',

  'ranch_rotisserie_style_chicken_12in',
  'ranch_rotisserie_style_chicken_6in'
])
export default class ValueTestW7SteakClubDual extends Component {
  
  componentDidMount() {
    new TimelineMax({ delay: 1 })

      .set(this.frame1, { opacity: 1 })
      .set(this.frame2, { opacity: 0 })
      .set(this.frame3, { opacity: 0 })

      .set(this.pricing, { opacity: 0 })

      .to(this.frame1, FADE_IN_TIME, { opacity: 0, delay: 3.5 })
      .to(this.frame2, FADE_IN_TIME, { opacity: 1 })

      .to(this.frame2, FADE_IN_TIME, { opacity: 0 }, 10)
      .to(this.frame3, FADE_IN_TIME, { opacity: 1 }, 11)
      .to(this.pricing, FADE_IN_TIME, { opacity: 1 }, 11)
  }

  render() {
    return (
      <div className='c-Promotion-w7steakDual'>
        

        <img className='frame frame1' src={frame1} ref={(node) => this.frame1 = node } />
        <img className='frame frame2' src={frame2} ref={(node) => this.frame2 = node } />
        <img className='frame frame3' src={frame3} ref={(node) => this.frame3 = node } />

        <div className='pricing' ref={(node) => this.pricing = node } >
          <div className='steakPricing subprice'>
            <div className='price price-six'>${this.props.steak_club_price_6in}</div>
            <div className='price price-foot'>${this.props.steak_club_price_12in}</div>
          </div>

          <div className='horsePricing subprice'>
            <div className='price price-six'>${this.props.horseradish_chicken_bacon_price_6in || this.props.horseradish_chicken_bacon_6in}</div>
            <div className='price price-foot'>${this.props.horseradish_chicken_bacon_price_12in || this.props.horseradish_chicken_bacon_12in}</div>
          </div>

          <div className='rotisseriePricing subprice'>
            <div className='price price-six'>${this.props.ranch_rotisserie_style_chicken_6in}</div>
            <div className='price price-foot'>${this.props.ranch_rotisserie_style_chicken_12in}</div>
          </div>
        </div>


      </div>
    )
  }
}
