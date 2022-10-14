import React from 'react'
import { Component } from 'react'
import neocastDataProvider from 'api/neocastDataProvider'
import { DOMinator } from 'components/Common/DOMinator'
import API from 'api'
import 'gsap'
import 'gsap-then'

import './styles.css'

let R = React.createElement // Render Element

import bg from '../images/bg.png'
import frame1 from '../images/frame-1.png'
import frame2 from '../images/frame-2.png'
import frame3 from '../images/frame-3.png'
import frame4 from '../images/frame-4.png'
import text1 from '../images/text-1.png'
import text2 from '../images/text-2.png'
import text3 from '../images/text-3.png'
import text4 from '../images/text-4.png'

// Build DOM
let domClass = 'c-UCGB2'

let sub1price6 = API.loc('ultimate_meatball_marinara_6in')
let sub1price12 = API.loc('ultimate_meatball_marinara_12in')
let sub2price6 = API.loc('ultimate_turkey_italiano_price_6in')
let sub2price12 = API.loc('ultimate_turkey_italiano_price_footlong')
let sub3price6 = API.loc('ultimate_steak_price_6in')
let sub3price12 = API.loc('ultimate_steak_price_footlong')


let elements = {
  bg: ['img', bg],
  sub1Price6: ['text', `$${sub1price6}`],
  sub1Price12: ['text', `$${sub1price12}`],
  sub2Price6: ['text', `$${sub2price6}`],
  sub2Price12: ['text', `$${sub2price12}`],
  sub3Price6: ['text', `$${sub3price6}`],
  sub3Price12: ['text', `$${sub3price12}`],
  frame1: ['img', frame1],
  text1: ['img', text1],
  frame2: ['img', frame2],
  text2: ['img', text2],
  frame3: ['img', frame3],
  text3: ['img', text3],
  frame4: ['img', frame4],
  text4: ['img', text4],
}

let dominate = DOMinator.dominate(elements)
let result = dominate.result
let C = dominate.references // Children lookup

let dom = R('div', {
  className: domClass
}, result)

export default class UCGB2Quad extends Component
{

  componentDidMount() {

    let timeline = new TimelineMax()
      
      .set(
        [C.text1,
         C.frame2, C.text2,
         C.frame3, C.text3,
         C.frame4, C.text4,
         C.sub1Price6, C.sub1Price12,
         C.sub2Price6, C.sub2Price12,
         C.sub3Price6, C.sub3Price12],
        { autoAlpha: 0 }
      )
      .set(
        [C.bg, C.frame1], 
        { autoAlpha: 1 }
      )


    timeline
      .to([C.frame1], 4, {left: "-=100", ease: Linear.easeNone}, 0)
      .to([C.text1], 0.5, {autoAlpha: 1}, 1.5)

      .set([C.frame2], {autoAlpha: 1}, 4)
      .to([C.frame2], 3, {left: "-=100", ease: Linear.easeNone}, 4)
      .to([C.text2], 0.5, {autoAlpha: 1}, 4)

      .set([C.frame3], {autoAlpha: 1}, 7)
      .to([C.frame3], 3, {left: "-=100", ease: Linear.easeNone}, 7)
      .to([C.text3], 0.5, {autoAlpha: 1}, 7)

      .set([C.frame4], {autoAlpha: 1}, 10)
      .to([C.frame4], 3, {left: "-=100", ease: Linear.easeNone}, 10)
      .to([C.text4], 0.5, {autoAlpha: 1}, 10)

      .set(
        [C.frame1, C.text1,
         C.frame2, C.text2,
         C.frame3, C.text3,
         C.frame4, C.text4,],
        { autoAlpha: 0 }, 13
      )

      .set(
        [C.bg,
         C.sub1Price6, C.sub1Price12,
         C.sub2Price6, C.sub2Price12,
         C.sub3Price6, C.sub3Price12],
        { autoAlpha: 1 }, 13
      )


    TweenLite.defaultEase = Linear.easeNone;
  }

  render() {return dom}
}
