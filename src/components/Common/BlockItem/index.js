import { Component } from 'react'
import PropTypes from 'prop-types'

import neocastDataProvider from 'api/neocastDataProvider'
import Calories from 'components/Common/Calories'

import SodiumIcon from './images/sodium-icon.png'
import './styles.css'

import SodiumWarning from 'components/Common/SodiumWarning'


@neocastDataProvider([
  'store_plus_sodium',
])
export default class BlockItem extends Component {
  static propTypes = {
    expand: PropTypes.bool
  }

  static defaultProps = {
    expand: true
  }

  render() {
    const {
      name = '',
      sodium = false,
      showSmall = false,
      calories,
      hideCalories,
      price6,
      price12,
      pricePro,
      priceStyle = {},
      expand,
      suffix = 'cal',
      titleClass = '',
      additionalClasses = '',
      decal6 = false,
      decal12 = false,
      decal12Color = 'blue',
      subtitle = false
    } = this.props;

    let strikethrough;
    if (decal6) {
      strikethrough = 'strikethrough-price';
    }

    return (
      <div className={`c-TableList_row c-${additionalClasses}`}>

        {/* dangerouslySetInnerHTML is used because some strings are
                escaped as HTML. We can use this safely because this will never be
                Javascript.
        */}

        <span
          className={`sub_title ${titleClass}`}
          dangerouslySetInnerHTML={{ __html: name }}
        />

        {sodium  &&
          <SodiumWarning showSmall/>
        }


        {subtitle &&
          <div className='c-Menus_subtitle'>
            <span>{subtitle}</span>
          </div>
        }
         {!hideCalories &&
          <Calories {...this.props} indentCals={false}>
          
            {calories}
        
          </Calories>
        }
        <div className='prices'>
          {(() => {
            if (decal6) {
              return(
              <div className="decal6">
                <span className="sign">$</span>
                <span className='dollars'>2.</span>
                <span className='cents'>99</span>
              </div>
            )}
          })()}

          <span className={strikethrough}>
            ${`${price6}`.replace('$', '')}&nbsp;
          </span>

          <span>
            {` | `}&nbsp;${`${price12}`.replace('$', '')}&nbsp;&nbsp;
            
            { pricePro &&
              <span>
              |&nbsp;&nbsp;${`${pricePro}`.replace('$', '')}
              </span>
            }

            {(() => {
              if (decal12) {
                let clean = decal12.replace('.', '')
                let dollars = clean.slice(0, -2)
                let cents = clean.slice(-2)
                let shiftDecal = ''
                if (decal6) {
                  shiftDecal = 'shift-decal'
                }
                return (
                  <div className={'decal decal12 ' + decal12Color + ' ' + shiftDecal}>
                    <div className='price'>
                      <span className='sign'>$</span>
                      <span className='dollars'>{dollars}</span>
                      <span className='cents'>{cents}</span>
                    </div>
                    <div className='label'>Footlong</div>
                  </div>
                )
              }
            })()}
          </span>
        </div>


       


      </div>
    )
  }
}
