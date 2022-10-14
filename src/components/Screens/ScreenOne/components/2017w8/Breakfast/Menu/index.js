import { Component } from 'react'

import API from 'api'
import neocastDataProvider from 'api/neocastDataProvider'

import LineItem from 'components/Common/LineItem'

import breakfastSandwichImage from './images/breakfastSandwichImage.png'

import servedUntil11 from './images/servedUntil11.png'
import servedAllDay from './images/servedAllDay.png'

import sixInchHeader from './images/sixInchHeader.png'
import footlongHeader from './images/footlongHeader.png'
import croissantHeader from './images/croissantHeader.png'

import comboCoffee from './images/coffee.png'
import comboJuice from './images/juice.png'
import comboCup20oz from './images/cup20oz.png'
import comboCup21oz from './images/cup21oz.png'

import comboSandwich from './images/sandwich.png'
import comboSandwichSocal from './images/sandwich-socal.png'
import comboSandwichCroissant from './images/sandwich-croissant.png'

import comboFg from './images/combo-fg.png'
import comboFarmhouse from './images/combo-farmhouse.png'

import Footer from '../Footer'

import './styles.css'

const isLAStore = API.loc('breakfast_la_store')
const servesCoke = API.loc('serves_coca_cola')

let isRBSkuTest = API.loc('test_sku_roast_beef');
let testType = ""

if (isRBSkuTest)
{
  testType = "rb-sku-test"
}

let comboImage = comboFg;
let comboPrice = API.loc('breakfast_combo_price');
let isFarmhouse = API.loc('farmhouse_combo');

if (isFarmhouse) {
  comboImage = comboFarmhouse;
  comboPrice = API.loc('farmhouse_combo_price');
}

let sandwichImage = comboSandwich
if (isLAStore) sandwichImage = comboSandwichSocal


/**
 * Calories for alternate carriers
 */
const altCarrierCals = {
  bfast_mini_sub: '290',
  bfast_biscuit: '210',
  bfast_omelet: '160/380',
  bfast_english_muffin: '120',
  bfast_bagel: '160'
}

/**
 * (LA only) Local option calories
 */
const LALocalOptionCalories = {
  bfast_sunrise_subway_melt: '590/1180',
  bfast_bmt: '580/1160',
  bfast_sausage_egg_and_cheese: '590/1180',
  bfast_turkey_egg_and_cheese: '480/960'
}


/**
 * Names for alternative carriers
 */
const altCarrierNames = {
  bfast_mini_sub: 'Mini Sub',
  bfast_biscuit: 'Biscuit',
  bfast_omelet: 'Omelet',
  bfast_english_muffin: 'English Muffin',
  bfast_bagel: 'Bagel'
}


/**
 * Convenience function for getting a price for a breakfast option
 */
const getPrice = (price, fallback) => {
  return (price && price !== '0.00')
    ? price
    : fallback
}


/**
 * Creates a data object for a local option
 */
const getLocalOptionData = (localOptionKey = 'bfast_local_option_one', props) => {
  const local = API.v.loc(localOptionKey)
  if (!local.isValid) {
    return {
      isValid: false
    };
  }

  return {
    isValid: true,
    name: local.data,
    price6: getPrice(API.loc(`${localOptionKey}_price_6in`), props.bfast_price_6in),
    price12: getPrice(API.loc(`${localOptionKey}_price_12in`), props.bfast_price_12in),
    hideCalories: !isLAStore && API.net(`${localOptionKey}_6in_cal`) === null,
    calories: isLAStore
      ? `${LALocalOptionCalories[localOptionKey]} cal`
      : API.net(`${localOptionKey}_6in_cal`) + '/' + API.net(`${localOptionKey}_12in_cal`) + ' cal'
  }
}

let frameCount = 0;
let displayList = {}

let comboLookup = {
  'small_coffee': 'Small Coffee',
  'coffee_juice': 'Small Coffee or Juice',
  '20_oz_drink': '20oz Beverage',
  '21_oz_drink': '21oz Beverage'
}

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
  'breakfast_combo_price'
])
export default class BreakfastMenu extends Component {

  constructor(props) {
    super(props)

    /**
     * Alternative breakfast carrier
     */
    this.alternativeCarrier = API.v.loc('breakfast_alternate_carrier')
    if (this.alternativeCarrier.isValid) {
      this.alternativeCarrierLabel = altCarrierNames[this.alternativeCarrier.data]
      this.alternativeCarrierCals = altCarrierCals[this.alternativeCarrier.data]
      this.alternativeCarrierPrice = API.loc(`${this.alternativeCarrier.data}_price`)
    }

    /**
     * Local breakfast options
     */
    this.local1 = getLocalOptionData(this.props.bfast_local_option_one, props)
    this.local2 = getLocalOptionData(this.props.bfast_local_option_two, props)
  }

  // When props update...
  componentWillReceiveProps(nextProps) {
    frameCount = nextProps.currentFrameCount % Object.keys(displayList).length
  }

