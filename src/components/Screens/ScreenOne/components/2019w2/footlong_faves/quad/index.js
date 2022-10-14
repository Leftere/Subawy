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
let domClass = 'c-FootlongFaves'

let elements = {
  bg1: ['img', bg1],
}

let dominate = DOMinator.dominate(elements)
let result = dominate.result
let C = dominate.references // Children lookup

let dom = R('div', {
  className: domClass
}, result)

export default class FootlongFaves extends Component
{

  componentDidMount() {

  }

  render() {return dom}
}
