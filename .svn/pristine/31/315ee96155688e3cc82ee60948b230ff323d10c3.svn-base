import React from 'react'
import { Component } from 'react'
import { DOMinator } from 'components/Common/DOMinator'
import API from 'api'
import 'gsap'
import 'gsap-then'

import './styles.css'

let R = React.createElement // Render Element

import bg1 from '../images/bg1.png'
import bg2 from '../images/bg2.png'
import final from '../images/tuna-final.png'
import text from '../images/text-1.png'

// Build DOM
let domClass = 'c-TunaSouthwest19w2d'

let sub1price6 = API.loc('southwest_tuna_price_6in')
let sub1price12 = API.loc('southwest_tuna_price_footlong')
let sub2price6 = API.loc('tuna_blt_price_6in')
let sub2price12 = API.loc('tuna_blt_price_footlong')

let elements = {
  bg1: ['img', bg1],
  bg2: ['img', bg2],
  final: ['img', final],
  sub1Price: ['text', `$${sub1price6}           $${sub1price12}`],
  sub2Price: ['text', `$${sub2price6}           $${sub2price12}`],
}

let dominate = DOMinator.dominate(elements)
let result = dominate.result
let C = dominate.references // Children lookup

let dom = R('div', {
  className: domClass
}, result)

export default class TunaSouthwest19w2 extends Component
{

  componentDidMount() {

    let timeline = new TimelineMax();
    TweenLite.defaultEase = Linear.easeNone;

    timeline
      .set(
        [C.bg2, C.final, C.sub1Price, C.sub2Price],
        { autoAlpha: 0 }
      )
      .set(C.bg1,
        { autoAlpha: 1, left: 0 }
      )

    timeline
      .to(C.bg2, 0.5,{ autoAlpha: "1"}, 2)


      .to([C.final, C.sub1Price, C.sub2Price], 0.5,
      { autoAlpha: 1, ease: Linear.easeNone}, 5)

    // let timeline = new TimelineMax();
    // TweenLite.defaultEase = Linear.easeNone;

    // timeline
    //   .set(
    //     [C.final, C.sub1Price, C.sub2Price],
    //     { autoAlpha: 0 }
    //   )
    //   .set(C.bg,
    //     { autoAlpha: 1, left: 0 }
    //   )

    // timeline
    //   .set(C.bg, { left: "-=1120", ease: Linear.easeNone}, 3)


    //   .to([C.final, C.sub1Price, C.sub2Price], 0.5,
    //   { autoAlpha: 1, ease: Linear.easeNone}, 6)



  }

  render() {return dom}
}
