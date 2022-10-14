import { Component } from 'react'
import PropTypes from 'prop-types'

import neocastDataProvider from 'api/neocastDataProvider'

import delayedRender from 'components/common/delayedRender'
import ChoicemarkFlip from 'components/common/ChoicemarkFlip'

import mainSub from './sub.png'
import endingCopy from './endingCopy.png'
import './styles.css'


@neocastDataProvider([
  'soct_price_6in',
  'soct_price_12in'
])
@delayedRender()
export default class ValueTestSoctQuad extends Component {
  render() {
    return (
      <div className='c-Promotion valueTestSoctQuad'>
        <div className='largeCopy titleMainCopy frame1Copy'>
          Sweeeeeeeeeet.
        </div>

        {/*
        <div className='largeCopy titleMainCopy frame2Copy'>
          eeeeeeeeet.
        </div>
        */}

        <img src={mainSub} className='mainSub' />

        <img src={endingCopy} className='endingCopy' />
        
        {/* Prices */}
        <div className='endingPrice price6'>
          ${this.props.soct_price_6in}
        </div>

        <div className='endingPrice price12'>
          ${this.props.soct_price_12in}
        </div>

        <ChoicemarkFlip
          delay={9500}
          style={{
            left: 10,
            bottom: 0
          }}
        />
      </div>
    )
  }
}
