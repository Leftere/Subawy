import { Component } from 'react'

import 'gsap'
import 'gsap-then'

import API from 'api'

import './styles.css'

import Frame1 from '../images/frame1.jpg'
import Frame2 from '../images/frame2.jpg'
import Frame3 from '../images/frame3.jpg'
import Frame4 from '../images/feedingFrame.jpg'
import Frame5 from '../images/frame4.jpg'

export default class WSDFeaturedPromotionDual extends Component {

	constructor(props) {
		super(props)
	}

	componentDidMount() {
    var master = new TimelineMax()
    var panel = new TimelineLite()
    var delay = 3;

    panel
      .set(this.Frame1, {opacity: 1})
      .set(this.Frame2, {opacity: 0})
      .set(this.Frame3, {opacity: 0})
      .set(this.Frame4, {opacity: 0})
      .set(this.Frame5, {opacity: 0})
      .to(this.Frame1, 0, {opacity: 1}, 0)
      .to(this.Frame2, 0.5, {opacity: 1}, "+=" + delay)
      .to(this.Frame3, 0.5, {opacity: 1}, "+=" + delay)
      .to(this.Frame4, 0.5, {opacity: 1}, "+=" + delay)
      .to(this.Frame5, 0.5, {opacity: 1}, "+=" + delay)

    master
      .add(panel)
	}

	render() {
		return (
			<div className='c-WSDFeaturedPromotionDual'>

        <img src={Frame1} className='Frame1 frame' ref={(node) => this.Frame1 = node }/>
        <img src={Frame2} className='Frame2 frame' ref={(node) => this.Frame2 = node }/>
        <img src={Frame3} className='Frame3 frame' ref={(node) => this.Frame3 = node }/>
        <img src={Frame4} className='Frame4 frame' ref={(node) => this.Frame4 = node }/>
        <img src={Frame5} className='Frame5 frame' ref={(node) => this.Frame5 = node }/>

			</div>
		)
	}
}
