import { Component } from 'react'
import PropTypes from 'prop-types'

import API from 'api'

import './styles.css'


export default class SideLoadedOldValuePromotion extends Component {

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
    const backgroundImage = API.loc(`${baseKey}_key`, '').trim()

    this.imageUrl = `/media/${backgroundImage}.jpg`

    this.price1 = API.loc(`${baseKey}_price1`)
    this.price2 = API.loc(`${baseKey}_price2`)
    // this.price3 = API.loc(`${baseKey}_price3`)
    // this.price4 = API.loc(`${baseKey}_price4`)
  }

  render() {
    return (
      <div className='c-ValuePromotion c-ValuePromotion-side-loaded-old'>
        <div className='c-ValuePromotion_content c-ValuePromotion_content-side-loaded-old'>

          <img className='c-ValuePromotion_backing' src={this.imageUrl} />


          <div className='c-ValuePromotion_prices c-ValuePromotion_prices-side-loaded-old'>

            {/* Item 1 */}
            {this.price1 &&
              <div className='c-ValuePromotion_price c-ValuePromotion_price-side-loaded-old'>
                ${this.price1}
              </div>
            }

            {this.price2 &&
              <div className='c-ValuePromotion_price c-ValuePromotion_price-side-loaded-old'>
                ${this.price2}
              </div>
            }

          </div>

        </div>
      </div>
    )
  }
}