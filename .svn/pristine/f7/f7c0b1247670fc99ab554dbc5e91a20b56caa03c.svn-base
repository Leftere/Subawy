import React from 'react'
import { Component } from 'react'
import neocastDataProvider from 'api/neocastDataProvider'
import { DOMinator } from 'components/Common/DOMinator'
import API from 'api'
import 'gsap'
import 'gsap-then'

import './styles.css'

let R = React.createElement // Render Element

import bg from '../images/bg.png'

import chips from '../images/chips.png'
import cookie from '../images/cookie.png'
import dasani from '../images/dasani.png'
import doritos from '../images/doritos.png'
import meal from '../images/meal.png'
import mealNoCoke from '../images/meal-no-coke.png'
import subwayCup from '../images/subway-cup.png'
import vitaminWater from '../images/vitamin-water.png'

const servesCoke = API.loc('serves_coca_cola');

// Build DOM
let domClass = 'c-CompleteYourMeal2019w2'
let elements = {
  bg: ['img', bg],

  vitaminWater: ['img', vitaminWater],
  dasani: ['img', dasani],
  subwayCup: ['img', subwayCup],

  chips: ['img', chips],
  cookie1: ['img', cookie],
  cookie2: ['img', cookie],
  doritos: ['img', doritos],

  meal: ['img', servesCoke ? meal : mealNoCoke]
}

let dominate = DOMinator.dominate(elements)
let result = dominate.result
let C = dominate.references // Children lookup

let dom = R('div', {
  className: domClass
}, result)

export default class CompleteYourMeal2019w2Quad extends Component
{
  componentDidMount() {
    if (servesCoke) {

      let timeline = new TimelineMax()
        .set(C.dasani, {top: -1080})
        .set(C.cookie1, {top: -1080})
        .set(C.cookie2, {top: -1080, left: 150})
        .set(C.subwayCup, {left: 960})
        .set(C.doritos, {left: 960})
        .set(C.meal, {left: -960})

        .to(C.vitaminWater, 0.5, {top: 1080}, 2)
        .to(C.dasani, 0.5, {top: 0}, 2)

        .to(C.chips, 0.5, {top: 1080}, 3.5)
        .to(C.cookie1, 0.5, {top: 0}, 3.5)
        .to(C.cookie2, 0.5, {top: 0}, 3.6)

        .to([C.dasani, C.cookie1, C.cookie2], 0.5, {left: -960}, 5)
        .to(C.subwayCup, 0.5, {left: 0}, 5)
        .to(C.doritos, 0.5, {left: 0}, 5.1)

        .to([C.subwayCup, C.doritos], 0.5, {width: 960 * 0.72, height: 1080 * 0.72, left: 330, top: 86}, 6.5)
        .to(C.meal, 0.5, {left: 0}, 6.5)

    } else {

      let timeline = new TimelineMax()
        
        .set([C.dasani, C.vitaminWater], {autoAlpha: 0})    // unused in this version

        .set(C.cookie1, {top: -1080})
        .set(C.cookie2, {top: -1080, left: 150})
        .set(C.doritos, {top: -1080})
        .set(C.meal, {left: -960})

        .to(C.chips, 0.5, {top: 1080}, 2)
        .to(C.cookie1, 0.5, {top: 0}, 2)
        .to(C.cookie2, 0.5, {top: 0}, 2.1)

        .to([C.cookie1, C.cookie2], 0.5, {top: 1080}, 3.5)
        .to(C.doritos, 0.5, {top: 0}, 3.5)

        .to([C.subwayCup, C.doritos], 0.5, {width: 960 * 0.72, height: 1080 * 0.72, left: 330, top: 86}, 5)
        .to(C.meal, 0.5, {left: 0}, 5)

    }
    TweenLite.defaultEase = Quad.easeOut;
  }

  render() {return dom}
}
