import { Component } from 'react'
import PropTypes from 'prop-types'

import API from 'api'

import './styles.css'


export default class SideLoadedValuePromotion extends Component {

  static propTypes = {
    /**
     * For example:
     *   sideloaded_value_promotion1
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
  }

  render() {
    return (
      <div className='c-ValuePromotion valuePromoSideloaded'>
        <div className='c-ValuePromotion_content'>

          <img className='c-ValuePromotion_backing' src={this.imageUrl} />

          <div className='c-ValuePromotion_prices'>

            {this.item1Price6 &&
              <div className='c-ValuePromotion_price'>
                ${this.item1Price6}
              </div>
            }

            {this.item1Price12 &&
              <div className='c-ValuePromotion_price'>
                ${this.item1Price12}
              </div>
            }

          </div>

        </div>
      </div>
    )
  }
}