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

// Build DOM
let domClass = 'c-ComponentNameDual'

let sub1price6 = API.loc('ultimate_cheesy_garlic_bread_dippers_price')

let elements = {
  bg1: ['img', bg1],
  sub1Price6: ['text', `$${sub1price6}`],
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
export default class PitSmokedBrisketDual extends Component
{

  componentDidMount() {

    let timeline = new TimelineMax()
      .set(
        [C.bg1,C.sub1Price6],
        { autoAlpha: 1 }
      )
      .set(C.sub1Price6,
        { top: 100, left: 100 }
      )

    timeline
      .to(C.sub1Price6, 3,
      { top: "+=100", left: "+=100" }, 1)


    TweenLite.defaultEase = Linear.easeNone;
  }

  render() {return dom}
}
