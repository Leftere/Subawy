import { Component } from 'react'

import neocastDataProvider from 'api/neocastDataProvider'

import 'gsap'
import 'gsap-then'

import bg from '../images/bg.png'
import wraps from '../images/wraps.png'

import text1 from '../images/f1_text.png'
import text2 from '../images/f2_text.png'
import text3 from '../images/f3_text.png'
import text4 from '../images/f4_text.png'
import text5 from '../images/f5_text.png'
import text6 from '../images/f6_text.png'

import './styles.css'

const FADE_IN_TIME  = 0.25
const OVERLAP_TIME = "-=0.5"

@neocastDataProvider([
  'signature_wraps_price'
])
export default class SignatureWrapsPromoQuad extends Component {
  
componentDidMount() {
    new TimelineMax({ delay: 0.5 })
      .set(this.wraps, { left: -150, top: -100 })
      .set(this.text1, { opacity: 1, left: 0, top: 0 })
      .set(this.text2, { opacity: 0, left: 50, top: 600 })
      .set(this.text3, { opacity: 0, left: 40, top: 716 })
      .set(this.text4, { opacity: 0, left: 800, top: 640 })
      .set(this.text5, { opacity: 0, left: 0, top: 0 })
      .set(this.text6, { opacity: 0, left: 110, top: 10 })
      .set(this.price, { opacity: 0 })

      .to(this.text1, FADE_IN_TIME, { opacity: 0, delay: 2 })
      .to(this.text2, FADE_IN_TIME, { opacity: 1 })

      .to(this.text2, FADE_IN_TIME, { opacity: 0, delay: 2 })
      .to(this.wraps, 0.75, { left: -550, top: -200, delay:0.5 }, OVERLAP_TIME)
      
      .to(this.text3, FADE_IN_TIME, { opacity: 1})

      .to(this.text3, FADE_IN_TIME, { opacity: 0, delay: 2 }, OVERLAP_TIME)
      .to(this.wraps, 0.75, { left: -1000, top: -100 })

      .to(this.text4, FADE_IN_TIME, { opacity: 1})

      .to(this.text4, FADE_IN_TIME, { opacity: 0, delay: 2 })

      .to(this.wraps, 0.25, { left: -630, top: -250 })
      .to(this.text5, 0.15, { opacity: 1})

      .to(this.text5, 0.15, { opacity: 0, delay: 2 })
      

      .to(this.text6, FADE_IN_TIME, { opacity: 1})
      .to(this.price, FADE_IN_TIME, { opacity: 1}, "-=0.25")



      TweenLite.defaultEase = Linear.easeNone;

      // .set(this.F7Doodle, { opacity: 0,y:"-200" })
      // .to(this.frame1, FADE_IN_TIME, { opacity: 0, delay: 3, x:"-1000"  })
      // .to(this.frame2, FADE_IN_TIME, { opacity: 1, x:0 }, "-=" + FADE_IN_TIME)

  }
 

  render() { 
    return (
      <div className='c-Promotion-2018w2-SignatureWraps'>

        <img className='bg' src={bg} ref={(node) => this.bg = node} />
        <img className='wraps' src={wraps} ref={(node) => this.wraps = node} />

        <img className='text text1' src={text1} ref={(node) => this.text1 = node} />
        <img className='text text2' src={text2} ref={(node) => this.text2 = node} />
        <img className='text text3' src={text3} ref={(node) => this.text3 = node} />
        <img className='text text4' src={text4} ref={(node) => this.text4 = node} />
        <img className='text text5' src={text5} ref={(node) => this.text5 = node} />
        <img className='text text6' src={text6} ref={(node) => this.text6 = node} />

        <div className='price' ref={(node) => this.price = node}
        >NEW <br/>
        SIGNATURE <br/>
        WRAPS <sup>$</sup>{this.props.signature_wraps_price}</div>
      </div>
    )
  }
}
