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
import bg4 from '../images/bg4.png'
import bg5 from '../images/bg5.png'

import text1 from '../images/text1.png'
import text2 from '../images/text2.png'
import text3 from '../images/text3.png'
import text4a from '../images/text4a.png'
import text4b from '../images/text4b.png'
import text5a from '../images/text5a.png'
import text5b from '../images/text5b.png'

// Build DOM
let domClass = 'c-PitSmokedBrisketQuad'

let sub1price6 = API.loc('pit_smoked_brisket_price_6in')
let sub1price12 = API.loc('pit_smoked_brisket_price_12in')

let elements = {
  bg1: ['img', bg1],
  text1: ['img', text1],

  bg2: ['img', bg2],
  text2: ['img', text2],
  text3: ['img', text3],

  bg4: ['img', bg4],
  text4a: ['img', text4a],
  text4b: ['img', text4b],

  bg5: ['img', bg5],
  text5a: ['img', text5a],
  text5b: ['img', text5b],

  sub1Price6: ['text', `$${sub1price6}`],
  sub1Price12: ['text', `$${sub1price12}`],
}

let dominate = DOMinator.dominate(elements)
let result = dominate.result
let C = dominate.references // Children lookup

let dom = R('div', {
  className: domClass
}, result)

@neocastDataProvider([
  'pit_smoked_brisket_price_6in',
  'pit_smoked_brisket_price_12in',
])
export default class PitSmokedBrisketQuad extends Component
{

  componentDidMount() {

    let timeline = new TimelineMax()
      .set(
        [ C.bg2,C.bg4,C.bg5,
          C.text2,C.text3,C.text4a,
          C.text4b,C.text5a,C.text5b,
          C.sub1Price6,C.sub1Price12 ],
        { autoAlpha: 0 }
      )

      .set(C.bg1,
        { top: 0 }
      )

      .set(C.bg2,
        { top: 0 }
      )

      .set(C.bg4,
        { top: 0 }
      )

    timeline

      .to([C.bg2, C.text2], 0.5,
      { autoAlpha: 1 }, 2.5)

      .to([C.text2], 0.5,
      { autoAlpha: 0 }, 4.5)

      .to([C.text3], 0.5,
      { autoAlpha: 1 }, 5)

      .to([C.bg4], 0.5,
      { autoAlpha: 1 }, 8)

      .to([C.text4a], 0.5,
      { autoAlpha: 1 }, 9)

      .to([C.text4b], 0.5,
      { autoAlpha: 1 }, 10)

      .to([C.bg5], 0.5,
      { autoAlpha: 1 }, 12)

      .to([C.text5a], 0.5,
      { autoAlpha: 1 }, 12.2)

      .to([C.text5b,C.sub1Price6,C.sub1Price12], 0.5,
      { autoAlpha: 1 }, 13.5)

    TweenLite.defaultEase = Linear.easeNone;
  }

  render() {return dom}
}
