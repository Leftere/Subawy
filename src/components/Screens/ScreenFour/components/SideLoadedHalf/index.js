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
  }

  constructor(props) {
    super(props)

    const { baseKey } = this.props // = sideloaded_half
    const backgroundImage = API.loc(`${baseKey}_background_image`)

    this.imageUrl = `/media/${backgroundImage}.jpg`

    this.box1 = API.loc(`${baseKey}_box_1`)
    this.box2 = API.loc(`${baseKey}_box_2`)
    this.box3 = API.loc(`${baseKey}_box_3`)
    this.box4 = API.loc(`${baseKey}_box_4`)
  }

  render() {
    return (
      <div className="c-ValuePromotion valuePromoSideloadedHalf">
        <div className="c-ValuePromotion_content">
          <img className="c-ValuePromotion_backing" src={this.imageUrl} />

          <div className="c-ValuePromotion_prices">
            {this.box1 &&
              <div className="c-ValuePromotion_price box1">${this.box1}</div>}
            {this.box2 &&
              <div className="c-ValuePromotion_price box2">${this.box2}</div>}
            {this.box3 &&
              <div className="c-ValuePromotion_price box3">${this.box3}</div>}
            {this.box4 &&
              <div className="c-ValuePromotion_price box4">${this.box4}</div>}
          </div>
        </div>
      </div>
    )
  }
}
