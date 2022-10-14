import { Component } from 'react'

import neocastDataProvider from 'api/neocastDataProvider'
import delayedRender from 'components/common/delayedRender'

import imgSteak from '../images/StkClub.png'
import imgHorse from '../images/Horseradish.png'
import imgRotisserie from '../images/Rotisserie.png'

import './animations.css'
import './styles.css'

@delayedRender(300)
@neocastDataProvider([
  'steak_club_price_6in',
  'steak_club_price_12in',

  'horseradish_chicken_bacon_price_6in',
  'horseradish_chicken_bacon_price_12in',

  // Old keys (missing price) - fallback to using this if franchise has it selected
  'horseradish_chicken_bacon_6in',
  'horseradish_chicken_bacon_12in',

  // Also old keys
  'ranch_rotisserie_style_chicken_12in',
  'ranch_rotisserie_style_chicken_6in',

  'rotisserie_style_chicken_price_6in',
  'rotisserie_style_chicken_price_12in'
])
export default class ValueTestW7SteakClub extends Component {
  render() {
    return (
      <div className='c-Promotion-w7steak'>
        <img className='club steak' src={imgSteak}/>
        <img className='club horse' src={imgHorse}/>
        <img className='club rotisserie' src={imgRotisserie}/>

        <div className='largeCopy frame1Copy titleCopy'>
          Introducing the Steak Club
        </div>

        <div className='mediumCopy frame2Copy titleCopy'>
          and the Horseradish Chicken & Bacon.
        </div>

        <div className='largeCopy frame3Copy titleCopy' style={{ textAlign: 'left', marginLeft: 120 }}>
          Nice to meat you.
        </div>

        <div className='pricing'>
          <div className='steakPricing subprice'>
            <div className='title'>Steak Club</div>
            <div className='subtitle limited'>Limited time only</div>

            <div className='size size-six'>6"</div>
            <div className='price price-six'>${this.props.steak_club_price_6in}</div>
            <div className='cal cal-six'>520 cal</div>

            <div className='size size-foot'>Footlong</div>
            <div className='price price-foot'>${this.props.steak_club_price_12in}</div>
            <div className='cal cal-foot'>1040 cal</div>
          </div>

          <div className='horsePricing subprice'>
            <div className='title'>Horseradish Chicken &amp; Bacon</div>
            <div className='subtitle limited'>Limited time only</div>

            <div className='size size-six'>6"</div>
            <div className='price price-six'>${this.props.horseradish_chicken_bacon_price_6in || this.props.horseradish_chicken_bacon_6in}</div>
            <div className='cal cal-six'>570 cal</div>

            <div className='size size-foot'>Footlong</div>
            <div className='price price-foot'>${this.props.horseradish_chicken_bacon_price_12in || this.props.horseradish_chicken_bacon_12in}</div>
            <div className='cal cal-foot'>1140 cal</div>
          </div>

          <div className='rotisseriePricing subprice'>
            <div className='title'>Rotisserie-Style Chicken</div>
            <div className='subtitle'>with ranch &amp; Monterey cheddar</div>

            <div className='size size-six'>6"</div>
            <div className='price price-six'>${this.props.rotisserie_style_chicken_price_6in || this.props.ranch_rotisserie_style_chicken_6in}</div>
            <div className='cal cal-six'>510 cal</div>

            <div className='size size-foot'>Footlong</div>
            <div className='price price-foot'>${this.props.rotisserie_style_chicken_price_12in || this.props.ranch_rotisserie_style_chicken_12in}</div>
            <div className='cal cal-foot'>1010 cal</div>
          </div>
        </div>

        <div className='disclaimer'>
          Additional Charge for Extras. <br/>
          Plus applicable tax.
          No additional discounts or coupons may be applied.<br/>

          <small>Subway<sup>&reg;</sup> is a Registered Trademark
          of Subway IP Inc. &copy;2017 Subway IP Inc.</small>
        </div>

      </div>
    )
  }
}
