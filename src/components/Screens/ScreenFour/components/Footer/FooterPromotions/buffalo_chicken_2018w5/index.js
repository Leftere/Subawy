import { Component } from 'react'
import neocastDataProvider from 'api/neocastDataProvider'

import image from './background.png'
import './styles.css'

@neocastDataProvider([
  'buffalo_chicken_wrap_price'
])
export default class BuffaloChickenFooter extends Component {
  render() {
    return (
      <div className='c-Footer c-BuffaloChickenFooter'>
        <div className='c-Footer_background' style={{ background: `url(${image})` }} />
        <p className="item-price">${this.props.buffalo_chicken_wrap_price} <span className="item-cals">590 cal</span></p>
      </div>
    )
  }
}
