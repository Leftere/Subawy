import { Component } from 'react'
import neocastDataProvider from 'api/neocastDataProvider'

import image from './background.png'
import './styles.css'

@neocastDataProvider([
  'sides_cookies_price_1ct'
])
export default class MintCCCFooter extends Component {
  render() {
    return (
      <div className='c-Footer c-MintCCCFooter'>
        <div className='c-Footer_background' style={{ background: `url(${image})` }} />
        <p className="item-price">${this.props.sides_cookies_price_1ct} <span className="item-cals">210 cal</span></p>
      </div>
    )
  }
}
