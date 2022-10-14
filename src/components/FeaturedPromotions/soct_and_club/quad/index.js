import { Component } from 'react'

import delayedRender from 'components/common/delayedRender'

import './styles.css'

import background from '../images/background.jpg'
import sandwich1 from '../images/sandwich1.png'
import sandwich2 from '../images/sandwich2.png'
import choicemark from '../images/choicemark.png'
import clubText from '../images/club-text.png'
import soctText from '../images/soct-text.png'

@delayedRender()
export default class SoctAndClubQuad extends Component {
  render() {
    return (
      <div className='c-Promotion soctAndClubFeatured'>
        <img className='background' src={background} />

        {/* Copy */}
        <div className='promoContent'>
          <div className='titleMainCopy saucy'>
            Saucy.
          </div>

          <div className='titleMainCopy stuffed'>
            Meaty.
          </div>

          <div className='titleMainCopy mic'>
            <sup>*</sup>mic drop<sup>*</sup>
          </div>

          {/* Sandwiches */}
          <div className='sandwichContainer'>
            <img src={sandwich1} className={'sandwich1'} />

            <img src={sandwich2} className={'sandwich2'} />
          </div>

          <img className='soctText' src={soctText} />
          <img className='clubText' src={clubText} />

        </div>

        <img className='choicemark' src={choicemark} />

      </div>
    )
  }
}
