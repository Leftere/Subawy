import { Component } from 'react'

import 'gsap'
import 'gsap-then'

import imgFull from './images/full.png'
import imgQuarter from './images/quarter.png'

import imgR2LQuarter from './images/R2Lquarter.png'

import './styles.css'

export default class SignatureWrapInterrupt extends Component {

  constructor(props) {
    super(props);

    console.log('ttt', props);

    if (props.layout == "R2L") isL2R = false;
  }

componentDidMount() {
  new TimelineMax({ delay: 0.5 })
     .set(this.full1, { opacity: 0 })
     .set(this.full2, { opacity: 0 })
     .set(this.quarter3a, { opacity: 0 })
     .set(this.quarter3b, { opacity: 0 })
     .set(this.full4, { opacity: 0 })
     .set(this.white, { opacity: 0 })
     .set(this.border, { opacity: 0, top: -600 })
     .set(this.try, { opacity: 0, top: -554 })

     .to(this.full1, 1, { opacity: 0.5}, 0)
     .to(this.full2, 1, { opacity: 0.5}, 0)
     .to(this.quarter3a, 1, { opacity: 0.5}, 0)
     .to(this.quarter3b, 1, { opacity: 0.5}, 0)
     .to(this.full4, 1, { opacity: 0.5}, 0)
     .to(this.white, 1.5, { opacity: 1}, 0)
     .to(this.border, 2, { opacity: 1, top: 0}, 0)
     .to(this.try, 2, { opacity: 1, top: 46}, 0)


    // .set(this.background, { top: 1080, opacity: 0 })
    // .set(this.text1, { left: 187, top: -100, opacity: 0 })
    // .set(this.text2, { left: (1920 + 355), top: -100, opacity: 0 })
    // .set(this.text3, { left: (1920*2 + 367), top: -100, opacity: 0 })
    // .to(this.background, 1, { top: 0, opacity: 1})
    // .to(this.text1, FADE_IN_TIME, { top: 247, opacity: 1}, ("-=" + FADE_IN_TIME))
    // .to(this.text2, FADE_IN_TIME, { top: 247, opacity: 1}, BEAT)
    // .to(this.text3, FADE_IN_TIME, { top: 247, opacity: 1}, BEAT*2)

    // .to(this.text1, FADE_IN_TIME, { top: 547, opacity: 0}, BEAT*4)
    // .to(this.text2, FADE_IN_TIME, { top: 547, opacity: 0}, BEAT*4)
    // .to(this.text3, FADE_IN_TIME, { top: 547, opacity: 0}, BEAT*4)


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
      <div className={`WrapFeature`}>
        <img className='f1' src={imgFull} ref={(node) => this.full1 = node}  />
        <img className='f2' src={imgFull} ref={(node) => this.full2 = node}  />
        <img className='f4' src={imgFull} ref={(node) => this.full4 = node}  />
        <img className='L2Rq3 q3' src={imgQuarter} ref={(node) => this.quarter3a = node}  />
        <img className='R2Lq3 q3' src={imgR2LQuarter} ref={(node) => this.quarter3b = node}  />


        <div className='white' ref={(node) => this.white = node}>&nbsp;</div>
        <div className='border' ref={(node) => this.border = node}>&nbsp;</div>

        <div className='try' ref={(node) => this.try = node}>
          TRY OUR<br/>
          SIGNATURE<br/>
          WRAPS!
        </div>
      </div>
    )
  }
}
