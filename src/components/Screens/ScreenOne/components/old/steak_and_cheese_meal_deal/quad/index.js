import { Component } from 'react'

import transition from 'animations/transition'

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
		transition({ rootEl: this.container, state:'transition:in:frame1' }).then(() => {
			transition({ rootEl: this.container, state:'transition:in:frame2' }).then(() => {
				transition({ rootEl: this.container, state:'transition:in:static' })
			})
		})
	}


	render() {
		return (
			<div className='quad-player-full-promo'>
				<div className='c-FeaturedPromotionSteakAndCheeseMealDeal2017w1' ref={(node) => this.container = node }>

					<div className='c-FeaturedPromotionSteakAndCheeseMealDeal2017w1_frame' data-js='frame1'>
						<div className='c-FeaturedPromotionSteakAndCheeseMealDeal2017w1_frame_content'>
							<img
								className='c-FeaturedPromotionSteakAndCheeseMealDeal2017w1_frame_background'
								src={frame1Bg}
							/>
							<img
								className='c-FeaturedPromotionSteakAndCheeseMealDeal2017w1_frame_caption'
								src={frame1Caption}
							/>
						</div>
					</div>

					<div className='c-FeaturedPromotionSteakAndCheeseMealDeal2017w1_frame' data-js='frame2'>
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
