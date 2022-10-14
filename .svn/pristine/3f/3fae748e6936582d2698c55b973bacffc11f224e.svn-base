import { Component } from 'react'
import neocastDataProvider from 'api/neocastDataProvider'

import image from './background.png'
import './styles.css'

@neocastDataProvider([
  'fresh_mozz_price_6in',
  'fresh_mozz_price_12in'
])
export default class MozzarellaFooter extends Component {
  render() {
    return (
      <div className='c-Footer c-MozzerellaFooter'>
        <div className='c-Footer_background' style={{ background: `url(${image})` }} />
        <p className="item-price">
          ${this.props.fresh_mozz_price_6in} <span className="item-cals">adds 90 cal </span>
          ${this.props.fresh_mozz_price_12in} <span className="item-cals">adds 180 cal</span>
        </p>
      </div>
    )
  }
}
