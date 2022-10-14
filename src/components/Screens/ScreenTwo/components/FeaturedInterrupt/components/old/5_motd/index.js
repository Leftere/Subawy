import { Component } from 'react'

import neocastDataProvider from 'api/neocastDataProvider'

import './styles.css'
import image from './background.jpg'


@neocastDataProvider([
  '5_motd_price'
])
export default class FiveMealOfTheDay extends Component {
  render() {
    return (
      <div className='c-ValuePromotion_content c-ValuePromotion_content-side-loaded-old'>
 
        <div className='c-ValuePromotion_price c-ValuePromotion_price-5motd'>
          {this.props['5_motd_price']}
        </div>

        <img className='c-ValuePromotion_backing' src={image} />

      </div>
    )
  }
}
