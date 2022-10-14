import { Component } from 'react'
import neocastDataProvider from 'api/neocastDataProvider'

import API from 'api'

import './styles.css'
import bg from './bg.jpg'

@neocastDataProvider([
  'lmdp_price_1',
  'lmdp_price_2',
  'lmdp_price_3',
  'lmdp_price_4'
])
export default class LMDPPromotion extends Component {

  render() {
    return (
      <div className='c-FeatPromo'>

        <img className='c-FeatPromo_backing' src={bg} />

        <div className='c-FeatPromo_items'>

        </div>

      </div>
    )
  }
}
