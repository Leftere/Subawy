import React from 'react'
import { Component } from 'react'
import neocastDataProvider from 'api/neocastDataProvider'
import { DOMinator } from 'components/Common/DOMinator'
import API from 'api'
import 'gsap'
import 'gsap-then'

import './styles.css'

let R = React.createElement // Render Element

import sub from '../images/sub.png'
import sub_text_1 from '../images/sub_text_1.png'
import sub_text_2 from '../images/sub_text_2.png'

import frame1 from '../images/frame1.png'
import frame2 from '../images/frame2.png'
import frame3 from '../images/frame3.png'
import frameblank from '../images/frame_blank.png'


// Build DOM
let domClass = 'c-thai_chicken'

let sub1price6 = API.loc('thai_chicken_sub_price_6in')
let sub1price12 = API.loc('thai_chicken_sub_price_12in')

let elements = {

  sub: ['img', sub],
  frame_blank: ['img', frameblank],

  sub_text_1: ['img', sub_text_1],
  sub_text_2: ['img', sub_text_2],

  frame1: ['img', frame1],

  sub1_price_6: ['text', `$${sub1price6}`],
  sub1_price_12: ['text', `$${sub1price12}`],

  frame2: ['img', frame2],
  frame3: ['img', frame3],
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
export default class W7ThaiChicken extends Component
{

  componentDidMount() {

    let timeline = new TimelineMax()
      .set([C.sub,C.frame_blank,C.frame1,C.sub1_price_6,C.sub1_price_12], { autoAlpha: 1 })

      .set(
        [C.sub_text_1,C.sub_text_2,C.frame2,C.frame3],
        { autoAlpha: 0 }
      )


    timeline
      .to([C.frame1,C.sub1_price_6,C.sub1_price_12], 0.5, { autoAlpha: 0 }, 3)
      .to([C.frame2], 0.5, { autoAlpha: 1 }, 3)
      .to([C.sub, C.sub_text_1,C.sub_text_2], 8, { left: -1500 }, 3)

      .to([C.frame3], 0.5, { autoAlpha: 1 }, 5)
      .to([C.sub_text_1], 0.5, { autoAlpha: 1 }, 5)
      .to([C.frame2], 0.5, { autoAlpha: 0 }, 6)
      .to([C.sub_text_2], 0.5, { autoAlpha: 1 }, 9)

      .to([C.frame1,C.sub1_price_6,C.sub1_price_12], 0.5, { autoAlpha: 1}, 13)
      .to([C.frame3], 0.5, { autoAlpha: 0}, 13)



    TweenLite.defaultEase = Linear.easeNone;
  }

  render() {return dom}
}
