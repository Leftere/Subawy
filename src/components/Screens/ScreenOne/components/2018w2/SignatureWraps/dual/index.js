import { Component } from 'react'

import neocastDataProvider from 'api/neocastDataProvider'

import 'gsap'
import 'gsap-then'

import frame1 from '../images/frame1.png'
import frame2 from '../images/frame2.png'
import frame3 from '../images/frame3.png'
import frame4 from '../images/frame4.png'
import frame5 from '../images/frame5.png'
import frame6 from '../images/frame6.png'

import './styles.css'

const FADE_IN_TIME  = 0.3
const DELAY_TIME = 0.5

@neocastDataProvider([
  'signature_wraps_price'
])
export default class SignatureWrapsPromoDual extends Component {
  
componentDidMount() {
    new TimelineMax({ delay: 0.5 })

    .set(this.frame1, { opacity: 1 })
      .set(this.frame2, { opacity: 0 })
      .set(this.frame3, { opacity: 0 })
      .set(this.frame4, { opacity: 0 })
      .set(this.frame5, { opacity: 0 })
      .set(this.frame6, { opacity: 0 })
      .set(this.price, { opacity: 0 })

      .to(this.frame1, FADE_IN_TIME, { opacity: 0, delay: 3 })
      .to(this.frame2, FADE_IN_TIME, { opacity: 1 }, "-=" + DELAY_TIME)

      .to(this.frame2, FADE_IN_TIME, { opacity: 0, delay: 3 })
      .to(this.frame3, FADE_IN_TIME, { opacity: 1 }, "-=" + DELAY_TIME)

      .to(this.frame3, FADE_IN_TIME, { opacity: 0, delay: 3 })
      .to(this.frame4, FADE_IN_TIME, { opacity: 1 }, "-=" + DELAY_TIME)

      .to(this.frame4, FADE_IN_TIME, { opacity: 0, delay: 3 })
      .to(this.frame5, FADE_IN_TIME, { opacity: 1 }, "-=" + DELAY_TIME)

      .to(this.frame5, FADE_IN_TIME, { opacity: 0, delay: 3 })
      .to(this.frame6, FADE_IN_TIME, { opacity: 1 }, "-=" + DELAY_TIME)
      .to(this.price, FADE_IN_TIME, { opacity: 1 }, "-=" + DELAY_TIME)

      TweenLite.defaultEase = Linear.easeNone;

  }


  render() {
    return (
      <div className='c-Promotion-2018w1-FreshFit'>

        <img className='freshFrame frame1' src={frame1} ref={(node) => this.frame1 = node} />
        <img className='freshFrame frame2' src={frame2} ref={(node) => this.frame2 = node} />
        <img className='freshFrame frame3' src={frame3} ref={(node) => this.frame3 = node} />
        <img className='freshFrame frame4' src={frame4} ref={(node) => this.frame4 = node} />
        <img className='freshFrame frame5' src={frame5} ref={(node) => this.frame5 = node} />
        <img className='freshFrame frame6' src={frame6} ref={(node) => this.frame6 = node} />

        <div className='price' ref={(node) => this.price = node}
        >NEW <br/>
        SIGNATURE <br/>
        WRAPS <sup>$</sup>{this.props.signature_wraps_price}</div>

      </div>
    )
  }
}
