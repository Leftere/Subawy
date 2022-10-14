import React from 'react'
import { Component } from 'react'
import neocastDataProvider from 'api/neocastDataProvider'
import { DOMinator } from 'components/Common/DOMinator'
import API from 'api'
import 'gsap'
import 'gsap-then'

import './styles.css'

let R = React.createElement // Render Element

import bg1 from '../images/bg.jpg'
import bg2 from '../images/bg_no_coke.jpg'

let servesCoke = API.loc('serves_coca_cola');
let bgImage = bg1;

if (!servesCoke) bgImage = bg2;

// Build DOM
let domClass = 'c-CaliFreshDual'

let sub1price6 = API.loc('cali_turkey_price_6in')
let sub1price12 = API.loc('cali_turkey_price_12in')
let sub1pricepro = API.loc('cali_turkey_price_pro')
let sub2price6 = API.loc('cali_steak_price_6in')
let sub2price12 = API.loc('cali_steak_price_12in')
let sub2pricepro = API.loc('cali_steak_price_pro')

let elements = {
  bg1: ['img', bgImage],
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
export default class CaliFreshDual extends Component
{

  componentDidMount() {
  }

  render() {return dom}
}
