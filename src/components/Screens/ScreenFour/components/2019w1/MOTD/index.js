import { Component } from 'react'
import neocastDataProvider from 'api/neocastDataProvider'

import './style.css'

import Background from './background.png'

@neocastDataProvider([
  '6in_motd_price',
  '6in_sotd_price'
])
export default class MOTD2019w1 extends Component {
  render() {
    return (
      <div className='c-Promotion c-MOTD2019w1'>
        <img className='c-Promotion_background' src={Background} />

        <div className='price motd'>{this.props['6in_motd_price']}</div>
        <div className='price sotd'>{this.props['6in_sotd_price']}</div>

      </div>
    )
  }
}