  componentWillUnmount() {
    frameCount = 0;
  }

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
      breakfast_combo_price
    } = this.props;

    const allDay = API.loc('serves_bfast_all_day', false);

    return (
      <div className={`breakfastMenu ${testType} l-region-drop l-inverted`}>


        {/* Header */}
        <div className='c-Header_row'>
          <div className='c-Header_column'>
            <div className='bfastHeader'>
              RISE &amp; DINE.
            </div>
          </div>
          <div className='c-Header_column'>
            <img src={allDay ? servedAllDay : servedUntil11} style={{marginLeft: -90}}/>
          </div>
        </div>

        <div className='c-Header_row'>
          <div className='c-Header_column'>
            <div className='bfastTagLine'>
              Choose Egg or Egg White<sup>*</sup>
            </div>
          </div>
        </div>

      {/* Columns Labels */}
        <div className='c-Header_row'>
          <div className='c-Header_column bfastLabel'>
            &nbsp;
          </div>

          <div className='c-Header_column bfastLabel'>
            <img src={sixInchHeader} />
          </div>

          <div className='c-Header_column bfastLabel'>
            <img src={footlongHeader}  style={{ marginLeft: 12 }} />
          </div>
        </div>

        {/* Menu items */}
        <div className='c-BreakfastMenu_body'>
          <LineItem
            name={'Bacon, Egg & Cheese'}
            titleClass={'bfastItemTitle'}
            captionClass={'bfastItemCaption'}
            calories={isLAStore ? '530/1060 cal' : '460/920 cal'}

            priceC={bfast_bacon_egg_and_cheese_price_croissant}
            price6={getPrice(bfast_bacon_egg_and_cheese_price_6in, bfast_price_6in)}
            price12={getPrice(bfast_bacon_egg_and_cheese_price_12in, bfast_price_12in)}
            additionalClasses={'bfast_bacon_egg_and_cheese'}
            showCroissant={true}
            indentCals={false}
          />

          <LineItem
            name={'Black Forest Ham, Egg & Cheese'}
            titleClass={'bfastItemTitle'}
            captionClass={'bfastItemCaption'}
            calories={isLAStore ? '480/960 cal' : '410/820 cal'}
            priceC={bfast_bf_ham_egg_and_cheese_price_croissant}
            price6={getPrice(bfast_bf_ham_egg_and_cheese_price_6in, bfast_price_6in)}
            price12={getPrice(bfast_bf_ham_egg_and_cheese_price_12in, bfast_price_12in)}
            additionalClasses={'bfast_bf_ham_egg_and_cheese'}
            showCroissant={true}
            indentCals={false}
          />


          <LineItem
            name={'Egg & Cheese'}
            titleClass={'bfastItemTitle'}
            captionClass={'bfastItemCaption'}
            calories={isLAStore ? '450/900 cal' : '380/760 cal'}
            priceC={bfast_egg_and_cheese_price_croissant}
            price6={getPrice(bfast_egg_and_cheese_price_6in, bfast_price_6in)}
            price12={getPrice(bfast_egg_and_cheese_price_12in, bfast_price_12in)}
            additionalClasses={'bfast_egg_and_cheese'}
            showCroissant={true}
            indentCals={false}
          />


          <LineItem
            name={'Steak, Egg & Cheese'}
            titleClass={'bfastItemTitle'}
            captionClass={'bfastItemCaption'}
            calories={isLAStore ? '520/1040 cal' : '450/900 cal'}

            price6={getPrice(bfast_steak_egg_and_cheese_price_6in, bfast_price_6in)}
            price12={getPrice(bfast_steak_egg_and_cheese_price_12in, bfast_price_12in)}
            additionalClasses={'bfast_steak_egg_and_cheese'}
            showCroissant={true}
            indentCals={false}
          />


          {this.local1.isValid &&
            <LineItem
              {...this.local1}
              titleClass={'bfastItemTitle'}
              captionClass={'bfastItemCaption'}
              indentCals={false}
              additionalClasses={'local_one'}
            />
          }

          {/*this.local2.isValid &&
            <LineItem
               {...this.local2}
              titleClass={'bfastItemTitle'}
              captionClass={'bfastItemCaption'}
              indentCals={false}
              additionalClasses={'local_2'}
            />
          */}

          {/* Alternative carrier */}
          {this.alternativeCarrier.isValid &&
            <div className='bfastAltCarrier'>
              <LineItem
                name={this.alternativeCarrierLabel}
                price6={this.alternativeCarrierPrice}
                titleClass={'bfastItemTitle'}
                captionClass={'bfastItemCaption'}
                calories={this.alternativeCarrierCals}
                indentCals={false}
                additionalClasses={'alternative_carrier'}
              />
            </div>
          }

        </div>

        {/* Combo */}
        <div className='bfastCombo'>
          {(breakfast_combo == 'coffee_juice' || !breakfast_combo) &&
            <img className='comboJuice comboDrink' src={comboJuice} />
          }
          {breakfast_combo == 'small_coffee' &&
            <img className='comboCoffee comboDrink' src={comboCoffee} />
          }
          {breakfast_combo == '20_oz_drink' &&
            <img className='comboCup comboDrink' src={comboCup20oz} />
          }
          {breakfast_combo == '21_oz_drink' &&
            <img className='comboCup comboDrink' src={comboCup21oz} />
          }
          <img className='comboSandwich' src={sandwichImage} />
          <img className='comboFg' src={comboImage} />
          <div className='comboPrice'>${comboPrice ? comboPrice : "6.98"}</div>

          {!isFarmhouse &&
            <div className='comboType'>{(breakfast_combo ? comboLookup[breakfast_combo] : comboLookup['coffee_juice'])}</div>
          }


        </div>

      </div>
    )
  }
}
