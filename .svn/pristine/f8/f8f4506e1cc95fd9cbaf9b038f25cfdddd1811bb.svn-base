import { Component } from 'react'
import neocastDataProvider from 'api/neocastDataProvider'

import API from 'api'

import './styles.css'
import bg from './bg.png'

@neocastDataProvider([
  'lmdp_price_1',
  'lmdp_price_2',
  'lmdp_price_3',
  'lmdp_price_4'
])
export default class LMDPPromotion extends Component {

  render() {
    return (
      <div className='c-FeatPromo c-CrunchTime'>

        <img className='c-FeatPromo_backing' src={bg} />

        <div className='c-FeatPromo_items'>

          {this.props.lmdp_price_1 &&
            <div className='c-FeatPromo_item1_value c-FeatPromo_item1_value-six'>
              ${this.props.lmdp_price_1}
            </div>
          }

          {this.props.lmdp_price_2 &&
            <div className='c-FeatPromo_item1_value c-FeatPromo_item1_value-footlong'>
              ${this.props.lmdp_price_2}
            </div>
          }

          {this.props.lmdp_price_3 &&
            <div className='c-FeatPromo_item2_value c-FeatPromo_item2_value-six'>
              ${this.props.lmdp_price_3}
            </div>
          }

        </div>

      </div>
    )
  }
}
