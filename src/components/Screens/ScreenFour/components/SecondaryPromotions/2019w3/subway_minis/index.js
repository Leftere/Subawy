import { Component } from 'react'
import neocastDataProvider from 'api/neocastDataProvider'

import './styles.css'
import image from './background.png'


@neocastDataProvider([
  'mini_drink_combo_price',
  'little_cheesesteak_price',
  'little_turkey_price'
])
export default class SubwayMinis extends Component {
  render() {

    const {
      mini_drink_combo_price,
      little_cheesesteak_price,
      little_turkey_price
    } = this.props;

    return (
      <div className='c-Promotion c-SubwayMinisSecondary'>
        <img className='c-Promotion_background' src={image} />
        <p className="price price-1">${little_cheesesteak_price}</p>
        <p className="price price-2">${little_turkey_price}</p>
        <p className="price price-3">${mini_drink_combo_price}</p>
      </div>
    )
  }
}
