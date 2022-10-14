import { Component } from 'react'
import neocastDataProvider from 'api/neocastDataProvider'

import image from './bg.jpg'
import './styles.css'


@neocastDataProvider([
  'carne_asada_price_6in',
  'carne_asada_price_12in',
])

export default class CarneAsadaW6 extends Component {
  render() {
    return (
      <div className='c-Footer c-CarneAsadaFooter'>
        <div className='c-Footer_background' style={{ background: `url(${image})` }} />
        <div className="prices">
          <p className="item-price price">${this.props.carne_asada_price_6in}<span className="cal">490 cal</span></p>
          <p className="item-price price2">${this.props.carne_asada_price_12in}<span className="cal">980 cal</span></p>
        </div>
      </div>
    )
  }
}
