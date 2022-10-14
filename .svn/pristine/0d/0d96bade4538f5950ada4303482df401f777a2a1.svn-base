import { Component } from 'react'
import neocastDataProvider from 'api/neocastDataProvider'

import image from './background.png'
import './styles.css'


@neocastDataProvider([
  'deviled_egg_blt_price_6in',
  'deviled_egg_blt_price_12in'
])
export default class DeviledEggFooterW4 extends Component {
  render() {
    return (
      <div className='c-Footer c-DeviledEggFooterW4'>
        <div className='c-Footer_background' style={{ background: `url(${image})` }} />
        <p className="item-price six-price">${this.props.deviled_egg_blt_price_6in}</p>
        <p className="item-price twelve-price">${this.props.deviled_egg_blt_price_12in}</p>
      </div>
    )
  }
}
