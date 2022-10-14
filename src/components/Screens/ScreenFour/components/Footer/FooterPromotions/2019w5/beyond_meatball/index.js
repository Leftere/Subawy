import { Component } from 'react'
import neocastDataProvider from 'api/neocastDataProvider'

import image from './bg.jpg'
import './styles.css'


@neocastDataProvider([
  'beyond_meatball_price_6in',
  'beyond_meatball_price_12in',
])

export default class BeyondMeatballFooterW5 extends Component {
  render() {
    return (
      <div className='c-Footer c-BeyondMeatballFooter'>
        <div className='c-Footer_background' style={{ background: `url(${image})` }} />
        <p className="item-price price">${this.props.beyond_meatball_price_6in}<span className="cal">480 cal</span>${this.props.beyond_meatball_price_12in}<span className="cal">960 cal</span></p>
      </div>
    )
  }
}
