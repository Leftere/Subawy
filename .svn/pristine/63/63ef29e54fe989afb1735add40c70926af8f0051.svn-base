import { Component } from 'react'

import API from 'api'
import neocastDataProvider from 'api/neocastDataProvider'


import LineItem from 'components/LineItem'


import servedUntil11 from './images/servedUntil11.png'
import breakfastSandwichImage from './images/breakfastSandwichImage.png'
import sixInchHeader from './images/sixInchHeader.png'
import footlongHeader from './images/footlongHeader.png'

import './styles.css'


/**
 * If the store is in LA, then the calories are different for the breakfast menu.
 * @type {Boolean}
 */
const isLAStore = API.loc('breakfast_la_store')

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


@neocastDataProvider([
  'bfast_price_6in',
  'bfast_price_12in',

  'bfast_egg_and_cheese_price_6in',
  'bfast_egg_and_cheese_price_12in',

  'bfast_bacon_egg_and_cheese_price_6in',
  'bfast_bacon_egg_and_cheese_price_12in',

  'bfast_steak_egg_and_cheese_price_6in',
  'bfast_steak_egg_and_cheese_price_12in',

  'bfast_bf_ham_egg_and_cheese_price_6in',
  'bfast_bf_ham_egg_and_cheese_price_12in',

  // Local options
  'bfast_local_option_one',
  'bfast_local_option_two'
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


  render() {
    const {
      bfast_price_6in,
      bfast_price_12in,
      bfast_egg_and_cheese_price_6in,
      bfast_egg_and_cheese_price_12in,
      bfast_bacon_egg_and_cheese_price_6in,
      bfast_bacon_egg_and_cheese_price_12in,
      bfast_steak_egg_and_cheese_price_6in,
      bfast_steak_egg_and_cheese_price_12in,
      bfast_bf_ham_egg_and_cheese_price_6in,
      bfast_bf_ham_egg_and_cheese_price_12in
    } = this.props;


    const allDay = API.loc('serves_bfast_all_day', false);


    return (
      <div className='breakfastMenu l-region-drop l-inverted'>

        {/* Header */}
        <div className='c-Header_row'>
          <div className='c-Header_column'>
            <div className={'bfastHeader'}>
              Breakfast
            </div>
          </div>

          <div className='c-Header_column bfastHeaderColumn'>
            <img src={sixInchHeader} />
          </div>

          <div className='c-Header_column bfastHeaderColumn'>
            <img src={footlongHeader}  style={{ marginLeft: -22 }} />
          </div>
        </div>

        <div className='c-Header_row'>
          <div className='c-Header_column'>
            <div className='bfastTagLine'>
              Egg or Egg White<sup>*</sup>
            </div>
          </div>
        </div>


        {/* Menu items */}
        <div className='c-BreakfastMenu_body'>
          <LineItem
            name={'Egg & Cheese'}
            titleClass={'bfastItemTitle'}
            captionClass={'bfastItemCaption'}
            calories={isLAStore ? '450/900 cal' : '380/760 cal'}
            price6={getPrice(bfast_egg_and_cheese_price_6in, bfast_price_6in)}
            price12={getPrice(bfast_egg_and_cheese_price_12in, bfast_price_12in)}
            nextLine
            expand={false}
            indentCals={false}
          />

          <LineItem
            name={'Bacon, Egg & Cheese'}
            titleClass={'bfastItemTitle'}
            captionClass={'bfastItemCaption'}
            calories={isLAStore ? '530/1060 cal' : '460/920 cal'}
            price6={getPrice(bfast_bacon_egg_and_cheese_price_6in, bfast_price_6in)}
            price12={getPrice(bfast_bacon_egg_and_cheese_price_12in, bfast_price_12in)}
            nextLine
            expand={false}
            indentCals={false}
          />

          <LineItem
            name={'Steak, Egg & Cheese'}
            titleClass={'bfastItemTitle'}
            captionClass={'bfastItemCaption'}
            calories={isLAStore ? '520/1040 cal' : '450/900 cal'}
            price6={getPrice(bfast_steak_egg_and_cheese_price_6in, bfast_price_6in)}
            price12={getPrice(bfast_steak_egg_and_cheese_price_12in, bfast_price_12in)}
            nextLine
            expand={false}
            indentCals={false}
          />

          <LineItem
            name={'Black Forest Ham,<br/>Egg & Cheese'}
            titleClass={'bfastItemTitle'}
            captionClass={'bfastItemCaption'}
            calories={isLAStore ? '480/960 cal' : '410/820 cal'}
            price6={getPrice(bfast_bf_ham_egg_and_cheese_price_6in, bfast_price_6in)}
            price12={getPrice(bfast_bf_ham_egg_and_cheese_price_12in, bfast_price_12in)}
            nextLine
            expand={false}
            indentCals={false}
          />

          {this.local1.isValid &&
            <LineItem
              {...this.local1}
              titleClass={'bfastItemTitle'}
              captionClass={'bfastItemCaption'}
              nextLine
              expand={false}
              indentCals={false}
            />
          }

          {this.local2.isValid &&
            <LineItem
               {...this.local2}
              titleClass={'bfastItemTitle'}
              captionClass={'bfastItemCaption'}
              nextLine
              expand={false}
              indentCals={false}
            />
          }

          {/* Alternative carrier */}
          {this.alternativeCarrier.isValid &&
            <div className='bfastAltCarrier'>
              <LineItem
                name={this.alternativeCarrierLabel}
                price6={this.alternativeCarrierPrice}
                titleClass={'bfastItemTitle'}
                captionClass={'bfastItemCaption'}
                calories={this.alternativeCarrierCals}
                nextLine
                expand={false}
                indentCals={false}
              />
            </div>
          }

        </div>


        <div className='deductText'>
          <sup className='deductAsterisk'>*</sup>
          {isLAStore
            ? 'Deduct 110 cals per 6" sandwich with egg white.'
            : 'Deduct 40 cals per 6" sandwich with egg white.'
          }
        </div>

        <img
          className='breakfastSandwichImage'
          src={breakfastSandwichImage}
        />

        {!allDay &&
          <img className='stickerServedUntil11' src={servedUntil11} />
        }

        <div className='c-BreakfastMenu_legal_text'>

          <div className='c-Promotion_item-tax'>
            Plus Applicable Tax.
            <div>
              Calories refer to breakfast sandwiches
              <div> on flatbread. </div>
            </div>
          </div>

        </div>

      </div>
    )
  }
}
