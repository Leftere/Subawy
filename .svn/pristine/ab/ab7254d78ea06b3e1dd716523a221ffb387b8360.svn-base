import React from 'react'
import { Component } from 'react'
import neocastDataProvider from 'api/neocastDataProvider'
import API from 'api'
import 'gsap'
import 'gsap-then'

import './styles.css' 

import Cheesesteaks from '../images/cheesesteaks.jpg'
import Frame1 from '../images/Frame1.jpg'

import Frame2Window from '../images/Frame2Window.png'
import Frame2New from '../images/Frame2New.png'

import Frame2Border from '../images/Frame2Border.png'
import Frame2Sub from '../images/Frame2Sub.jpg'

import Frame3Border from '../images/Frame3Border.png'
import Frame3Sub from '../images/Frame3Sub.jpg'

import Frame3 from '../images/Frame3.jpg'
import Frame3Window from '../images/Frame3Window.png'

import Frame4Text1 from '../images/Frame4Text1.png'
import Frame4Text2 from '../images/Frame4Text2.png'

import FinalFrame from '../images/FinalFrame.jpg'
import FinalFrameText from '../images/FinalFrameText.png'

@neocastDataProvider([
  'carne_asada_price_6in',
  'carne_asada_price_12in',
  'double_provolone_price_6in',
  'double_provolone_price_12in'
])

export default class Cheesesteak extends Component {

	componentDidMount() {

		let timeline = new TimelineMax()

		timeline

		.set([this.Frame2Border,this.Frame2Sub,this.Frame3Border,this.Frame3Sub,this.FinalFrame, this.FinalFrameText,this.CAPrices,this.PPrices], {autoAlpha: 0})
		.set([this.Frame2Sub, this.Frame3Sub], {width: "1500px", top: -190})
		.set(this.Frame2Sub, {top: -80})

		.to([this.Frame2Sub, this.Frame2Border], 0.5, {autoAlpha: 1}, "+=5")
		.to(this.Frame2Sub, 8, {left: -200})

		.to([this.Frame3Sub, this.Frame3Border], 0.5, {autoAlpha: 1}, "-=2")
		.to(this.Frame3Sub, 8, {left: -200}, "-=5")

		.to(this.FinalFrame, 1, {autoAlpha: 1}, "-=1")
		.to([this.FinalFrameText, this.CAPrices, this.PPrices], 1, {autoAlpha: 1}, "+=0.5")
	}

	render() {

	let carneSixInchPrice = `$${API.loc('double_provolone_price_6in')}`
    let carneTwelveInchPrice = `$${API.loc('double_provolone_price_12in')}`

	let provoloneSixInchPrice = `$${API.loc('carne_asada_price_6in')}`
    let provoloneTwelveInchPrice = `$${API.loc('carne_asada_price_12in')}`

	return(
		<div className="c-cheesesteak-quad">
				<img src={Frame1} ref={(node) => this.Frame1 = node} />
				
				<img src={Frame2Sub} ref={(node) => this.Frame2Sub = node} />
				<img src={Frame2Border} ref={(node) => this.Frame2Border = node} />
				
				<img src={Frame3Sub} ref={(node) => this.Frame3Sub = node} />
				<img src={Frame3Border} ref={(node) => this.Frame3Border = node} />

				<img src={FinalFrame} ref={(node) => this.FinalFrame = node} />
				<img src={FinalFrameText} ref={(node) => this.FinalFrameText = node} />

				<div className="carne-asada-prices" ref={(node) => this.CAPrices = node}>
	            	<div className="price">{carneSixInchPrice} <span className="calories">510 cal</span></div>
	            	<div className="price">{carneTwelveInchPrice} <span className="calories">1020 cal</span></div>
	          	</div>

	          	<div className="provolone-prices" ref={(node) => this.PPrices = node}>
	            	<div className="price">{provoloneSixInchPrice} <span className="calories">490 cal</span></div>
	            	<div className="price">{provoloneTwelveInchPrice} <span className="calories">980 cal</span></div>
	          	</div>
		</div>
	)
	}
}