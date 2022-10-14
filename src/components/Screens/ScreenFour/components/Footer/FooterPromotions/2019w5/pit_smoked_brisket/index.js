import { Component } from 'react'
import neocastDataProvider from 'api/neocastDataProvider'

import image from './bg.jpg'
import './styles.css'


@neocastDataProvider([
  'brisket_only_price_6in',
  'brisket_only_price_12in',
])

export default class PitSmokedBrisketFooterW5 extends Component {
  render() {
    return (
      <div className='c-Footer c-PitSmokedBrisketFooter'>
        <div className='c-Footer_background' style={{ background: `url(${image})` }} />
        <p className="item-price price">${this.props.brisket_only_price_6in}<span className="cal">420 cal</span>${this.props.brisket_only_price_12in}<span className="cal">840 cal</span></p>
      </div>
    )
  }
}
