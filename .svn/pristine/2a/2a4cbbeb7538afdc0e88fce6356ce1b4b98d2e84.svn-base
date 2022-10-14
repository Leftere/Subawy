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
import frame from '../images/frame.png'
import text1 from '../images/text-1.png'
import text2 from '../images/text-2.png'
import text3 from '../images/text-3.png'

// Build DOM
let domClass = 'c-ClubCollectionDual'

let sub1price6 = API.loc('sw_chicken_club_price_6in')
let sub1price12 = API.loc('sw_chicken_club_price_footlong')
let sub2price6 = API.loc('american_club_price_6in')
let sub2price12 = API.loc('american_club_price_footlong')
let sub3price6 = API.loc('steak_club_price_6in')
let sub3price12 = API.loc('steak_club_price_footlong')

let elements = {
  bg1: ['img', bg1],
  sub1Price6: ['text', `$${sub1price6}`],
  sub1Price12: ['text', `$${sub1price12}`],
  sub2Price6: ['text', `$${sub2price6}`],
  sub2Price12: ['text', `$${sub2price12}`],
  sub3Price6: ['text', `$${sub3price6}`],
  sub3Price12: ['text', `$${sub3price12}`],
  bg2: ['img', bg2],
  text1: ['img', text1],
  text2: ['img', text2],
  text3: ['img', text3],
  frame: ['img', frame],
}

let dominate = DOMinator.dominate(elements)
let result = dominate.result
let C = dominate.references // Children lookup

let dom = R('div', {
  className: domClass
}, result)

export default class ClubCollectionDual extends Component
{

  componentDidMount() {

    let timeline = new TimelineMax()
      .set(
        [C.bg2, C.text1,
         C.text2, C.text3],
        { autoAlpha: 0 }
      )
      .set(
        [C.bg1, C.frame,
         C.sub1Price6, C.sub1Price12,
         C.sub2Price6, C.sub2Price12,
         C.sub3Price6, C.sub3Price12],
        { autoAlpha: 1 }
      )


    timeline

      .set(
        [C.bg1, C.sub1Price6, C.sub1Price12,
         C.sub2Price6, C.sub2Price12,
         C.sub3Price6, C.sub3Price12],
        { autoAlpha: 0 }, 3
      )

      .set([C.bg2], {
        top: 'auto',
        left: 'auto',
        bottom: '0%',
        right: '33%'
      }, 3)

      .set(
        [C.bg2, C.text1, C.a],
        { autoAlpha: 1 }, 3
      )

      .set(
        [C.text1],
      { autoAlpha: 0 }, 6)

      .set(
        [C.bg2],
      { bottom: '-61%', right: '14%' }, 6)


      .set(
        [C.text2],
      { autoAlpha: 1 }, 6)

      .set(
        [C.text2],
      { autoAlpha: 0 }, 9)

      .set(
        [C.bg2],
      { bottom: '-18%', right: '-25%' }, 9)

      .set(
        [C.text3],
      { autoAlpha: 1 }, 9)

      .set(
        [C.bg2, C.text1,
         C.text2, C.text3],
        { autoAlpha: 0 }, 12.5
      )
      .set(
        [C.bg1, C.frame,
         C.sub1Price6, C.sub1Price12,
         C.sub2Price6, C.sub2Price12,
         C.sub3Price6, C.sub3Price12],
        { autoAlpha: 1 }, 12.5
      )

    TweenLite.defaultEase = Linear.easeNone;
  }

  render() {return dom}
}
