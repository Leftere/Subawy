import { Component } from 'react'
import PropTypes from 'prop-types'

import API from 'api'
import delayedRender from 'components/Common/delayedRender'

import './styles.css'

import wrap1 from '../images/wrap1.png'
import wrap2 from '../images/wrap2.png'
import chipotleWrap from '../images/chipotleWrap.png'

import wrapNames from '../images/wrapNames.png'
import wrapNamesChipotle from '../images/wrapNamesChipotle.png'

import signatureWrapsTitle from '../images/signatureWraps.png'
import legal from '../images/legal.png'
import ltv from '../images/ltv.png'
import choicemark from '../images/choicemark.png'

import price599 from '../images/price599.png'
import price699 from '../images/price699.png'


@delayedRender()
export default class WrapDoubleMeatFeatured extends Component {
  static propTypes = {
    altVersion: PropTypes.bool,
    isLowerPrice: PropTypes.bool
  }

  render() {
    const { altVersion, isLowerPrice } = this.props;

    return (
      <div className='c-Promotion wrapDoubleMeatFeatured'>
        <img className='wrap1' src={altVersion ? chipotleWrap : wrap1} />
        <img className='wrap2' src={wrap2} />

        <div className='titleCopyWrapper'>
          <div className='titleCopy'>
            <span className='titleCopy1'>
              Stuffed&thinsp;
            </span>
            <span className='titleCopy2'>
              with&thinsp;
            </span>
            <span className='titleCopy3'>
              double&thinsp;
            </span>
            <span className='titleCopy4'>
              meat.&thinsp;
            </span>
          </div>

          <div className='titleCopySub'>
            Now that's a wrap.
          </div>

        </div>

        <img src={signatureWrapsTitle} className={'signatureWrapsTitle'} />

        <img src={altVersion ? wrapNamesChipotle : wrapNames} className='wrapNames' />
        <img src={legal} className={'legal'} />

        {isLowerPrice &&
          <img src={ltv} className={'ltv'} />
        }

        <img src={choicemark} className={'choicemark'} />

        <img src={isLowerPrice ? price599 : price699} className='priceBubble' />

      </div>
    )
  }
}
