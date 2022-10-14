import { Component } from 'react'

import neocastDataProvider from 'api/neocastDataProvider'

import './styles.css'
import image from './background.png'


@neocastDataProvider([
  'steak_and_bacon_melt_price_6in',
  'steak_and_bacon_melt_price_12in'
])
export default class SteakAndBaconMeltOldSchoolFooterPromotion extends Component {
  render() {
    return (
      <div className='c-Footer c-Footer-old-school'>
        <div
          className='c-Footer_background c-Footer_background-old-school c-Footer_background-SteakAndBaconMelt dynamic-footer'
          style={{ background: `url(${image})` }}
        >

          <span className='steak_and_bacon_melt_price_6in'>
            <sup>$</sup>{this.props.steak_and_bacon_melt_price_6in}
          </span>

          <span className='steak_and_bacon_melt_price_12in'>
            <sup>$</sup>{this.props.steak_and_bacon_melt_price_12in}
          </span>

        </div>
      </div>
    )
  }
}
