import { Component } from 'react'

import neocastDataProvider from 'api/neocastDataProvider'

import image from './background.jpg'
import './styles.css'


@neocastDataProvider([
  'mozzarella_price_6in',
  'mozzarella_price_12in'
])
export default class FreshMozzarella2017w3 extends Component {
  render() {
    return (
      <div className='c-Footer'>
        <div className='c-Footer_background' style={{ background: `url(${image})` }}>
          <div className='mozzerella_cb_6in mozzarella_footer-price'>
            ${this.props.mozzarella_price_6in}
          </div>

          <div className='mozzerella_12in mozzarella_footer-price'>
            ${this.props.mozzarella_price_12in}
          </div>
        </div>
      </div>
    )
  }
}
