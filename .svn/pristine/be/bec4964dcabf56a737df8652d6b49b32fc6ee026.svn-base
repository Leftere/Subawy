import { Component } from 'react'
import neocastDataProvider from 'api/neocastDataProvider'

import image from './bg.jpg'
import './styles.css'


@neocastDataProvider([
  'w6_wraps_price',
])

export default class WrapsRanchFooterW6 extends Component {
  render() {
    return (
      <div className='c-Footer c-WrapsRanchFooter'>
        <div className='c-Footer_background' style={{ background: `url(${image})` }} />
        <p className="item-price price">${this.props.w6_wraps_price}<span className="cal">820 cal</span></p>
      </div>
    )
  }
}
