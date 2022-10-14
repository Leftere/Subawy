import { Component } from 'react'
import PropTypes from 'prop-types'

import API from 'api'


export default class SideLoadedOldFooterPromotion extends Component {

  static propTypes = {
    /**
     * For example:
     *   local_footer_one_custom
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
    this.price3 = API.loc(`${baseKey}_price3`)
    this.price4 = API.loc(`${baseKey}_price4`)
  }


  render() {
    return (
      <div className='c-Footer c-Footer-old-side-loaded'>

        <div className='c-Footer_old'>

          <img className='c-Footer_backing c-Footer_backing-old-side-loaded' src={this.imageUrl} />

          {/* item 1 */}
          <div className='c-Footer_item c-Footer_item-old-side-loaded'>
            {this.price1 &&
              <div className='c-Footer_value c-Footer_value-old-side-loaded'>
                <sup>$</sup>{this.price1}
              </div>
            }

            {this.price2 &&
              <div className='c-Footer_value c-Footer_value-old-side-loaded'>
                <sup>$</sup>{this.price2}
              </div>
            }
          </div>

           {/* item 2 */}
          <div className='c-Footer_item c-Footer_item-old-side-loaded'>
            {this.price3 &&
              <div className='c-Footer_value c-Footer_value-old-side-loaded'>
                <sup>$</sup>{this.price3}
              </div>
            }

            {this.price4 &&
              <div className='c-Footer_value c-Footer_value-old-side-loaded'>
                <sup>$</sup>{this.price4}
              </div>
            }
          </div>

        </div>

      </div>
    )
  }
}
