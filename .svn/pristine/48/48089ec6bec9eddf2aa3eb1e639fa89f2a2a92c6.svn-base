import { Component } from 'react'
import neocastDataProvider from 'api/neocastDataProvider'

import image from './bg.jpg'
import './styles.css'


@neocastDataProvider([
  'french_dip_classic_price_6in',
  'french_dip_classic_price_12in',
  'southern_french_dip_price_6in',
  'southern_french_dip_price_12in',
])

export default class FrenchDipFooterW6 extends Component {
  render() {
    return (
      <div className='c-Footer c-FrenchDipFooter'>
        <div className='c-Footer_background' style={{ background: `url(${image})` }} />
        <p className="item-price price1">${this.props.southern_french_dip_price_6in}<span className="cal">450 cal</span>${this.props.southern_french_dip_price_12in}<span className="cal">900 cal</span></p>
        <p className="item-price price2">${this.props.french_dip_classic_price_6in}<span className="cal">350 cal</span>${this.props.french_dip_classic_price_12in}<span className="cal">700 cal</span></p>
      </div>
    )
  }
}
