import React from 'react'
import { Component } from 'react'
import neocastDataProvider from 'api/neocastDataProvider'
import { DOMinator } from 'components/Common/DOMinator'
import API from 'api'
import 'gsap'
import 'gsap-then'

import './styles.css'

let R = React.createElement // Render Element

import bg1 from '../images/bg1.png'
import bg2 from '../images/bg2.png'

import dip1 from '../images/dip1.png'
import dip2 from '../images/dip2.png'
import dip3 from '../images/dip3.png'

import text3 from '../images/text3.png'
import text4 from '../images/text4.png'

// Build DOM
let domClass = 'c-uc_bread_dippers'

let sub1price6 = API.loc('ultimate_cheesy_garlic_bread_dippers_price')

let elements = {
  bg1: ['img', bg1],
  sub_1: ['text', `$${sub1price6}`],

  bg2: ['img', bg2],
  text3: ['img', text3],
  text4: ['img', text4],

  dip1: ['img', dip1],
  dip2: ['img', dip2],
  dip3: ['img', dip3],
}

let dominate = DOMinator.dominate(elements)
let result = dominate.result
let C = dominate.references // Children lookup

let dom = R('div', {
  className: domClass
}, result)

@neocastDataProvider([
  'steak_and_cheese_price_6in',
])
export default class UCGarlic_Bread extends Component
{

  componentDidMount() {

    let timeline = new TimelineMax()
      .set([C.bg1,C.sub_1,C.dip1,C.dip2,C.dip3], { autoAlpha: 1 })
      .set(
        [C.bg2,C.text3,C.text4],
        { autoAlpha: 0 }
      )

      .set(
        [C.dip1,C.dip2,C.dip3],
        { top: -600, left: -70 }
      )

    timeline
      .to(C.bg2, 0.5, { autoAlpha: 1 }, 3)
      .to(C.dip1, 1.5, { top: 630 }, 4)
      .to(C.text3, 0.5, { autoAlpha: 1 }, 4.8)

      .to(C.dip2, 1.5, { top: 330 }, 6)
      .to(C.text4, 0.5, { autoAlpha: 1 }, 6.8)

      .to(C.dip3, 1.0, { top: -150 }, 8)

      .set([C.bg2,C.text3,C.text4], { autoAlpha: 0 }, 9)

      .to(C.dip1, 1.5, { left: -2620 }, 10)
      .to(C.dip2, 1.5, { left: 2620 }, 10)
      .to(C.dip3, 1.5, { left: -2620 }, 10)

    // timeline
    //   .to(C.bg2, 0.5, { autoAlpha: 1 }, time)
    //   .to(C.text2, 0.5, { autoAlpha: 1 }, time)
    //   .to(C.bg2, 3.0, { left: "-=50px"}, time)
    //   time += timeIncrement;


    //  timeline.set(
    //    [C.bg2,C.bg3,C.bg4,C.bg5,C.text2,C.text3,C.text4,C.text5]
    //  , { autoAlpha: 0 }, time - 1)

    //  timeline
    //   .to(C.bg6, 0.5, { autoAlpha: 0 }, time)
    //   .to(C.text6, 0.5, { autoAlpha: 0 }, time)

    TweenLite.defaultEase = Linear.easeNone;
  }

  render() {return dom}
}
