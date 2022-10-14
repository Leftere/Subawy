import { Component } from 'react'
import neocastDataProvider from 'api/neocastDataProvider'

import image from './background.png'
import './styles.css'

@neocastDataProvider([
  'sweet_n_smoky_steak_and_guac_wrap_price',
])
export default class SteakWrap19w2 extends Component {
  render() {
    return (
      <div className='c-Footer c-SteakWrap19w2'>
        <div className='c-Footer_background' style={{ background: `url(${image})` }} />
        <p className="item-price price-1">${this.props.sweet_n_smoky_steak_and_guac_wrap_price}</p>
      </div>
    )
  }
}
