import { Component } from 'react'

import 'gsap'
import 'gsap-then'

import leftSub from './images/left_sub.png'
import rightSub from './images/right_sub.png'

import leftSubShadow from './images/left_sub_shadow.png'
import rightSubShadow from './images/right_sub_shadow.png'

import cheese from './images/cheese.png'

import textO from './images/o.png'
import textOM from './images/om.png'
import textCheese from './images/cheese_text.png'

import textNew from './images/new.png'
import textSub from './images/sub_text.png'

import './styles.css'


export default class CheesyGarlicInterrupt extends Component {

  constructor(props) {
    super(props)
    this.state = {
      isL2R: props.layout != "R2L"
    }
  }

  componentDidMount() {

    //TweenMax.pauseAll()

    //new TimelineMax({onComplete: () => {TweenMax.resumeAll();}})
    new TimelineMax()

      // init
      .set(this.main, { backgroundColor : "rgba(255,255,255,0)" })
      .set(this.leftSubWrapper, {
        autoAlpha: 1, left:2140, top: 110, width:2021,height:900,
        overflow:"hidden" })

      .set(this.rightSubWrapper, {
        autoAlpha: 1, left:3185, top: 110, width:2090,height:900,
        overflow:"hidden" })

      //.set(this.leftSubWrapper, { autoAlpha: 1, backgroundColor:"red" })

      .set(this.leftSub, { autoAlpha:1, left:10 })
      .set(this.rightSub, { autoAlpha:1, left:"auto", right:30 })

      .set(this.leftSubShadow, { autoAlpha:0, left: -10 })
      .set(this.rightSubShadow, { autoAlpha:0, left:"auto", right:10})

      .set(this.cheese, { autoAlpha: 1, left:3750, top: 400, width: 10, height: 460 })

      .set(this.textO, { autoAlpha: 0, left: 1920, top: 0 })
      .set(this.textOM, { autoAlpha: 0, left: 1920, top: 0 })
      .set(this.textCheese, { autoAlpha: 0, left: 3840, top: 0 })

      .set(this.textNew, { autoAlpha: 0, left: 1920, top: 0 })
      .set(this.textSub, { autoAlpha: 0, left: 3840, top: 0 })

      // Beat
      .to(this.leftSubWrapper, 3, { left: 19 }, 0)
      .to(this.rightSubWrapper, 3, { left:5520 }, 0)
      .to(this.cheese, 2.6, { left: 1900, width:4000, ease: Power0.easeNone}, 0.4)

      // Beat 2
      .to(this.cheese, 0.8, { autoAlpha: 0 }, 3)

      .to(this.leftSubWrapper, 0.2, { width: "-=120" }, 3)
      .to(this.rightSubWrapper, 0.2, { left: "+=240", width: "-=240" }, 3.0)
      //.to(this.rightSub, 0.4, { right: -150 }, 3.0)

      .to(this.leftSub, 0.4, { autoAlpha: 0 }, 3.0)
      .to(this.rightSub, 0.4, { autoAlpha: 0 }, 3.0)
      .to(this.leftSubShadow, 0.3, { autoAlpha: 1 }, 3.0)
      .to(this.rightSubShadow, 0.3, { autoAlpha: 1 }, 3.0)

      .to(this.main, 0.6, { backgroundColor: "rgba(255,255,255,1)" }, 3.0)

      // Beat 3
      .to(this.textO, 0.05, { autoAlpha: 1 }, 4.2)
      .to(this.textOM, 0.05, { autoAlpha: 1 }, 4.8)
      .to(this.textCheese, 0.05, { autoAlpha: 1 }, 5.4)

      // Beat 4
      .to(this.textNew, 0.3, { autoAlpha: 1 }, 6.5)
      .to(this.textSub, 0.3, { autoAlpha: 1 }, 6.5)

      // Fade...

    TweenLite.defaultEase = Linear.easeNone;


  }

  render() {
    return (
      <div className='cheesyGarlicInterrupt' ref={(node) => this.main = node}>

        <img src={textO} ref={(node) => this.textO = node} />
        <img src={textOM} ref={(node) => this.textOM = node} />

        <img src={textCheese} ref={(node) => this.textCheese = node} />

        <img src={textNew} ref={(node) => this.textNew = node} />
        <img src={textSub} ref={(node) => this.textSub = node} />

        <div ref={(node) => this.rightSubWrapper = node}>
          <img src={rightSub} ref={(node) => this.rightSub = node} />
          <img src={rightSubShadow} ref={(node) => this.rightSubShadow = node} />
        </div>

        <div ref={(node) => this.leftSubWrapper = node}>
          <img src={leftSub} ref={(node) => this.leftSub = node} />
          <img src={leftSubShadow} ref={(node) => this.leftSubShadow = node} />
        </div>

        <img src={cheese} ref={(node) => this.cheese = node} />

      </div>
    )
  }
}
