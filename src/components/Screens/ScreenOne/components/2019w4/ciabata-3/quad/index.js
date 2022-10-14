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
import bg2 from '../images/frame-1.png'
import bg3 from '../images/frame-2.png'
import bg4 from '../images/frame-3.png'
import bg5 from '../images/frame-4.png'

import text2 from '../images/text-1.png'
import text3 from '../images/text-2.png'
import text4 from '../images/text-3.png'
import text5 from '../images/text-4.png'

import frameWrap from '../images/frame.png'

// Build DOM
let domClass = 'c-CiabataThreePromoQuad'

let sub1price6 = API.loc('garlic_ciabatta_price')
let sub2price6 = API.loc('chicken_ciabatta_price')
let sub3price6 = API.loc('italian_ciabatta_price')

let elements = {
  bg1: ['img', bg1],
  sub_1: ['text', `$${sub1price6}`],
  sub_2: ['text', `$${sub2price6}`],
  sub_3: ['text', `$${sub3price6}`],

  bg2: ['bg', bg2],
  text2: ['img', text2],

  bg3: ['bg', bg3],
  text3: ['img', text3],

  bg4: ['bg', bg4],
  text4: ['img', text4],

  bg5: ['bg', bg5],
  text5: ['img', text5],

  frameWrap: ['img', frameWrap]
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
export default class CiabataThreePromoQuad extends Component
{

  componentDidMount() {

    let timeline = new TimelineMax()
      .set(C.bg1, { autoAlpha: 1 })
      .set(C.bg2, { autoAlpha: 0 })
      .set(C.bg3, { autoAlpha: 0, left: "-=50px" })
      .set(C.bg4, { autoAlpha: 0 })
      .set(C.bg5, { autoAlpha: 0 })
      .set(C.text2, { autoAlpha: 0 })
      .set(C.text3, { autoAlpha: 0 })
      .set(C.text4, { autoAlpha: 0 })
      .set(C.text5, { autoAlpha: 0 });

      // .set(this.frame2, { autoAlpha: 0 })

      let time = 4;
      let timeIncrement = 3;

    timeline
      .to(C.bg2, 0.5, { autoAlpha: 1 }, time)
      .to(C.text2, 0.5, { autoAlpha: 1 }, time)
      .to(C.bg2, 3.0, { left: "-=50px"}, time)
      time += timeIncrement;

    timeline
      .to(C.bg3, 0.5, { autoAlpha: 1 }, time)
      .to(C.text3, 0.5, { autoAlpha: 1 }, time)
      .to(C.bg3, 3.0, { left: "+=50px"}, time)
      time += timeIncrement;

    timeline
      .to(C.bg4, 0.5, { autoAlpha: 1 }, time)
      .to(C.text4, 0.5, { autoAlpha: 1 }, time)
      .to(C.bg4, 3.0, { left: "-=50px"}, time)
      time += timeIncrement;

    // timeline
    //   .to(C.bg5, 0.5, { autoAlpha: 1 }, time)
    //   .to(C.text5, 0.5, { autoAlpha: 1 }, time)
    //   .to(C.bg5, 3.0, { left: "-=50px"}, time)
    //   time += timeIncrement;

     timeline.set(
       [C.bg2,C.bg3,C.text2,C.text3]
     , { autoAlpha: 0 }, time - 1)

     timeline
      .to(C.text4, 0.5, { autoAlpha: 0 }, time)
      .to(C.bg4, 0.5, { autoAlpha: 0 }, time)
      time += timeIncrement;


    TweenLite.defaultEase = Linear.easeNone;
  }

  render() {return dom}
}
