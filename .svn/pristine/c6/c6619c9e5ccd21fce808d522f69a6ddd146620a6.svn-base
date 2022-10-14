/* global window */

import { Component } from 'react'

import API from 'api'

import transition from 'animations/transition'

import './styles.css'

// Images
import introCaption from '../images/intro-caption.png'
import heart from '../images/heart.svg'
import messageCaption from '../images/message-caption.svg'
import subsImage from '../images/subs.png'
import legal from '../images/legal.png'

import outroCaption from '../images/outro-caption.png'
import outroCaptionTaxed from '../images/outro-caption-taxed.png'

import confettiBg from '../images/confetti-background.png'
import confettiMiddleground from '../images/confetti-middleground.png'
import confettiForeground from '../images/confetti-foreground.png'


export default class SixDollarAnyFootlong2017w2FeaturedPromotion extends Component {
	constructor(props) {
		super(props)
		const taxed = JSON.parse(API.loc('6_dollar_any_footlong_tax', 'false'))
		this.outroCaption = outroCaption

		if (taxed) {
			this.outroCaption = outroCaptionTaxed
		}
	}


	componentDidMount() {
		const frame1El = this.frame1
		const subsEl = this.subs

		transition({rootEl: this.container, listenEl: frame1El, state:'transition:in:frame1'}).then(() => {
			window.requestTimeout(() => {
				//confetti.cleanUp()
				transition({rootEl: this.container, listenEl: subsEl, state:'transition:in:frame2'}).then(() => {
					//confetti.sprinkle()
					transition({rootEl: this.container, state: 'transition:in:frame3'})
				})
			}, 3000)
		})
	}


// onRender() {
// 	this.confetti = new Confetti({
// 		el        : this.ui.confettiWrapper[0],
// 		pieces    : 150,
// 		sizeIndex : {
// 			10 : 0.8, 
// 			13 : 0.5,
// 			15 : 0.5,
// 			20 : 0.3,
// 			40 : 0.2,
// 			60 : 0.2
// 		}
// 	})
// }


	render() {
		return (
			<div className='c-FeatPromoSixDollarAnyFootlong2017w2' ref={(node) => this.container = node }>

				<img
					className='c-FeatPromoSixDollarAnyFootlong2017w2_introCaption'   
					src={introCaption}
					data-js='frame1'
					ref={(node) => this.frame1 = node }
				/>
				
				<img className='c-FeatPromoSixDollarAnyFootlong2017w2_message' />

				<div className='c-FeatPromoSixDollarAnyFootlong2017w2_heart'>
					<img
						className='c-FeatPromoSixDollarAnyFootlong2017w2_heart_img'  
						src={heart}
					/>
				</div>

				<img
					className='c-FeatPromoSixDollarAnyFootlong2017w2_messageCaption' 
					src={messageCaption}
				/>

				<img
					className='c-FeatPromoSixDollarAnyFootlong2017w2_subs' 		  
					src={subsImage}
					data-js='subs'
					ref={(node) => this.subs = node }
				/>
				
				<div className='c-FeatPromoSixDollarAnyFootlong2017w2_subStage' />

				<img
					className='c-FeatPromoSixDollarAnyFootlong2017w2_outroCaption'   
					src={this.outroCaption}
					data-js='outroCaption'
				/>

				<img
					className='c-FeatPromoSixDollarAnyFootlong2017w2_legal'          
					src={legal}
				/>

				<img
					className='c-FeatPromoSixDollarAnyFootlong2017w2_confettiBackground'
					src={confettiBg}
				/>

				<img
					className='c-FeatPromoSixDollarAnyFootlong2017w2_confettiMiddleground'
					src={confettiMiddleground}
				/>

				<img
					className='c-FeatPromoSixDollarAnyFootlong2017w2_confettiForeground'
					src={confettiForeground}
				/>

			</div>
		)
	}
}
