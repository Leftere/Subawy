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
let domClass = 'c-CompleteYourMeal2019w2-dual'
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

export default class CompleteYourMeal2019w2Dual extends Component
{
  componentDidMount() {
    if (servesCoke) {

      let timeline = new TimelineMax()
        .set(C.dasani, {autoAlpha: 0})
        .set(C.cookie1, {autoAlpha: 0})
        .set(C.cookie2, {autoAlpha: 0, left: 150})
        .set(C.subwayCup, {autoAlpha: 0,left: 0})
        .set(C.doritos, {autoAlpha: 0,left: 0})
        .set(C.meal, {autoAlpha: 0,left: 0})

        .to(C.vitaminWater, 0.3, {autoAlpha: 0}, 2)
        .to(C.dasani, 0.3, {autoAlpha: 1}, 2)

        .to(C.chips, 0.3, {autoAlpha: 0}, 3.5)
        .to(C.cookie1, 0.3, {autoAlpha: 1}, 3.5)
        .to(C.cookie2, 0.3, {autoAlpha: 1}, 3.5)

        .to([C.dasani, C.cookie1, C.cookie2], 0.5, {autoAlpha: 0}, 5)
        .to(C.subwayCup, 0.3, {autoAlpha: 1}, 5)
        .to(C.doritos, 0.3, {autoAlpha: 1}, 5)

        .set([C.subwayCup, C.doritos], {width: 960 * 0.72, height: 1080 * 0.72, left: 330, top: 86}, 6.5)
        .to(C.meal, 0.3, {autoAlpha: 1}, 6.5)

    } else {

      let timeline = new TimelineMax()
        
        .set([C.dasani, C.vitaminWater], {autoAlpha: 0})    // unused in this version

        .set(C.cookie1, {autoAlpha: 0})
        .set(C.cookie2, {autoAlpha: 0, left: 150})
        .set(C.doritos, {autoAlpha: 0})
        .set(C.meal, {autoAlpha: 0})

        .to(C.chips, 0.3, {autoAlpha: 0}, 2)
        .to(C.cookie1, 0.3, {autoAlpha: 1}, 2)
        .to(C.cookie2, 0.3, {autoAlpha: 1}, 2)

        .to([C.cookie1, C.cookie2], 0.5, {autoAlpha: 0}, 3.5)
        .to(C.doritos, 0.3, {autoAlpha: 1}, 3.5)

        .set([C.subwayCup, C.doritos], {width: 960 * 0.72, height: 1080 * 0.72, left: 330, top: 86}, 5)
        .to(C.meal, 0.3, {autoAlpha: 1}, 5)

    }
    TweenLite.defaultEase = Quad.easeOut;
  }

  render() {return dom}
}
