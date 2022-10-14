import { Component } from 'react'
import API from 'api'
import imgCoke from './coke.jpg'
import imgNoCoke from './no_coke.jpg'

import imgCokeNY from './coke-ny.jpg'
import imgNoCokeNY from './no_coke-ny.jpg'

import imgCokePhilly from './coke-philly.jpg'
import imgNoCokePhilly from './no_coke-philly.jpg'

import LineItem from 'components/Common/LineItem'
import neocastDataProvider from 'api/neocastDataProvider'

import "./styles.css";

let isSodiumStore = API.loc('store_plus_sodium');
let isPhilly = API.loc('is_philadelphia_store');
const isLAStore = API.loc('breakfast_la_store')

let comboPrice = API.loc('breakfast_combo_price');
let isFarmhouse = API.loc('farmhouse_combo');

if (isFarmhouse) {
  comboPrice = API.loc('farmhouse_combo_price');
}

/**
 * Convenience function for getting a price for a breakfast option
 */
 const getPrice = (price, fallback) => {
  return (price && price !== '0.00')
    ? price
    : fallback
}

let servesCoke = API.loc('serves_coca_cola');
let bgImage = imgCoke;

if (!servesCoke) bgImage = imgNoCoke;

if (isSodiumStore)
{
  bgImage = imgCokeNY
  if (!servesCoke) bgImage = imgNoCokeNY;
}

if (isSodiumStore && isPhilly)
{
  bgImage = imgCokePhilly
  if (!servesCoke) bgImage = imgNoCokePhilly;
}

let chipsCookies = API.loc('chips_2cookies_drink_price');

@neocastDataProvider([
  'bfast_price_6in',
  'bfast_price_12in',

  'bfast_egg_and_cheese_price_6in',
  'bfast_egg_and_cheese_price_12in',
  'bfast_egg_and_cheese_price_croissant',

  'bfast_turkey_egg_and_cheese_price_6in',
  'bfast_turkey_egg_and_cheese_price_12in',
  'bfast_turkey_egg_and_cheese_price_croissant',

  'bfast_bacon_egg_and_cheese_price_6in',
  'bfast_bacon_egg_and_cheese_price_12in',
  'bfast_bacon_egg_and_cheese_price_croissant',

  'bfast_steak_egg_and_cheese_price_6in',
  'bfast_steak_egg_and_cheese_price_12in',

  'bfast_bf_ham_egg_and_cheese_price_6in',
  'bfast_bf_ham_egg_and_cheese_price_12in',
  'bfast_bf_ham_egg_and_cheese_price_croissant',

  // Local options
  'bfast_local_option_one',
  'bfast_local_option_two',

  'farmhouse_combo',
  'farmhouse_combo_price',
  'breakfast_combo',
  'breakfast_combo_price',
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

  'kids_milk_price',
  'drinks_milk_price',

  'serves_coca_cola',

  // Bottled
  'serves_bottled_drinks',
  'drinks_bottle_price',

  // Second column
  'drinks_milk_price',

  
	'coffee_price_12oz',
	'coffee_price_16oz',

  'sides_cookies_price_1ct',
  'sides_chips_price',

  // Local options
  'drinks_local_option_one',
  'drinks_local_option_two',
  'drinks_local_option_three',
  'drinks_local_option_four'
])
export default class SubwayApp extends Component {
  render() {
    const {
      bfast_price_6in,
      bfast_price_12in,
      bfast_egg_and_cheese_price_6in,
      bfast_egg_and_cheese_price_12in,
      bfast_egg_and_cheese_price_croissant,
      bfast_bacon_egg_and_cheese_price_6in,
      bfast_bacon_egg_and_cheese_price_12in,
      bfast_bacon_egg_and_cheese_price_croissant,
      bfast_steak_egg_and_cheese_price_6in,
      bfast_steak_egg_and_cheese_price_12in,
      bfast_bf_ham_egg_and_cheese_price_6in,
      bfast_bf_ham_egg_and_cheese_price_12in,
      bfast_bf_ham_egg_and_cheese_price_croissant,

      bfast_turkey_egg_and_cheese_price_6in,
      bfast_turkey_egg_and_cheese_price_12in,
      bfast_turkey_egg_and_cheese_price_croissant,

      breakfast_combo,
      breakfast_combo_price,
      show_20_oz_drink,
      show_30_oz_drink,
      show_40_oz_drink,

      drinks_fountain_price_20oz,
      drinks_fountain_price_30oz,
      drinks_fountain_price_40oz,

      meal_deal_fountain_additional_price,

      chips_1cookie_drink_price,
      chips_2cookies_drink_price,

      serves_coca_cola,

      coffee_price_12oz,
      coffee_price_16oz,

      kids_milk_price,
      drinks_milk_price,

      sides_cookies_price_1ct,
      sides_chips_price,


      serves_bottled_drinks,
      drinks_bottle_price
    } = this.props;
    return (
      <div className='c-PromotionDrinksMenu'>
        <img className='promotion_background' src={bgImage} />

        { !isSodiumStore &&
          <span className={`price`} style={{left: 680, top: 56}}>${chipsCookies}</span>
        }

        { isSodiumStore && !isPhilly &&
          <span className={`price`} style={{left: 720, top: 56}}>${chipsCookies}</span>
        }

        { isSodiumStore && isPhilly &&
          <span className={`price`} style={{left: 710, top: 56}}>${chipsCookies}</span>
        }
       

        <span className={`price`} style={{left: 217, top: 761}}>
          ${bfast_bf_ham_egg_and_cheese_price_6in} &nbsp;|&nbsp; 
          ${bfast_bf_ham_egg_and_cheese_price_12in}
        </span>

        <span className={`price`} style={{left: 222, top: 859}}>
          ${bfast_steak_egg_and_cheese_price_6in} &nbsp;|&nbsp; 
          ${bfast_steak_egg_and_cheese_price_12in}
        </span>

        <span className={`price`} style={{left: 222, top: 956}}>
          ${bfast_bacon_egg_and_cheese_price_6in} &nbsp;|&nbsp; 
          ${bfast_bacon_egg_and_cheese_price_12in}
        </span>

        <span className={`price`} style={{left: 700, top: 761}}>
          ${bfast_egg_and_cheese_price_6in} &nbsp;|&nbsp; 
          ${bfast_egg_and_cheese_price_12in}
        </span>

        <span className={`price price-white`} style={{left: 703, top: 984}}>
          ${breakfast_combo_price}
        </span>


        <span className={`taxes`} style={{left: 20, bottom: 32}}>
            { /* Need to work with design on this
              isSodiumStore &&
              <div>
                *Some Make any Melts, Wraps &amp; Bowls options<br/>may exceed the daily recommended sodium level of 2300mg.
              </div>
            */}
          All prices do not include applicable taxes.</span>
        <span className={`copyright`} style={{left: 20, bottom: 10}}>
          {servesCoke &&
            <span>
            © 2021 The Coca-Cola Company. “Coca-Cola” is a registered trademark of The Coca-Cola Company.<br/>
            </span>
          }
            <div>
              All chip-related trademarks are owned by Frito-Lay North America, Inc. © 2021 ®/© Subway IP LLC 2021.
            </div>
        </span>
      </div>
    )
  }
}
