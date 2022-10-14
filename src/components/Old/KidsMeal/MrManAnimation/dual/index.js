import { Component } from 'react'

import 'gsap'
import 'gsap-then'

import './styles.css'


import youcanWin from '../images/you-can-win.png'
import amazonFireTablet from '../images/amazonFireTablet.png'
import step1 from '../images/mrman-littlemiss-step1.png'
import step2 from '../images/mrman-littlemiss-step2.png'
import step3 from '../images/mrman-littlemiss-step3.png'
import findKeepersText from '../images/find-keepers-text.png'

import allToys from '../images/all-toys.png'

import meal from '../images/meal.png'



export default class ReubenDuo2016w8FeaturedPromotion extends Component {

  componentDidMount() {
    const fadeInTime  = 0.4
    const delayTime = 0.4

    new TimelineMax({ delay: 0 })
      .set(this.youCanWin, { opacity: 0 })
      .set(this.seq2, { opacity: 0 })
      .set(this.tabletAndCharacters, { opacity: 0 })

      .to(this.youCanWin, fadeInTime, { opacity: 1, delay: 0.5 })
      .to(this.tabletAndCharacters, fadeInTime, { opacity: 1, delay: 2 })
      .to(this.seq1, fadeInTime, { opacity: 0, delay: 2.5 })

      .to(this.seq2, fadeInTime, { opacity: 1, delay: 0.5 })

      .to(this.findKeepersText, fadeInTime, { opacity: 0, delay: 4 })

      .to(this.toys, 0.5, { top: 250, delay: 0.5 })
      .to(this.legal, fadeInTime, { opacity: 1 })
  }


  render() {

    return (
      <div className='c-KidsMeal_animation'>

        <div className='sequence-1' ref={(node) => this.seq1 = node }>
          <div className='you-can-win' ref={(node) => this.youCanWin = node }>
            <img src={youcanWin} />
          </div>

          <div className='tablet-and-characters' ref={(node) => this.tabletAndCharacters = node}>

            <img
              className='fire-tablet'
              src={amazonFireTablet}
              ref={(node) => this.tablet = node}
            />

            <img
              className='figures mmlm-step3'
              src={step3}
              ref={(node) => this.characters = node}
            />

          </div>
        </div>

        <div className='sequence-2' ref={(node) => this.seq2 = node}>

          <div className='findKeepersText' ref={(node) => this.findKeepersText = node}>
            <div className='find-title'>
              by finding these 5 character keepers!
            </div>

            <div className='find-characters'>
              Mr. Happy, Mr. Noisy, Little Miss Fun,<br />
              Mr. Cool & Little Miss Sparkle.
            </div>
          </div>

          <div className='toys' ref={(node) => this.toys = node}>

            <img className='toy allToys' src={allToys} />

            <img className='meal' src={meal} />

          </div>

          <div className='mmlm-kids-legal txt-copyright txt-default' ref={(node) => this.legal = node}>
            NO PURCHASE NECESSARY. 50 U.S./DC, 18+ only. Purchase period begins 4/21/17 and ends 6/4/17 (while supplies last). Must redeem by 6/30/17.
            See Official Rules at Subway.com for complete details, including how to participate without a purchase. Limit 1 prize per household. No more
            than 5,000 prizes available. Prize value apprx. $99. Void where prohibited. Fire Kids Edition tablets are given away on behalf of Subway. Amazon is not a sponsor of this promotion.
            SanRio, Inc., and Mister Men Limited do not endorse and are not affiliated with the administration of this promotion.
          </div>

        </div>

      </div>
    )
  }
}
