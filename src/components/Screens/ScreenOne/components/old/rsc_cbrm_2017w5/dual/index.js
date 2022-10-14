import { Component } from 'react'

import frame1 from './images/frame1.jpg'
import frame2 from './images/frame2.jpg'

import endingFrame from './images/endingFrame.jpg'
import sandwich1 from '../images/sandwich1.png'
import sandwich2 from '../images/sandwich2.png'
import copy from './images/endingAllCopy.png'

import 'gsap'
import 'gsap-then'

import './styles.css'

const FADE_IN_TIME  = 1

export default class RscCbrmDual extends Component {

  componentDidMount() {
    new TimelineMax({ delay: 1 })
      .set(this.frame2, { opacity: 0 })
      .set(this.endingFrame, { opacity: 0 })
      .set(this.sub1, { opacity: 0 })
      .set(this.sub2, { opacity: 0 })

      .to(this.frame2, FADE_IN_TIME, { opacity: 1, delay: 5 })
      .to(this.endingFrame, FADE_IN_TIME, { opacity: 1, delay: 5 })
      .to(this.sub1, FADE_IN_TIME, { opacity: 1, delay: 7 }, 5)
      .to(this.sub2, FADE_IN_TIME, { opacity: 1, delay: 7 }, 5)
      .to(this.copy, FADE_IN_TIME, { opacity: 1, delay: 0.5 })
  }


  render() {

    return (
      <div className='c-Promotion rscCbrFeatured'>

        <img src={frame1} className='frame frame1' />
        <img src={frame2} className='frame frame2' ref={(node) => this.frame2 = node} />
        <img src={endingFrame} className='frame endingFrame' ref={(node) => this.endingFrame = node} />

        <img src={sandwich1} className='sandwich1' ref={(node) => this.sub1 = node} />
        <img src={sandwich2} className='sandwich2' ref={(node) => this.sub2 = node} />

        <img src={copy} className='frame endingCopy' ref={(node) => this.copy = node} />

      </div>
    )
  }
}
