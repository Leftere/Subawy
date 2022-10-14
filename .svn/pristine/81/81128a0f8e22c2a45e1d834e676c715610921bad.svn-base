import { Component } from 'react'
import { DOMinator } from 'components/Common/DOMinator'
import API from 'api'
import 'gsap'
import 'gsap-then'

import './styles.css'


import Frame1 from '../images/Frame1.jpg'
import Frame2 from '../images/Frame2.jpg'
import Frame3 from '../images/Frame3.jpg'
import Frame4 from '../images/Frame4.jpg'
import Frame5 from '../images/Frame5.jpg'
import Frame6 from '../images/Frame6.jpg'
import Frame7 from '../images/Frame7.jpg'
import Frame8 from '../images/Frame8.jpg'
import Frame9 from '../images/Frame9.jpg'
import Frame10 from '../images/Frame10.jpg'
import Frame11 from '../images/Frame11A.jpg'
import Frame12 from '../images/Frame12.jpg'
import Frame13 from '../images/Frame13.jpg'
import Frame14 from '../images/Frame14.jpg'


let R = React.createElement //Render element

// Build DOM
let domClass = 'c-carrot-cake-dual'

let elements = {

	Frame1: ['img', Frame1],
	Frame2: ['img', Frame2],
	Frame3: ['img', Frame3],
	Frame4: ['img', Frame4],
	Frame5: ['img', Frame5],
	Frame6: ['img', Frame6],
	Frame7: ['img', Frame7],
	Frame8: ['img', Frame8],
	Frame9: ['img', Frame9],
	Frame10: ['img', Frame10],
	Frame11: ['img', Frame11],
	Frame12: ['img', Frame12],
	Frame13: ['img', Frame13],
	Frame14: ['img', Frame14]

}

let dominate = DOMinator.dominate(elements)
let result = dominate.result
let C = dominate.references // Children lookup

let dom = R('div', {
  className: domClass
}, result)

export default class CarrotCakeCookie extends Component {

	componentDidMount() {
		let timeline = new TimelineMax()

		let delay = 0.2

		timeline
		.set([C.Frame2, C.Frame3, C.Frame4, C.Frame5, C.Frame6, C.Frame7, C.Frame8, C.Frame9, C.Frame10, C.Frame11, C.Frame12, C.Frame13, C.Frame14], {autoAlpha: 0})
		.to(C.Frame2, delay, {autoAlpha: 1}, "+=2")
		.to(C.Frame3, delay, {autoAlpha: 1}, "+=1")
		.to(C.Frame4, delay, {autoAlpha: 1})
		.to(C.Frame5, delay, {autoAlpha: 1})
		.to(C.Frame6, delay, {autoAlpha: 1})
		.to(C.Frame7, delay, {autoAlpha: 1})
		.to(C.Frame8, delay, {autoAlpha: 1})
		.to(C.Frame9, delay, {autoAlpha: 1})
		.to(C.Frame10, delay, {autoAlpha: 1})
		.to(C.Frame11, delay, {autoAlpha: 1})
		.to(C.Frame13, 0.5, {autoAlpha: 1}, "+=1.5")
		.to(C.Frame14, 0.5, {autoAlpha: 1}, "+=1")

	}

	render() {
	return dom
	}
}