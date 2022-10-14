import { Component } from 'react'
import neocastDataProvider from 'api/neocastDataProvider'

import image from './bg.jpg'
import './styles.css'


@neocastDataProvider([
  'w6_wraps_price',
])

export default class WrapsFooterW6 extends Component {
  render() {

    let str = this.props.w6_wraps_price || "0.00";

    let priceCents = str.slice(-3)
    let priceDollars = str.substring(0,str.length - 3)

    return (
      <div className='c-Footer c-WrapsFooterW6'>
        <div className='c-Footer_background' style={{ background: `url(${image})` }} />
        <p className="item-price price dollars">${priceDollars}</p><p className="item-price price cents">{priceCents}</p>
      </div>
    )
  }
}
