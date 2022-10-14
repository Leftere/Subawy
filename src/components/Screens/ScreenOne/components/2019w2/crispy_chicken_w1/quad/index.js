import React from 'react'
import { Component } from 'react'
import { DOMinator } from 'components/Common/DOMinator'
import API from 'api'
import 'gsap'
import 'gsap-then'

import './styles.css'

let R = React.createElement // Render Element

import bg1 from '../images/bg1.jpg'

// Build DOM
let domClass = 'c-CrispyChickenStatic'

let sub1price6 = API.loc('chicken_parmesan_price_6in')
let sub1price12 = API.loc('chicken_parmesan_price_12in')
let wrapPrice = API.loc('homestyle_crispy_chicken_wrap_price')

let elements = {
  bg1: ['img', bg1],
  sub1Price6: ['text', `$${sub1price6}`],
  sub1Price12: ['text', `$${sub1price12}`],
  wrapPrice: ['text', `$${wrapPrice}`],
}

let dominate = DOMinator.dominate(elements)
let result = dominate.result
let C = dominate.references // Children lookup

let dom = R('div', {
  className: domClass
}, result)

export default class CrispyChickenStatic extends Component
{

  componentDidMount() {

  }

  render() {return dom}
}
