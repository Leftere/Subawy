import React from 'react'
import { Component } from 'react'
import { DOMinator } from 'components/Common/DOMinator'
import API from 'api'
import 'gsap'
import 'gsap-then'

import './styles.css'

let R = React.createElement // Render Element

import bg1 from '../images/bg2.png'

// Build DOM
let domClass = 'c-UCGB'

let sub1price6 = API.loc('ultimate_spicy_italian_price_6in')
let sub1price12 = API.loc('ultimate_spicy_italian_price_12in')
let sub2price6 = API.loc('ultimate_meatball_marinara_price_6in')
let sub2price12 = API.loc('ultimate_meatball_marinara_price_12in')

let elements = {
  bg1: ['img', bg1],
  sub_1: ['text', `$${sub1price6}     $${sub1price12}`],
  sub_2: ['text', `$${sub2price6}     $${sub2price12}`],
}

let dominate = DOMinator.dominate(elements)
let result = dominate.result
let C = dominate.references // Children lookup

let dom = R('div', {
  className: domClass
}, result)

export default class UCGB extends Component
{

  componentDidMount() {

  }

  render() {return dom}
}
