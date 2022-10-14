import { Component } from 'react'

import 'gsap'
import 'gsap-then'

import API from 'api'
import neocastDataProvider from 'api/neocastDataProvider'

import './styles.css'

// Images
import frame1Bg from '../images/frame1-background.jpg'
import frame1Caption from '../images/frame1-caption.png'

import frame2Bg from '../images/frame2-background.jpg'
import frame2Caption from '../images/frame2-caption.png'

import staticBg from '../images/static-background.jpg'
import staticBgRotf from '../images/static-background-ROTF.jpg'


@neocastDataProvider([
	'steak_and_cheese_meal_deal_price'
])
export default class SteakAndCheeseMealDeal2017w1FeaturedPromotion extends Component {

	constructor(props) {
		super(props)

		this.isValidPrice = API.v.loc('steak_and_cheese_meal_deal_price').isValid

		this.background = staticBg

		/**
		 * Different background if ROTF
		 */
		if (API.loc('shows_restaurant_of_future', false)) {
			this.background = staticBgRotf
		}
	}


	componentDidMount() {
		const fadeInTime = 0.8
		const textInTime = 0.5
		const delayTime = 0.4

		new TimelineMax({ delay: 0.5 })
			.set(this.frame2, { opacity: 0 })

			.to(this.frame1,     fadeInTime, { opacity : 1 })
			.to(this.frame1Text, textInTime, { opacity : 1, top:'13px', delay: delayTime })

			.to(this.frame2, fadeInTime, { opacity : 1, delay : 2 })

			.to(this.frame1, fadeInTime, {opacity : 0, delay : 0.5 })
			.to(this.frame2, fadeInTime, { opacity : 0, delay : 0.5 })
	}


	render() {
		return (
			<div className='dual-player-full-promo'>
				<div className='c-FeaturedPromotionSteakAndCheeseMealDeal2017w1'>

					<div className='c-FeaturedPromotionSteakAndCheeseMealDeal2017w1_frame' data-js='frame1' ref={(node) => this.frame1 = node }>
						<div className='c-FeaturedPromotionSteakAndCheeseMealDeal2017w1_frame_content'>
							<img
								className='c-FeaturedPromotionSteakAndCheeseMealDeal2017w1_frame_background'
								src={frame1Bg}
								
							/>
							<img
								className='c-FeaturedPromotionSteakAndCheeseMealDeal2017w1_frame_caption'
								src={frame1Caption}
								ref={(node) => this.frame1Text = node }
							/>
						</div>
					</div>

					<div className='c-FeaturedPromotionSteakAndCheeseMealDeal2017w1_frame' data-js='frame2' ref={(node) => this.frame2 = node }>
						<div className='c-FeaturedPromotionSteakAndCheeseMealDeal2017w1_frame_content'>
							<img
								className='c-FeaturedPromotionSteakAndCheeseMealDeal2017w1_frame_background'
								src={frame2Bg}
								
							/>
							<img
								className='c-FeaturedPromotionSteakAndCheeseMealDeal2017w1_frame_caption'
								src={frame2Caption}
							/>
						</div>
					</div>

					<div className='c-FeaturedPromotionSteakAndCheeseMealDeal2017w1_static' data-js='staticFrame'>
						<div className='c-FeaturedPromotionSteakAndCheeseMealDeal2017w1_static_content' data-js='staticFrame'>

							<img
								className='c-FeaturedPromotionSteakAndCheeseMealDeal2017w1_static_background'
								src={this.background}
							/>

							<div className='c-FeaturedPromotionSteakAndCheeseMealDeal2017w1_static_value'>
								MAKE IT<br /> A MEAL <br />
								{this.isValidPrice &&
									<span>ADD ${this.props.steak_and_cheese_meal_deal_price}</span>
								}
							</div>
						</div>
					</div>

				</div>
			</div>
		)
	}
}
