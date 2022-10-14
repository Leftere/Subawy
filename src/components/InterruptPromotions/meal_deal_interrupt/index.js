import { Component } from 'react'

import API from 'api'

import transition from 'animations/transition'

// Images
import intChips from './images/int-chips.png'
import chip1 from './images/Chip_1.png'
import chip2 from './images/Chip_2.png'
import chip4 from './images/Chip_4.png'
import ice from './images/int-ice.png'

import cup from './images/cup.png'
import cupRotf from './images/cup-ROTF.png'

import './styles.css'


export default class MealDeal2016w8InterruptPromotion extends Component {

	constructor(props) {
		super(props)

		/**
		 * Conditionally use an image
		 */
		this.cupImg = cup
		if (API.loc('shows_restaurant_of_future', false)) {
			this.cupImg = cupRotf
		}
	}

	componentDidMount() {
		const {
			rootEl
		} = this

		setTimeout(() => {
			transition({ rootEl, state:'transition:in:opacityIn' }).then(() => {
				transition({ rootEl, state:'transition:in:bumpIn1' }).then(() => {
					transition({ rootEl, state:'transition:in:bumpIn2' }).then(() => {
						transition({ rootEl, state:'transition:in:opacityOut' })
					})
				})
			})
		}, 1000)
	}

	render() {
		return (
			<div className='mealdeal-kidsmeal-interrupt' ref={(node) => this.rootEl = node }>

				<img
					className='int-chips'
					data-js='frameEnd'
					src={intChips}
				/>

				<img
					className='int-chip int-chip-1'
					src={chip1}
				/>

				<img
					className='int-chip int-chip-2' 
					src={chip2}
				/>

				<img
					className='int-chip int-chip-3'
					src={chip4}
				/>

				<img
					className='int-watersplash'
					src={this.cupImg}
				/>

				<img
					className='int-ice ice-1'
					data-js='frame3End'
					src={ice}
				/>

				<img
					className='int-ice ice-2'
					src={ice}
				/>

			</div>
		)
	}
}
