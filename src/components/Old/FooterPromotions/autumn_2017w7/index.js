import { Component } from 'react'
import neocastDataProvider from 'api/neocastDataProvider'

import image from './background.png'
import './styles.css'

@neocastDataProvider([
  'autumn_carved_price_6in',
  'autumn_carved_price_12in'
])
export default class Autumn2017w7 extends Component {
  render() {
    return (
      <div className='c-Footer autumn-footer'>
        <div className='c-Footer_background' style={{ background: `url(${image})` }} />

        <p className="item-price six-price">${this.props.autumn_carved_price_6in}</p>
        <p className="item-price twelve-price">${this.props.autumn_carved_price_12in}</p>
      </div>
    )
  }
}
