import React from 'react'
import { Component } from 'react'
import neocastDataProvider from 'api/neocastDataProvider'
import API from 'api'
import 'gsap'
import 'gsap-then'

import './styles.css' 

import Frame1 from '../images/Frame1.jpg'
import Frame2 from '../images/Frame2B.jpg'
import Frame3 from '../images/Frame3.jpg'
import Frame4 from '../images/Frame4.jpg'
import Frame5 from '../images/Frame5.jpg'
import Frame5Text from '../images/Frame5Text.png'
import Frame6 from '../images/Frame6.jpg'
import Frame6Text1 from '../images/Frame6Text1.png'
import CheeseText from '../images/CheeseText.png'

@neocastDataProvider([
  'ultimate_spicy_italian_price_6in',
  'ultimate_spicy_italian_price_12in',
  'ultimate_meatball_marinara_price_6in',
  'ultimate_meatball_marinara_price_12in',
  'ultimate_steak_price_6in',
  'ultimate_steak_price_12in'
])

export default class UCGB3 extends Component {

	componentDidMount() {
		let timeline = new TimelineMax()

		timeline
		.set([this.Frame3], {autoAlpha: 0, width: "1700px", left: 0})
		.set([this.Frame3, this.Frame4, this.Frame5, this.Frame5Text, this.Frame6, this.Frame6Text1, this.ItalianPrice, this.MeatballPrice, this.SteakPrice], {autoAlpha: 0})
		.set(this.Frame5Text, {top: 86, left: 36, width: "1150px"})
		.set(this.Frame1, {autoAlpha: 1})
		.set([this.Frame4Text], {top: 800})
		.set([this.Frame4H1, this.Frame5H1], {autoAlpha: 0, top: 50})
		.set([this.Frame4H2, this.Frame5H2], {autoAlpha: 0, top: 140})
		.set(this.CheeseText, {autoAlpha: 0, top: -60})
		.set(this.Frame4, {width: "1280px"})
		.set(this.ItalianText, {top: 290, left: 70, autoAlpha: 0})


		.to(this.Frame1, 1.3, {autoAlpha: 1}, "+=2")

		.to(this.Frame3, 1, {autoAlpha: 1}, "+=3")
		.to(this.CheeseText, 0.2, {autoAlpha: 1, top: -10}, "+=0.2")
		.to(this.Frame3, 8, {left: -400}, "-=4")

		.to(this.Frame4, 1, {autoAlpha: 1}, "-=1")
		.to(this.Frame4H1, 0.2, {autoAlpha: 1, top: 70})
		.to(this.Frame4H2, 0.2, {autoAlpha: 1, top: 160}, "-=0.2")

		.to(this.Frame4, 1.3, {left: -100, width: "1500px", height: "1080px"}, "+=2")
		.to(this.Frame5, 1.3, {autoAlpha: 1, width: "1380px", left: -50, top: -50}, "-=1.3")
		.to(this.Frame5Text, 1.3, {autoAlpha: 1}, "-=1.5")

		.to(this.Frame6, 1, {autoAlpha: 1}, "+=2")
		.to(this.Frame6Text1, 1.3, {autoAlpha: 1}, "+=0.5")
		.to(this.ItalianText, 1.3, {autoAlpha: 1}, "-=1.3")
		.to(this.ItalianPrice, 1.3, {autoAlpha: 1}, "-=1.3")
		.to(this.MeatballPrice, 1.3, {autoAlpha: 1}, "-=1.3")
		.to(this.SteakPrice, 1.3, {autoAlpha: 1}, "-=1.3")

		.to([this.Frame6,this.Frame6Text1,this.ItalianText,this.ItalianPrice,this.MeatballPrice,this.SteakPrice], 0, {autoAlpha: 1}, "+=5")

	}

	render() {

	let italianPrice6Inch = `$${API.loc('ultimate_spicy_italian_price_6in')}`
	let italianPrice12Inch = `$${API.loc('ultimate_spicy_italian_price_12in')}`
	let meatballPrice6Inch = `$${API.loc('ultimate_meatball_marinara_price_6in')}`
	let meatballPrice12Inch = `$${API.loc('ultimate_meatball_marinara_price_12in')}`
	let steakPrice6Inch = `$${API.loc('ultimate_steak_price_6in')}`
	let steakPrice12Inch = `$${API.loc('ultimate_steak_price_12in')}`

	return(
		<div className="c-ucgb3-quad">

			<img src={Frame1} ref={(node) => this.Frame1 = node} />

			<img src={Frame3} ref={(node) => this.Frame3 = node} />

			<img src={CheeseText} ref={(node) => this.CheeseText = node} />

			<img src={Frame4} ref={(node) => this.Frame4 = node} />
			
			<div className="text-box" ref={(node) => this.Frame4Text = node}>
				<span className="headline" ref={(node) => this.Frame4H1 = node}><span className="green">Ultimate</span></span>
				<span className="headline" ref={(node) => this.Frame4H2 = node}>Perfection</span>
			</div>

			<img src={Frame5} ref={(node) => this.Frame5 = node} />
			<img src={Frame5Text} ref={(node) => this.Frame5Text = node} />

			<img src={Frame6} ref={(node) => this.Frame6 = node} />
			<img src={Frame6Text1} ref={(node) => this.Frame6Text1 = node} />

			<div className="price-container"  ref={(node) => this.ItalianText = node} >
				<span className="price">Ultimate Spicy Italian</span>
			</div>

			<div className="price-container italian-price" ref={(node) => this.ItalianPrice = node}>
				<span className="price">{italianPrice6Inch}<span className="cal">730 cal</span></span>
				<span className="price">{italianPrice12Inch}<span className="cal">1460 cal</span></span>
			</div>

			<div className="price-container meatball-price" ref={(node) => this.MeatballPrice = node}>
				<span className="price">{meatballPrice6Inch}<span className="cal">730 cal</span></span>
				<span className="price">{meatballPrice12Inch}<span className="cal">1460 cal</span></span>
			</div>

			<div className="price-container steak-price" ref={(node) => this.SteakPrice = node}>
				<span className="price">{steakPrice6Inch}<span className="cal">600 cal</span></span>
				<span className="price">{steakPrice12Inch}<span className="cal">1200 cal</span></span>
			</div>
		</div>
	)
	}
}