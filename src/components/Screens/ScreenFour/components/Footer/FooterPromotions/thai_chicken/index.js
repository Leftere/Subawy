import { Component } from 'react'
import neocastDataProvider from 'api/neocastDataProvider'

import image from './background.png'
import './styles.css'

@neocastDataProvider([
  'thai_chicken_sub_price_6in',
  'thai_chicken_sub_price_12in'
])
export default class ThaiChickenFooter extends Component {
  render() {
    return (
      <div className='c-Footer c-ThaiChickenFooter'>
        <div className='c-Footer_background' style={{ background: `url(${image})` }} />
        <p className="item-price">
          ${this.props.thai_chicken_sub_price_6in} <span className="item-cals">390 cal </span>
          ${this.props.thai_chicken_sub_price_12in} <span className="item-cals">780 cal </span>
        </p>
      </div>
    )
  }
}
