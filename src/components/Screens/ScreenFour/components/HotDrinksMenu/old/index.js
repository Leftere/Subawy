import { Component } from 'react'

import API from 'api'
import neocastDataProvider from 'api/neocastDataProvider'

import drinksData from './data'
import LineItem from 'components/Common/LineItem'

import './styles.css'


@neocastDataProvider([
  // Fountain sizes
  'drinks_fountain_price_20oz',
  'drinks_fountain_price_21oz',
  'drinks_fountain_price_30oz',
  'drinks_fountain_price_40oz',


  'show_20_oz_drink',
  'show_21_oz_drink',
  'show_30_oz_drink',
  'show_40_oz_drink',

  // Bottled
  'serves_bottled_drinks',
  'drinks_bottle_price',

  // Second column
  'drinks_milk_price',

  // Local options
  'drinks_local_option_one',
  'drinks_local_option_two',
  'drinks_local_option_three',
  'drinks_local_option_four',

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

  constructor(props) {
    super(props)

    const {
      drinks_local_option_one,
      drinks_local_option_two,
      drinks_local_option_three,
      drinks_local_option_four
    } = this.props;

    /**
     * Check if the price for 21 oz is valid, otherwise don't show it
     */
    if (API.v.loc('drinks_fountain_price_21oz').isValid) {
      this.has21oz = true
    }

    /**
     * Check to see if this store carries 40 oz drinks
     */
    if (API.v.loc('drinks_fountain_price_40oz').isValid) {
      this.has40oz = true
    }

    /**
     * Local options
     */
    // Option 1
    this.localOption1 = API.loc(drinks_local_option_one);
    const localOption1Data = drinksData.find((d) => d.apiMap === drinks_local_option_one)

    if (this.localOption1 && localOption1Data) {
      this.localOption1 = localOption1Data.label
      this.local1Cal = localOption1Data.sizes[0].calories || 0
      this.local1Price = localOption1Data.sizes[0].price
    }

    // Option 2
    this.localOption2 = API.loc(drinks_local_option_two);
    const localOption2Data = drinksData.find((d) => d.apiMap === drinks_local_option_two)

    if (this.localOption2 && localOption2Data) {
      this.localOption2 = localOption2Data.label
      this.local2Cal = localOption2Data.sizes[0].calories || 0
      this.local2Price = localOption2Data.sizes[0].price
    }

    // Option 3
    this.localOption3 = API.loc(drinks_local_option_three);
    const localOption3Data = drinksData.find((d) => d.apiMap === drinks_local_option_three)

    if (this.localOption3 && localOption3Data) {
      this.localOption3 = localOption3Data.label
      this.local3Cal = localOption3Data.sizes[0].calories || 0
      this.local3Price = localOption3Data.sizes[0].price
    }

    // Option 4
    this.localOption4 = API.loc(drinks_local_option_four);
    const localOption4Data = drinksData.find((d) => d.apiMap === drinks_local_option_four)

    if (this.localOption4 && localOption4Data) {
      this.localOption4 = localOption4Data.label
      this.local4Cal = localOption4Data.sizes[0].calories || 0
      this.local4Price = localOption4Data.sizes[0].price
    }
  }

	render() {
		const {
			cappuccino_price_12oz,
			cappuccino_price_16oz,
			hot_chocolate_price_12oz,
			hot_chocolate_price_16oz,

      show_20_oz_drink,
      show_21_oz_drink,
      show_30_oz_drink,
      show_40_oz_drink,

			drinks_coffee_price,
			sides_coffee_16oz_price,

			latte_price_12oz,
			latte_price_16oz,
      drinks_fountain_price_20oz,
      drinks_fountain_price_21oz,
      drinks_fountain_price_30oz,
      drinks_fountain_price_40oz,

      serves_bottled_drinks,
      drinks_bottle_price,
      drinks_milk_price
		} = this.props;

    let fountainHeader = "Fountain: ";
    let fountainPrice = "";
    let fountainCals = "";

    if (show_20_oz_drink)
    {
      fountainHeader += "20oz./";
      fountainPrice += `${drinks_fountain_price_20oz}/`;
      fountainCals += '0-290 cal/';
    }

    if (this.has21oz && show_21_oz_drink)
    {
      fountainHeader += "21oz./";
      fountainPrice += `${drinks_fountain_price_21oz}/`;
      fountainCals += "0-310 cal/"
    }

    if (show_30_oz_drink)
    {
      fountainHeader += "30oz./";
      fountainPrice += `${drinks_fountain_price_30oz}/`;
      fountainCals += '0-450 cal/';
    }


    if (this.has40oz && show_40_oz_drink)
    {
      fountainHeader += "/40oz./";
      fountainPrice += `/${drinks_fountain_price_40oz}/`;
      fountainCals += '/0-640 cal/';
    }

    fountainHeader = fountainHeader.slice(0, -1);
    fountainPrice = fountainPrice.slice(0, -1);
    fountainCals = fountainCals.slice(0, -1);


		return (
			<div className='HotDrinksMenu c-Menus'>
				<div className='l-region l-region-drop'>

	        {/* Header */}
	        <div className='c-Header_row'>
	        	<div className='c-Header_column-spacer menu-title hotDrinksTitle'>
	            THIRST BE GONE
	          </div>
          </div>

          <div className='fountain-wrapper'>
            <div className='sizes'>{fountainHeader}</div>
            <div className='prices'>{fountainPrice}</div>
            <div className='cals'>{fountainCals}</div>
          </div>

          <div className='local-wrapper'>

          {/* Bottled */}
          {serves_bottled_drinks &&
            <div>
              <LineItem
                name={'Bottled'}
                calories={'0-300'}
                price6={drinks_bottle_price}
                priceStyle={{
                  marginLeft: 12
                }}
              />
            </div>
          }

          <LineItem
            name={'Milk'}
            calories={'100/200'}
            price6={drinks_milk_price}
            expand={false}
            priceStyle={{
              marginLeft: 12
            }}
          />

          {this.localOption1 &&
            <LineItem
              name={this.localOption1}
              calories={this.local1Cal}
              hideCalories={!this.local1Cal}
              price6={this.local1Price}
              expand={false}
              priceStyle={{
                marginLeft: 12
              }}
            />
          }

          {this.localOption2 &&
            <LineItem
              name={this.localOption2}
              calories={this.local2Cal}
              hideCalories={!this.local2Cal}
              price6={this.local2Price}
              expand={false}
              priceStyle={{
                marginLeft: 12
              }}
            />
          }

          {this.localOption3 &&
            <LineItem
              name={this.localOption3}
              calories={this.local3Cal}
              hideCalories={!this.local3Cal}
              price6={this.local3Price}
              expand={false}
              priceStyle={{
                marginLeft: 12
              }}
            />
          }

          {this.localOption4 &&
            <LineItem
              name={this.localOption4}
              calories={this.local4Cal}
              hideCalories={!this.local4Cal}
              price6={this.local4Price}
              expand={false}
              priceStyle={{
                marginLeft: 12
              }}
            />
          }

          </div>

          <div className='hotWrapper'>

            <div className='hotCals'>12oz. / 16oz.</div>

            <LineItem
              name={'Cappuccino '}
              calories={'75/120'}
              price6={cappuccino_price_12oz + ' /'}
              price12={cappuccino_price_16oz}
              indentCals={false}
            />

            <LineItem
              name={'Hot Chocolate '}
              calories={'240/320'}
              price6={hot_chocolate_price_12oz + ' /'}
              price12={hot_chocolate_price_16oz}
              indentCals={false}
            />

						<div className='categorySpacer' />

            <div className='premiumWrapper'>

              <LineItem
                name={'Coffee: '}
                price6={drinks_coffee_price + ' /'}
                price12={sides_coffee_16oz_price}
                hideCalories
              />

              <div className='c-TableList_row c-long-cal'>
                <div className='c-TableList_column'>
                  <span className='c-Menus_title c-Menus_title-v-expand hotDrinkLineItem'>
                    Reg 0/0 cal, Decaf 0/0 cal, French Vanilla 90/120 cal
                  </span>
                </div>
              </div>

						  <div className='categorySpacer' />

              {/* Latte */}
              <LineItem
                name={'Latte: '}
                price6={latte_price_12oz + '/'}
                price12={latte_price_16oz}
                hideCalories
              />

              <div className='c-TableList_row c-long-cal'>
                <div className='c-TableList_column'>
                  <span className='c-Menus_title c-Menus_title-v-expand hotDrinkLineItem'>
                    Reg 0/0 cal, Decaf 0/0 cal, French Vanilla 90/120 cal
                  </span>
                </div>
              </div>

            </div>

          </div>


				</div>
			</div>
		)
	}
}
