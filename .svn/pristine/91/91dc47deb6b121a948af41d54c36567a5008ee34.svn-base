import React from 'react'
import { Component } from 'react'
import neocastDataProvider from 'api/neocastDataProvider'
import API from 'api'
import 'gsap'
import 'gsap-then'

import './styles.css' 

import Border from '../images/border.png'
import Frame1 from '../images/Frame1.jpg'
import Frame3Text from '../images/Frame3Text.png'
import EndFrame from '../images/EndFrame.jpg'
import SubNoDrip from '../images/subNoDrip.png'
import SubDrip from '../images/subDrip.png'
import Frame3BG from '../images/Frame3BG.jpg'
import Frame3Foreground from '../images/Frame3Foreground.png'
import Frame4 from '../images/Frame4.jpg'
import Frame4Text from '../images/Frame4Text.png'
import Frame5Text from '../images/Frame5Text.png'
import Frame6Text from '../images/Frame6Text.png'
import Legal from '../images/Legal.png'
import EndFrameText from '../images/EndFrameText.png'

@neocastDataProvider([
  'southern_french_dip_price_6in',
  'southern_french_dip_price_12in',
  'french_dip_classic_price_6in',
  'french_dip_classic_price_12in'
])

export default class FrenchDip extends Component {

	componentDidMount() {
		let timeline = new TimelineMax()

		timeline
		.set([this.Frame3BG, this.Frame3Foreground, 
			this.SubNoDrip, this.SubDrip, this.Frame3Text, this.Frame4, this.Frame4Text, this.Frame5Text, this.Frame6Text,this.EndFrame,this.EndFrameText,this.EndFrameText2,this.EndFrameText3,this.Legal], {autoAlpha: 0})
		.set(this.SubNoDrip, {top: -500})
		.set(this.SubDrip, {top: -300})
		.set(this.Frame4, {width: "1820px", left: -210, top: -180})
		.set(this.Frame5Text, {left: -13, top: -35})
		

		.to([this.Border, this.Frame3BG, this.Frame3Foreground, this.SubNoDrip, this.Frame3Text], 1, {autoAlpha: 1}, "+=5")
		.to(this.SubNoDrip, 1, {top: -300}, "+=0.25")
		.to(this.SubDrip, 0, {autoAlpha: 1})
		.to(this.SubNoDrip, 0, {autoAlpha: 0})
		.to(this.SubDrip, 1, {top: -700})

		.to(this.Frame4, 0.5, {autoAlpha: 1}, "+=1")
		.to(this.Frame5Text, 0.5, {autoAlpha: 1}, "-=0.5")
		.to(this.Frame4, 0.5, {top: -300, left: -260}, "+=1")
		.to(this.Frame5Text, 0.5, {autoAlpha: 0}, "-=0.5")
		.to(this.Frame6Text, 0.5, {autoAlpha: 1}, "-=0.5")

		.to(this.EndFrame, 0.5, {autoAlpha: 1}, "+=1.5")
		.to([this.EndFrameText, this.EndFrameText2, this.EndFrameText3,this.Legal], 0.5, {autoAlpha: 1}, "+=0.25")
	}

	render() {

	let southernFrenchDipPrice6Inch = `$${API.loc('southern_french_dip_price_6in')}`
	let southernFrenchDipPrice12Inch = `$${API.loc('southern_french_dip_price_12in')}`

	let classicFrenchDipPrice6Inch = `$${API.loc('french_dip_classic_price_6in')}`
	let classicFrenchDipPrice12Inch = `$${API.loc('french_dip_classic_price_12in')}`

	return(

		<div className="c-french-dip-quad">

			<img src={Frame1} />

			<img src={Frame3BG} ref={(node) => this.Frame3BG = node} />
			<img src={SubNoDrip} ref={(node) => this.SubNoDrip = node} />
			<img src={SubDrip} ref={(node) => this.SubDrip = node} />
			<img src={Frame3Foreground} ref={(node) => this.Frame3Foreground = node} />
			<img src={Frame3Text} ref={(node) => this.Frame3Text = node} />

			<img src={Frame4} ref={(node) => this.Frame4 = node} />
			<img src={Frame4Text} ref={(node) => this.Frame4Text = node} />
 			<img src={Frame5Text} ref={(node) => this.Frame5Text = node} />
			<img src={Frame6Text} ref={(node) => this.Frame6Text = node} />

			<img src={EndFrame} ref={(node) => this.EndFrame = node} />
			<img src={EndFrameText} ref={(node) => this.EndFrameText = node} />
			<img src={Legal} ref={(node) => this.Legal = node} />

			<div className="classic-dip-prices" ref={(node) => this.EndFrameText2 = node}>
				<span className="price">{classicFrenchDipPrice6Inch}<span className="calories">350 cal</span></span>
				<span className="price">{classicFrenchDipPrice12Inch}<span className="calories">700 cal</span></span>
			</div>

			<div className="southern-dip-prices" ref={(node) => this.EndFrameText3 = node}>
				<span className="price">{southernFrenchDipPrice6Inch}<span className="calories">450 cal</span></span>
				<span className="price">{southernFrenchDipPrice12Inch}<span className="calories">900 cal</span></span>
			</div>

			<img src={Border} ref={(node) => this.Border = node} />

		</div>
	)
	}
}