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
import bg3 from '../images/bg3.png'
import bg4 from '../images/bg4.png'
import bg5 from '../images/bg5.png'
import bg6 from '../images/bg6.png'
import bg7 from '../images/bg7.png'
import bg8 from '../images/bg8.png'
import bg9 from '../images/bg9.png'
import bg10 from '../images/bg10.png'

import text2 from '../images/text-1.png'
import text3 from '../images/text-2.png'
import text4 from '../images/text-3.png'
import text5 from '../images/text-4.png'

import frameWrap from '../images/frame.png'

// Build DOM
let domClass = 'c-CiabataFourPromoDualStop'

let sub1price6 = API.loc('garlic_ciabatta_price')
let sub2price6 = API.loc('chicken_ciabatta_price')
let sub3price6 = API.loc('caprese_ciabatta_price')
let sub4price6 = API.loc('italian_ciabatta_price')

let elements = {
  bg1: ['img', bg1],
  sub_1: ['text', `$${sub1price6}`],
  sub_2: ['text', `$${sub2price6}`],
  sub_3: ['text', `$${sub3price6}`],
  sub_4: ['text', `$${sub4price6}`],

  bg2: ['bg', bg2],
  bg3: ['bg', bg3],
  bg4: ['bg', bg4],
  bg5: ['bg', bg5],
  bg6: ['bg', bg6],
  bg7: ['bg', bg7],
  bg8: ['bg', bg8],
  bg9: ['bg', bg9],
  bg10: ['bg', bg10],

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
export default class CiabataFourPromoDualStop extends Component
{

  componentDidMount() {

    let timeline = new TimelineMax()
      .set(C.bg1, { autoAlpha: 1 })
      .set(C.bg2, { autoAlpha: 0 })
      .set(C.bg3, { autoAlpha: 0 })
      .set(C.bg4, { autoAlpha: 0 })
      .set(C.bg5, { autoAlpha: 0 })
      .set(C.bg6, { autoAlpha: 0 })
      .set(C.bg7, { autoAlpha: 0 })
      .set(C.bg8, { autoAlpha: 0 })
      .set(C.bg9, { autoAlpha: 0 })
      .set(C.bg10, { autoAlpha: 0 })

      // .set(this.frame2, { autoAlpha: 0 })

      let time = 4;
      let timeIncrement = 3;
      let timeShort = 1;
      let timeShorter = 0.5;

    timeline
      .set(C.bg2, { autoAlpha: 1 }, time)
      time += timeShort;

    timeline
      .set(C.bg3, { autoAlpha: 1 }, time)
      time += timeShort;

    timeline
      .set(C.bg4, { autoAlpha: 1 }, time)
      time += timeShort;

    timeline
      .set(C.bg5, { autoAlpha: 1 }, time)
      time += timeShort;

    timeline
      .set(C.bg6, { autoAlpha: 1 }, time)
      time += timeShorter;

    timeline
      .set(C.bg7, { autoAlpha: 1 }, time)
      time += timeShorter;

    timeline
      .set(C.bg8, { autoAlpha: 1 }, time)
      time += timeShorter;

    timeline
      .set(C.bg9, { autoAlpha: 1 }, time)
      time += timeShorter;

    timeline
      .set(C.bg10, { autoAlpha: 1 }, time)
      time += 2;

    // timeline
    //   .to(C.bg3, 0.5, { autoAlpha: 1 }, time)
    //   .to(C.text3, 0.5, { autoAlpha: 1 }, time)
    //   .to(C.bg3, 3.0, { left: "+=50px"}, time)
    //   time += timeIncrement;

    // timeline
    //   .to(C.bg4, 0.5, { autoAlpha: 1 }, time)
    //   .to(C.text4, 0.5, { autoAlpha: 1 }, time)
    //   .to(C.bg4, 3.0, { left: "-=50px"}, time)
    //   time += timeIncrement;

    // timeline
    //   .to(C.bg5, 0.5, { autoAlpha: 1 }, time)
    //   .to(C.text5, 0.5, { autoAlpha: 1 }, time)
    //   .to(C.bg5, 3.0, { left: "-=50px"}, time)
    //   time += timeIncrement;

     timeline.set(
       [C.bg2,C.bg3,C.bg4,C.bg5,C.bg6,C.bg7,C.bg8,C.bg9]
     , { autoAlpha: 0 }, time - 1)

     timeline
      .to(C.bg10, 0.5, { autoAlpha: 0 }, time)
      time += timeIncrement;


    TweenLite.defaultEase = Linear.easeNone;
  }

  render() {return dom}
}
