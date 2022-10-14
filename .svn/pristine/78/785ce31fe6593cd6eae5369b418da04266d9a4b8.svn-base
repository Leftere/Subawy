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


@neocastDataProvider ([
	'geah_price_6in',
	'geah_price_12in'
])

export default class GEAH extends Component {

	componentDidMount() {
		let timeline = new TimelineMax()

		timeline
		.set([this.Frame2Dual, this.Frame3Dual, this.Frame4Dual, this.Price], {autoAlpha: 0})
		.to(this.Frame2Dual, 0.5, {autoAlpha: 1}, "+=4")
		.to([this.Frame3Dual,this.Price], 0.5, {autoAlpha: 1}, "+=3")
	}

	render() {

	let geahPrice6Inch = `$${API.loc('geah_price_6in')}`
	let geahPrice12Inch = `$${API.loc('geah_price_12in')}`

	return(
		
		<div className="c-geah-quad">

			<img src={Frame1Dual} ref={(node) => this.Frame1Dual = node} />
			<img src={Frame2Dual} ref={(node) => this.Frame2Dual = node} />
			<img src={Frame3Dual} ref={(node) => this.Frame3Dual = node} />
			
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