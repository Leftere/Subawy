import { Component } from 'react'
import neocastDataProvider from 'api/neocastDataProvider'

import image from './background.png'
import './styles.css'

@neocastDataProvider([
  'firebird_price'
])
export default class FirebirdFooter extends Component {
  render() {
    return (
      <div className='c-Footer c-FirebirdFooter'>
        <div className='c-Footer_background' style={{ background: `url(${image})` }} />
        <p className="item-price">${this.props.firebird_price} <span className="item-cals">670 cal</span></p>
      </div>
    )
  }
}

