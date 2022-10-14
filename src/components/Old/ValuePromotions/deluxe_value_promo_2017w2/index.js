import { Component } from 'react'

import neocastDataProvider from 'api/neocastDataProvider'

import image from './background.jpg'


@neocastDataProvider([
	'deluxe_addon_price_6in',
	'deluxe_addon_price_12in'
])
export default class Deluxe2017w2ValuePromotion extends Component {
  render() {
    return (
      <div className='c-Promotion'>
        <img className='c-Promotion_background' src={image} />

        <div className='c-Promotion_content c-Promotion_content-constrained-sm c-Promotion_content-bottom-lg c-Promotion_content-align-right'>
           <div className='c-Promotion_item'>

              <div className='c-Promotion_item_option'>
                <div className='c-Promotion_item_copy c-Promotion_item_copy-md c-Promotion_item_copy-heavy txt-muted'>
                  Add
                </div>

                <div className='c-Promotion_item_info'>
                  <div className='c-Promotion_item_copy c-Promotion_item_copy-md c-Promotion_item_copy-heavy txt-muted '>
                    &nbsp;${this.props.deluxe_addon_price_6in}
                  </div>
                </div>
                
                <div className='c-Promotion_item_copy c-Promotion_item_copy-md c-Promotion_item_copy-heavy txt-muted'>
                  6"
                </div>
              </div>

              <div className='c-Promotion_item_option'>
                <div className='c-Promotion_item_copy c-Promotion_item_copy-md c-Promotion_item_copy-heavy txt-muted'>
                  Add
                </div>

                <div className='c-Promotion_item_info'>
                  <div className='c-Promotion_item_copy c-Promotion_item_copy-md c-Promotion_item_copy-heavy txt-muted '>
                    &nbsp;${this.props.deluxe_addon_price_12in}
                  </div>
                </div>

                <div className='c-Promotion_item_copy c-Promotion_item_copy-md c-Promotion_item_copy-heavy txt-muted'>
                  Footlong
                </div>

              </div>
           </div>
        </div>

      </div>
    )
  }
}
