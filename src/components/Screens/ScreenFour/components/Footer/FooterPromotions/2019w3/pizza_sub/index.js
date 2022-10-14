import { Component } from 'react'
import neocastDataProvider from 'api/neocastDataProvider'

import image from './background.png'
import './styles.css'


@neocastDataProvider([
  'supreme_price_6in',
  'supreme_price_footlong'
])
export default class PizzaSubFooter extends Component {
  render() {
    return (
      <div className='c-Footer c-PizzaSubFooter'>
        <div className='c-Footer_background' style={{ background: `url(${image})` }} />
        <p className="item-price six-price">${this.props.supreme_price_6in}</p>
        <p className="item-price twelve-price">${this.props.supreme_price_footlong}</p>
      </div>
    )
  }
}
