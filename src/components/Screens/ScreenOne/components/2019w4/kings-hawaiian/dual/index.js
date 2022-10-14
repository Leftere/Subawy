import React from 'react'
import { Component } from 'react'
import { DOMinator } from 'components/Common/DOMinator'
import API from 'api'
import 'gsap'
import 'gsap-then'

import './styles.css'

let R = React.createElement // Render Element

import bg1 from '../images/bg1.png'
import text1 from '../images/text-1.png'
import bg2 from '../images/bg2.png'

// Build DOM
let domClass = 'c-KingsHawaiianDual_2019w4'

let sub1price6 = API.loc('kh_ham_swiss')
let sub2price6 = API.loc('kh_turkey_provolone')

let elements = {
  bg1: ['img', bg1],
  text1: ['img', text1],
  bg2: ['img', bg2],

  sub1Price6: ['text', `$${sub1price6}`],
  sub2Price6: ['text', `$${sub2price6}`],
}

let dominate = DOMinator.dominate(elements)
let result = dominate.result
let C = dominate.references // Children lookup

let dom = R('div', {
  className: domClass
}, result)

export default class KingsHawaiianDual_2019w4 extends Component
{

  componentDidMount() {

    let timeline = new TimelineMax()
      .set(C.bg1, { autoAlpha: 1 })
      .set(C.text1, { autoAlpha: 1 })
      .set(C.bg2, { autoAlpha: 0 })
      .set(C.sub1Price6, { autoAlpha: 0 })
      .set(C.sub2Price6, { autoAlpha: 0 })


    timeline
      .to(C.text1, 1, { autoAlpha: 0 }, 5)

    timeline
      .to(C.bg2, 0.5, { autoAlpha: 1 }, 7.5)
      .to(C.sub1Price6, 0.5, { autoAlpha: 1 }, 7.5)
      .to(C.sub2Price6, 0.5, { autoAlpha: 1 }, 7.5)


    // TweenLite.defaultEase = Linear.easeNone;
  }

  render() {return dom}
}
