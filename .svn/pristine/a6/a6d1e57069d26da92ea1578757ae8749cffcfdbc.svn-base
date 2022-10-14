import React from 'react'
import { Component } from 'react'
import { DOMinator } from 'components/Common/DOMinator'
import API from 'api'
import 'gsap'
import 'gsap-then'

import './styles.css'

let R = React.createElement // Render Element

import bg1 from '../images/bg1.png'
import bg2 from '../images/bg2.png'
import bg3 from '../images/bg3.png'
import bg4 from '../images/bg4.png'

import text1 from '../images/text-1.png'
import text2 from '../images/text-2.png'
import text3 from '../images/text-3.png'

import frame from '../images/frame.png'

// Build DOM
let domClass = 'c-DeviledEgg19w4Dual'

let sub1price6 = API.loc('deviled_egg_price_6in')
let sub1price12 = API.loc('deviled_egg_price_12in')
let sub2price6 = API.loc('deviled_egg_blt_price_6in')
let sub2price12 = API.loc('deviled_egg_blt_price_12in')

let elements = {

  bg1: ['img', bg1],
  text1: ['img', text1],

  bg2: ['img', bg2],
  text2: ['img', text2],

  bg3: ['img', bg3],
  text3: ['img', text3],

  bg4: ['img', bg4],

  sub1price6: ['text', `$${sub1price6}`],
  sub1price12: ['text', `$${sub1price12}`],
  sub2price6: ['text', `$${sub2price6}`],
  sub2price12: ['text', `$${sub2price12}`],

  frame: ['img', frame],
}

let dominate = DOMinator.dominate(elements)
let result = dominate.result
let C = dominate.references // Children lookup

let dom = R('div', {
  className: domClass
}, result)

export default class DeviledEgg19w4Dual extends Component
{

  componentDidMount() {

    let timeline = new TimelineMax()
      .set(C.bg1, { autoAlpha: 1 })
      .set(C.bg2, { autoAlpha: 0 })
      .set(C.bg3, { autoAlpha: 0 })
      .set(C.bg4, { autoAlpha: 0 })

      .set(C.text1, { autoAlpha: 0 })
      .set(C.text2, { autoAlpha: 0 })
      .set(C.text3, { autoAlpha: 0 })

      .set(C.sub1price6, { autoAlpha: 0 })
      .set(C.sub1price12, { autoAlpha: 0 })
      .set(C.sub2price6, { autoAlpha: 0 })
      .set(C.sub2price12, { autoAlpha: 0 })

    let time = 2;
    let timeIncrement = 3;

    timeline
      .fromTo(C.text1, 0.5,
      { autoAlpha: 0, top: "+=50" },
      { autoAlpha: 1, top: "-=50" },
      time)
    time += timeIncrement;

    timeline
      .to(C.bg2, 0.5, { autoAlpha: 1 }, time)
      .to(C.text2, 0.5, { autoAlpha: 1 }, time)
      time += timeIncrement;

    timeline
      .to(C.bg3, 0.5, { autoAlpha: 1 }, time)
      .to(C.text3, 0.5, { autoAlpha: 1 }, time)
      time += timeIncrement;

    timeline
      .to(C.bg4, 0.5, { autoAlpha: 1 }, time)
      .to(C.sub1price6, 0.5, { autoAlpha: 1 }, time)
      .to(C.sub1price12, 0.5, { autoAlpha: 1 }, time)
      .to(C.sub2price6, 0.5, { autoAlpha: 1 }, time)
      .to(C.sub2price12, 0.5, { autoAlpha: 1 }, time)

  }

  render() {return dom}
}
