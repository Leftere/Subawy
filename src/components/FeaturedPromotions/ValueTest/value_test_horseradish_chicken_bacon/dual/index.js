import { Component } from 'react'

import neocastDataProvider from 'api/neocastDataProvider'

import 'gsap'
import 'gsap-then'

import './styles.css'

import frame1 from './frame1.jpg'
import frame2 from './frame2.jpg'
import endFrame from './endFrame.jpg'

const FADE_IN_TIME  = 1

@neocastDataProvider([
  'horseradish_chicken_bacon_price_6in',
  'horseradish_chicken_bacon_price_12in',

  // Old keys (missing price) - fallback to using this if franchise has it selected
  'horseradish_chicken_bacon_6in',
  'horseradish_chicken_bacon_12in',
  
  'rotisserie_style_chicken_price_6in',
  'rotisserie_style_chicken_price_12in'
])
export default class ValueTestTurkeyBreastBmtDual extends Component {
  componentDidMount() {
    new TimelineMax({ delay: 1 })
      .set(this.frame1, { opacity: 1 })
      .set(this.frame2, { opacity: 0 })
      .set(this.endFrame, { opacity: 0 })

      .set(this.horseradishPrice6, { opacity: 0 })
      .set(this.horseradishPrice12, { opacity: 0 })
      .set(this.chickenPrice6, { opacity: 0 })
      .set(this.chickenPrice12, { opacity: 0 })

      .to(this.frame1, FADE_IN_TIME, { opacity: 0, delay: 3 })
      .to(this.frame2, FADE_IN_TIME, { opacity: 1, delay: 0 })
      .to(this.frame2, FADE_IN_TIME, { opacity: 0, delay: 3 })
      .to(this.endFrame, FADE_IN_TIME, { opacity: 1, delay: 0 })

      .to(this.horseradishPrice6, FADE_IN_TIME, { opacity: 1, delay: 0 }, 9)
      .to(this.horseradishPrice12, FADE_IN_TIME, { opacity: 1, delay: 0 }, 9)
      .to(this.chickenPrice6, FADE_IN_TIME, { opacity: 1, delay: 0 }, 9)
      .to(this.chickenPrice12, FADE_IN_TIME, { opacity: 1, delay: 0 }, 9)
  }

  render() {
    return (
      <div className='c-Promotion valueTestHorseradishDual'>

        <img className='frame' src={frame1} ref={(node) => this.frame1 = node} />
        <img className='frame2' src={frame2} ref={(node) => this.frame2 = node} />

        <img className='endFrame' src={endFrame} ref={(node) => this.endFrame = node} />

        {/* Prices */}
        <div className='endingPrice horseradishPrice6' ref={(node) => this.horseradishPrice6 = node}>
          ${this.props.horseradish_chicken_bacon_price_6in || this.props.horseradish_chicken_bacon_6in}
        </div>

        <div className='endingPrice horseradishPrice12' ref={(node) => this.horseradishPrice12 = node}>
          ${this.props.horseradish_chicken_bacon_price_12in || this.props.horseradish_chicken_bacon_12in}
        </div>

        <div className='endingPrice chickenPrice6' ref={(node) => this.chickenPrice6 = node}>
          ${this.props.rotisserie_style_chicken_price_6in}
        </div>

        <div className='endingPrice chickenPrice12' ref={(node) => this.chickenPrice12 = node}>
          ${this.props.rotisserie_style_chicken_price_12in}
        </div>

      </div>
    )
  }
}
