import { Component } from 'react'
import 'gsap'

import neocastDataProvider from 'api/neocastDataProvider'
import API from 'api'

import './styles.css'

import Frame1Text1 from './images/Frame1Text1.png'
import Frame1Text2 from './images/Frame1Text2.png'
import Frame2BG from './images/Frame2BG.jpg'
import Grilled from './images/grilled.png'
import Frame3BG from './images/Frame3BG.jpg'
import To from './images/To.png'
import Frame4BG from './images/Frame4BG.jpg'
import Perfection from './images/Perfection.png'
import WhiteBG from './images/whiteBG.png'

import Make from './images/make.png'
import Any from './images/any.png'
import Footlong from './images/footlong.png'
import Melt from './images/melt.png'
import For from './images/for.png'
import OneDollar from './images/OneDollarMore.png'


export default class FreshMeltsInterrupt extends Component {

	componentDidMount() {

		new TimelineMax() 
		.set([this.Frame1Text1, this.Frame1Text2, this.Frame2BG, this.Frame3BG, this.Frame4BG, this.Grilled, this.To, this.Perfection, this.WhiteBG, this.Make, this.Any, this.Footlong, this.Melt, this.For, this.OneDollar], {autoAlpha: 0})
		.set([this.Frame1Text1, this.Frame1Text2, this.Make, this.Any, this.Footlong, this.Melt, this.For, this.OneDollar], {y: 100})

		.to(this.Frame1Text1, 0.5, {autoAlpha: 1, y: 0}, "+=0.5")
		.to(this.Frame1Text2, 0.5, {autoAlpha: 1, y: 0}, "+=0.5")

		.to([this.Frame2BG, this.Grilled], 0, {autoAlpha: 1}, "+=0.5")

		.to([this.Frame3BG, this.To], 0, {autoAlpha: 1}, "+=0.5")

		.to([this.Frame4BG, this.Perfection], 0, {autoAlpha: 1}, "+=0.5")

		.to([this.Frame2BG, this.Grilled, this.Frame3BG, this.To, this.Frame4BG, this.Perfection], 0, {autoAlpha: 0}, "+=1.5")
		.to(this.WhiteBG, 0, {autoAlpha: 1})

		.to(this.Make, 0.25, {autoAlpha: 1, y: 0}, "+=0.25")
		.to(this.Any, 0.25, {autoAlpha: 1, y: 0})
		.to(this.Footlong, 0.25, {autoAlpha: 1, y: 0})
		.to(this.Melt, 0.25, {autoAlpha: 1, y: 0})
		.to(this.For, 0.25, {autoAlpha: 1, y: 0})
		.to(this.OneDollar, 0.25, {autoAlpha: 1, y: 0})



	}

	render() {
	return(
		<div className="fresh-melts-interrupt-container">

			<div className="fresh-melts-interrupt-panel panel-one">
				<img src={Frame1Text1} ref={(node) => this.Frame1Text1 = node} />
				<img src={Frame1Text2} ref={(node) => this.Frame1Text2 = node} />
			</div>

			<div className="fresh-melts-interrupt-panel panel-two">
				<img src={Frame2BG} ref={(node) => this.Frame2BG = node} />
				<img src={Grilled} ref={(node) => this.Grilled = node} />

				<img src={WhiteBG} ref={(node) => this.WhiteBG = node} />
				<img src={Make} ref={(node) => this.Make = node} />
				<img src={Any} ref={(node) => this.Any = node} />
				<img src={Footlong} ref={(node) => this.Footlong = node} />
				<img src={Melt} ref={(node) => this.Melt = node} />
				<img src={For} ref={(node) => this.For = node} />
				<img src={OneDollar} ref={(node) => this.OneDollar = node} />
			</div>

			<div className="fresh-melts-interrupt-panel panel-three">
				<img src={Frame3BG} ref={(node) => this.Frame3BG = node} />
				<img src={To} ref={(node) => this.To = node} />
			</div>

			<div className="fresh-melts-interrupt-panel panel-four">
				<img src={Frame4BG} ref={(node) => this.Frame4BG = node} />
				<img src={Perfection} ref={(node) => this.Perfection = node} />
			</div>

		</div>

	)
	}
}

