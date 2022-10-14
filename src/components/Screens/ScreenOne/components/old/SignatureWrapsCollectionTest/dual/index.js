import { Component } from 'react'
import PropTypes from 'prop-types'

import 'gsap'
import 'gsap-then'

import API from 'api'

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


const FADE_IN_TIME  = 1


export default class WrapDoubleMeatFeaturedDual extends Component {
  static propTypes = {
    altVersion: PropTypes.bool,
    isLowerPrice: PropTypes.bool
  }

  componentDidMount() {
    new TimelineMax({ delay: 1 })
      .set(this.titleCopy1, { opacity: 0 })
      .set(this.titleCopy2, { opacity: 0 })
      .set(this.titleCopy3, { opacity: 0 })
      .set(this.titleCopy4, { opacity: 0 })
      .set(this.wrap1, { opacity: 0 })
      .set(this.wrap2, { opacity: 0 })
      .set(this.titleCopyWrapper, { opacity: 1 })
      .set(this.titleCopySub, { opacity: 0 })
      .set(this.wrapNames, { opacity: 0 })
      .set(this.legal, { opacity: 0 })
      .set(this.choicemark, { opacity: 0 })
      .set(this.priceBubble, { opacity: 0 })
      .set(this.signatureWrapsTitle, { opacity: 0})
      .set(this.ltv, { opacity: 0})

      .to(this.titleCopy1, FADE_IN_TIME, { opacity: 1 }, 1)
      .to(this.titleCopy2, FADE_IN_TIME, { opacity: 1 }, 2)
      .to(this.titleCopy3, FADE_IN_TIME, { opacity: 1 }, 3)
      .to(this.titleCopy4, FADE_IN_TIME, { opacity: 1 }, 4)

      .to(this.wrap1, 2.5, { opacity: 1 }, 2)

      .to(this.titleCopySub, FADE_IN_TIME, { opacity: 1 }, 6)
      .to(this.wrap2, 2, { opacity: 1 }, 6)

      .to(this.titleCopyWrapper, FADE_IN_TIME, { opacity: 0 }, 9)
      .to(this.signatureWrapsTitle, FADE_IN_TIME, { opacity: 1 }, 10)
      .to(this.priceBubble, FADE_IN_TIME, { opacity: 1 }, 10)

      .to(this.wrapNames, 2, { opacity: 1 }, 11.5)
      .to(this.legal, 2, { opacity: 1 }, 11.5)
      .to(this.choicemark, 2, { opacity: 1 }, 11.5)

      .to(this.ltv, 1, { opacity: 1 }, 11.5)
  }

  render() {
    const { isLowerPrice, altVersion } = this.props;

    return (
      <div className='c-Promotion wrapDoubleMeatFeaturedDual'>

        <img className='wrap1' src={altVersion ? chipotleWrap : wrap1} ref={(node) => this.wrap1 = node} />
        <img className='wrap2' src={wrap2} ref={(node) => this.wrap2 = node} />

        <div className='titleCopyWrapper' ref={(node) => this.titleCopyWrapper = node}>

          <div className='titleCopy'>
            <span className='titleCopy1' ref={(node) => this.titleCopy1 = node}>
              Stuffed&thinsp;
            </span>
            <span className='titleCopy2' ref={(node) => this.titleCopy2 = node}>
              with&thinsp;
            </span>
            <span className='titleCopy3' ref={(node) => this.titleCopy3 = node}>
              double&thinsp;
            </span>
            <span className='titleCopy4' ref={(node) => this.titleCopy4 = node}>
              meat.&thinsp;
            </span>
          </div>

          <div className='titleCopySub' ref={(node) => this.titleCopySub = node}>
            Now that's a wrap.
          </div>

        </div>

        <img src={signatureWrapsTitle} className={'signatureWrapsTitle'} ref={(node) => this.signatureWrapsTitle = node} />

        <img src={altVersion ? wrapNamesChipotle : wrapNames} className={'wrapNames'} ref={(node) => this.wrapNames = node} />
        <img src={legal} className={'legal'} ref={(node) => this.legal = node} />

        <img
          style={!isLowerPrice ? { display: 'none' } : {}}
          src={ltv}
          className={'ltv'}
          ref={(node) => this.ltv = node}
        />

        <img src={choicemark} className={'choicemark'} ref={(node) => this.choicemark = node} />

        <img src={isLowerPrice ? price599 : price699} className='priceBubble' ref={(node) => this.priceBubble = node} />

      </div>
    )
  }
}
