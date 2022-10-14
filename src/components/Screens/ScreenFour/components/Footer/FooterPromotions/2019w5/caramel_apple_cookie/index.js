import { Component } from 'react'
import neocastDataProvider from 'api/neocastDataProvider'

import image from './bg.jpg'
import './styles.css'


@neocastDataProvider([
  'sides_cookies_price_1ct',
])

export default class CaramelAppleCookieFooterW5 extends Component {
  render() {
    return (
      <div className='c-Footer c-CaramelAppleCookieFooter'>
        <div className='c-Footer_background' style={{ background: `url(${image})` }} />
        <p className="item-price price">${this.props.sides_cookies_price_1ct}<span className="cal">210 cal</span></p>
      </div>
    )
  }
}
