import { Component } from 'react'
import neocastDataProvider from 'api/neocastDataProvider'

import image from './background.png'
import './styles.css'


@neocastDataProvider([
  'chicken_ciabatta_price',
])
export default class ChickenPestoCiabattaFooterW4 extends Component {
  render() {
    return (
      <div className='c-Footer c-ChickenPestoCiabattaFooterW4'>
        <div className='c-Footer_background' style={{ background: `url(${image})` }} />
        <p className="item-price six-price">${this.props.chicken_ciabatta_price}</p>
      </div>
    )
  }
}
