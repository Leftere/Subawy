import { Component } from 'react'
import neocastDataProvider from 'api/neocastDataProvider'

import image from './background.png'
import './styles.css'

@neocastDataProvider([
  'green_goddess_tuna_price_6in',
  'green_goddess_tuna_price_footlong',
])
export default class TunaGoddess19w2c extends Component {
  render() {
    return (
      <div className='c-Footer c-TunaGoddess19w2c'>
        <div className='c-Footer_background' style={{ background: `url(${image})` }} />
        <p className="item-price price-1">${this.props.green_goddess_tuna_price_6in}</p>
        <p className="item-price price-2">${this.props.green_goddess_tuna_price_footlong}</p>
      </div>
    )
  }
}
