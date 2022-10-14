import { Component } from 'react'
import neocastDataProvider from 'api/neocastDataProvider'

import image from './bg.jpg'
import './styles.css'


@neocastDataProvider([
  'dark_chocolate_cherry_price',
])

export default class DarkChocolateCookieW6 extends Component {
  render() {
    return (
      <div className='c-Footer c-dark-chocoalte-cookie'>
        <div className='c-Footer_background' style={{ background: `url(${image})` }} />
        <p className="item-price price">${this.props.dark_chocolate_cherry_price}<span className="cal">200 cal</span></p>
      </div>
    )
  }
}
