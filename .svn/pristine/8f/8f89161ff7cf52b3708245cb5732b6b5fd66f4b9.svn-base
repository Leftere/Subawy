import { Component } from 'react'
import PropTypes from 'prop-types'

import neocastDataProvider from 'api/neocastDataProvider'
import delayedRender from 'components/common/delayedRender'

import ChoicemarkFlip from 'components/common/ChoicemarkFlip'

import horseradishChickenSub from './horseradishSub.png'
import chickenSub from './chickenSub.png'
import endingCopy from './endingCopy.png'
import './styles.css'


@delayedRender()
@neocastDataProvider([
  'horseradish_chicken_bacon_price_6in',
  'horseradish_chicken_bacon_price_12in',

  // Old keys (missing price) - fallback to using this if franchise has it selected
  'horseradish_chicken_bacon_6in',
  'horseradish_chicken_bacon_12in',

  'rotisserie_style_chicken_price_6in',
  'rotisserie_style_chicken_price_12in'
])
export default class ValueTestHorseradishQuad extends Component {
  render() {
    return (
      <div className='c-Promotion valueTestHorseradishQuad'>
        <div className='largeCopy titleMainCopy frame1Copy'>
          We know.
        </div>

        <div className='largeCopy titleMainCopy frame2Copy'>
          You're thinking of ordering both.
        </div>

        {/* Subs */}
        <img src={horseradishChickenSub} className='horseradishSub' />
        <img src={chickenSub} className='chickenSub' />

        <img src={endingCopy} className='endingCopy' />
        
        {/* Prices */}
        <div className='endingPrice horseradishPrice6'>
          ${this.props.horseradish_chicken_bacon_price_6in || this.props.horseradish_chicken_bacon_6in}
        </div>

        <div className='endingPrice horseradishPrice12'>
          ${this.props.horseradish_chicken_bacon_price_12in || this.props.horseradish_chicken_bacon_12in}
        </div>

        <div className='endingPrice chickenPrice6'>
          ${this.props.rotisserie_style_chicken_price_6in}
        </div>

        <div className='endingPrice chickenPrice12'>
          ${this.props.rotisserie_style_chicken_price_12in}
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
