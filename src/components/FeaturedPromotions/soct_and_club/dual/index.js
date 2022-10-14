import { Component } from 'react'

import 'gsap'
import 'gsap-then'

import './styles.css'

import background from '../images/background.jpg'
import frame1 from './images/frame1.png'
import frame2 from './images/frame2.png'
import frame3 from './images/frame3.png'
import endingFrame from './images/endingFrame.png'

import choicemark from '../images/choicemark.png'

const FADE_IN_TIME  = 1


export default class SoctAndCluDual extends Component {

  componentDidMount() {
    new TimelineMax({ delay: 1 })
      .set(this.frame1, { opacity: 1 })
      .set(this.frame2, { opacity: 0 })
      .set(this.frame3, { opacity: 0 })
      .set(this.mic, { opacity: 0 })
      .set(this.choicemark, { opacity: 0 })
      .set(this.endingFrame, { opacity: 0 })

      .to(this.frame1, FADE_IN_TIME, { opacity: 0, delay: 3.5 })
      .to(this.frame2, FADE_IN_TIME, { opacity: 1, delay: 0 })
      .to(this.frame2, FADE_IN_TIME, { opacity: 0, delay: 3.5 })
      .to(this.frame3, FADE_IN_TIME, { opacity: 1, delay: 0 })

      .to(this.choicemark, FADE_IN_TIME, { opacity: 1, delay: 1 }, 11)
      .to(this.mic, FADE_IN_TIME, { opacity: 1, delay: 1 }, 11)
      .to(this.frame3, FADE_IN_TIME, { opacity: 0, delay: 1 }, 12)
      .to(this.mic, FADE_IN_TIME, { opacity: 0, delay: 1 }, 12)

      .to(this.endingFrame, FADE_IN_TIME, { opacity: 1, delay: 0 })
  }

  render() {
    return (
      <div className='c-Promotion soctAndClubFeatured'>
        <img className='background' src={background} />

        <img className='frame' src={frame1} style={{ opacity: 1 }} ref={(node) => this.frame1 = node} />
        <img className='frame' src={frame2} ref={(node) => this.frame2 = node} />
        <img className='frame' src={frame3} ref={(node) => this.frame3 = node} style={{ bottom: 100 }} />

        <div className='titleMainCopy mic' ref={(node) => this.mic = node}>
          <sup>*</sup>mic drop<sup>*</sup>
        </div>
        <img className='choicemark' src={choicemark} ref={(node) => this.choicemark = node} />

        <img className='frame' src={endingFrame} ref={(node) => this.endingFrame = node} />

      </div>
    )
  }
}
