import { Component } from 'react'
import 'gsap'

import neocastDataProvider from 'api/neocastDataProvider'
import API from 'api'

import Bowls from './images/bowls.jpg';
import New from './images/new.png';
import ProteinBowls from './images/protein_bowls.png';
import Frame2_Text1 from './images/frame2_text1.png';
import Frame2_Text2 from './images/frame2_text2.png';
import Cbr from './images/cbr.png';
import Steak from './images/steak.png';
import Teriyaki from './images/teriyaki.png';
import SidePanel from './images/side_panel.jpg';


import './styles.css'

@neocastDataProvider([
    'layout_direction',
  ])



export default class ProteinBowlsInterrupt extends Component {

	componentDidMount() {

		new TimelineMax() 

		.set([this.New, this.ProteinBowls, this.Cbr, this.Steak, this.Teriyaki, this.Frame2_Text1, this.Frame2_Text2], {autoAlpha:0, y: 70})
		.set(this.Bowls, {x: 0, y: 0})
		.set(this.SidePanel, {autoAlpha: 0})
		.set(this.PanelOne, {autoAlpha: 1})

		.to(this.New, 0.5, {autoAlpha: 1, y: 0}, 0.75)
		.to(this.ProteinBowls, 0.5, {autoAlpha: 1, y: 0}, 1)
		.to(this.Bowls, 0.5, {y: 150, x: 110, width: 1920}, 2.25)
		.to([this.New, this.ProteinBowls], 0.5, {autoAlpha: 0}, 2.25)

		.to(this.Frame2_Text1, 0.5, {autoAlpha: 1, y: 0}, 2.5)
		.to(this.Frame2_Text2, 0.5, {autoAlpha: 1, y: 0}, 2.75)

		.to(this.Teriyaki, 0.5, {autoAlpha: 1, y: 0}, 3.75)
		.to(this.Cbr, 0.5, {autoAlpha: 1, y: 0}, 4)
		.to(this.Steak, 0.5, {autoAlpha: 1, y: 0}, 4.25)
		.to(this.SidePanel, 0.5, {autoAlpha: 1}, 6)
		.to(this.PanelOne, 0.5, {autoAlpha: 0}, 6)


	}

	render() {

	let direction = `${API.loc('layout_direction')}`

	return(
		<div className={"bowls-interrupt-container " + direction}>
			<div className="bowls-interrupt-panel-one ">
				<div className="panel-one-container" ref={(node) => this.PanelOne = node}>
					<div className="white-bg"></div>
					<img src={Bowls} className="bowls" ref={(node) => this.Bowls = node}/>
					<img src={New} ref={(node) => this.New = node}/>
					<img src={ProteinBowls} ref={(node) => this.ProteinBowls = node}/>
					<img src={Frame2_Text1} ref={(node) => this.Frame2_Text1 = node}/>
					<img src={Frame2_Text2} ref={(node) => this.Frame2_Text2 = node}/>
					<img src={Cbr} ref={(node) => this.Cbr = node}/>
					<img src={Steak} ref={(node) => this.Steak = node}/>
					<img src={Teriyaki} ref={(node) => this.Teriyaki = node}/>
					<div className="black-bg" ref={(node) => this.BlackBG = node}/>
				</div>

				<div className="side-panel-container"  ref={(node) => this.SidePanel = node} >
					<img className="side-panel" src={SidePanel}/>
				</div>
			</div>
			<div className="bowls-interrupt-panel-two">

			</div>
		</div>

	)
	}
}

