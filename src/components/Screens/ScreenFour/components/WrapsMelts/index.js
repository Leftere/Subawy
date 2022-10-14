import { Component } from 'react'

import API from 'api'
import neocastDataProvider from 'api/neocastDataProvider'
import SubLineItem from 'components/Common/SubLineItem'

import drinksData from './data'

import DrinkItem from 'components/Common/DrinkItem'

import bg from './bg.jpg'
import bgNY from './bg-ny.jpg'
import bgPhilly from './bg-philly.jpg'
import imgBg21 from './bg21NoFizz.png'

import fizzBg from './fizz.png'

import './styles.css'

let imgBg = bg;


let isSodiumStore = API.loc('store_plus_sodium');
let isPhilly = API.loc('is_philadelphia_store');

if (isSodiumStore)
{
  imgBg = bgNY

  if (isPhilly)
  {
    imgBg = bgPhilly
  }
}


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
  'melt_addon_price',
  'drinks_milk_price',
  'signature_wraps_price',
  'chopped_salad_addon_price',
  'kids_milk_price',
  'kids_applesauce_price',
  'kids_meal_price',
  'drinks_honestkids_price',
  'kids_meal_california',

  // Local options
  'drinks_local_option_one',
  'drinks_local_option_two',
  'drinks_local_option_three',
  'drinks_local_option_four'
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
      drinks_local_option_four
    } = this.props;

    this.state = {
      currentFrame: 0
    }

    this.drinkSizes = []

    if (show_20_oz_drink && drinks_fountain_price_20oz)
      this.drinkSizes.push({
        size: 20,
        price: drinks_fountain_price_20oz
      })

    if (show_21_oz_drink && drinks_fountain_price_21oz)
      this.drinkSizes.push({
        size: 21,
        price: drinks_fountain_price_21oz
      })

    if (show_30_oz_drink && drinks_fountain_price_30oz)
      this.drinkSizes.push({
        size: 30,
        price: drinks_fountain_price_30oz
      })

    if (show_40_oz_drink && drinks_fountain_price_40oz)
      this.drinkSizes.push({
        size: 40,
        price: drinks_fountain_price_40oz
      })

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
    let nextFrame = nextProps.currentFrameCount % 8;
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
      signature_wraps_price,
      chopped_salad_addon_price,
      kids_milk_price,
      kids_applesauce_price,
      kids_meal_price,
      drinks_honestkids_price,
      kids_meal_california,

      melt_addon_price,
      drinks_milk_price
    } = this.props;

    return (
      <div className={`DrinksMenu c-Menus s-DrinksFrame-${this.state.currentFrame}`}>

        <img src={imgBg} className='bg'/>


        { melt_addon_price &&
          
          <div>
          { !isSodiumStore &&
            <span className={`price`} style={{left: 26, top: 266}}><em>Add</em> $ {melt_addon_price}</span>
          }

          { isSodiumStore && !isPhilly &&
            <span className={`price`} style={{left: 26, top: 256}}><em>Add</em> $ {melt_addon_price}</span>
          }

          {isSodiumStore && isPhilly &&
            <span className={`price`} style={{left: 26, top: 282}}><em>Add</em> $ {melt_addon_price}</span>
          }
          </div>

        }

        { signature_wraps_price &&

          <div>
          { !isSodiumStore &&
            <span className={`price`} style={{left: 242, top: 266}}>$ {signature_wraps_price}</span>
          }

          { isSodiumStore && !isPhilly &&
            <span className={`price`} style={{left: 242, top: 256}}>$ {signature_wraps_price}</span>
          }

          {isSodiumStore && isPhilly &&
            <span className={`price`} style={{left: 358, top: 316}}>$ {signature_wraps_price}</span>
          }
          </div>
        }

        { chopped_salad_addon_price &&

          <div>
          { !isSodiumStore &&
            <span className={`price`} style={{left: 248, top: 457}}>$ {chopped_salad_addon_price}</span>
          }

          { isSodiumStore && !isPhilly &&
            <span className={`price`} style={{left: 248, top: 432}}>$ {chopped_salad_addon_price}</span>
          }

          {isSodiumStore && isPhilly &&
            <span className={`price`} style={{left: 248, top: 504}}>$ {chopped_salad_addon_price}</span>
          }
          </div>
        }


        <div className={`LocalFavorites`}>
          <h2>Local Favorites <span>6”&nbsp;&nbsp;|&nbsp;&nbsp;FL&nbsp;&nbsp;|&nbsp;&nbsp;FL&nbsp;PRO™</span></h2>

          <SubLineItem apiKey='local_option_one'   priceSeparator='|' local/>
          <SubLineItem apiKey='local_option_two'   priceSeparator='|' local/>
          <SubLineItem apiKey='local_option_three' priceSeparator='|' local/>
          <SubLineItem apiKey='local_option_four'  priceSeparator='|' local/>
          <SubLineItem apiKey='local_option_five'  priceSeparator='|' local/>

        </div>
        
        <div className={`ForKids`}>
          <h2>Fresh Fit For Kids<sup>®</sup> Meal
            { kids_meal_california &&
              <span>Mini sub, applesauce and low-fat white milk ${kids_meal_price}</span>
            }
            { !kids_meal_california &&
              <span>Mini sub, applesauce and juice or low-fat white milk ${kids_meal_price}</span>
            }            
          </h2>

          { kids_meal_california &&
            <div className={'kidsItems'}>
              <div className={'col'}>
                <div className={'kidsItem'}>
                  <h2>Veggie Delite<sup>®</sup></h2>
                  <div className={'kidsCals'}>315 cal</div>
                </div>

                <div className={'kidsItem'}>
                  <h2>Oven-Roasted Turkey</h2>
                  <div className={'kidsCals'}>345 cal</div>
                </div>

                <div className={'kidsItem'}>
                  <h2>Black Forest Ham</h2>
                  <div className={'kidsCals'}>345 cal</div>
                </div>
              </div>

              <div className={'col'}>
                <h3>Sides</h3>

                <div className={'kidsItem'}>
                  <h2>Honest Kids<sup>®</sup> Juice</h2>
                  <div className={'kidsCals'}>35 cal</div>
                  <div className={'amount'}>${drinks_honestkids_price}</div>
                </div>

                <div className={'kidsItem'}>
                  <h2>Applesauce</h2>
                  <div className={'kidsCals'}>45 cal</div>
                  <div className={'amount'}>${kids_applesauce_price}</div>
                </div>

                <div className={'kidsItem'}>
                  <h2>Milk</h2>
                  <div className={'kidsCals'}>130 cal</div>
                  <div className={'amount'}>${kids_milk_price}</div>
                </div>
              </div>
            </div>
          }

          { !kids_meal_california &&
            <div className={'kidsItems'}>
              <div className={'col'}>
                <div className={'kidsItem'}>
                  <h2>Veggie Delite<sup>®</sup></h2>
                  <div className={'kidsCals'}>315 cal</div>
                </div>

                <div className={'kidsItem'}>
                  <h2>Oven-Roasted Turkey</h2>
                  <div className={'kidsCals'}>345 cal</div>
                </div>

                <div className={'kidsItem'}>
                  <h2>Black Forest Ham</h2>
                  <div className={'kidsCals'}>345 cal</div>
                </div>
              </div>

              <div className={'col'}>
                <h3>Sides</h3>
                <div className={'kidsItem'}>
                  <h2>Applesauce</h2>
                  <div className={'kidsCals'}>45 cal</div>
                  <div className={'amount'}>${kids_applesauce_price}</div>
                </div>

                <div className={'kidsItem'}>
                  <h2>Milk</h2>
                  <div className={'kidsCals'}>130 cal</div>
                  <div className={'amount'}>${kids_milk_price}</div>
                </div>
              </div>
            </div>
          }
          

        </div>

      </div>
    )
  }
}
