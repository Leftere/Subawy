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
let domClass = 'c-CrossantMinis19w2d'

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


    // let timeline = new TimelineMax();
    // TweenLite.defaultEase = Linear.easeNone;

    // timeline
    //   .set(
    //     [C.text2, C.croissants],
    //     { left: 1280 }
    //   )
    //   .set(
    //     [C.text1],
    //     { left: 20 }
    //   )
    //   .set([C.legal, C.final],
    //     { autoAlpha: 0}
    //   )

    // timeline
    //   .set(C.croissants,
    //   { left: "-=500", }, 1.5)
    //   .set(C.croissants,
    //   { left: "-=500", }, 2.5)
    //   .set(C.croissants,
    //   { left: "-=500", }, 3.5)
    //   .set(C.croissants,
    //   { left: "-=500", }, 4.5)
    //   .set(C.croissants,
    //   { left: "-=500", }, 5.5)
    //   .set(C.croissants,
    //   { left: "-=500", }, 6.5)
    //   .set(C.croissants,
    //   { left: "-=500", }, 7.5)

    // timeline
    //   .set(C.text1,
    //   { autoAlpha: 0}, 4)


    //   .set(C.text2,
    //     { left: "-=500"}, 6.5)
    //   .set(C.text2,
    //     { left: "-=500"}, 7.5)
    //   .set(C.text2,
    //     { left: "-=500"}, 8.5)
    //   .set(C.text2,
    //     { left: "-=500"}, 9.5)
    //   .set(C.text2,
    //     { left: "-=500"}, 10.5)
    //     .set(C.text2,
    //     { left: "-=500"}, 11.5)


    // timeline
    //   .to(C.final, 0.5,
    //   { autoAlpha: 1, ease: Linear.easeNone}, 12)

    //  timeline
    //   .to(C.legal, 0.5,
    //   { autoAlpha: 1, ease: Linear.easeNone}, 12)

    
  }

  render() {return dom}
}
