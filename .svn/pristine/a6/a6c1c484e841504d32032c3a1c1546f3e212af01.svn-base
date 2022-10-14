import React from 'react'
import { Component } from 'react'
import neocastDataProvider from 'api/neocastDataProvider'
import API from 'api'
import 'gsap'
import 'gsap-then'

import './styles.css' 

import Frame1Dual from '../images/Frame1Dual.jpg'
import Frame2Dual from '../images/Frame2Dual.jpg'
import Frame3Dual from '../images/Frame3Dual.jpg'
import Frame4Dual from '../images/Frame4Dual.jpg'
import Frame5Dual from '../images/Frame5Dual.jpg'
import Frame6Dual from '../images/Frame6Dual.jpg'

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
		.set([this.Frame2Dual,this.Frame3Dual,this.Frame4Dual,this.Frame5Dual,this.Frame6Dual,this.EndFrameText2,this.EndFrameText3], {autoAlpha: 0})
		.to(this.Frame2Dual, 0.5, {autoAlpha: 1}, "+=4")
		.to(this.Frame3Dual, 0.5, {autoAlpha: 1}, "+=2")
		.to(this.Frame4Dual, 0.5, {autoAlpha: 1}, "+=2")
		.to(this.Frame5Dual, 0.5, {autoAlpha: 1}, "+=2")
		.to([this.Frame6Dual,this.EndFrameText2,this.EndFrameText3], 0.5, {autoAlpha: 1}, "+=3")
	}

	render() {

	let southernFrenchDipPrice6Inch = `$${API.loc('southern_french_dip_price_6in')}`
	let southernFrenchDipPrice12Inch = `$${API.loc('southern_french_dip_price_12in')}`

	let classicFrenchDipPrice6Inch = `$${API.loc('french_dip_classic_price_6in')}`
	let classicFrenchDipPrice12Inch = `$${API.loc('french_dip_classic_price_12in')}`

	return(

		<div className="c-french-dip-dual">

			<img src={Frame1Dual} ref={(node) => this.Frame1Dual = node} />
			<img src={Frame2Dual} ref={(node) => this.Frame2Dual = node} />
			<img src={Frame3Dual} ref={(node) => this.Frame3Dual = node} />
			<img src={Frame4Dual} ref={(node) => this.Frame4Dual = node} />
			<img src={Frame5Dual} ref={(node) => this.Frame5Dual = node} />
			<img src={Frame6Dual} ref={(node) => this.Frame6Dual = node} />

			<div className="classic-dip-prices" ref={(node) => this.EndFrameText2 = node}>
				<span className="price">{classicFrenchDipPrice6Inch}<span className="calories">350 cal</span></span>
				<span className="price">{classicFrenchDipPrice12Inch}<span className="calories">700 cal</span></span>
			</div>

			<div className="southern-dip-prices" ref={(node) => this.EndFrameText3 = node}>
				<span className="price">{southernFrenchDipPrice6Inch}<span className="calories">450 cal</span></span>
				<span className="price">{southernFrenchDipPrice12Inch}<span className="calories">900 cal</span></span>
			</div>

		</div>
	)
	}
}