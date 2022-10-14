import { Component } from 'react'
import neocastDataProvider from 'api/neocastDataProvider'

import image from './BG.jpg'
import './styles.css'


@neocastDataProvider([
  'bbq_rib_price_6in',
  'bbq_rib_price_12in',
])

export default class BBQRibFoooter5 extends Component {
  render() {
    return (
      <div className='c-Footer c-BBQRibFoooter'>
        <div className='c-Footer_background' style={{ background: `url(${image})` }} />
        <p className="item-price price-6">${this.props.bbq_rib_price_6in}<span className="cal">580 cal</span></p>
        <p className="item-price price-12">$5.00<span className="cal">1160 cal</span></p>
      </div>
    )
  }
}
