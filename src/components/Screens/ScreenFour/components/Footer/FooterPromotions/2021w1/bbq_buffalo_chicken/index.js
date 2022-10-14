import { Component } from 'react'
import neocastDataProvider from 'api/neocastDataProvider'

import image from './BG.jpg'
import './styles.css'


@neocastDataProvider([
  'bbq_chicken_price_6in',
  'bbq_chicken_price_12in',
  'buffalo_chicken_price_6in',
  'buffalo_chicken_price_12in',
])

export default class BBQBuffaloChickenFoooter extends Component {
  render() {
    return (
      <div className='c-Footer c-BBQBuffaloChickenFoooter'>
        <div className='c-Footer_background' style={{ background: `url(${image})` }} />

        <div class="footer-placement">
          <p className="item-price">${this.props.buffalo_chicken_price_6in + ' / ' + this.props.buffalo_chicken_price_12in}</p>
          <p className="item-price">360cal / 720cal</p>
        </div>

        <div class="footer-placement-2">
          <p className="item-price">${this.props.bbq_chicken_price_6in + ' / ' + this.props.bbq_chicken_price_12in}</p>
          <p className="item-price">330cal / 660cal</p>
        </div>
      </div>
    )
  }
}
