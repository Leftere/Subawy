import { Component } from 'react'
import neocastDataProvider from 'api/neocastDataProvider'

import image from './background.png'
import './styles.css'

@neocastDataProvider([
  'honey_jalapeno_price'
])
export default class HoneyJalapenoFooter extends Component {
  render() {
    return (
      <div className='c-Footer c-HoneyJalapenoFooter'>
        <div className='c-Footer_background' style={{ background: `url(${image})` }} />
        <p className="item-price">${this.props.honey_jalapeno_price} <span className="item-cals">800 cal</span></p>
      </div>
    )
  }
}
