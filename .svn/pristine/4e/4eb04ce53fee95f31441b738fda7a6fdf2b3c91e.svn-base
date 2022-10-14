import { Component } from 'react'
import neocastDataProvider from 'api/neocastDataProvider'

import image from './background.png'
import './styles.css'

@neocastDataProvider([
  'pit_smoked_chicken_price_6in',
  'pit_smoked_brisket_price_6in',
  'pit_smoked_brisket_price_footlong'
])
export default class PitSmokedChickenAndBrisketFooter19w2 extends Component {
  render() {
    return (
      <div className='c-Footer c-PitSmokedChickenAndBrisketFooter19w2'>
        <div className='c-Footer_background' style={{ background: `url(${image})` }} />
        <p className="item-price price-1">${this.props.pit_smoked_chicken_price_6in}</p>
        <p className="item-price price-2">${this.props.pit_smoked_brisket_price_6in}</p>
        <p className="item-price price-3">${this.props.pit_smoked_brisket_price_footlong}</p>
      </div>
    )
  }
}
