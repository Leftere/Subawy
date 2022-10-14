import { Component } from 'react'
import neocastDataProvider from 'api/neocastDataProvider'

import image from './BG.jpg'
import './styles.css'


@neocastDataProvider([
  'bbq_chicken_price_6in',
  'bbq_chicken_price_12in',
])

export default class BBQChickenFoooter extends Component {
  render() {
    return (
      <div className='c-Footer c-BBQChickenFoooter'>
        <div className='c-Footer_background' style={{ background: `url(${image})` }} />
        <div class="footer-placement">
          <p className="item-price">${this.props.bbq_chicken_price_6in + ' / ' + this.props.bbq_chicken_price_12in}</p>
          <p className="item-price">330cal / 660cal</p>
        </div>
      </div>
    )
  }
}
