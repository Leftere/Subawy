import { Component } from 'react'
import 'gsap'

import PanelOne from './images/New_Panel_1.jpg'
import PanelTwo from './images/New_Panel_2.jpg'
import PanelThree from './images/New_Panel_3.jpg'
import PanelFour from './images/New_Panel_4.jpg'

import Text1 from './images/text1.png'
import Text2 from './images/text2.png'
import Text3 from './images/text3.png'
import Text4 from './images/text4.png'
import Legal from './images/legalText.png'

import './styles.css'

export default class PitSmokedBrisketInterrupt extends Component {

	componentDidMount() {

		const imageSpeed = 10
		const textSpeed = 1

		new TimelineMax() 
			.set(this.PanelOne, { left: -300 })
			.set(this.PanelTwo, { left: -300 })
			.set(this.PanelThree, { left: -300, top: -200 })
			.set(this.PanelFour, { right: -300 })
			.set(this.Text1, { left: 0, top: 20, autoAlpha: 0 })
			.set(this.Text2, { left: 0, top: 20, autoAlpha: 0 })
			.set(this.Text3, { left: 0, top: 20, autoAlpha: 0 })
			.set(this.Text4, { left: 0, top: 20, autoAlpha: 0 })

			.to(this.PanelOne, imageSpeed, { ease:Linear.easeNone, left: 0 }, 0.5)
			.to(this.PanelTwo, imageSpeed, { ease:Linear.easeNone, left: 0 }, 0)
			.to(this.PanelThree, imageSpeed, { ease:Linear.easeNone, left: 0 }, 0)
			.to(this.PanelFour, imageSpeed, { ease:Linear.easeNone, left: 0 }, 0)
			.to(this.Text1, textSpeed, { top: -10, autoAlpha: 1 }, 2)
			.to(this.Text2, textSpeed, { top: -10, autoAlpha: 1 }, 3)	
			.to(this.Text3, textSpeed, { top: -10, autoAlpha: 1 }, 4)
			.to(this.Text4, textSpeed, { top: -10, autoAlpha: 1 }, 5)
	}

	render() {
	return(
		<div className="brisket-interrupt-container">
			<div className="brisket-interrupt-panel panel-one">
				<img className="sandwich-img" src={PanelOne} ref={(node) => this.PanelOne = node} />
				<img src={Text1} ref={(node) => this.Text1 = node} />
			</div>
			<div className="brisket-interrupt-panel panel-two">
				<img className="sandwich-img" src={PanelTwo} ref={(node) => this.PanelTwo = node} />
				<img src={Text2} ref={(node) => this.Text2 = node} />
			</div>
			<div className="brisket-interrupt-panel panel-three">
				<img className="sandwich-img" src={PanelThree} ref={(node) => this.PanelThree = node} />
				<img src={Text3} ref={(node) => this.Text3 = node} />
			</div>
			<div className="brisket-interrupt-panel panel-four">
				<img className="sandwich-img" src={PanelFour} ref={(node) => this.PanelFour = node} />
				<img src={Text4} ref={(node) => this.Text4 = node} />
				<img src={Legal} />
			</div>
		</div>

	)
	}
}

