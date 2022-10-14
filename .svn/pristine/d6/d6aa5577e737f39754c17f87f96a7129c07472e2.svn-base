import { Component } from 'react'
import neocastDataProvider from 'api/neocastDataProvider'

import image from './background.png'
import './styles.css'

@neocastDataProvider([
  'southwest_tuna_price_6in',
  'southwest_tuna_price_footlong',
])
export default class TunaSouthwest19w2c extends Component {
  render() {
    return (
      <div className='c-Footer c-TunaSouthwest19w2c'>
        <div className='c-Footer_background' style={{ background: `url(${image})` }} />
        <p className="item-price price-1">${this.props.southwest_tuna_price_6in}</p>
        <p className="item-price price-2">${this.props.southwest_tuna_price_footlong}</p>
      </div>
    )
  }
}
