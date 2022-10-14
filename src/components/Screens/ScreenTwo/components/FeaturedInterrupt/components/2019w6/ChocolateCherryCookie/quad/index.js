import { Component } from 'react'
import { DOMinator } from 'components/Common/DOMinator'
import API from 'api'
import 'gsap'
import 'gsap-then'

import './styles.css'


import Cookies1 from '../images/Cookies1.jpg'
import Cookies2 from '../images/Cookies2.jpg'
import Cookies3 from '../images/Cookies3.jpg'
import Cookies4 from '../images/Cookies4.jpg'
import Cookies5 from '../images/Cookies5.jpg'
import Cookies6 from '../images/Cookies6.jpg'
import Cookies7 from '../images/Cookies7.jpg'
import Cookies8 from '../images/Cookies8.jpg'
import Cookies9 from '../images/Cookies9.jpg'
import Cookies10 from '../images/Cookies10.jpg'
import Cookies11 from '../images/Cookies11.jpg'
import Cookies12 from '../images/Cookies12.jpg'
import Cookies13 from '../images/Cookies13.jpg'

import CookiesA1 from '../images/CookiesA1.jpg'
import CookiesA2 from '../images/CookiesA2.jpg'
import CookiesA3 from '../images/CookiesA3.jpg'
import CookiesA4 from '../images/CookiesA4.jpg'
import CookiesA5 from '../images/CookiesA5.jpg'

import Cherries1 from '../images/Cherries1.jpg'
import Cherries2 from '../images/Cherries2.jpg'

import Legal from '../images/Legal.png'


let R = React.createElement //Render element

// Build DOM
let domClass = 'c-chocolate-cherry-quad'

let elements = {

	Cookies1: ['img', Cookies1],
	Cookies2: ['img', Cookies2],
	Cookies3: ['img', Cookies3],
	Cookies4: ['img', Cookies4],
	Cookies5: ['img', Cookies5],
	Cookies6: ['img', Cookies6],
	Cookies7: ['img', Cookies7],
	Cookies8: ['img', Cookies8],
	Cookies9: ['img', Cookies9],
	Cookies10: ['img', Cookies10],
	Cookies11: ['img', Cookies11],
	Cookies12: ['img', Cookies12],
	Cookies13: ['img', Cookies13],

	CookiesA1: ['img', CookiesA1],
	CookiesA2: ['img', CookiesA2],
	CookiesA3: ['img', CookiesA3],
	CookiesA4: ['img', CookiesA4],
	CookiesA5: ['img', CookiesA5],

	Cherries2: ['img', Cherries2],
	Cherries1: ['img', Cherries1],

	Legal: ['img', Legal],

}

let dominate = DOMinator.dominate(elements)
let result = dominate.result
let C = dominate.references // Children lookup

let dom = R('div', {
  className: domClass
}, result)

export default class ChocolateCherryCookie extends Component {

	componentDidMount() {
		let timeline = new TimelineMax()

		timeline
		.set([C.Cookies2, C.Cookies3, C.Cookies4, C.Cookies5, C.Cookies6, C.Cookies7,C.Cookies8, C.Cookies9, C.Cookies10, 
			C.Cookies11, C.Cookies12, C.Cookies13, C.CookiesA1, C.CookiesA2, C.CookiesA3, C.CookiesA4, C.CookiesA5], {autoAlpha: 0})
		
		.set([C.Cherries1, C.Cherries2], {autoAlpha: 0})

		.to([C.Cookies1], 0, {autoAlpha: 1}, "+=2")
		.to([C.Cookies2], 0, {autoAlpha: 1}, "+=0.1")
		.to([C.Cookies3], 0, {autoAlpha: 1}, "+=0.1")
		.to([C.Cookies4], 0, {autoAlpha: 1}, "+=0.1")
		.to([C.Cookies5], 0, {autoAlpha: 1}, "+=0.1")
		.to([C.Cookies6], 0, {autoAlpha: 1}, "+=0.1")
		.to([C.Cookies7], 0, {autoAlpha: 1}, "+=0.1")
		.to([C.Cookies8], 0, {autoAlpha: 1}, "+=0.1")
		.to([C.Cookies9], 0, {autoAlpha: 1}, "+=0.1")
		.to([C.Cookies10], 0, {autoAlpha: 1}, "+=0.1")
		.to([C.Cookies11], 0, {autoAlpha: 1}, "+=0.1")
		.to([C.Cookies12], 0, {autoAlpha: 1}, "+=0.1")
		.to([C.Cookies13], 0, {autoAlpha: 1}, "+=0.1")


		.to([C.Cherries2], 0, {autoAlpha: 1}, "+=0.5")
		.to([C.Cherries1], 0, {autoAlpha: 0}, "+=0.5")
		.to([C.Cherries1], 0, {autoAlpha: 1}, "+=0.5")
		.to([C.Cherries1], 0, {autoAlpha: 0}, "+=0.5")
		.to([C.Cherries1], 0, {autoAlpha: 1}, "+=0.5")
		.to([C.Cherries1], 0, {autoAlpha: 0}, "+=0.5")
		.to([C.Cherries1], 0, {autoAlpha: 1}, "+=0.5")

		.to([C.Cherries1, C.Cherries2, C.Text1], 0, {autoAlpha: 0}, "+=0.5")

		.to([C.Cookies13], 0, {autoAlpha: 0}, "+=0.1")
		.to([C.Cookies12], 0, {autoAlpha: 0}, "+=0.1")
		.to([C.Cookies11], 0, {autoAlpha: 0}, "+=0.1")
		.to([C.Cookies10], 0, {autoAlpha: 0}, "+=0.1")
		.to([C.Cookies9], 0, {autoAlpha: 0}, "+=0.1")
		.to([C.Cookies8], 0, {autoAlpha: 0}, "+=0.1")
		.to([C.Cookies7], 0, {autoAlpha: 0}, "+=0.1")
		.to([C.Cookies6], 0, {autoAlpha: 0}, "+=0.1")
		.to([C.Cookies5], 0, {autoAlpha: 0}, "+=0.1")
		.to([C.CookiesA1], 0, {autoAlpha: 1}, "+=0.1")
		.to([C.CookiesA2], 0, {autoAlpha: 1}, "+=0.1")
		.to([C.CookiesA3], 0, {autoAlpha: 1}, "+=0.1")
		.to([C.CookiesA4], 0, {autoAlpha: 1}, "+=0.1")
		.to([C.CookiesA5], 0, {autoAlpha: 1}, "+=0.1")

	}

	render() {
	return dom
	}
}