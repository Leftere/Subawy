import { Component } from 'react'
import neocastDataProvider from 'api/neocastDataProvider'

import image from './background.png'
import './styles.css'

@neocastDataProvider([
  'footlong_of_the_day_price',
])
export default class SOTD19w1 extends Component {
  render() {
    return (
      <div className='c-Footer c-SOTD19w1'>
        <div className='c-Footer_background' style={{ background: `url(${image})` }} />
        <p className="item-price price-1">${this.props.footlong_of_the_day_price}</p>
      </div>
    )
  }
}
