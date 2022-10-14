import { Component } from 'react'
import neocastDataProvider from 'api/neocastDataProvider'

import API from 'api'

import './styles.css'
import bg from './bg.jpg'

@neocastDataProvider([
  'lmdp_price_1'
])
export default class LMDPPromotion extends Component {

  render() {
    return (
      <div className='c-FeatPromo c-SesameGinger'>

        <img className='c-FeatPromo_backing' src={bg} />

        <div className='c-FeatPromo_items'>

          {this.props.lmdp_price_1 &&
            <div className='c-FeatPromo_item1_value c-FeatPromo_item1_value-six'>
              ${this.props.lmdp_price_1}
            </div>
          }

        </div>

      </div>
    )
  }
}
