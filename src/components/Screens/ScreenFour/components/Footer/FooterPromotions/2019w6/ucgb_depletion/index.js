import { Component } from 'react'
import neocastDataProvider from 'api/neocastDataProvider'

import image from './bg.jpg'
import './styles.css'


@neocastDataProvider([
  'ucgb_w6_price_6in',
  'ucgb_w6_price_12in',
])

export default class UCGBDepletionW6 extends Component {
  render() {
    return (
      <div className='c-Footer c-ucgb-depletion-w6'>
        <div className='c-Footer_background' style={{ background: `url(${image})` }} />
        <p className="item-price price">As an extra ${this.props.ucgb_w6_price_6in} 6" ${this.props.ucgb_w6_price_12in} Footlong </p>
      </div>
    )
  }
}
