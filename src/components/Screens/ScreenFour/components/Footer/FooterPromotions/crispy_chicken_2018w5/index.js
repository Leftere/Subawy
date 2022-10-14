import { Component } from 'react'
import neocastDataProvider from 'api/neocastDataProvider'

import image from './background.png'
import './styles.css'

@neocastDataProvider([
  'homestyle_crispy_chicken_price_6in'
])
export default class CrispyChickenFooter extends Component {
  render() {
    return (
      <div className='c-Footer c-CrispyChickenFooter'>
        <div className='c-Footer_background' style={{ background: `url(${image})` }} />
        <p className="item-price">${this.props.homestyle_crispy_chicken_price_6in} <span className="item-cals">520 cal</span></p>
      </div>
    )
  }
}
