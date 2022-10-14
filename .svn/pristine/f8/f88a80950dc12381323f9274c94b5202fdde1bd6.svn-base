import { Component } from 'react'

import API from 'api'
import neocastDataProvider from 'api/neocastDataProvider'

import drinksData from './data'

import DrinkItem from 'components/Common/DrinkItem'

import imgBg20 from './bg20NoCoffee.png'
import imgBg21 from './bg21NoCoffee.png'

import './styles.css'

let imgBg = imgBg21;
let is20 = API.loc('show_20_oz_drink');

if (is20) imgBg = imgBg20;

@neocastDataProvider([
  // Show Sizes
  'show_20_oz_drink',
  'show_21_oz_drink',
  'show_30_oz_drink',
  'show_40_oz_drink',

  // Fountain sizes
  'drinks_fountain_price_20oz',
  'drinks_fountain_price_21oz',
  'drinks_fountain_price_30oz',
  'drinks_fountain_price_40oz',

  'meal_deal_fountain_additional_price',
  'chips_1cookie_drink_price',
  'chips_2cookies_drink_price',

  'serves_coca_cola',

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
export default class DrinksMenu extends Component {

  constructor(props) {
    super(props)

    const {
      show_20_oz_drink,
      show_21_oz_drink,
      show_30_oz_drink,
      show_40_oz_drink,

      drinks_fountain_price_20oz,
      drinks_fountain_price_21oz,
      drinks_fountain_price_30oz,
      drinks_fountain_price_40oz,

      drinks_local_option_one,
      drinks_local_option_two,
      drinks_local_option_three,
      drinks_local_option_four,

			cappuccino_price_12oz,
			cappuccino_price_16oz,

			hot_chocolate_price_12oz,
			hot_chocolate_price_16oz,

      drinks_coffee_price,
      sides_coffee_16oz_price,

      latte_price_12oz,
      latte_price_16oz,

    } = this.props;

    this.state = {
      currentFrame: 0
    }

    this.cappuccinos = [
      { size: 12, price: cappuccino_price_12oz},
      { size: 16, price: cappuccino_price_16oz},
    ]

    this.hot_chocolates = [
      { size: 12, price: hot_chocolate_price_12oz},
      { size: 16, price: cappuccino_price_16oz},
    ]

    this.coffees = [
      { size: 12, price: drinks_coffee_price},
      { size: 16, price: sides_coffee_16oz_price},
    ]

    this.lattes = [
      { size: 12, price: latte_price_12oz},
      { size: 16, price: latte_price_16oz},
    ]

    /**
     * Local options
     */
    // Option 1
    this.localOption1 = API.loc(drinks_local_option_one);
    const localOption1Data = drinksData.find((d) => d.apiMap === drinks_local_option_one)

    if (this.localOption1 && localOption1Data) {
      this.localOption1 = localOption1Data.label
      this.local1Cal = localOption1Data.sizes[0].calories || '000'
      this.local1Price = localOption1Data.sizes[0].price
    }

    // Option 2
    this.localOption2 = API.loc(drinks_local_option_two);
    const localOption2Data = drinksData.find((d) => d.apiMap === drinks_local_option_two)

    if (this.localOption2 && localOption2Data) {
      this.localOption2 = localOption2Data.label
      this.local2Cal = localOption2Data.sizes[0].calories || '000'
      this.local2Price = localOption2Data.sizes[0].price
    }

    // Option 3
    this.localOption3 = API.loc(drinks_local_option_three);
    const localOption3Data = drinksData.find((d) => d.apiMap === drinks_local_option_three)

    if (this.localOption3 && localOption3Data) {
      this.localOption3 = localOption3Data.label
      this.local3Cal = localOption3Data.sizes[0].calories || '000'
      this.local3Price = localOption3Data.sizes[0].price
    }

    // Option 4
    this.localOption4 = API.loc(drinks_local_option_four);
    const localOption4Data = drinksData.find((d) => d.apiMap === drinks_local_option_four)

    if (this.localOption4 && localOption4Data) {
      this.localOption4 = localOption4Data.label
      this.local4Cal = localOption4Data.sizes[0].calories || '000'
      this.local4Price = localOption4Data.sizes[0].price
    }
  }

  componentWillReceiveProps(nextProps) {
    let nextFrame = nextProps.currentFrameCount % 2;
    this.setState({currentFrame: nextFrame})
    console.log(this.state);
  }

  render() {
    const {
      show_20_oz_drink,
      show_21_oz_drink,
      show_30_oz_drink,
      show_40_oz_drink,

      drinks_fountain_price_20oz,
      drinks_fountain_price_21oz,
      drinks_fountain_price_30oz,
      drinks_fountain_price_40oz,

      meal_deal_fountain_additional_price,


      chips_1cookie_drink_price,
      chips_2cookies_drink_price,

      serves_coca_cola,

      serves_bottled_drinks,
      drinks_bottle_price,

      drinks_milk_price
    } = this.props;

    return (
      <div className={`HotDrinksMenu c-Menus s-DrinksFrame-${this.state.currentFrame}`}>

        <img src={imgBg} className='bg'/>

        <div className='c-Menus_header'>
          MAKE IT COMPLETE.
        </div>

        <div className='addOptionOne'>
          ${chips_2cookies_drink_price}
        </div>

        <div className='addOptionTwo'>
          ${chips_1cookie_drink_price}
        </div>

        <div className='c-Menus_note'>
          Swap any drink or drink size and pay the difference.
        </div>

        <div className='drinks'>

          <DrinkItem
              name={'Cappuccino'}
              calories={'100-120'}
              currentFrame={this.state.currentFrame}
              prices={this.cappuccinos}
              priceStyle={{
                marginLeft: 12
              }}
          />

          <DrinkItem
              name={'Hot Chocolate'}
              calories={'240'}
              currentFrame={this.state.currentFrame}
              prices={this.hot_chocolates}
              priceStyle={{
                marginLeft: 12
              }}
          />

          <DrinkItem
              name={'Coffee'}
              calories={'0-90'}
              currentFrame={this.state.currentFrame}
              prices={this.coffees}
              priceStyle={{
                marginLeft: 12
              }}
          />

          <DrinkItem
              name={'Latte'}
              calories={'0-90'}
              currentFrame={this.state.currentFrame}
              prices={this.lattes}
              priceStyle={{
                marginLeft: 12
              }}
          />


        </div>
      </div>
    )
  }
}
