import React from 'react'
import { Component } from 'react'
import { DOMinator } from 'components/Common/DOMinator'
import API from 'api'
import 'gsap'
import 'gsap-then'

import './styles.css'

let R = React.createElement // Render Element

import bg from '../images/bg.png'
import croissants from '../images/croissants.png'
import final from '../images/final.png'
import legal from '../images/legal.png'
import text1 from '../images/text-1.png'
import text2 from '../images/text-2.png'

// Build DOM
let domClass = 'c-CrossantMinis19w2'

let elements = {
  bg: ['img', bg],
  text1: ['img', text1],
  text2: ['img', text2],
  croissants: ['img', croissants],
  final: ['img', final],
  legal: ['img', legal],
}

let dominate = DOMinator.dominate(elements)
let result = dominate.result
let C = dominate.references // Children lookup

let dom = R('div', {
  className: domClass
}, result)

export default class CrossantMinis19w2 extends Component
{

  componentDidMount() {

    let timeline = new TimelineMax();
    TweenLite.defaultEase = Linear.easeNone;

      timeline
      .set(
        [C.text1, C.text2, C.croissants],
        { autoAlpha: 0 }
      )

    // timeline
    //   .set(
    //     [C.text2, C.croissants, C.final],
    //     { left: 1280 }
    //   )
    //   .set(
    //     [C.text1],
    //     { left: 20 }
    //   )
    //   .set(C.legal,
    //     { autoAlpha: 0}
    //   )

    // timeline
    //   .to(C.croissants, 7.5,
    //   { left: "-2300", ease: Linear.easeNone}, 1)

    // timeline
    //   .to(C.text1, 0.5,
    //   { autoAlpha: 0, ease: Linear.easeNone}, 4)
      
    // timeline
    //   .to(C.text2, 9,
    //   { left: "-2300", ease: Linear.easeNone}, 5.0)

    // timeline
    //   .to(C.final, 4,
    //   { left: "0", ease: Linear.easeNone}, 9.5)

    //  timeline
    //   .to(C.legal, 1,
    //   { autoAlpha: 1, ease: Linear.easeNone}, 14)

      // .to([C.final, C.sub1Price, C.sub2Price], 0.5,
      // { autoAlpha: 1, ease: Linear.easeNone}, 13)


    
  }

  render() {return dom}
}
