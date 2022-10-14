import { Component } from 'react'

import neocastDataProvider from 'api/neocastDataProvider'

import './styles.css'
import image from './background.jpg'


@neocastDataProvider([
  'w6_panini_chick_cb_price_6in',
  'w6_panini_chick_cb_price_12in',
  'w6_panini_triple_cheese_6in',
  'w6_panini_triple_cheese_12in'
])
export default class PaniniDepletion2017w2FooterPromotion extends Component {
  render() {
    return (
      <div className='c-Footer'>
        <div className='c-Footer_background' style={{ background: `url(${image})` }}>
          <div className='chick_cb_6in footer-price'>
            ${this.props.w6_panini_chick_cb_price_6in}
          </div>

          <div className='chick_cb_12in footer-price'>
            ${this.props.w6_panini_chick_cb_price_12in}
          </div>
          
          <div className='caprese_6in footer-price'>
            ${this.props.w6_panini_triple_cheese_6in}
          </div>
          
          <div className='caprese_12in footer-price'>
            ${this.props.w6_panini_triple_cheese_12in}
          </div>
        </div>
      </div>
    )
  }
}
