import React from 'react'
import { Component } from 'react'
import neocastDataProvider from 'api/neocastDataProvider'
import API from 'api'
import 'gsap'
import 'gsap-then'

import './styles.css'

import Frame1 from '../images/Frame1.png'
import Frame2 from '../images/Frame2.png'
import Frame2Floor from '../images/Frame2Floor.png'
import Frame2BG from '../images/Frame2BG.jpg'
import Frame2Text from '../images/Frame2Text.png'
import Frame3Sandwich from '../images/Frame3Sandwich.png'
import Frame4Headline from '../images/Frame4Headline.png'
import Sam from '../images/sam.png'
import Chicagraffe from '../images/chicagraffe.png'
import Legal from '../images/Legal.png'
import FinalFrame from '../images/FinalFrame.jpg'

@neocastDataProvider ([
	'geah_price_6in',
	'geah_price_12in'
])

export default class GEAH extends Component {

	componentDidMount() {
		let timeline = new TimelineMax()

		timeline
		.set([this.Frame2Text], {autoAlpha: 0, width: "900px"})
		.set(this.Frame1, {top: 0})
		.set(this.Frame3Sandwich, {left: 1280})
		.set([this.Frame4Headline, this.Legal, this.Price], {autoAlpha: 0})
		.set(this.Chicagraffe, {left: 400, top: -200, width: "1400px"})
		.set(this.Sam, {left: 370, top: -110, autoAlpha: 0})

		.to(this.Frame1, 1.5, {top: 900}, "+=2")
		.to(this.Frame2Text, 0.5, {autoAlpha: 1, width: "1500px"})
		.to(this.Frame2Text, 0.25, {width: "1280px"})
		.to([this.Frame2, this.Frame2Text], 1.5, {left: -1280}, "+=1.5")
		.to(this.Frame3Sandwich, 1.5, {left: 0}, "-=1.5")
		.to(this.Frame4Headline, 1, {autoAlpha: 1}, "+=0.25")
		.to(this.Chicagraffe, 1, {left: 20}, "+=0.25")
		.to(this.Sam, 1.5, {autoAlpha: 1}, "-=1")
		.to([this.Price,this.Legal], 1, {autoAlpha: 1})
	}

	render() {

	let geahPrice6Inch = `$${API.loc('geah_price_6in')}`
	let geahPrice12Inch = `$${API.loc('geah_price_12in')}`

	return(
		
		<div className="c-geah-quad">
			<img src={Frame2BG} />
			<img src={Frame2Floor} />
			<img src={Frame2} ref={(node) => this.Frame2 = node} />
			<img src={Frame2Text} ref={(node) => this.Frame2Text = node} />
			<img src={Chicagraffe} ref={(node) => this.Chicagraffe = node} />
			<img src={Sam} ref={(node) => this.Sam = node} />
			<img src={Frame3Sandwich} ref={(node) => this.Frame3Sandwich = node} />
			<img src={Frame4Headline} ref={(node) => this.Frame4Headline = node} />
			<img src={Legal} ref={(node) => this.Legal = node} />
			<img src={Frame1} ref={(node) => this.Frame1 = node} />
			
			<div className="price-container" ref={(node) => this.Price = node}>
				<span className="price-heading">Sub only:</span>
				<div className="six-inch-container">
					<div className="sub-size">
						6"
					</div>
					<div className="sub-prices">
						<span className="price">{geahPrice6Inch}</span>
						<span className="price calories">520 cal</span>
					</div>
				</div>
				<div className="footlong-container">
					<div className="sub-size">
						Footlong
					</div>
					<div className="sub-prices">
						<span className="price">{geahPrice12Inch}</span>
						<span className="price calories">1040 cal</span>
					</div>
				</div>
			</div>			


		</div>
	)
	}
}