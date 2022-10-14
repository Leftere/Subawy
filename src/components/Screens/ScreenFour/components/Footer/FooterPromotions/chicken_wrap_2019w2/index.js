import { Component } from 'react'
import neocastDataProvider from 'api/neocastDataProvider'

import image from './background.png'
import './styles.css'

@neocastDataProvider([
  'sesame_ginger_glazed_chicken_wrap_price',
])
export default class ChickenWrap19w2 extends Component {
  render() {
    return (
      <div className='c-Footer c-ChickenWrap19w2'>
        <div className='c-Footer_background' style={{ background: `url(${image})` }} />
        <p className="item-price price-1">${this.props.sesame_ginger_glazed_chicken_wrap_price}</p>
      </div>
    )
  }
}
