import { Component } from 'react'

import neocastDataProvider from 'api/neocastDataProvider'

import background from './background.jpg'
import backgroundVitamin from './background-vitamin.jpg'



@neocastDataProvider([
	'serves_coca_cola',
	'meal_deal_fountain_additional_price'
])
export default class MakeItAMeal2017w2SecondaryPromotion extends Component {
	constructor(props) {
		super(props)

		if (this.props.serves_coca_cola) {
			this.image = backgroundVitamin
		} else {
			this.image = background
		}
	}

	render() {
		const { meal_deal_fountain_additional_price } = this.props

		return (
			<div className='c-Promotion'>

				<img className='c-Promotion_background' src={this.image} />

				<div className='c-Promotion_content c-Promotion_content-constrained-sm c-Promotion_content-bottom-sm c-Promotion_content-align-left'>

					<div className='c-Promotion_item'>
						<div className='c-Promotion_item_option'>

							{meal_deal_fountain_additional_price && meal_deal_fountain_additional_price !== '0.00' &&
								<div className='c-Promotion_item_info'>
									<div className='c-Promotion_item_copy c-Promotion_item_copy-md c-Promotion_item_copy-heavy txt-brand c-Promotion_item_price'>
										&nbsp;${meal_deal_fountain_additional_price}
									</div>
								</div>
							}

						</div>

					</div>

				</div>

			</div>
		)
	}
}
