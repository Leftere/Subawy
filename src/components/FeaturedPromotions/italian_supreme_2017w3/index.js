import { Component } from 'react'

import API from 'api'
import neocastDataProvider from 'api/neocastDataProvider'

import background from './background.jpg'
import backgroundSodium from './background-sodium.jpg'
import './styles.css'


@neocastDataProvider([
	'italian_supreme_price_6in',
	'italian_supreme_price_12in',
	'mozzarella_price_6in',
	'mozzarella_price_12in'
])
export default class ItalianSupreme2017w3 extends Component {
	constructor(props) {
		super(props)

		const hasSodium = API.loc('store_plus_sodium', false)

		if (hasSodium) {
			this.image = backgroundSodium
		} else {
			this.image = background
		}
	}

	render() {
		return (
			<div className='c-FeaturedPromotionItalianSupreme2017w3'>

				<div className='c-FeaturedPromotionItalianSupreme2017w3'>
					<img src={this.image} />
				</div>

				<div className='c-FeaturedPromotionItalianSupreme2017w3_items'>

					<div className='c-FeaturedPromotionItalianSupreme2017w3_item'>
						<div className='c-FeaturedPromotionItalianSupreme2017w3_item_price'>

							<div className='italian-supreme-6in'>
								${this.props.italian_supreme_price_6in}
							</div>

							<div className='italian-supreme-12in'>
								${this.props.italian_supreme_price_12in}
							</div>

						</div>
					</div>

					<div className='c-FeaturedPromotionItalianSupreme2017w3_item'>
						<div className='c-FeaturedPromotionItalianSupreme2017w3_item_price'>

							<div className='italian-supreme-mozz-6in'>
								${this.props.mozzarella_price_6in}
							</div>

							<div className='italian-supreme-mozz-12in'>
								${this.props.mozzarella_price_12in}
							</div>

						</div>
					</div>

				</div>

			</div>
		)
	}
}
