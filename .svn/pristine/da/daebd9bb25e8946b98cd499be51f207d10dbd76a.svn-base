import { Component } from 'react'
import PropTypes from 'prop-types'

import 'gsap'
import 'gsap-then'

import './styles.css'


import frame1 from './images/frame1.jpg'
import frame2 from './images/frame2.png'
import title from './images/title.png'

import otherSub1 from './images/otherSub1.png'
import otherSub2 from './images/otherSub2.png'

import finalCalCopy from './images/finalCalCopy.png'
import priceAndChoicemark from './images/priceAndChoicemark.png'
import priceAndChoicemarkLower from './images/priceAndChoicemarkLower.png'
import lto from './images/lto.png'

const FADE_IN_TIME  = 1

export default class SteakLoversCollectionDual extends Component {
  static propTypes = {
    isLowerPrice: PropTypes.bool
  }

  componentDidMount() {
    new TimelineMax({ delay: 1 })
      .set(this.frame1, { opacity: 1 })
      .set(this.frame2, { opacity: 0 })
      .set(this.title, { opacity: 0 })
      .set(this.otherSub1, { opacity: 0 })
      .set(this.otherSub2, { opacity: 0 })
      .set(this.finalCalCopy, { opacity: 0 })
      .set(this.priceAndChoicemark, { opacity: 0 })
      .set(this.lto, { opacity: 0 })


      .to(this.frame1, FADE_IN_TIME, { opacity: 0, delay: 3.5 })
      .to(this.frame2, FADE_IN_TIME, { opacity: 1, delay: 0 })
      
      .to(this.otherSub1, FADE_IN_TIME, { opacity: 1, delay: 0.75 }, 8)
      .to(this.otherSub2, FADE_IN_TIME, { opacity: 1, delay: 0.75 }, 8)
      .to(this.title, FADE_IN_TIME, { opacity: 1, delay: .5 })

      .to(this.finalCalCopy, FADE_IN_TIME, { opacity: 1, delay: 0.75 }, 8)

      .to(this.priceAndChoicemark, FADE_IN_TIME, { opacity: 1 })
      .to(this.lto, FADE_IN_TIME, { opacity: 1 })
  }

  render() {
    const { isLowerPrice } = this.props

    return (
      <div className='c-Promotion steakLoversFeaturedDual'>

        <img className='frame' src={frame1} ref={(node) => this.frame1 = node} />
        <img className='frame2 frame' src={frame2} ref={(node) => this.frame2 = node} />

        <img className='title' src={title} ref={(node) => this.title = node} />

        <img className='frame finalCalCopy' src={finalCalCopy} ref={(node) => this.finalCalCopy = node} />
        <img className='frame otherSub1' src={otherSub1} ref={(node) => this.otherSub1 = node} />
        <img className='frame otherSub2' src={otherSub2} ref={(node) => this.otherSub2 = node} />

        <img
          className='frame priceAndChoicemark'
          src={isLowerPrice ? priceAndChoicemarkLower : priceAndChoicemark}
          ref={(node) => this.priceAndChoicemark = node}
        />
        <img className='frame lto' src={lto} ref={(node) => this.lto = node} />
      </div>
    )
  }
}
