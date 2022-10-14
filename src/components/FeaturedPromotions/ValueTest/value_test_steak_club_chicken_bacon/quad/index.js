import { Component } from 'react'
import PropTypes from 'prop-types'

import neocastDataProvider from 'api/neocastDataProvider'

import ChoicemarkFlip from 'components/common/ChoicemarkFlip'

import steakClub from './steakClub.png'
import chickenBaconRanch from './chickenBaconRanch.png'
import endingCopy from './endingCopy.png'
import './styles.css'


@neocastDataProvider([
  'steak_club_price_6in',
  'steak_club_price_12in',
  'chicken_bacon_ranch_price_6in',
  'chicken_bacon_ranch_price_12in'
])
export default class ValueTestChickenBaconRanchQuad extends Component {
  state = {
    show: false
  }

  componentDidMount() {
    window.requestTimeout(() => {
      this.setState({ show: true })
    }, 900)
  }

  render() {
    if (!this.state.show) {
      return null;
    }

    return (
      <div className='c-Promotion valueTestChickenBaconRanchQuad'>
        <div className='largeCopy titleMainCopy frame1Copy'>
          We know.
        </div>

        <div className='largeCopy titleMainCopy frame2Copy'>
          You're thinking of ordering both.
        </div>

        {/* Subs */}
        <img src={steakClub} className='steakClub' />
        <img src={chickenBaconRanch} className='chickenBaconRanch' />

        <img src={endingCopy} className='endingCopy' />
        
        {/* Prices */}
        <div className='endingPrice steakClubPrice6'>
          ${this.props.steak_club_price_6in}
        </div>

        <div className='endingPrice steakClubPrice12'>
          ${this.props.steak_club_price_12in}
        </div>

        <div className='endingPrice chickenPrice6'>
          ${this.props.chicken_bacon_ranch_price_6in}
        </div>

        <div className='endingPrice chickenPrice12'>
          ${this.props.chicken_bacon_ranch_price_12in}
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
