import { Component } from 'react'
import neocastDataProvider from 'api/neocastDataProvider'

import image from './background.png'
import './styles.css'

@neocastDataProvider([
  'sesame_ginger_glazed_chicken_wrap_price'
])
export default class GingerChickenFooter extends Component {
  render() {
    return (
      <div className='c-Footer c-GingerChickenFooter'>
        <div className='c-Footer_background' style={{ background: `url(${image})` }} />
        <p className="item-price">${this.props.sesame_ginger_glazed_chicken_wrap_price} <span className="item-cals">860 cal</span></p>
      </div>
    )
  }
}
