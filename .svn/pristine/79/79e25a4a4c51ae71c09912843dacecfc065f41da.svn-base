import { Component } from 'react'
import neocastDataProvider from 'api/neocastDataProvider'

import image from './bg.jpg'
import './styles.css'


@neocastDataProvider([
  'pit_smoked_brisket_price_6in',
  'pit_smoked_brisket_price_12in',
])

export default class PitSmokedBrisketCheddarFooterW5 extends Component {
  render() {
    return (
      <div className='c-Footer c-PitSmokedBrisketCheddarFooter'>
        <div className='c-Footer_background' style={{ background: `url(${image})` }} />
        <p className="item-price price">${this.props.pit_smoked_brisket_price_6in}<span className="cal">420 cal</span>${this.props.pit_smoked_brisket_price_12in}<span className="cal">840 cal</span></p>
      </div>
    )
  }
}
