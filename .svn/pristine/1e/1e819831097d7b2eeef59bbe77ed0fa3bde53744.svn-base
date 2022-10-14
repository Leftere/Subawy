import { Component } from 'react'

import neocastDataProvider from 'api/neocastDataProvider'

import Calories from 'components/Calories'


import evergreenImage from './evergreen.png'

import kidsMealCarsImage from './kids-meal-cars.png'
import kidsMealCarsLogo from './cars-logo.png'
import littlePeopleLogo from './little-people-logo.png'



import './styles.css'


@neocastDataProvider([
	'kids_meal_promo',
	'kids_meal_price'
])
export default class KidsMeal extends Component {
	constructor(props) {
		super(props)

		const { kids_meal_promo } = this.props

		this.isPremium = kids_meal_promo === 'kids_meal_promo_premium'
		this.isEvergreen = kids_meal_promo === 'kids_meal_promo_evergreen'

	}


	render() {
		const { kids_meal_price } = this.props

		return (
			<div className={`c-KidsMeal ${this.props.layout}`}>

				{/* Header */}
				<div className='c-KidsMeal_header'>

	        <div className='c-Header_row'>

	          <div className='c-Header_column'>
	            <div className='c-Menus_header c-Menus_title-inline'>
	              Kids' Meal
	            </div>

	            <div className='c-Menus_subheader c-Menus_subheader-inline'>
	            	<span className='price-currency'>$</span>{kids_meal_price}
	            </div>

	            <div className='c-Header_sub'>
	            	Includes one mini sub on 9-grain wheat, apples,<br/>& low fat white milk or Honest Kids<span className='restricted'>®*</span>
	            </div>
	          </div>

	        </div>
				</div>

				{/* List */}
				<div className='c-KidsMeal_body'>

					<div className='c-List_item'>
						<div className='c-Menus_title c-Menus_title-inline'>
							Black Forest Ham
						</div>
						<Calories>
							320
						</Calories>
					</div>

					<div className='c-List_item'>
						<div className='c-Menus_title c-Menus_title-inline'>
							Roast Beef
						</div>
						<Calories>
							340
						</Calories>
					</div>

					<div className='c-List_item'>
						<div className='c-Menus_title c-Menus_title-inline'>
							Turkey Breast
						</div>
						<Calories>
							320
						</Calories>
					</div>

					<div className='c-List_item'>
						<div className='c-Menus_title c-Menus_title-inline'>
							Veggie Delite<span className='restricted'>®</span>
						</div>
						<Calories>
							290
						</Calories>
					</div>

				</div>

				{/* Image */}
				<div
					className={`${this.props.layout} ${this.isEvergreen ? 'c-KidsMeal_sticker-evergreen' : 'c-KidsMeal_sticker'}`}
				>
					<img
						className={this.isPremium ? 'meal-premium' : 'meal-evergreen'}
						src={
							this.isPremium
								? kidsMealCarsLogo
								: evergreenImage
						}
					/>
				</div>


				{this.isPremium &&
					<img src={kidsMealCarsImage} className='kids-meal-cars-meal' />
				}


				{/* Footer */}
				<div className={`c-Menus_footer ${this.props.layout}`}>
					<div className={`deduct-wording c-Menus_caption c-Menus_caption-highlight ${!this.isPremium && 'evergreen'}`}>
						<div className='deduct-asterisk'>*</div>
						Kids' Meal with Honest<br/>Kids<span className='restricted'>®</span> deduct 60 cals.
					</div>

					{/* logo */}
					{this.isPremium &&
						<img src={littlePeopleLogo} className='little-people-logo' />
					}

					{/* Legal */}
					{this.isPremium &&
						<div className={`c-Menus_copyright ${this.props.layout}`}>
							Limited time only, while supplies last.
						</div>
					}

          {this.isPremium &&
            <div className='txt-copyright txt-default'>
              Cars 3 © 2017 Disney/Pixar <br/>
              Fisher-Price, Little People and associated trademarks and trade dress are owned by, and used under license from, MATELL ©2017 MATTEL
            </div>
          }

				</div>

			</div>
		)
	}
}
