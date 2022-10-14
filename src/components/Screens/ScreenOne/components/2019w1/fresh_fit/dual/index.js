import React from 'react'
import { Component } from 'react'
import { DOMinator } from 'components/Common/DOMinator'
import 'gsap'
import 'gsap-then'

import './styles.css'

let R = React.createElement // Render Element

import bg1 from '../images/bg1.png'

import graphic1 from '../images/graphic1.png'
import graphic2 from '../images/graphic2.png'
import graphic3 from '../images/graphic3.png'
import graphic4 from '../images/graphic4.png'

import legal from '../images/legal.png'

import subLeft from '../images/sub_left.png'
import subLeftText from '../images/sub_left_text.png'
import subRight from '../images/sub_right.png'
import subRightText from '../images/sub_right_text.png'

// Build DOM
let domClass = 'c-FreshFit2019w1Dual'

//let sub1price6 = API.loc('ultimate_cheesy_garlic_bread_dippers_price')

let elements = {
  bg1: ['img', bg1],
  graphic1: ['img', graphic1],
  graphic2: ['img', graphic2],
  graphic3: ['img', graphic3],
  graphic4: ['img', graphic4],
  legal: ['img', legal],
  subLeft: ['img', subLeft],
  subLeftText: ['img', subLeftText],
  subRight: ['img', subRight],
  subRightText: ['img', subRightText],
}

let dominate = DOMinator.dominate(elements)
let result = dominate.result
let C = dominate.references // Children lookup

let dom = R('div', {
  className: domClass
}, result)

export default class FreshFit2019w1Dual extends Component
{

  componentDidMount() {

    let timeline = new TimelineMax()
      .set(
        [C.bg1,C.graphic1,C.subLeft,C.subLeftText,C.subRight,C.subRightText,C.legal],
        { autoAlpha: 1 }
      )
      .set(
        [C.graphic2,C.graphic3,C.graphic4],
        { autoAlpha: 0 }
      )
      .set(C.subLeft,{ height: 958, top: -7, left: "-10%" })
      .set(C.subLeftText,{ top: 203, left: 170 })
      .set(C.subRight,{ height: 969, top: -10, left: "78%" })
      .set(C.subRightText,{ top: 203, left: "79%" })



    timeline
      .to([C.subLeftText,C.subRightText,C.legal], 1,
      { autoAlpha: 0 }, 4)

      .to(C.graphic1, 1,
      { autoAlpha: 0 }, 4)
     
      .set(C.subLeft,
      { height: 1026, left: "-5%", top: 10 }, 5)
      .set(C.subRight,
      { height: 1026, left: "73%", top: 7 }, 5)

      .to([C.graphic2], 1, { autoAlpha: 1 }, 6.5)

      .to([C.graphic2], 0.3, { autoAlpha: 0 }, 9.5)
      .to([C.graphic3], 0.3, { autoAlpha: 1 }, 9.5)

      .to([C.graphic3], 0.3, { autoAlpha: 0 }, 12)
      .to([C.graphic4], 0.3, { autoAlpha: 1 }, 12)

      .to([C.graphic4], 0.5, { autoAlpha: 0 }, 14.5)
      .to([C.graphic1], 1.5, { autoAlpha: 1 }, 14.5)

      .set(C.subLeft,
      { height: 958, left: "-10%", top: -7 }, 14.5)
      .set(C.subRight,
      { height: 969, left: "78%", top: -10 }, 14.5)

      .to([C.subLeftText,C.subRightText,C.legal], 0.5, { autoAlpha: 1 }, 15.5)

    TweenLite.defaultEase = Linear.easeNone;
  }

  render() {return dom}
}
