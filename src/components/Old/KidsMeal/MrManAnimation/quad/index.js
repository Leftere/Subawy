import { Component } from 'react'

/**
 * The last frame of the animation is the kids meal. Technically the DJ should just handle
 * this, but for some reason it was skipping, or staying in frame for too long.
 */
import KidsMeal from 'components/KidsMeal'

import youcanWin from '../images/you-can-win.png'
import amazonFireTablet from '../images/amazonFireTablet.png'
import step1 from '../images/mrman-littlemiss-step1.png'
import step2 from '../images/mrman-littlemiss-step2.png'
import step3 from '../images/mrman-littlemiss-step3.png'
import findKeepersText from '../images/find-keepers-text.png'

import toy1 from '../images/toy1.png'
import toy2 from '../images/toy2.png'
import toy3 from '../images/toy3.png'
import toy4 from '../images/toy4.png'
import toy5 from '../images/toy5.png'

import meal from '../images/meal.png'

import './styles.css'


export default class MrManLissMissAnimation extends Component {
  state = {
    show: false
  }

  componentDidMount() {
    setTimeout(() => {
      this.setState({ show: true })
    }, 800)
  }

  render() {
    if (!this.state.show) {
      return null
    }

    return (
      <div className='c-KidsMeal_animation'>

        <div className='sequence-1'>
          <div className='you-can-win'>
            <img src={youcanWin} />
          </div>

          <div className='c-KidsMeal_mrmanlittlemiss'>

            <img
              className='fire-tablet'
              src={amazonFireTablet}
            />

            <img
              className='figures mmlm-step1'
              src={step1}
            />

            <img
              className='figures mmlm-step2'
              src={step2}
            />

            <img
              className='figures mmlm-step3'
              src={step3}
            />

          </div>
        </div>

        <div className='sequence-2'>

          <div className='findKeepersText'>
            <div className='find-title'>
              by finding these 5 character keepers!
            </div>

            <div className='find-characters'>
              Mr. Happy, Mr. Noisy, Little Miss Fun,<br />
              Mr. Cool & Little Miss Sparkle.
            </div>
          </div>

          <div className='toys'>

            <img className='toy toy1' src={toy1} />
            <img className='toy toy2' src={toy2} />
            <img className='toy toy3' src={toy3} />
            <img className='toy toy4' src={toy4} />
            <img className='toy toy5' src={toy5} />

            <img className='meal' src={meal} />

          </div>

          <div className='mmlm-kids-legal txt-copyright txt-default'>
            NO PURCHASE NECESSARY. 50 U.S./DC, 18+ only. Purchase period begins 4/21/17 and ends 6/4/17 (while supplies last). Must redeem by 6/30/17. 
            See Official Rules at Subway.com for complete details, including how to participate without a purchase. Limit 1 prize per household. No more 
            than 5,000 prizes available. Prize value apprx. $99. Void where prohibited. Fire Kids Edition tablets are given away on behalf of Subway. Amazon is not a sponsor of this promotion. 
            SanRio, Inc., and Mister Men Limited do not endorse and are not affiliated with the administration of this promotion.
          </div>

        </div>

        <div className='kids-menu-resting'>
          <KidsMeal {...this.props} />
        </div>

      </div>
    )
  }
}
