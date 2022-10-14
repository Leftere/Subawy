import React from 'react'
import { Component } from 'react'
import neocastDataProvider from 'api/neocastDataProvider'
import API from 'api'
import 'gsap'
import 'gsap-then'

import './styles.css'

import Border from '../images/border.png'
import Frame1Text1 from '../images/Frame1Text1.png'
import Frame1Text2 from '../images/Frame1Text2.png'
import Frame2 from '../images/Frame2.jpg'
import Frame2Text from '../images/Frame2Text.png'
import Frame3 from '../images/Frame3.jpg'
import Frame3Text from '../images/Frame3Text.png'
import Frame4 from '../images/Frame4.jpg'
import Frame4Text from '../images/Frame4Text.png'
import Frame5 from '../images/Frame5.jpg'
import Frame5Text from '../images/Frame5Text.png'

@neocastDataProvider([
  'cauliflower_ranch_price',
  'cauliflower_curry_price',
  'cauliflower_fritters_price',
])

export default class CauliflowerFritters extends Component {
	
	componentDidMount() {

		let timeline = new TimelineMax();

		timeline

		.set([this.Frame1Text1, this.Frame1Text2], {autoAlpha: 0, top: "50px"})
		.set(this.Frame2, {autoAlpha: 0, left: "-250px"})
		.set([this.Frame2Text], {autoAlpha: 0})
		.set(this.Frame3, {autoAlpha: 0, left: "-400px"})
		.set([this.Frame3Text], {autoAlpha: 0})
		.set(this.Frame4, {autoAlpha: 0, left: "-640px"})
		.set([this.Frame4Text], {autoAlpha: 0})	
		.set([this.Frame5, this.Frame5Text], {autoAlpha: 0})
		.set([this.Price1, this.Price2,this.Price3], {autoAlpha: 0})

		.to(this.Frame1Text1, 0.25, {autoAlpha: 1, top: 0}, "+=0.5")
		.to(this.Frame1Text2, 0.25, {autoAlpha: 1, top: 0})
		.to([this.Frame2, this.Frame2Text], 0.5, {autoAlpha: 1}, "+=1.5")
		.to(this.Frame2, 6, {left: "50px", ease:Linear.easeNone}, "-=1")
		.to([this.Frame3, this.Frame3Text], 0.5, {autoAlpha: 1}, "-=1")
		.to(this.Frame3, 6, {left: "-600px", ease:Linear.easeNone}, "-=1")
		.to([this.Frame4, this.Frame4Text], 0.5, {autoAlpha: 1}, "-=1")
		.to(this.Frame4, 6, {left: "-400px", ease:Linear.easeNone}, "-=1")
		.to(this.Frame5, 0.5, {autoAlpha: 1}, "-=1")
		.to([this.Frame5Text, this.Price1, this.Price2, this.Price3], 0.5, {autoAlpha: 1})
		.to([this.Frame1Text1, this.Frame1Text2, this.Frame2, this.Frame2Text, this.Frame3, this.Frame4, this.Frame4Text], 0, {autoAlpha: 0})
	}

	render() {

	let cauliflowerRanchWrapPrice = `$${API.loc('cauliflower_ranch_price')}`
	let cauliflowerCurryWrapPrice = `$${API.loc('cauliflower_curry_price')}`
	let cauliflowerFrittersPrice = `$${API.loc('cauliflower_fritters_price')}`

	return(
		<div className="c-cauliflower-quad">
			<div className="frame-1">
				<img src={Frame1Text1} ref={(node) => this.Frame1Text1 = node} />
				<img src={Frame1Text2} ref={(node) => this.Frame1Text2 = node} />
				<img src={Frame2} ref={(node) => this.Frame2 = node} />
				<img src={Frame2Text} ref={(node) => this.Frame2Text = node} />
				<img src={Frame3} ref={(node) => this.Frame3 = node} />
				<img src={Frame3Text} ref={(node) => this.Frame3Text = node} />
				<img src={Frame4} ref={(node) => this.Frame4 = node} />
				<img src={Frame4Text} ref={(node) => this.Frame4Text = node} />
				<img src={Frame5} ref={(node) => this.Frame5 = node} />
				<img src={Frame5Text} ref={(node) => this.Frame5Text = node} />
				<div className="price-cal curry-price" ref={(node) => this.Price1 = node}><span className="price">{cauliflowerFrittersPrice}</span><span className="cal">790 cal</span></div>
				<div className="price-cal ranch-price" ref={(node) => this.Price2 = node}><span className="price">{cauliflowerRanchWrapPrice}</span><span className="cal">830 cal</span></div>
				<div className="price-cal dipper-price" ref={(node) => this.Price3 = node}><span className="price">{cauliflowerCurryWrapPrice}</span><span className="cal">250&#8208;520 cal</span></div>
			</div>
			<img src={Border} />
		</div>
	)
	}
}