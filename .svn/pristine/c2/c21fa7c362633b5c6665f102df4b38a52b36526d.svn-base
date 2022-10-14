import React from 'react'
import { Component } from 'react'
import neocastDataProvider from 'api/neocastDataProvider'
import API from 'api'
import 'gsap'
import 'gsap-then'

import './styles.css'

import ChipsA from '../images/ChipsA.png'
import ChipsB from '../images/ChipsB.png'
import ChipLayer1 from '../images/ChipLayer1.png'
import ChipLayer2 from '../images/ChipLayer2.png'
import ChipLayer3 from '../images/ChipLayer3.png'
import Frame1 from '../images/Frame1BG.jpg'
import Frame1Text from '../images/Frame1Text.png'
import Frame2 from '../images/Frame2BG.jpg'
import Frame3 from '../images/Frame3BG.jpg'
import Frame3Text from '../images/Frame3Text.png'
import Frame4 from '../images/Frame4BG.jpg'
import Legal from '../images/Legal.png'
import DrinkA from '../images/DrinkA.jpg'
import DrinkB from '../images/DrinkB.jpg'
import DrinkC from '../images/DrinkC.jpg'

@neocastDataProvider([
  'meal_upsell_price',
])

export default class Sliders extends Component {

	componentDidMount() {

		let timeline = new TimelineMax()

		timeline
		.set([this.Frame2, this.ChipLayer2, this.ChipLayer3, this.ChipLayer1, this.DrinkB, this.Frame3Text, this.Frame4, this.Price, this.Legal], {autoAlpha: 0})
		.set(this.Frame1, {left: "-300px"})
		.set([this.ChipLayer3, this.ChipLayer2, this.ChipLayer1], {scale: 1.3, top: "180px"})

		.to(this.Frame1, 3, {left: "-600px", ease:Linear.easeNone})
		.to(this.Frame2, .5, {autoAlpha: 1}, "-=0.5")
		.to(this.ChipLayer3, .4, {scale: 1, autoAlpha: 1})
		.to(this.ChipLayer2, .4, {scale: 1, autoAlpha: 1}, "-=.2")
		.to(this.ChipLayer1, .4, {scale: 1, autoAlpha: 1}, "-=.2")
		.to([this.DrinkB, this.Frame3Text], .5, {autoAlpha: 1}, "+=2")
		.to([this.Frame4, this.Price], 0.5, {autoAlpha: 1},"+=2")
		.to(this.Legal, 0.5, {autoAlpha: 1})
		.to([this.Frame2, this.ChipLayer2, this.ChipLayer3, this.ChipLayer1, this.Frame3A, this.Frame3B, this.Frame3Text], 0, {autoAlpha: 0})
	}

	render() {

	let upsellPrice = `$${API.loc('meal_upsell_price')}`

	return(
		<div className="c-sliders-quad">
			<img src={Frame1} ref={(node) => this.Frame1 = node} />
			<img src={Frame1Text} ref={(node) => this.Frame1Text = node} />
			<img src={Frame2} ref={(node) => this.Frame2 = node} />
			<img src={ChipLayer3} ref={(node) => this.ChipLayer3 = node} />
			<img src={ChipLayer2} ref={(node) => this.ChipLayer2 = node} />
			<img src={ChipLayer1} ref={(node) => this.ChipLayer1 = node} />
			<img src={DrinkB} ref={(node) => this.DrinkB = node} />
			<img src={Frame3Text} ref={(node) => this.Frame3Text = node} />
			<img src={Frame4} ref={(node) => this.Frame4 = node} />
			<img src={Legal} ref={(node) => this.Legal = node} />
			<p className="upsell-price" ref={(node) => this.Price = node}>{upsellPrice}</p>
		</div>
	)
	}

}