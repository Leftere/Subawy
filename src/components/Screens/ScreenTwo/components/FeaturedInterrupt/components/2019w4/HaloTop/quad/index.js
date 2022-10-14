import { Component } from 'react'
import { DOMinator } from 'components/Common/DOMinator'
import API from 'api'
import 'gsap'
import 'gsap-then'

import './styles.css'

import BG from './images/BG.png'
import Logos from './images/Logos.png'
import ShakeThingsUp from './images/ShakeThingsUp.png'
import Lid from './images/Lid.png'

import Marble from './images/Marble.png'
import VanillaShake from './images/VanillaShake.png'
import VanillaCue from './images/VanillaCue.png'
import VanillaText from './images/VanillaText.png'

import StrawberryShake from './images/StrawberryShake.png'
import StrawberryCue from './images/StrawberryCue.png'
import StrawberryText from './images/StrawberryText.png'

import ChocolateShake from './images/ChocolateShake.png'
import ChocolateCue from './images/ChocolateCue.png'
import ChocolateText from './images/ChocolateText.png'

import Frame6 from './images/frame6.png'
import Frame6Headline from './images/frame6Headline.png'
import PurpleLayer from './images/purpleLayer.png'
import VanillaFront from './images/VanillaFront.png'
import VanillaFrontRotated from './images/VanillaFrontRotated.png'
import StrawberryFront from './images/StrawberryFront.png'
import ChocolateFront from './images/ChocolateFront.png'

let R = React.createElement //Render element

// Build DOM
let domClass = 'c-HaloTop'

let haloTopPrice = API.loc('halo_top_price') + ' each';

let elements = {

	bg: ['img', BG],
	frame1: ['img', Logos],
	frame2: ['img', ShakeThingsUp],
	lid: ['img', Lid],

	frame3: ['img', Marble],
	text3: ['img', VanillaText],
	vanillaCue: ['img', VanillaCue],
	vanillaShake: ['img', VanillaShake],

	text4: ['img', StrawberryText],
	strawberryCue: ['img', StrawberryCue],
	strawberryShake: ['img', StrawberryShake],

	text5: ['img', ChocolateText],
	chocolateCue: ['img', ChocolateCue],
	chocolateShake: ['img', ChocolateShake],

	purpleLayer: ['img', PurpleLayer],
	strawberryFront: ['img', StrawberryFront],
	chocolateFront: ['img', ChocolateFront],
	vanillaFront: ['img', VanillaFront],
	vanillaFrontRotated: ['img', VanillaFrontRotated],
	frame6: ['img', Frame6],
	frame6Headline: ['img', Frame6Headline],
	price: ['text', <span>${haloTopPrice}</span>]
}

let dominate = DOMinator.dominate(elements)
let result = dominate.result
let C = dominate.references // Children lookup

let dom = R('div', {
  className: domClass
}, result)

export default class HaloTop extends Component {
	componentDidMount() {

    let timeline = new TimelineMax()
    	//set initial positions
    	.set([C.frame2, C.frame6, C.frame6Headline, C.vanillaCue, C.text3, C.strawberryCue, C.text4, C.chocolateCue, C.text5, C.purpleLayer, C.vanillaFront, C.vanillaFrontRotated, C.price], {autoAlpha: 0})
    	.set(C.lid, {left: 30, top: 80, rotation: 0})
    	.set(C.frame2, {top: 90})
    	.set(C.frame3, {left: -660})
    	.set(C.vanillaShake, {left: -500, top: -70})
    	.set(C.vanillaCue, {left: 130, top: -180})
    	.set(C.text3, {left: 345, top: 225})

    	.set(C.strawberryCue, {left: 335, top: 345})
    	.set(C.strawberryShake, {left: 680, top: 290})
    	.set(C.text4, {left: 40, top: 570})

    	.set(C.chocolateShake, {left: -500, top: 640})
    	.set(C.chocolateCue, {left: 350, top: 990})
    	.set(C.text5, {left: 370, top: 930})

    	.set(C.chocolateFront, {left: -400})
    	.set(C.strawberryFront, {left:400})
    	.set(C.frame6, {top: -10})
    	.set(C.price, {left: 15, top: 1020})

    	//begin animation
    	.to(C.lid, 1, {top: 1260, rotation: 30, ease: Power2.easeIn}, "+=1.5")
    	.to(C.frame1, 0.1, {autoAlpha: 0}, "-=0.5")
    	.to(C.frame2, 0.8, {autoAlpha: 1, top: -50, ease: Back.easeOut.config(0.9)}, "=-0.5")
    
    	.to(C.frame3, 0.5, {left: 0, ease: Power2.easeOut}, "+=1.5")
    	.to(C.vanillaShake, 0.5, {left:-150})
    	.to([C.vanillaCue, C.text3], 0.5, {autoAlpha: 1})
    	.to(C.text3, 0.5, {top: 215}, "-=0.5")

    	.to(C.strawberryShake, 0.5, {left: 280, top: 290}, "+=0.7")
    	.to([C.strawberryCue, C.text4], 0.5, {autoAlpha: 1})
    	.to(C.text4, 0.5, {top: 560}, "-=0.5")

    	.to(C.chocolateShake, 0.5, { left: -150, top: 640}, "+=0.7")
    	.to([C.chocolateCue, C.text5], 0.5, {autoAlpha: 1})
    	.to(C.text5, 0.5, {top: 920}, "-=0.5")

    	.to([C.text3, C.text4, C.text5, C.vanillaCue, C.strawberryCue, C.chocolateCue], 0.5, {autoAlpha: 0}, "+=2")
    	.to(C.vanillaShake, 0.5, {left: -500}, "+=0.5")
    	.to(C.strawberryShake, 0.5, {left: 680}, "-=0.5")
    	.to(C.chocolateShake, 0.5, {left: -560}, "-=0.5")

    	.to([C.frame6, C.frame6Headline, C.purpleLayer, C.vanillaFront, C.price], 0.5, {autoAlpha: 1}, "+=0.5")
    	.to([C.chocolateFront, C.strawberryFront], 0.5, {left: 0}, "+=0.5")
    	.to(C.vanillaFrontRotated, 0.5, {autoAlpha: 1}, "+=2")
    }

	render() {
		return dom
	}
}