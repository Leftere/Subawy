import { Component } from 'react'

import 'gsap'
import 'gsap-then'

import bg from './bg.png'
import './styles.css'

const FADE_IN_TIME  = 0.3
const REST_TIME = "+=0.9"

export default class FeaturedPromoPanel extends Component {

componentDidMount() {
    new TimelineMax({ delay: 1 })
      .set(this.text1, { opacity: 0, left: 300 })
      .set(this.text2, { opacity: 0, left: 300 })
      .set(this.text3, { opacity: 0, left: 300 })
      .set(this.text4, { opacity: 0, left: 300 })


      .to(this.text1, FADE_IN_TIME, { opacity: 1, left: 0 })
      .to(this.text1, FADE_IN_TIME, { opacity: 0, left: -300 }, REST_TIME)

      .to(this.text2, FADE_IN_TIME, { opacity: 1, left: 0 })
      .to(this.text2, FADE_IN_TIME, { opacity: 0, left: -300 }, REST_TIME)

      .to(this.text3, FADE_IN_TIME, { opacity: 1, left: 0 })
      .to(this.text3, FADE_IN_TIME, { opacity: 0, left: -300 }, "+=1.1")

      .to(this.text4, FADE_IN_TIME, { opacity: 1, left: 0 })

      TweenLite.defaultEase = Linear.easeNone;
  }


  render() {
    return (
      <div className='c-Promotion-2018w2-PromoPanel'>

        <img className='bg' src={bg} ref={(node) => this.bg = node} />

        <div className='text text1' ref={(node) => this.text1 = node}>Hunger never</div>
        <div className='text text2' ref={(node) => this.text2 = node}>saw it</div>
        <div className='text text3' ref={(node) => this.text3 = node}>coming.</div>
        <div className='text text4' ref={(node) => this.text4 = node}>Go for the<br/>Steak &amp; Cheese</div>

      </div>
    )
  }
}
