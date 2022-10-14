import { Component } from 'react'
import neocastDataProvider from 'api/neocastDataProvider'

import image from './background.png'
import './styles.css'

@neocastDataProvider([
  'raspberry_lemonade_cookie_price',
])
export default class RaspLemon19w2 extends Component {
  render() {
    return (
      <div className='c-Footer c-RaspLemon19w2'>
        <div className='c-Footer_background' style={{ background: `url(${image})` }} />
        <p className="item-price price-1">${this.props.raspberry_lemonade_cookie_price}</p>
      </div>
    )
  }
}
