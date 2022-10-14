import { Component } from 'react'
import API from 'api'

import imgCoke from './coke.jpg'
import imgNoCoke from './no_coke.jpg'

import imgCokeNY from './coke-ny.jpg'
import imgNoCokeNY from './no_coke-ny.jpg'

import imgCokePhilly from './coke-philly.jpg'
import imgNoCokePhilly from './no_coke-philly.jpg'

import neocastDataProvider from 'api/neocastDataProvider'

import "./styles.css";

let isSodiumStore = API.loc('store_plus_sodium');
let isPhilly = API.loc('is_philadelphia_store');

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

        
       

        <span className={`price`} style={{left:  38, top: 725}}>${drinks_fountain_price_20oz}</span>
        <span className={`price`} style={{left: 176, top: 725}}>${drinks_fountain_price_30oz}</span>
        <span className={`price`} style={{left: 310, top: 725}}>${drinks_fountain_price_40oz}</span>
    
        {coffee_price_12oz &&
        <span className={`price`} style={{left: 583, top: 681}}>${coffee_price_12oz}</span>
        }

        {coffee_price_16oz &&
        <span className={`price`} style={{left: 712, top: 681}}>${coffee_price_16oz}</span>
        }
        

        <span className={`price`} style={{left: 155, top: 820}}>${drinks_bottle_price}</span>

        <span className={`price`} style={{left:  38, top: 916}}>${kids_milk_price}</span>
        <span className={`price`} style={{left: 176, top: 916}}>${drinks_milk_price}</span>

        <span className={`price`} style={{left: 732, top: 818}}>${sides_cookies_price_1ct}</span>
        <span className={`price`} style={{left: 732, top: 915}}>${sides_chips_price}</span>

        <span className={`taxes`} style={{left: 12, bottom: 28}}>
          
          {isSodiumStore &&
            <div>
              *Some Make any Melts, Wraps &amp; Bowls options<br/>may exceed the daily recommended sodium level of 2300mg.
            </div>
          }

          All prices do not include applicable taxes.</span>
        <span className={`copyright`} style={{left: 12, bottom: 10}}>
          {servesCoke &&
            <span>
            © 2021 The Coca-Cola Company. “Coca-Cola” is a registered trademark of The Coca-Cola Company.<br/>
            </span>
          }
          All chip-related trademarks are owned by Frito-Lay North America, Inc. © 2021 ®/© Subway IP LLC 2021.
        </span>
      </div>
    )
  }
}
