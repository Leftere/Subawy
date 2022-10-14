import { Component } from 'react'
import PropTypes from 'prop-types'

import './styles.css'

export default class ItemGroup extends Component {
  static propTypes = {
    price6: PropTypes.any,
    price12: PropTypes.any,
    cal6: PropTypes.string,
    cal12: PropTypes.string
  }

  render() {
    const {
        price6,
        price12,
        cal6,
        cal12
    } = this.props

    return (
      <div className='c-ItemGroup'>
        <div className='c-Item c-Item-inline'>
            <div className='c-Item_options'>
              <div className='c-Item_option c-Item_option-inline'>
                  <div className='c-Item_option_label'>
                    <div className='text-title'>
                        <span className='text-primary-white text-large text-heavy text-align-v-middle text-align-h-left'>6"</span>
                    </div>
                  </div>
                  <div className='c-Item_option_content'>
                    <div className='text-title'>
                        <span className='text-primary-white text-large text-heavy text-align-v-middle text-align-h-left'>${price6}</span>
                    </div>
                    <div className='text-subtitle'>
                        <span className='text-primary-yellow text-large text-medium text-align-v-middle text-align-h-left'>{cal6} cal</span>
                    </div>
                  </div>
              </div>

              <div className='c-Item_option c-Item_option-inline'>

                  <div className='c-Item_option_label'>
                    <div className='text-title'>
                        <span className='text-primary-white text-large text-heavy text-align-v-middle text-align-h-left'>
                          Footlong
                        </span>
                    </div>
                  </div>

                  <div className='c-Item_option_content'>
                    <div className='text-title'>
                        <span className='text-primary-white text-large text-heavy text-align-v-middle text-align-h-left'>
                          ${price12}
                        </span>
                    </div>
                    <div className='text-subtitle'>
                        <span className='text-primary-yellow text-large text-medium text-align-v-middle text-align-h-left'>
                          {cal12} cal
                        </span>
                    </div>
                  </div>
              </div>
            </div>
        </div>
      </div>
    )
  }
}
