import { Component } from 'react'
import neocastDataProvider from 'api/neocastDataProvider'

import image from './background.png'
import './styles.css'

@neocastDataProvider([
  'sweet_n_smoky_steak_and_guac_wrap_price'
])
export default class SteakGuacFooter extends Component {
  render() {
    return (
      <div className='c-Footer c-SteakGuacFooter'>
        <div className='c-Footer_background' style={{ background: `url(${image})` }} />
        <p className="item-price">${this.props.sweet_n_smoky_steak_and_guac_wrap_price} <span className="item-cals">860 cal</span></p>
      </div>
    )
  }
}
