import { Component } from 'react'
import neocastDataProvider from 'api/neocastDataProvider'

import image from './background.png'
import './styles.css'


@neocastDataProvider([
  'garlic_ciabatta_price',
])
export default class GarlicSteakFooterW4 extends Component {
  render() {
    return (
      <div className='c-Footer c-GarlicSteakFooterW4'>
        <div className='c-Footer_background' style={{ background: `url(${image})` }} />
        <p className="item-price six-price">${this.props.garlic_ciabatta_price}</p>
      </div>
    )
  }
}
