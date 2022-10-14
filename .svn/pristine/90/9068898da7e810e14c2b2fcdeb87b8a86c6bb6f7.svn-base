import { Component } from 'react'
import PropTypes from 'prop-types'

import neocastDataProvider from 'api/neocastDataProvider'

import ChoicemarkFlip from 'components/common/ChoicemarkFlip'

import mainSub from './sub.png'
import endingCopy from './endingCopy.png'
import './styles.css'


@neocastDataProvider([
  'steak_club_price_6in',
  'steak_club_price_12in'
])
export default class ValueTestSteakClub extends Component {
  state = {
    show: false
  }

  componentDidMount() {
    window.requestTimeout(() => {
      this.setState({ show: true })
    }, 300)
  }

  render() {
    if (!this.state.show) {
      return null;
    }

    return (
      <div className='c-Promotion valueTestSteakClubQuad'>
        <div className='largeCopy titleMainCopy frame1Copy'>
          Bacon. Turkey. Steak.
        </div>

        <div className='largeCopy titleMainCopy frame2Copy'>
          The gang's all here.
        </div>

        <img src={mainSub} className='mainSub' />

        <img src={endingCopy} className='endingCopy' />
        
        {/* Prices */}
        <div className='endingPrice price6'>
          ${this.props.steak_club_price_6in}
        </div>

        <div className='endingPrice price12'>
          ${this.props.steak_club_price_12in}
        </div>

        <ChoicemarkFlip
          delay={10500}
          style={{
            left: 10,
            bottom: 0
          }}
        />
      </div>
    )
  }
}
