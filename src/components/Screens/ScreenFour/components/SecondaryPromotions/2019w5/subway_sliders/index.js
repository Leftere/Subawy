import { Component } from 'react'
import neocastDataProvider from 'api/neocastDataProvider'

import './styles.css'
import image from './background.png'


@neocastDataProvider([
  'slider_combo_price',
  'sliders_cheesesteak_price',
  'sliders_turkey_price'
])
export default class SubwaySliders extends Component {
  render() {

    const {
      slider_combo_price,
      sliders_cheesesteak_price,
      sliders_turkey_price
    } = this.props;

    return (
      <div className='c-Promotion c-SubwayMinisSecondary'>
        <img className='c-Promotion_background' src={image} />
        <p className="price price-1">${sliders_cheesesteak_price}</p>
        <p className="price price-2">${sliders_turkey_price}</p>
        <p className="price price-3">${slider_combo_price}</p>
      </div>
    )
  }
}
