import React from 'react'
import { Component } from 'react'
import neocastDataProvider from 'api/neocastDataProvider'
import { DOMinator } from 'components/Common/DOMinator'
import API from 'api'
import 'gsap'
import 'gsap-then'

import './styles.css'

let R = React.createElement // Render Element

import arrow2 from '../images/arrow-2.png'
import arrow3 from '../images/arrow-3.png'
import coin1 from '../images/coin-1.png'
import coin2 from '../images/coin-2.png'
import end from '../images/end.png'
import phone from '../images/phone.png'
import text1 from '../images/text-1.png'
import text2 from '../images/text-2.png'
import text3 from '../images/text-3.png'


// Build DOM
let domClass = 'c-MyWayRewardDual'
let elements = {

  text1: ['img', text1],
  text2: ['img', text2],
  text3: ['img', text3],

  phone: ['img', phone],

  coin2: ['img', coin2],
  coin1: ['img', coin1],

  arrow2: ['img', arrow2],
  arrow3: ['img', arrow3],

  end: ['img', end],
}

let dominate = DOMinator.dominate(elements)
let result = dominate.result
let C = dominate.references // Children lookup

let dom = R('div', {
  className: domClass
}, result)

export default class MyWayReward extends Component
{
  componentDidMount() {

      let timeline = new TimelineMax()

        .set([
          C.text2, C.text3,C.arrow2, C.arrow3, C.end
          ], {autoAlpha: 0})    // unused in this version

        .set(C.text1, {top: 0, left: 0})
        .set(C.phone, {top: 0, left: 0})
        .set(C.coin2, {top: 500, left: 0})
        .set(C.coin1, {top: 200, left: 0})

        .to(C.coin1, 1, {autoAlpha: 0}, 2.5)
        .to(C.coin2, 1, {autoAlpha: 0}, 2.5)

        .to(C.text1, 1, {autoAlpha: 0}, 3)

        .set(C.phone, {top: "-=400", left: "+=300"}, 4)

        .to(C.text2, 0.5, {autoAlpha: 1}, 5)
        .to(C.arrow2, 0.5, {autoAlpha: 1}, 6)

        .to(C.text2, 0.5, {autoAlpha: 0}, 7.5)
        .to(C.arrow2, 0.5, {autoAlpha: 0}, 7.5)

        .to(C.text3, 0.5, {autoAlpha: 1}, 8)
        .to(C.arrow3, 0.5, {autoAlpha: 1}, 9)

        .to(C.text3, 0.5, {autoAlpha: 0}, 10.5)
        .to(C.arrow3, 0.5, {autoAlpha: 0}, 10.5)

        .set(C.phone, {top: "+=328", left: "-=67"}, 11.5)

        .to(C.end, 0.5, {autoAlpha: 1}, 12.5)

    TweenLite.defaultEase = Quad.easeOut;
  }

  render() {return dom}
}
