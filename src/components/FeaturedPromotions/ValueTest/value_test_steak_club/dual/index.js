import { Component } from 'react'
import PropTypes from 'prop-types'

import neocastDataProvider from 'api/neocastDataProvider'

import frame1 from './frame1.jpg'
import frame2 from './frame2.jpg'
import endFrame from './endFrame.jpg'
import './styles.css'

import 'gsap'
import 'gsap-then'

const FADE_IN_TIME = 1;


@neocastDataProvider([
  'steak_club_price_6in',
  'steak_club_price_12in'
])
export default class ValueTestSteakClub extends Component {
   componentDidMount() {
    new TimelineMax({ delay: 1 })
      .set(this.frame1, { opacity: 1 })
      .set(this.frame2, { opacity: 0 })
      .set(this.endFrame, { opacity: 0 })
      .set(this.price6, { opacity: 0 })
      .set(this.price12, { opacity: 0 })

      .to(this.frame1, FADE_IN_TIME, { opacity: 0, delay: 3 })
      .to(this.frame2, FADE_IN_TIME, { opacity: 1, delay: 0 })
      .to(this.frame2, FADE_IN_TIME, { opacity: 0, delay: 3.5 })

      .to(this.endFrame, FADE_IN_TIME, { opacity: 1, delay: 0 }, 10)
      .to(this.price6, FADE_IN_TIME, { opacity: 1, delay: 0 }, 10)
      .to(this.price12, FADE_IN_TIME, { opacity: 1, delay: 0 }, 10)
  }

  render() {
    return (
      <div className='c-Promotion valueTestSteakClubDual'>

        <img src={frame1} className='frame1' ref={(node) => { this.frame1 = node; } } />
        <img src={frame2} className='frame2' ref={(node) => { this.frame2 = node; } } />
        <img src={endFrame} className='endFrame' ref={(node) => { this.endFrame = node; } } />
        
        {/* Prices */}
        <div className='endingPrice price6' ref={(node) => { this.price6 = node; } }>
          ${this.props.steak_club_price_6in}
        </div>

        <div className='endingPrice price12' ref={(node) => { this.price12 = node; } }>
          ${this.props.steak_club_price_12in}
        </div>

      </div>
    )
  }
}
