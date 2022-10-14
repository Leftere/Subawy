import { Component } from 'react'
import neocastDataProvider from 'api/neocastDataProvider'

import image from './bg.jpg'
import './styles.css'


@neocastDataProvider([
  'ultimate_steak_price_6in',
  'ultimate_steak_price_12in',
])

export default class UCGBFooterW6 extends Component {
  render() {
    return (
      <div className='c-Footer c-UGGB-w6-Footer'>
        <div className='c-Footer_background' style={{ background: `url(${image})` }} />
        <p className="item-price price">${this.props.ultimate_steak_price_6in}<span className="cal">600 cal</span>${this.props.ultimate_steak_price_12in}<span className="cal">1200 cal</span></p>
      </div>
    )
  }
}
