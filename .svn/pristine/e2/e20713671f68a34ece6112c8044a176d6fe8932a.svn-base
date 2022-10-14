import { Component } from 'react'

import 'gsap'
import 'gsap-then'

import './styles.css'

import Frame1Text1 from './images/Frame1Text1.png'
import Frame1Text2 from './images/Frame1Text2.png'
import SubLeft from './images/SubLeft1.png'
import SubRight from './images/SubRight1.png'
import Cheese from './images/Cheese.png'
import Frame2Text1 from './images/Frame2Text1.png'
import Frame2Text2 from './images/Frame2Text2.png'
import Legal from './images/Legal.png'

export default class CheesyGarlicInterrupt2 extends Component {

	componentDidMount() {
		let timeline = new TimelineMax()

		timeline
		.set(this.Frame1Text1, {left: 0})
		.set(this.Frame1Text2, {left: 5760})
		.set(this.Frame2Text1, {left: 1920, top: 150, autoAlpha: 0})
		.set(this.Frame2Text2, {left: 3840, top: 150, autoAlpha: 0})
		.set(this.SubLeft, {left: 1850, webkitMaskPosition: "0px 0px"})
		.set(this.SubRight, {left: 3450, webkitMaskPosition: "0px 0px"})
		.set(this.Cheese, {left: 3100, width: "0px", height: "1080px"})
		.set(this.Legal, {left: 5760})

		.to(this.SubLeft, 1, {left: 1400}, "+=3")
		.to(this.SubRight, 1, {left: 3800}, "-=1")
		.to(this.Cheese, 0.75, {left: 3100, width: "900px", height: "1080px"}, "-=1.1")

		.to(this.SubLeft, 1.5, {left:0, webkitMaskPosition: "-140px 0px"}, "+=0.5")
		.to(this.SubRight, 1.5, {left: 5400, webkitMaskPosition: "360px 0px"}, "-=1.5")
		.to([this.Frame2Text1, this.Frame2Text2], 1, {top: 0, autoAlpha: 1}, "-=1.5")
		.to([this.Frame1Text1, this.Frame1Text2], 1, {autoAlpha: 0},  "-=1.5")
		.to(this.Cheese, 0.25, {autoAlpha: 0}, "-=1.5")
	}

	render() {
	return(

		<div className="c-ucgb2-int">
			<img src={Frame1Text1} ref={(node) => this.Frame1Text1 = node} />
			<img src={Frame1Text2} ref={(node) => this.Frame1Text2 = node} />
			<img src={Frame2Text1} ref={(node) => this.Frame2Text1 = node} />
			<img src={Frame2Text2} ref={(node) => this.Frame2Text2 = node} />
			<img src={SubRight} ref={(node) => this.SubRight = node}  className="sub-right" />
			<img src={Cheese} ref={(node) => this.Cheese = node} className="cheese" />
			<img src={SubLeft} ref={(node) => this.SubLeft = node} className="sub-left" />
			<img src={Legal} ref={(node) => this.Legal = node} />
		</div>
	)
	}
}