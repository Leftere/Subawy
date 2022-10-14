import { Component } from 'react'
import PropTypes from 'prop-types'

import neocastDataProvider from 'api/neocastDataProvider'
import delayedRender from 'components/Common/delayedRender'

import ChoicemarkFlip from 'components/common/ChoicemarkFlip'

import bmt from './bmt.png'
import turkey from './turkey.png'
import endingCopy from './endingCopy.png'
import './styles.css'


@delayedRender()
@neocastDataProvider([
  'italian_bmt_price_6in',
  'italian_bmt_price_12in',
  'turkey_breast_price_6in',
  'turkey_breast_price_12in'
])
export default class ValueTestTurkeyBmtQuad extends Component {
  render() {
    return (
      <div className='c-Promotion valueTestTurkeyBmtQuad'>
        <div className='largeCopy titleMainCopy frame1Copy'>
          We know.
        </div>

        <div className='largeCopy titleMainCopy frame2Copy'>
          You're thinking of ordering both.
        </div>

        {/* Subs */}
        <img src={bmt} className='bmt' />
        <img src={turkey} className='turkey' />

        <img src={endingCopy} className='endingCopy' />
        
        {/* Prices */}
        <div className='endingPrice bmtPrice6'>
          ${this.props.italian_bmt_price_6in}
        </div>

        <div className='endingPrice bmtPrice12'>
          ${this.props.italian_bmt_price_12in}
        </div>

        <div className='endingPrice turkeyPrice6'>
          ${this.props.turkey_breast_price_6in}
        </div>

        <div className='endingPrice turkeyPrice12'>
          ${this.props.turkey_breast_price_12in}
        </div>

        <ChoicemarkFlip
          delay={9000}
          style={{
            height: 240,
            left: 0,
            bottom: 0
          }}
        />
      </div>
    )
  }
}
