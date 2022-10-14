import React from 'react'
import { Component } from 'react'
import { DOMinator } from 'components/Common/DOMinator'
import API from 'api'
import 'gsap'
import 'gsap-then'

import './styles.css'

let R = React.createElement // Render Element

import bg1 from '../images/bg1.png'

import frame1 from '../images/frame1.png'
import frame1bg from '../images/frame1bg.png'
import frame1text1 from '../images/frame1text1.png'
import frame1text2 from '../images/frame1text2.png'
import frame1text3 from '../images/frame1text3.png'
import frame1text4 from '../images/frame1text4.png'

import frame2 from '../images/frame2.png'
import frame2bg from '../images/frame2bg.png'
import frame2text1 from '../images/frame2text1.png'
import frame2text2 from '../images/frame2text2.png'
import frame2text3 from '../images/frame2text3.png'
import frame2text4 from '../images/frame2text4.png'

// Build DOM
let domClass = 'c-CrispyChicken2019w1'

let sub1price6 = API.loc('chicken_parmesan_price_6in')
let sub1price12 = API.loc('chicken_parmesan_price_12in')
let wrapPrice = API.loc('homestyle_crispy_chicken_wrap_price')

let elements = {
  bg1: ['img', bg1],
  sub1Price6: ['text', `$${sub1price6}`],
  sub1Price12: ['text', `$${sub1price12}`],
  wrapPrice: ['text', `$${wrapPrice}`],

  frame1bg: ['img', frame1bg],
  frame1text1: ['img', frame1text1],
  frame1text2: ['img', frame1text2],
  frame1text3: ['img', frame1text3],
  frame1text4: ['img', frame1text4],

  frame2bg: ['img', frame2bg],
  frame2text1: ['img', frame2text1],
  frame2text2: ['img', frame2text2],
  frame2text3: ['img', frame2text3],
  frame2text4: ['img', frame2text4],

  frame1: ['img', frame1],
  frame2: ['img', frame2],
}

let dominate = DOMinator.dominate(elements)
let result = dominate.result
let C = dominate.references // Children lookup

let dom = R('div', {
  className: domClass
}, result)

export default class CrispyChicken2019w1 extends Component
{

  componentDidMount() {

    let timeline = new TimelineMax()
      .set([C.bg1, C.sub1Price6, C.sub1price12, C.wrapPrice], { autoAlpha: 1 })
      .set([
        C.frame1, C.frame1bg, C.frame1text1, C.frame1text2, C.frame1text3, C.frame1text4,
        C.frame2, C.frame2bg, C.frame2text1, C.frame2text2, C.frame2text3, C.frame2text4,
      ], { autoAlpha: 0 })

      .to([C.frame1, C.frame1bg, C.frame1text1], 0.5, { autoAlpha: 1 }, 3)

      .to([C.frame1bg, C.frame1text1, C.frame1text2, C.frame1text3, C.frame1text4], 5, { left: -410 }, 2.6)

      .to(C.frame1text2, 0.5, { autoAlpha: 1 }, 4)
      .to(C.frame1text4, 0.5, { autoAlpha: 1 }, 6.2)
      .to(C.frame1text3, 0.5, { autoAlpha: 1 }, 7.2)

      .to([C.frame2, C.frame2bg, C.frame2text1], 0.5, { autoAlpha: 1 }, 10)

      .to([C.frame2bg, C.frame2text1, C.frame2text2, C.frame2text3, C.frame2text4], 7, { left: -700 }, 10)

      .to(C.frame2text2, 0.5, { autoAlpha: 1 }, 11)
      .to(C.frame2text3, 0.5, { autoAlpha: 1 }, 13)
      .to(C.frame2text4, 0.5, { autoAlpha: 1 }, 15)

      .set([C.frame1, C.frame1bg, C.frame1text1, C.frame1text2, C.frame1text3, C.frame1text4], { autoAlpha: 0 }, 12)

      .to([C.frame2, C.frame2bg, C.frame2text1, C.frame2text2, C.frame2text3, C.frame2text4], 0.5, { autoAlpha: 0 }, 19)

    TweenLite.defaultEase = Linear.easeNone;
  }

  render() {return dom}
}
