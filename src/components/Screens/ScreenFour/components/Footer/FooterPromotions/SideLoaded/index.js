import { Component } from 'react'
import PropTypes from 'prop-types'

import API from 'api'


export default class SideLoadedFooterPromotion extends Component {

  static propTypes = {
    /**
     * For example:
     *   sideloaded_footer_promotion1
     */
    baseKey: PropTypes.string.isRequired
  };


  constructor(props) {
    super(props)

    const { baseKey } = this.props
    const backgroundImage = API.loc(`${baseKey}_background_image`)

    this.imageUrl = `/media/${backgroundImage}.jpg`

    // Item 1
    this.item1Price6 = API.loc(`${baseKey}_item1_price_6inch`)
    this.item1Price12 = API.loc(`${baseKey}_item1_price_12inch`)

    // Item 2
    this.item2Price6 = API.loc(`${baseKey}_item2_price_6inch`)
    this.item2Price12 = API.loc(`${baseKey}_item2_price_12inch`)
  }


  render() {
    return (
      <div className='c-Footer'>

        <img className='c-Footer_backing' src={this.imageUrl} />

        <div className='c-Footer_items'>

            <div className='c-Footer_item c-Footer_item-side-loaded'>
              <div className='c-Footer_item_option c-Footer_item_option-side-loaded'>
                <div className='c-Footer_values c-Footer_values-side-loaded'>
                  {this.item1Price6 && <div className='c-Footer_value'>${this.item1Price6}</div>}
                  {this.item1Price12 && <div className='c-Footer_value'>${this.item1Price12}</div>}
                </div>
              </div>
            </div>

            <div className='c-Footer_item c-Footer_item-side-loaded'>
              <div className='c-Footer_item_option c-Footer_item_option-side-loaded'>
                <div className='c-Footer_values c-Footer_values-side-loaded'>
                  {this.item2Price6 && <div className='c-Footer_value'>${this.item2Price6}</div>}
                  {this.item2Price12 && <div className='c-Footer_value'>${this.item2Price12}</div>}
                </div>
              </div>
            </div>

        </div>

      </div>
    )
  }
}