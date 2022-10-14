import { Component } from 'react'

import neocastDataProvider from 'api/neocastDataProvider'

import LineItem from 'components/LineItem'

import './styles.css'
import coffeeImage from './coffee.png'


@neocastDataProvider([
	'cappuccino_price_12oz',
	'cappuccino_price_16oz',
	'hot_chocolate_price_12oz',
	'hot_chocolate_price_16oz',

	'drinks_coffee_price',
	'sides_coffee_16oz_price',

	'latte_price_12oz',
	'latte_price_16oz'
])
export default class HotDrinksMenu extends Component {
	render() {
		const {
			cappuccino_price_12oz,
			cappuccino_price_16oz,
			hot_chocolate_price_12oz,
			hot_chocolate_price_16oz,

			drinks_coffee_price,
			sides_coffee_16oz_price,
			
			latte_price_12oz,
			latte_price_16oz
		} = this.props;


		return (
			<div className='HotDrinksMenu c-Menus'>
				<div className='l-region l-region-drop'>

	        {/* Header */}
	        <div className='c-Header_row'>
	        	<div className='c-Menus_header c-Header_column-spacer hotDrinksTitle'>
	            Hot Drinks
	          </div>

	          <div className='c-Menus_header'>
	            <div className='c-Header_title'>
	            	12 oz.
	            </div>
	          </div>

	          <div className='c-Menus_header'>
	            <div className='c-Header_title'>
	            	<span
	            		style={{
		            		position: 'absolute',
		            		left: 18,
		            		top: -25
		            	}}
	            	>
	            		16 oz.
	            	</span>
	            </div>
	          </div>
	        </div>

	      	{/* Menu */}
	      	<div className='c-Menus'>
						{/* Coffee */}
						<LineItem
              name={'Coffee'}
              price6={drinks_coffee_price}
              price12={sides_coffee_16oz_price}
              hideCalories
            />

            <div className='c-TableList_row c-TableList_row-nested'>
							<div className='c-TableList_column'>
								<span className='c-Menus_title c-Menus_title-v-expand hotDrinkLineItem'>
									Regular
								</span>

								<span className='c-Menus_caption c-Menus_caption-highlight'>
									&nbsp;0/0 cal
								</span>
							</div>
						</div>
						<div className='c-TableList_row c-TableList_row-nested'>
							<div className='c-TableList_column'>
								<span className='c-Menus_title c-Menus_title-v-expand hotDrinkLineItem'>
									Decaf
								</span>

								<span className='c-Menus_caption c-Menus_caption-highlight'>
									&nbsp;0/0 cal
								</span>
							</div>
						</div>
						<div className='c-TableList_row c-TableList_row-nested'>
							<div className='c-TableList_column'>
								<span className='c-Menus_title c-Menus_title-v-expand hotDrinkLineItem'>
									French Vanilla
								</span>

								<span className='c-Menus_caption c-Menus_caption-highlight' style={{ display: 'block', paddingLeft: 30 }}>
									&nbsp;90/120 cal
								</span>
							</div>
						</div>

						<div className='categorySpacer' />

						{/* Latte */}
						<LineItem
              name={'Latte'}
              price6={latte_price_12oz}
              price12={latte_price_16oz}
              hideCalories
            />

            <div className='c-TableList_row c-TableList_row-nested'>
							<div className='c-TableList_column'>
								<span className='c-Menus_title c-Menus_title-v-expand hotDrinkLineItem'>
									Regular
								</span>

								<span className='c-Menus_caption c-Menus_caption-highlight'>
									&nbsp;162/190 cal
								</span>
							</div>
						</div>
						<div className='c-TableList_row c-TableList_row-nested'>
							<div className='c-TableList_column'>
								<span className='c-Menus_title c-Menus_title-v-expand hotDrinkLineItem'>
									Decaf
								</span>

								<span className='c-Menus_caption c-Menus_caption-highlight'>
									&nbsp;162/190 cal
								</span>
							</div>
						</div>
						<div className='c-TableList_row c-TableList_row-nested'>
							<div className='c-TableList_column'>
								<span className='c-Menus_title c-Menus_title-v-expand hotDrinkLineItem'>
									Mocha
								</span>

								<span className='c-Menus_caption c-Menus_caption-highlight'>
									&nbsp;270/320 cal
								</span>
							</div>
						</div>

						<div className='categorySpacer' />

						<LineItem
              name={'Cappuccino'}
              calories={'75/120'}
              price6={cappuccino_price_12oz}
              price12={cappuccino_price_16oz}
              nextLine
              indentCals={false}
            />

            <div className='categorySpacer' />

            <LineItem
              name={'Hot Chocolate'}
              calories={'240/320'}
              price6={hot_chocolate_price_12oz}
              price12={hot_chocolate_price_16oz}
              nextLine
              indentCals={false}
            />
					</div>

					<div className='freshGround'>
						Freshly ground and<br/>
						brewed per order!
					</div>

					<img className='coffeCupImage' src={coffeeImage} />

				</div>
			</div>
		)
	}
}
