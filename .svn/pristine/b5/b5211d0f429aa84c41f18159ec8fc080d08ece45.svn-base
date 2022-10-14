import { Component } from 'react'
import neocastDataProvider from 'api/neocastDataProvider'

import image from './background.png'
import './styles.css'


@neocastDataProvider([
  'mozzarella_price_6in',
  'mozzarella_price_12in'
])
export default class FreshMozW4 extends Component {
  render() {
    return (
      <div className='c-Footer c-FreshMozW4'>
        <div className='c-Footer_background' style={{ background: `url(${image})` }} />
        <p className="item-price six-price">${this.props.mozzarella_price_6in}</p>
        <p className="item-price twelve-price">${this.props.mozzarella_price_12in}</p>
      </div>
    )
  }
}
