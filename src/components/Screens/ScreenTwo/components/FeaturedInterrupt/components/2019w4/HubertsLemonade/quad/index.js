import { Component } from 'react'
import { DOMinator } from 'components/Common/DOMinator'
import API from 'api'
import 'gsap'
import 'gsap-then'

import './styles.css'

import f1bg1 from './images/1-bg-1.png'
import f1bg2 from './images/1-bg-2.png'
import f1cup1 from './images/1-cup-1.png'
import f1cup2 from './images/1-cup-2.png'
import f1cup3 from './images/1-cup-3.png'
import f1fg from './images/1-fg.png'
import f2bg from './images/2-bg.png'
import f2fg from './images/2-fg.png'
import f2fg2 from './images/2-fg-2.png'
import f2fg3 from './images/2-fg-3.png'
import f3bg from './images/3-bg.png'
import f3fg from './images/3-fg.png'
import f3text from './images/3-text.png'

let R = React.createElement // Render Element

// Build DOM
let domClass = 'c-HubertsLemonade'
let elements = {
  f1bg1: ['img', f1bg1],
  f1bg2: ['img', f1bg2],
  f1cup1: ['img', f1cup1],
  f1cup2: ['img', f1cup2],
  f1cup3: ['img', f1cup3],
  f1fg: ['img', f1fg],

  f2bg: ['img', f2bg],
  f2fg: ['img', f2fg],
  f2fg2: ['img', f2fg2],
  f2fg3: ['img', f2fg3],

  f3bg: ['img', f3bg],
  f3fg: ['img', f3fg],
  f3text: ['img', f3text]
}

let dominate = DOMinator.dominate(elements)
let result = dominate.result
let C = dominate.references // Children lookup

let dom = R('div', {
  className: domClass
}, result)

export default class HubertsLemonade extends Component {

	componentDidMount() {

    let timeline = new TimelineMax()
        .set([
          C.f1bg2, C.f1cup2, C.f1cup3,
          C.f2bg, C.f2fg, C.f2fg2, C.f2fg3, C.f3bg, C.f3fg, C.f3text], {autoAlpha: 0})
        .set(C.f2bg, {scale: 1.2})
        .set([C.f2fg, C.f2fg2, C.f2fg3], {top: -80, left: -100})
        .set(C.f3fg, {top: -120})
        .set(C.f3bg, {scale: 1.4, top: -100})

    timeline 
      .set(C.f1bg2, {autoAlpha: 1}, 0.5)
      .set(C.f1bg2, {autoAlpha: 0}, 1.0)
      .set(C.f1bg2, {autoAlpha: 1}, 1.5)
      .set(C.f1bg2, {autoAlpha: 0}, 2.0)
      .set(C.f1bg2, {autoAlpha: 1}, 2.5)
      .set(C.f1bg2, {autoAlpha: 0}, 3.0)
      .set(C.f1bg2, {autoAlpha: 1}, 3.5)
      .set(C.f1bg2, {autoAlpha: 0}, 4.0)

    timeline
      .set(C.f1cup1, {autoAlpha: 0}, 1.8)
      .set(C.f1cup2, {autoAlpha: 1}, 1.8)
      .set(C.f1cup2, {autoAlpha: 0}, 2.6)
      .set(C.f1cup3, {autoAlpha: 1}, 2.6)

    timeline
      .to(C.f2bg, 1, {scale: 1, autoAlpha: 1}, 4)

    timeline
      .to(C.f2fg, 0.7, {top: -50, autoAlpha: 1,ease: Power2.easeOut}, 4.2)
      .to(C.f2fg2, 0.7, {top: -50, autoAlpha: 1,ease: Power2.easeOut}, 4.7)
      .to(C.f2fg3, 0.7, {top: -50, autoAlpha: 1,ease: Power2.easeOut}, 5.2)

    timeline
      .to(C.f2fg, 2, {scale: 1.5, ease: Power2.easeIn}, 5.5)
      .to(C.f2fg2, 2, {scale: 1.5, ease: Power2.easeIn}, 5.1)
      .to(C.f2fg3, 2, {scale: 1.5, ease: Power2.easeIn}, 5.3)
      .to(C.f2bg, 2, {scale: 1.3, ease: Power2.easeIn}, 5.7)
    
    timeline
      .to(C.f3bg, 1, {autoAlpha: 1}, 6.3)
      .to(C.f3bg, 5, {top: 0}, 6.3)
    
    timeline
      .to(C.f3fg, 1.5, {top: 0, autoAlpha: 1, ease: Back.easeOut.config(2)}, 7.3)

      .set([
            C.f1cup2, C.f1cup3,
            C.f2bg, C.f2fg, C.f2fg2, C.f2fg3], {autoAlpha: 0}, 7.5)

      .set([C.f1cup1], {autoAlpha: 1}, 7.5)

    timeline
      .to(C.f3text, 1, {autoAlpha: 1}, 7.8)
      
      .to(C.f3text, 1, {autoAlpha: 0}, 10)
      .to(C.f3fg, 1, {autoAlpha: 0}, 10.5)
      .to(C.f3bg, 1, {autoAlpha: 0}, 11)

    timeline 
      .set(C.f1bg2, {autoAlpha: 1}, 11.5)
      .set(C.f1bg2, {autoAlpha: 0}, 12.0)
      .set(C.f1bg2, {autoAlpha: 1}, 12.5)
      .set(C.f1bg2, {autoAlpha: 0}, 13.0)
      .set(C.f1bg2, {autoAlpha: 1}, 13.5)
      .set(C.f1bg2, {autoAlpha: 0}, 14.0)
      .set(C.f1bg2, {autoAlpha: 1}, 14.5)
      .set(C.f1bg2, {autoAlpha: 0}, 15.0)
      .set(C.f1bg2, {autoAlpha: 1}, 15.5)
      .set(C.f1bg2, {autoAlpha: 0}, 16.0)
      .set(C.f1bg2, {autoAlpha: 1}, 16.5)
      .set(C.f1bg2, {autoAlpha: 0}, 17.0)
      .set(C.f1bg2, {autoAlpha: 1}, 17.5)
      .set(C.f1bg2, {autoAlpha: 0}, 18.0)
      .set(C.f1bg2, {autoAlpha: 1}, 18.5)
      .set(C.f1bg2, {autoAlpha: 0}, 19.0)
      .set(C.f1bg2, {autoAlpha: 1}, 19.5)
      .set(C.f1bg2, {autoAlpha: 0}, 20.0)
      .set(C.f1bg2, {autoAlpha: 1}, 20.5)

    // let beat = 2;
    // let beatLength = 1;
    // let beatLengthLong = 2;

    // timeline.set(C.frame2, {autoAlpha: 1}, beat);
    //   beat += beatLengthLong;

    // timeline.set(C.frame3, {autoAlpha: 1}, beat);
    //   beat += beatLength;

    // timeline.set(C.frame4, {autoAlpha: 1}, beat);
    //   beat += beatLengthLong;

    // timeline.set(C.frame5, {autoAlpha: 1}, beat);
    //   beat += beatLengthLong;

    // timeline.set(C.frame6, {autoAlpha: 1}, beat);
    //   beat += beatLengthLong;


    TweenLite.defaultEase = Linear.easeNone;
  }

  render() {
    return dom
  }
}
