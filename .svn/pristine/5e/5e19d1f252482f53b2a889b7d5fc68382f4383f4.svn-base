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
  'italian_bmt_price_6in',
  'italian_bmt_price_12in',
  'turkey_breast_price_6in',
  'turkey_breast_price_12in'
])
export default class ValueTestTurkeyBreastBmtDual extends Component {
  componentDidMount() {
    new TimelineMax({ delay: 1 })
      .set(this.frame1, { opacity: 1 })
      .set(this.frame2, { opacity: 0 })
      .set(this.endFrame, { opacity: 0 })

      .set(this.bmtPrice6, { opacity: 0 })
      .set(this.bmtPrice12, { opacity: 0 })
      .set(this.turkeyPrice6, { opacity: 0 })
      .set(this.turkeyPrice12, { opacity: 0 })

      .to(this.frame1, FADE_IN_TIME, { opacity: 0, delay: 3 })
      .to(this.frame2, FADE_IN_TIME, { opacity: 1, delay: 0 })
      .to(this.frame2, FADE_IN_TIME, { opacity: 0, delay: 3 })
      .to(this.endFrame, FADE_IN_TIME, { opacity: 1, delay: 0 })

      .to(this.bmtPrice6, FADE_IN_TIME, { opacity: 1, delay: 0 }, 9)
      .to(this.bmtPrice12, FADE_IN_TIME, { opacity: 1, delay: 0 }, 9)
      .to(this.turkeyPrice6, FADE_IN_TIME, { opacity: 1, delay: 0 }, 9)
      .to(this.turkeyPrice12, FADE_IN_TIME, { opacity: 1, delay: 0 }, 9)
  }

  render() {
    return (
      <div className='c-Promotion valueTestTurkeyBmtDual'>

        <img className='frame' src={frame1} ref={(node) => this.frame1 = node} />
        <img className='frame2' src={frame2} ref={(node) => this.frame2 = node} />

        <img className='endFrame' src={endFrame} ref={(node) => this.endFrame = node} />

        {/* Prices */}
        <div className='endingPrice bmtPrice6' ref={(node) => this.bmtPrice6 = node}>
          ${this.props.italian_bmt_price_6in}
        </div>

        <div className='endingPrice bmtPrice12' ref={(node) => this.bmtPrice12 = node}>
          ${this.props.italian_bmt_price_12in}
        </div>

        <div className='endingPrice turkeyPrice6' ref={(node) => this.turkeyPrice6 = node}>
          ${this.props.turkey_breast_price_6in}
        </div>

        <div className='endingPrice turkeyPrice12' ref={(node) => this.turkeyPrice12 = node}>
          ${this.props.turkey_breast_price_12in}
        </div>

      </div>
    )
  }
}
