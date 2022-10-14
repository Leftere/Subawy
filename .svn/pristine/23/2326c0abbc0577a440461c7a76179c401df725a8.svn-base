import { Component } from 'react'

import neocastDataProvider from 'api/neocastDataProvider'

import image from './background.jpg'
import './styles.css'


@neocastDataProvider([
	'turkey_reuben_price_6in',
	'turkey_reuben_price_12in'
])
export default class TurkeyReuben2016w8FeaturedPromotion extends Component {
	render() {
		return (
			<div className='c-FeaturedPromotionTurkeyReuben2016w8 c-Promotion'>
				<img className='c-Promotion_background' src={image} />

				<div className='c-FeaturedPromotionTurkeyReuben2016w8_options'>
				
				<div className='c-AdjacentList'>

					<div className='c-AdjacentList_size c-AdjacentList_size-lg'>
						<div className='c-AdjacentList_size_heading'>6"</div>
						<div className='c-AdjacentList_size_values'>
							<div className='c-AdjacentList_size_value'>${this.props.turkey_reuben_price_6in}</div>
							<div className='c-AdjacentList_size_value'>430 cal</div>
						</div>
					</div>

					<div className='c-AdjacentList_size c-AdjacentList_size-lg'>
						<div className='c-AdjacentList_size_heading'>12</div>
						<div className='c-AdjacentList_size_values'>
							<div className='c-AdjacentList_size_value'>${this.props.turkey_reuben_price_12in}</div>
							<div className='c-AdjacentList_size_value'>860 cal</div>
						</div>
					</div>

				</div>

				</div>
			</div>
		)
	}
}
