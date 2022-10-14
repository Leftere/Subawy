import { Component } from 'react'
import neocastDataProvider from 'api/neocastDataProvider'

import image from './bg.jpg'
import './styles.css'


@neocastDataProvider([
  'french_dip_classic_price_6in',
  'french_dip_classic_price_12in',
])

export default class FrenchDipClassicW6 extends Component {
  render() {
    return (
      <div className='c-Footer c-FrenchDipClassicFooter'>
        <div className='c-Footer_background' style={{ background: `url(${image})` }} />
        <div className="prices">
          <p className="item-price price">${this.props.french_dip_classic_price_6in}<span className="cal">350 cal</span></p>
          <p className="item-price price2">${this.props.french_dip_classic_price_12in}<span className="cal">700 cal</span></p>
        </div>
      </div>
    )
  }
}
