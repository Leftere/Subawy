import { Component } from 'react'
import PropTypes from 'prop-types'
import API from 'api'
import neocastDataProvider from 'api/neocastDataProvider'

import LineItem from 'components/Common/LineItem'

import sandwich from './images/sandwich.png'
import coffee from './images/coffee.png'
import meal from './images/meal.png'
import mealNoCoke from './images/meal_nocoke.png'

import './styles.css'

const allDay = API.loc('serves_bfast_all_day', false);
const servesCoffee = API.loc('serves_coffee', false);

let isRBSkuTest = API.loc('test_sku_roast_beef');
let testType = ""

if (isRBSkuTest)
{
  testType = "rb-sku-test"
}

const isEggUpdate = API.loc('egg_product_update')

const BreakfastSides = [
  'sides_cinnamon_rolls',
  'sides_cinnamon_rolls_11am',
  'sides_hash_browns',
  'sides_hash_browns_11am',
  'sides_muffins',
  'sides_muffins_11am',
  'sides_biscuits_and_gravy',
  'sides_biscuits_and_gravy_11am',
]

const breakfastFixLookup = {
  "bfast_hash_browns_11am" : 'sides_hash_browns',
  "bfast_muffin_11am" :'sides_muffins',
  "bfast_biscuits_and_gravy_11am" :'sides_biscuits_and_gravy',
  "bfast_cinnamon_rolls_11am" :'sides_cinnamon_rolls'
}

let breakfastCount = 0;

let isBreakfastSide = (item) => {
  return BreakfastSides.indexOf(item) > -1
}

@neocastDataProvider([
  'serves_bfast_all_day',
  'serves_coca_cola',

  /**
   * If these are specified, then the price and calorie information needs to be looked up
   */
  'sides_local_option_one',
  'sides_local_option_two',
  'sides_local_option_three',
  'bfast_sides'
])
export default class BreakfastFooter extends Component {

    constructor(props) {
      super(props)

      /**
       * Check to see if local options are set.
       */
      const {
        serves_bfast_all_day,

        sides_local_option_one,
        sides_local_option_two,
        sides_local_option_three,

        bfast_sides
      } = this.props;

      /**
       * Local option 1
       */

      // If it is 11am, use the base price
      let localCheck1 = (sides_local_option_one == null ? null : sides_local_option_one.replace("_11am", ""));
      this.localOption1 = API.loc(localCheck1);

      if (bfast_sides)
      {
        this.bfast_sides = breakfastFixLookup[bfast_sides];
        this.bfast_name = API.loc(`${this.bfast_sides}`)
        this.bfast_sides_price = API.loc(`${this.bfast_sides}_price`)
        this.bfast_sides_cals = API.net(`${this.bfast_sides}_cal`)
      }

      if (this.localOption1) {

        if (localCheck1 !== sides_local_option_one) {
          this.localOption1 = `${this.localOption1}<sup>*</sup>`
          this.servesUntil11 = true
        }

        this.local1_price = API.loc(`${localCheck1}_price`)
        this.local1_cals = API.net(`${localCheck1}_cal`)

        if (isBreakfastSide(sides_local_option_one)) breakfastCount++
      }

      // console.log(this.localOption1, this.local1_price, this.local1_cals);

      /**
       * Local option 2
       */
      let localCheck2 = (sides_local_option_two == null ? null : sides_local_option_two.replace("_11am", ""));
      this.localOption2 = API.loc(localCheck2);

      if (this.localOption2) {

        if (localCheck2 !== sides_local_option_two) {
          this.localOption2 = `${this.localOption2}<sup>*</sup>`
          this.servesUntil11 = true
        }

        this.local2_price = API.loc(`${localCheck2}_price`)
        this.local2_cals = API.net(`${localCheck2}_cal`)
        if (isBreakfastSide(sides_local_option_two)) breakfastCount++
      }

      /**
       * Local option 3
       */
      let localCheck3 = (sides_local_option_three == null ? null : sides_local_option_three.replace("_11am", ""));
      this.localOption3 = API.loc(localCheck3);

      if (this.localOption3) {

        if (localCheck3 !== sides_local_option_three) {
          this.localOption3 = `${this.localOption3}<sup>*</sup>`
          this.servesUntil11 = true
        }

        this.local3_price = API.loc(`${localCheck3}_price`)
        this.local3_cals = API.net(`${localCheck3}_cal`)
        if (isBreakfastSide(sides_local_option_three)) breakfastCount++
      }

    }

  render() {
    const {
      serves_coca_cola
    } = this.props;
    return (
      <div className={`c-breakfastFooter ${testType}`}>

        {this.bfast_sides &&

        <div className={`sides-wrapper`}>

          <div className='c-Menus_header'>
            BREAKFAST SIDES
          </div>

          {/* Local option 1 */}

            <LineItem
              name={this.bfast_name}
              calories={this.bfast_sides_cals}
              price6={this.bfast_sides_price}
              hideCalories={!this.bfast_sides_cals}
              expand={false}
            />

        </div>

        }

        {/* {servesCoffee &&
          <img className='coffee' src={coffee} />
        }

        <img className='sandwich' src={sandwich} /> */}


        <div className='clarify'>
          Calories refer to breakfast subs on flatbread. <br/>
          {isEggUpdate
            ? ' Deduct 110 cals per 6" for egg white'
            : ' Deduct 40 cals per 6" for egg white'
          }
        </div>


      </div>
    );
  }
}
