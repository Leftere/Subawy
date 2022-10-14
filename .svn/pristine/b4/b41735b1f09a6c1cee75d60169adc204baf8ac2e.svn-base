import { Component } from 'react'
import neocastDataProvider from 'api/neocastDataProvider'

import image from './background.png'
import './styles.css'

@neocastDataProvider([
  'chicken_parmesan_price_6in',
  'chicken_parmesan_price_12in',
  'homestyle_crispy_chicken_wrap_price'
])
export default class CrispyChickenFooter19w1 extends Component {
  render() {
    return (
      <div className='c-Footer c-CrispyChickenFooter19w1'>
        <div className='c-Footer_background' style={{ background: `url(${image})` }} />
        <p className="item-price price-1">${this.props.chicken_parmesan_price_6in}</p>
        <p className="item-price price-2">${this.props.chicken_parmesan_price_12in}</p>
        <p className="item-price price-3">${this.props.homestyle_crispy_chicken_wrap_price}</p>
      </div>
    )
  }
}
