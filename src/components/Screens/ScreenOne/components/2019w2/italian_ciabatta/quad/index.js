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
import sub_text_3 from '../images/sub_text_3.png'

import frame1 from '../images/frame_1.png'
import frame2 from '../images/frame_2.png'
import frame3 from '../images/frame_3.png'
import frame4 from '../images/frame_4.png'
import frameblank from '../images/frame_blank.png'


// Build DOM
let domClass = 'c-italian_ciabatta'

let mozz6 = API.loc('fresh_mozz_price_6in')
let mozz12 = API.loc('fresh_mozz_price_12in')
let sub1pricebase = API.loc('italian_ciabatta_price')

let elements = {

  sub: ['img', sub],
  frame_blank: ['img', frameblank],

  sub_text_1: ['img', sub_text_1],
  sub_text_2: ['img', sub_text_2],
  sub_text_3: ['img', sub_text_3],

  frame1: ['img', frame1],

  sub1_price_6: ['text', `$${mozz6}`],
  sub1_price_12: ['text', `$${mozz12}`],
  sub1_price_base: ['text', `$${sub1pricebase}`],

  frame2: ['img', frame2],
  frame3: ['img', frame3],
  frame4: ['img', frame4],
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
      .set([C.sub,C.frame_blank,C.frame1,C.sub1_price_6,C.sub1_price_12,C.sub1_price_base], { autoAlpha: 1 })

      .set(
        [C.sub_text_1,C.sub_text_2,C.sub_text_3,C.frame2,C.frame3,C.frame4],
        { autoAlpha: 0 }
      )


    timeline
      .to([C.frame1,C.sub1_price_6,C.sub1_price_12,C.sub1_price_base], 0.5, { autoAlpha: 0 }, 3)
      .to([C.frame2], 0.5, { autoAlpha: 1 }, 3)
      .to([C.sub, C.sub_text_1,C.sub_text_2,C.sub_text_3], 9, { left: -1100 }, 3)

      .to([C.sub_text_1], 0.5, { autoAlpha: 1 }, 3.5)
      .to([C.sub_text_1], 0.5, { autoAlpha: 0 }, 5.5)

      .to([C.sub_text_2], 0.5, { autoAlpha: 1 }, 6.5)
      .to([C.sub_text_2], 0.5, { autoAlpha: 0 }, 9)


      .to([C.sub_text_3], 0.5, { autoAlpha: 1 }, 10.5)


      .to([C.frame1,C.sub1_price_6,C.sub1_price_12,C.sub1_price_base], 0.5, { autoAlpha: 1}, 14)



    TweenLite.defaultEase = Linear.easeNone;
  }

  render() {return dom}
}
