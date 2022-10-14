import { Component } from 'react'

import 'gsap'
import 'gsap-then'

import bg from '../images/bg.png'

import sub from '../images/sub.png'
import wrap from '../images/wrap.png'

import final from '../images/final.png'

import text1 from '../images/f1_text.png'
import text2 from '../images/f2_text.png'
import text3 from '../images/f3_text.png'

import border from '../images/border.png'


import './styles.css'

const FADE_IN_TIME  = 0.25
const OVERLAP_TIME = "-=0.5"

export default class SteakContingencyPromoDual extends Component {

componentDidMount() {
    new TimelineMax({ delay: 0.5 })
       .set(this.bg, { opacity: 1, left: 0, top: 0 })
       .set(this.sub, { opacity: 0, left: 0, top: 10 })
       .set(this.text1, { opacity: 1, left: 75, top: 75 })
       .set(this.text2, { opacity: 0, left: 75, top: 75 })
       .set(this.finalFrame, { opacity: 0, left: 0, top: 0 })

       .set(this.wrap, { opacity: 0, left: 0, top: 10 })
       .set(this.text3, { opacity: 0, left: 75, top: 75 })
       .set(this.border, { opacity: 1, left: 0, top: 0 })

       .to(this.sub, 0.5, {  opacity: 1, delay: 2 })

       .to(this.text1, 0.5, {  opacity: 0}, 4)
       .to(this.sub, 0.5, {  opacity: 0}, 4)

       .to(this.text2, 0.5, {  opacity: 1, delay: 0 })
       .to(this.wrap, 0.5, {  opacity: 1, delay: 2 })

       .to(this.text2, 0.5, {  opacity: 0}, 9)
       .to(this.wrap, 0.5, {  opacity: 0}, 9)

       .to(this.text3, 0.5, {  opacity: 1, delay: 0 })

       .to(this.text3, 0.5, {  opacity: 0, delay: 2 })

       .to(this.finalFrame, 0.5, {  opacity: 1, delay: 0 })


       TweenLite.defaultEase = Linear.easeNone;

  }


  render() {
    return (
      <div className='c-Promotion-2018w3-SteakContingency'>

        <img className='bg' src={bg} ref={(node) => this.bg = node} />

        <img className='text text1' src={text1} ref={(node) => this.text1 = node} />
        <img className='text text2' src={text2} ref={(node) => this.text2 = node} />
        <img className='text text3' src={text3} ref={(node) => this.text3 = node} />

        <img className='sub' src={sub} ref={(node) => this.sub = node} />

        <div className='finalFrame' ref={(node) => this.finalFrame = node}>
          <img className='final' src={final} ref={(node) => this.final = node} />
        </div>

        <img className='wrap' src={wrap} ref={(node) => this.wrap = node} />

        <img className='border' src={border} ref={(node) => this.border = node} />

      </div>
    )
  }
}
