import { Component } from 'react'

import neocastDataProvider from 'api/neocastDataProvider'

import './styles.css'
import image from './background.png'


@neocastDataProvider([
  'extras_double_meat_price_6in'
])
export default class ExtrasDoubleMeatFooter extends Component {
  render() {
    return (
      <div className='c-Footer c-Footer-old-school'>
        <div
          className='c-Footer_background c-Footer_background-ExtrasDoubleMeat c-Footer_background-old-school footer-double-meat dynamic-footer myriad-bold'
          style={{ background: `url(${image})` }}
        >
          <span className='extras_double_meat_price_6in'>
            <sup>$</sup>{this.props.extras_double_meat_price_6in}
          </span>
        </div>
      </div>
    )
  }
}
