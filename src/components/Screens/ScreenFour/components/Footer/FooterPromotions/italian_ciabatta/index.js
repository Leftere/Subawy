import { Component } from 'react'
import neocastDataProvider from 'api/neocastDataProvider'

import image from './background.png'
import './styles.css'

@neocastDataProvider([
  'italian_ciabatta_price',
  'fresh_mozz_price_6in',
  'fresh_mozz_price_12in'
])
export default class ItalianCiabataFooter extends Component {
  render() {
    return (
      <div className='c-Footer c-ItalianCiabataFooter'>
        <div className='c-Footer_background' style={{ background: `url(${image})` }} />

        <p className="item-price">
          ${this.props.italian_ciabatta_price} <span className="item-cals">670 cal </span>
        </p>

        <p className="mozz-price">
          ${this.props.fresh_mozz_price_6in} <span className="item-cals">adds 90 cal </span>
          ${this.props.fresh_mozz_price_12in} <span className="item-cals">adds 180 cal </span>
        </p>

      </div>
    )
  }
}
