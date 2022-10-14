import React from 'react'
import { Component } from 'react'
import neocastDataProvider from 'api/neocastDataProvider'
import API from 'api'
import 'gsap'
import 'gsap-then'

import './styles.css' 

import Frame1A from '../images/Frame1A.png'
import Frame1B from '../images/Frame1B.png'
import Frame2 from '../images/Frame2.jpg'
import Frame3 from '../images/Frame3.jpg'
import Frame4 from '../images/Frame4.jpg'
import Frame4Text1 from '../images/Frame4Text1.png'
import Frame4Text2 from '../images/Frame4Text2.png'
import Legal from '../images/legal.png'

@neocastDataProvider([
  'nashville_hot_wrap_price',
  'avocado_ranch_wrap_price',
])


export default class NashvilleAvocadoWraps extends Component {

	componentDidMount() {
		let timeline = new TimelineMax()

		timeline
		.set([this.Frame1, this.Frame2], {left: 0})
		.set(this.Frame1A, {left: -640})
		.set(this.Frame1B, {left: 640})
		.set(this.Frame3, {left: 1280})

		.set([this.Frame4, this.Frame4Text1, this.Frame4Text2, this.Legal, this.PriceDollars, this.PriceCents], {autoAlpha: 0})

		.to(this.Frame1, 0.5, {left: -100}, "+=2")
		.to(this.Frame1, 0.5, {left: 100}, "+=0.25")
		.to(this.Frame1, 0.5, {left: 0}, "+=0.25")

		.to(this.Frame1A, 2, {left: -1280}, "+=0.75")
		.to(this.Frame1B, 2, {left: 1280}, "-=2")

		.to(this.Frame2, 3, {left: -1280}, "+=2")
		.to(this.Frame3, 3, {left: 0}, "-=3")

		.to([this.Frame4,this.Frame4Text1], 1.5, {autoAlpha: 1}, "+=2")
		.to([this.Frame4Text2, this.PriceDollars, this.PriceCents,this.Legal], 1, {autoAlpha: 1}, "+=0.5")
	}

	render() {

	let w6_wraps_price = `$${API.loc('w6_wraps_price')}`

	let str = API.loc('w6_wraps_price') || "0.00"

    let priceCents = str.slice(-3) || "00";
    let priceDollars = str.substring(0,str.length - 3) || "0";

	return(

		<div className="c-nashville-quad">

			<img src={Frame2} ref={(node) => this.Frame2 = node} />
			<img src={Frame3} ref={(node) => this.Frame3 = node} />

			<div className="frame1" ref={(node) => this.Frame1 = node}>
				<img src={Frame1A} ref={(node) => this.Frame1A = node}/>
				<img src={Frame1B} ref={(node) => this.Frame1B = node}/>
			</div>
			
			<img src={Frame4} ref={(node) => this.Frame4 = node} />
			<img src={Frame4Text1} ref={(node) => this.Frame4Text1 = node} />
			<img src={Frame4Text2} ref={(node) => this.Frame4Text2 = node} />
			<img src={Legal} ref={(node) => this.Legal = node} />
        	
        	<p className="item-price price dollars"  ref={(node) => this.PriceDollars = node}>${priceDollars}</p>
        	<p className="item-price price cents" ref={(node) => this.PriceCents = node}>{priceCents}</p>

		</div>

	)
	}
}