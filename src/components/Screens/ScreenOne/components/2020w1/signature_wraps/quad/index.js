import React from 'react'
import { Component } from 'react'
import neocastDataProvider from 'api/neocastDataProvider'
import API from 'api'
import 'gsap'
import 'gsap-then'

import './styles.css'

import Border from '../images/Border.png'
import Frame1 from '../images/Frame1.jpg'
import Frame1Text from '../images/Frame1Text.png'
import Frame2 from '../images/Frame2.jpg'
import Frame2Text from '../images/Frame2Text.png'
import Frame3 from '../images/Frame3.jpg'
import Frame3Text from '../images/Frame3Text.png'
import Frame4 from '../images/Frame4.jpg'
import Frame4Text from '../images/Frame4Text.png'
import Frame5 from '../images/Frame5.jpg'
import Frame5Subhead from '../images/Frame5Subhead.png'
import Frame5Text from '../images/Frame5Text.png'

@neocastDataProvider([
  'turkey_bacon_guacamole_wrap_price',
  'chipotle_southwest_steak_and_cheese_wrap_price',
  'rotisserie_chicken_caesar_wrap_price',
])

export default class SignatureWrapsW1 extends Component {



	componentDidMount() {

		let timeline = new TimelineMax()
		let contentArea = document.getElementById('featured-promo-area')

		contentArea.classList.add('full-width')
		let animation = () => {

			timeline
			.set([this.Frame2, this.Frame2Text, this.Frame3, this.Frame3Text, this.Frame4, this.Frame4Text, this.Frame5, this.Frame5Text, this.Frame5Subhead, this.Price1, this.Price2, this.Price3], {autoAlpha: 0})
			.set(this.Frame1, {left: "-600px"})
			.set(this.Frame2, {left: "0px"})
			.set(this.Frame3, {left: "-120px"})

			.to(this.Frame1, 4.5, {left: "-400px", ease: Linear.easeNone})
			.to([this.Frame2, this.Frame2Text], 0.5, {autoAlpha: 1}, "-=0.5")
			.to(this.Frame2, 3, {left: "-120px", ease: Linear.easeNone}, "-=0.5")
			.to([this.Frame3, this.Frame3Text], 0.5, {autoAlpha: 1}, "-=0.5")
			.to(this.Frame3, 3, {left: "0px", ease: Linear.easeNone}, "-=0.5")
			.to([this.Frame4, this.Frame4Text], 0.5, {autoAlpha: 1}, "-=0.5")
			.to(this.Frame4, 3, {left: "-120px", ease: Linear.easeNone}, "-=0.5")
			.to(this.Frame5, 0.5, {autoAlpha: 1}, "-=0.5")
			.to([this.Frame5Text, this.Frame5Subhead, this.Price1, this.Price2, this.Price3], 0.5, {autoAlpha: 1}, "+=0.25")
		}
		
		animation();

		
		let removeClass = () => {
			let removeArea = document.getElementById('featured-promo-area')
			removeArea.classList.remove('full-width')
		}

		window.setTimeout(removeClass, 29800)


	}

	componentWillUnmount() {
	}

	render() {


	let turkeyPrice = `$${API.loc('turkey_bacon_guacamole_wrap_price')}`	
	let chipotlePrice = `$${API.loc('chipotle_southwest_steak_and_cheese_wrap_price')}`
	let caesarPrice = `$${API.loc('rotisserie_chicken_caesar_wrap_price')}`


	return(
		<div className="c-signature-wraps-w1">
			<img src={Frame1} ref={(node) => this.Frame1 = node} />
			<img src={Frame1Text} ref={(node) => this.Frame1Text = node} />
			<img src={Frame2} ref={(node) => this.Frame2 = node} />
			<img src={Frame2Text} ref={(node) => this.Frame2Text = node} />
			<img src={Frame3} ref={(node) => this.Frame3 = node} />
			<img src={Frame3Text} ref={(node) => this.Frame3Text = node} />
			<img src={Frame4} ref={(node) => this.Frame4 = node} />
			<img src={Frame4Text} ref={(node) => this.Frame4Text = node} />
			<img src={Frame5} ref={(node) => this.Frame5 = node} />
			<img src={Frame5Subhead} ref={(node) => this.Frame5Subhead = node} />
			<img src={Frame5Text} ref={(node) => this.Frame5Text = node} />
			<span className="price-cals turkey-price" ref={(node) => this.Price1 = node}><span className="price">{turkeyPrice}</span><span className="cals">760 cal</span></span>
			<span className="price-cals chipotle-price" ref={(node) => this.Price2 = node}><span className="price">{chipotlePrice}</span><span className="cals">740 cal</span></span>
			<span className="price-cals caesar-price" ref={(node) => this.Price3 = node}><span className="price">{caesarPrice}</span><span className="cals">680 cal</span></span>
			<img src={Border} />
		</div>
	)
	}
}