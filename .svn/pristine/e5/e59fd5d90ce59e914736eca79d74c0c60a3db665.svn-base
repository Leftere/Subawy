import { Component } from 'react'

import 'gsap'
import 'gsap-then'

import API from 'api'

import './styles.css'

// Images
import introCaption from '../images/intro-caption.svg'
import heart from '../images/heart.svg'
import messageCaption from '../images/message-caption.svg'

import chickenBaconRanchMeltSub from '../images/chickenBaconRanchMeltSub.png'
import replacementSub from '../images/replacementSub.png'
import rotisserieStyleChickenSub from '../images/rotisserieStyleChickenSub.png'

import legal from '../images/legal.png'

import outroCaption from '../images/outro-caption.svg'
import outroCaptionTaxed from '../images/outro-caption-taxed.svg'

import confettiFull from '../images/confetti-full.png'
import confettiPartial from '../images/confetti-partial.png'


export default class SixDollarAnyFootlong2017w2 extends Component {
	
	constructor(props) {
		super(props)
		const taxed = JSON.parse(API.loc('6_dollar_any_footlong_tax', 'false'))
		this.outroCaption = outroCaption

		if (taxed) {
			this.outroCaption = outroCaptionTaxed
		}
	}

	componentDidMount() {
		const {
			introCaptionEl,

			heartEl,
			messageCaptionEl,
			chickenBaconRanchMeltSubEl,
			italianBMTSubEl,
			rotisserieStyleChickenSubEl,
			subStageEl,

			outroCaptionEl,
			legalEl,

			confettiFullEl,
			confettiPartialEl
		} = this

		new TimelineMax()
			// reset all elements on the resting frame so we can start over from scratch
			.set(confettiPartialEl,           { opacity : 0    })
			.set(outroCaptionEl,              { opacity : 0    })
			.set(legalEl,                     { opacity : 0    })
			.set(rotisserieStyleChickenSubEl, { opacity : 0    })
			.set(subStageEl,                  { bottom  : -200 })


			// fade in the intro caption and full container confetti background
			.to(introCaptionEl, 2, { opacity: 1 }, 1)
			.to(confettiFullEl, 2, { opacity: 1 }, 1)
			// fade out the intro caption and full container confetti background
			.to(introCaptionEl, 2, { opacity: 0 }, 4)
			.to(confettiFullEl, 2, { opacity: 0 }, 4)


			// fade in the partial confetti, heart and main message caption, slide the sub stage up from the bottom of the screen
			.to(confettiPartialEl,          2, { opacity: 1 }, 6)
			.to(heartEl,                    2, { opacity: 1 }, 6)
			.to(messageCaptionEl,           2, { opacity: 1 }, 6)
			.to(subStageEl,                 2, { bottom : 0 }, 6)
			// fade in the first sub
			.to(chickenBaconRanchMeltSubEl, 2, { opacity: 1 }, 8)


			// fade out the first sub
			.to(chickenBaconRanchMeltSubEl,  1, { opacity: 0 }, 12)
			// fade in the second sub
			.to(italianBMTSubEl,             1, { opacity: 1 }, 13)


			// fade out the second sub
			.to(italianBMTSubEl,             1, { opacity: 0 }, 17)
			// fade in the third sub
			.to(rotisserieStyleChickenSubEl, 1, { opacity: 1 }, 18)


			// fade out the partial confetti, heart
			.to(heartEl,          2, { opacity: 0 }, 20)
			.to(messageCaptionEl, 2, { opacity: 0 }, 20)

			// fade in outro caption and legal text
			.to(outroCaptionEl,   2, { opacity: 1 }, 22)
			.to(legalEl,          2, { opacity: 1 }, 22)
	}

	render() {
		return (
			<div className='c-FeatPromoSixDollarAnyFootlong2017w2'>

			<img
				className='c-FeatPromoSixDollarAnyFootlong2017w2_introCaption'   
				src={introCaption} 
				data-js='introCaption'
				ref={(node) => this.introCaptionEl = node }
			/>

			<img
				className='c-FeatPromoSixDollarAnyFootlong2017w2_heart'          
				src={heart}
				data-js='heart'
				ref={(node) => this.heartEl = node }
			/>

			<img
				className='c-FeatPromoSixDollarAnyFootlong2017w2_messageCaption' 
				src={messageCaption}
				data-js='messageCaption'
				ref={(node) => this.messageCaptionEl = node }
			/>

			<img
				className='c-FeatPromoSixDollarAnyFootlong2017w2_subs c-FeatPromoSixDollarAnyFootlong2017w2_subs-chickenBaconRanchMelt'  
				src={chickenBaconRanchMeltSub}
				data-js='chickenBaconRanchMeltSub'
				ref={(node) => this.chickenBaconRanchMeltSubEl = node }
			/>

			<img
				className='c-FeatPromoSixDollarAnyFootlong2017w2_subs c-FeatPromoSixDollarAnyFootlong2017w2_subs-italianBMT'             
				src={replacementSub}    
				data-js='italianBMTSub'
				ref={(node) => this.italianBMTSubEl = node }
			/>

			<img
				className='c-FeatPromoSixDollarAnyFootlong2017w2_subs c-FeatPromoSixDollarAnyFootlong2017w2_subs-rotisserieStyleChicken' 
				src={rotisserieStyleChickenSub}
				data-js='rotisserieStyleChickenSub'
				ref={(node) => this.rotisserieStyleChickenSubEl = node}
			/>

			<div
				className='c-FeatPromoSixDollarAnyFootlong2017w2_subStage'       
				data-js='subStage'
				ref={(node) => this.subStageEl = node }
			/>

			<img
				className='c-FeatPromoSixDollarAnyFootlong2017w2_outroCaption'    
				src={this.outroCaption}
				data-js='outroCaption'
				ref={(node) => this.outroCaptionEl = node }
			/>

			<img
				className='c-FeatPromoSixDollarAnyFootlong2017w2_legal'           
				src={legal} 
				data-js='legal'
				ref={(node) => this.legalEl = node }
			/>

			<img
				className='c-FeatPromoSixDollarAnyFootlong2017w2_confettiFull'    
				src={confettiFull}
				data-js='confettiFull'
				ref={(node) => this.confettiFullEl = node}
			/>

			<img
				className='c-FeatPromoSixDollarAnyFootlong2017w2_confettiPartial' 
				src={confettiPartial}
				data-js='confettiPartial'
				ref={(node) => this.confettiPartialEl = node }
			/>

			</div>
		)
	}
}