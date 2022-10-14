import { Component } from 'react'
import { DOMinator } from 'components/Common/DOMinator'
import API from 'api'
import 'gsap'
import 'gsap-then'

import './styles.css'

import frame1Coke from './images/frame1-coke.png'
import frame1NoCoke from './images/frame1-no-coke.png'
import frame2Bubbler from './images/frame2-bubbler.png'
import frame2NoBubbler from './images/frame2-no-bubbler.png'
import frame3 from './images/frame3.png'
import frame4Bubbler from './images/frame4-bubbler.png'
import frame4NoBubbler from './images/frame4-no-bubbler.png'
import frame5Coke from './images/frame5-coke.png'
import frame5NoCoke from './images/frame5-no-coke.png'

import text2 from './images/text2.png'
import text4 from './images/text4.png'
import text5Bubbler from './images/text5-bubbler.png'
import text5NoBubbler from './images/text5-no-bubbler.png'

const servesCoke = API.loc('serves_coca_cola');
const isBubbler = API.loc('bubbler_drinks_promo');

let R = React.createElement // Render Element

// Build DOM
let domClass = 'c-MiniPromo'
let elements = {
  frame1: ['img', servesCoke ? frame1Coke : frame1NoCoke],
  frame2: ['img', isBubbler ? frame2Bubbler : frame2NoBubbler ],
  text2: ['img', text2],
  frame3: ['img', frame3],
  frame4: ['img', isBubbler ? frame4Bubbler : frame4NoBubbler],
  text4: ['img', text4],
  frame5: ['img', servesCoke ? frame5Coke : frame5NoCoke],
  text5: ['img', isBubbler ? text5Bubbler : text5NoBubbler]
}

let dominate = DOMinator.dominate(elements)
let result = dominate.result
let C = dominate.references // Children lookup

let dom = R('div', {
  className: domClass
}, result)

export default class MiniPromo extends Component {

	componentDidMount() {
    if (servesCoke && isBubbler) {

      // coke & bubbler
      let timeline = new TimelineMax({repeat: -1, repeatDelay: 8})
        .set([C.frame2, C.text2, C.frame3, C.frame4, C.text4, C.frame5, C.text5], {autoAlpha: 0})

        .to(C.frame1, 3, {top: "-=100"}, 0)

        .to(C.frame2, 0.5, {autoAlpha: 1}, 2.5)
        .to(C.frame2, 3, {top: "-=100", ease: Quad.easeOut}, 2.5)
        .to(C.text2, 0.5, {autoAlpha: 1}, 3.5)

        .to(C.frame3, 0.5, {autoAlpha: 1}, 6)
        .to(C.frame3, 3, {left: "-=100"}, 6)

        .to(C.frame4, 0.5, {autoAlpha: 1}, 8.5)
        .to(C.frame4, 3, {left: "-=100", ease: Quad.easeOut}, 8.5)
        .to(C.text4, 0.5, {autoAlpha: 1}, 9.5)

        .to([C.frame5, C.text5], 0.5, {autoAlpha: 1}, 12)

    } else if (servesCoke) {

      // coke & no bubbler
      let timeline = new TimelineMax({repeat: -1, repeatDelay: 8})
        .set([C.frame2, C.text2, C.frame3, C.frame4, C.text4, C.frame5, C.text5], {autoAlpha: 0})
        .set(C.frame2, {top: -100})

        .to(C.frame1, 3, {top: "-=100"}, 0)

        .to(C.frame3, 0.5, {autoAlpha: 1}, 2.5)
        .to(C.frame3, 3, {left: "-=100"}, 2.5)

        .set(C.frame2, {autoAlpha: 1}, 5)         // going out of order here, so we're fading out frame 3 instead
        .to(C.frame3, 0.5, {autoAlpha: 0}, 5)
        .to(C.frame2, 3, {top: "+=100"}, 5)

        .to(C.frame4, 0.5, {autoAlpha: 1}, 7.5)
        .to(C.frame4, 3, {top: "-=100"}, 7.5)

        .to([C.frame5, C.text5], 0.5, {autoAlpha: 1}, 10)

    } else if (isBubbler) {

      // no coke & bubbler
      let timeline = new TimelineMax({repeat: -1, repeatDelay: 8})
        .set([C.frame2, C.text2, C.frame3, C.frame4, C.text4, C.frame5, C.text5], {autoAlpha: 0})
        .set(C.frame1, {top: -100})

        .to(C.frame1, 3, {top: "+=100"}, 0)

        .to(C.frame2, 0.5, {autoAlpha: 1}, 2.5)
        .to(C.frame2, 3, {top: "-=100", ease: Quad.easeOut}, 2.5)
        .to(C.text2, 0.5, {autoAlpha: 1}, 3.5)

        .to(C.frame3, 0.5, {autoAlpha: 1}, 6)
        .to(C.frame3, 3, {left: "-=100"}, 6)

        .to(C.frame4, 0.5, {autoAlpha: 1}, 8.5)
        .to(C.frame4, 3, {left: "-=100", ease: Quad.easeOut}, 8.5)
        .to(C.text4, 0.5, {autoAlpha: 1}, 9.5)

        .to([C.frame5, C.text5], 0.5, {autoAlpha: 1}, 12)

    } else {

      // no coke & no bubbler
      let timeline = new TimelineMax({repeat: -1, repeatDelay: 8})
        .set([C.frame2, C.text2, C.frame3, C.frame4, C.text4, C.frame5, C.text5], {autoAlpha: 0})
        .set(C.frame1, {top: -100})
        .set(C.frame2, {top: -100})

        .to(C.frame1, 3, {top: "+=100"}, 0)

        .to(C.frame3, 0.5, {autoAlpha: 1}, 2.5)
        .to(C.frame3, 3, {left: "-=100"}, 2.5)

        .set(C.frame2, {autoAlpha: 1}, 5)         // going out of order here, so we're fading out frame 3 instead
        .to(C.frame3, 0.5, {autoAlpha: 0}, 5)
        .to(C.frame2, 3, {top: "+=100"}, 5)

        .to(C.frame4, 0.5, {autoAlpha: 1}, 7.5)
        .to(C.frame4, 3, {top: "-=100"}, 7.5)

        .to([C.frame5, C.text5], 0.5, {autoAlpha: 1}, 10)
    }
    TweenLite.defaultEase = Linear.easeNone;
  }

  render() {
    return dom
  }
}
