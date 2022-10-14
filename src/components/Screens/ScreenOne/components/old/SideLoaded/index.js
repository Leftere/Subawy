import { Component } from 'react'
import PropTypes from 'prop-types'

import API from 'api'

import './styles.css'


export default class SideLoadedFeaturedPromotion extends Component {

  static propTypes = {
    /**
     * For example:
     *   sideloaded_feature_promotion1
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
      <div className='c-FeatPromo'>

        <img className='c-FeatPromo_backing' src={this.imageUrl} />

        <div className='c-FeatPromo_items'>

          {this.item1Price6 &&
            <div className='c-FeatPromo_item1_value c-FeatPromo_item1_value-six'>
              ${this.item1Price6}
            </div>
          }

          {this.item1Price12 &&
            <div className='c-FeatPromo_item1_value c-FeatPromo_item1_value-footlong'>
              ${this.item1Price12}
            </div>
          }

          {this.item2Price6 &&
            <div className='c-FeatPromo_item2_value c-FeatPromo_item2_value-six'>
              ${this.item2Price6}
            </div>
          }

          {this.item2Price12 &&
            <div className='c-FeatPromo_item2_value c-FeatPromo_item2_value-footlong'>
              ${this.item2Price12}
            </div>
          }

        </div>

      </div>
    )
  }
}