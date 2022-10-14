import { Component } from 'react'

import 'gsap'
import 'gsap-then'

import background from './images/background.png'
import text1 from './images/text1.png'
import text2 from './images/text2.png'
import text3 from './images/text3.png'

import './styles.css'

const FADE_IN_TIME  = 0.5
const BEAT = 1.5

export default class SignatureWrapInterrupt extends Component {

componentDidMount() {
  new TimelineMax({ delay: 0.5 })
    .set(this.background, { top: 1080, opacity: 0 })
    .set(this.text1, { left: 187, top: -100, opacity: 0 })
    .set(this.text2, { left: (1920 + 355), top: -100, opacity: 0 })
    .set(this.text3, { left: (1920*2 + 367), top: -100, opacity: 0 })
    .to(this.background, 1, { top: 0, opacity: 1})
    .to(this.text1, FADE_IN_TIME, { top: 247, opacity: 1}, ("-=" + FADE_IN_TIME))
    .to(this.text2, FADE_IN_TIME, { top: 247, opacity: 1}, BEAT)
    .to(this.text3, FADE_IN_TIME, { top: 247, opacity: 1}, BEAT*2)

    .to(this.text1, FADE_IN_TIME, { top: 547, opacity: 0}, BEAT*4)
    .to(this.text2, FADE_IN_TIME, { top: 547, opacity: 0}, BEAT*4)
    .to(this.text3, FADE_IN_TIME, { top: 547, opacity: 0}, BEAT*4)


    // .set(this.wraps, { left: -150, top: -100 })
    // .set(this.text1, { opacity: 1, left: 0, top: 0 })
    // .set(this.text2, { opacity: 0, left: 50, top: 600 })
    // .set(this.text3, { opacity: 0, left: 40, top: 716 })
    // .set(this.text4, { opacity: 0, left: 800, top: 640 })
    // .set(this.text5, { opacity: 0, left: 0, top: 0 })
    // .set(this.text6, { opacity: 0, left: 110, top: 10 })
    // .set(this.price, { opacity: 0 })

    // .to(this.text1, FADE_IN_TIME, { opacity: 0, delay: 2 })
    // .to(this.text2, FADE_IN_TIME, { opacity: 1 })

    // .to(this.text2, FADE_IN_TIME, { opacity: 0, delay: 2 })
    // .to(this.wraps, 0.75, { left: -550, top: -200, delay:0.5 }, OVERLAP_TIME)

    // .to(this.text3, FADE_IN_TIME, { opacity: 1})

    // .to(this.text3, FADE_IN_TIME, { opacity: 0, delay: 2 }, OVERLAP_TIME)
    // .to(this.wraps, 0.75, { left: -1000, top: -100 })

    // .to(this.text4, FADE_IN_TIME, { opacity: 1})

    // .to(this.text4, FADE_IN_TIME, { opacity: 0, delay: 2 })

    // .to(this.wraps, 0.25, { left: -630, top: -250 })
    // .to(this.text5, 0.15, { opacity: 1})

    // .to(this.text5, 0.15, { opacity: 0, delay: 2 })


    // .to(this.text6, FADE_IN_TIME, { opacity: 1})
    // .to(this.price, FADE_IN_TIME, { opacity: 1}, "-=0.25")

    TweenLite.defaultEase = Linear.easeNone;
}
  render() {
    return (
      <div className='SignatureWrapInterrupt'>
        <img src={background} ref={(node) => this.background = node}  />
        <img src={text1} ref={(node) => this.text1 = node}  />
        <img src={text2} ref={(node) => this.text2 = node}  />
        <img src={text3} ref={(node) => this.text3 = node}  />
      </div>
    )
  }
}
