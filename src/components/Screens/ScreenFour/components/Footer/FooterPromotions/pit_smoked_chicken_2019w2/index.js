import { Component } from 'react'
import neocastDataProvider from 'api/neocastDataProvider'

import image from './background.png'
import './styles.css'

@neocastDataProvider([
  'pit_smoked_chicken_price_6in'
])
export default class PitSmokedChickenFooter19w2 extends Component {
  render() {
    return (
      <div className='c-Footer c-PitSmokedChickenFooter19w2'>
        <div className='c-Footer_background' style={{ background: `url(${image})` }} />
        <p className="item-price price-1">${this.props.pit_smoked_chicken_price_6in}</p>
      </div>
    )
  }
}
