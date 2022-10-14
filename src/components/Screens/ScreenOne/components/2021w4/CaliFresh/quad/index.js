import React from 'react'
import { Component } from 'react'
import neocastDataProvider from 'api/neocastDataProvider'
import { DOMinator } from 'components/Common/DOMinator'
import API from 'api'
import 'gsap'
import 'gsap-then'

import './styles.css'

let R = React.createElement // Render Element

import bg from '../images/bg.jpg'
import bgSliced from '../images/bg_sliced.jpg'

import sodiumNY from '../images/bg-ny.jpg'
import sodiumNYSliced from '../images/bg-ny-sliced.jpg'

import sodiumPhilly from '../images/bg-philly.jpg'
import sodiumPhillySliced from '../images/bg-philly-sliced.jpg'

let avocadoSliced = API.loc('avocado_sliced');
let isSodiumStore = API.loc('store_plus_sodium');
let isPhilly = API.loc('is_philadelphia_store');

let bgImage = bg;

if (avocadoSliced) bgImage = bgSliced;

if (isSodiumStore)
{
  bgImage = sodiumNY;

  if (avocadoSliced) 
    bgImage = sodiumNYSliced;

  if (isPhilly) 
    bgImage = sodiumPhilly;

  if (isPhilly && avocadoSliced) 
    bgImage = sodiumPhillySliced;
}

// Build DOM
let domClass = 'c-CaliFresh'

let sub1price6 = API.loc('cali_turkey_price_6in')
let sub1price12 = API.loc('cali_turkey_price_12in')
let sub1pricepro = API.loc('cali_turkey_price_pro')
let sub2price6 = API.loc('cali_steak_price_6in')
let sub2price12 = API.loc('cali_steak_price_12in')
let sub2pricepro = API.loc('cali_steak_price_pro')

let elements = {
  bg1: ['img', bgImage],
  sub1Price6: ['text',   `$${sub1price6}`],
  sub1Price12: ['text',  `$${sub1price12}`],
  sub1PricePro: ['text', `$${sub1pricepro}`],
  sub2Price6: ['text',   `$${sub2price6}`], 
  sub2Price12: ['text',  `$${sub2price12}`],
  sub2PricePro: ['text', `$${sub2pricepro}`]
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
export default class CaliFresh extends Component
{

  componentDidMount() {

  }

  render() {return dom}
}
