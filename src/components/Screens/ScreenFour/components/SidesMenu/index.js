import { Component } from 'react'

import API from 'api'
import neocastDataProvider from 'api/neocastDataProvider'

import LineItem from 'components/Common/LineItem'

import './styles.css'


const servedUntil11Sides = [
'sides_cinnamon_rolls',
'sides_hash_browns',
'sides_muffins',
'sides_biscuits_and_gravy',
]


@neocastDataProvider([
  'sides_apples_price',
  'sides_chips_price',
  'sides_cookies_price_1ct',

  'serves_bfast_all_day',

  /**
   * If these are specified, then the price and calorie information needs to be looked up
   */
  'sides_local_option_one',
  'sides_local_option_two',
  'sides_local_option_three'
])
export default class SidesMenu extends Component {

  constructor(props) {
    super(props)

    /**
     * Check to see if local options are set.
     */
    const {
      serves_bfast_all_day,

      sides_local_option_one,
      sides_local_option_two,
      sides_local_option_three
    } = this.props;

    /**
     * Local option 1
     */

     // If it is 11am, use the base price
    var localCheck1 = (sides_local_option_one == null ? null : sides_local_option_one.replace("_11am", ""));
    this.localOption1 = API.loc(localCheck1);

    if (this.localOption1) {

      if (localCheck1 !== sides_local_option_one) {
        this.localOption1 = `${this.localOption1}<sup>*</sup>`
        this.servesUntil11 = true
      }

      this.local1_price = API.loc(`${localCheck1}_price`)
      this.local1_cals = API.net(`${localCheck1}_cal`)
    }

    // console.log(this.localOption1, this.local1_price, this.local1_cals);

    /**
     * Local option 2
     */
    var localCheck2 = (sides_local_option_two == null ? null : sides_local_option_two.replace("_11am", ""));
    this.localOption2 = API.loc(localCheck2);

    if (this.localOption2) {

      if (localCheck2 !== sides_local_option_two) {
        this.localOption2 = `${this.localOption2}<sup>*</sup>`
        this.servesUntil11 = true
      }

      this.local2_price = API.loc(`${localCheck2}_price`)
      this.local2_cals = API.net(`${localCheck2}_cal`)
    }

    /**
     * Local option 3
     */
    var localCheck3 = (sides_local_option_three == null ? null : sides_local_option_three.replace("_11am", ""));
    this.localOption3 = API.loc(localCheck3);

    if (this.localOption3) {

      if (localCheck3 !== sides_local_option_three) {
        this.localOption3 = `${this.localOption3}<sup>*</sup>`
        this.servesUntil11 = true
      }

      this.local3_price = API.loc(`${localCheck3}_price`)
      this.local3_cals = API.net(`${localCheck3}_cal`)
    }

  }


  render() {
    const {
      sides_apples_price,
      sides_chips_price,
      sides_cookies_price_1ct
    } = this.props;


    return (
      <div className='SidesMenu c-Menus'>

        <div className='c-Menus_header'>
          SIDES.
        </div>

        {/* Drinks for all stores */}
        <div className='l-flush l-inline' style={{width: '100%'}}>

          <LineItem
            name={'Apples'}
            calories={'35'}
            price6={sides_apples_price}
            expand={false}
          />

          <LineItem
            name={'Chips'}
            calories={'130-340'}
            price6={sides_chips_price}
            expand={false}
          />

          <LineItem
            name={'Cookies'}
            calories={'200-230'}
            price6={sides_cookies_price_1ct}
            expand={false}
          />

        </div>

        {/* Drinks for this local store */}
        <div className='l-flush l-inline' style={{width: '100%', marginTop: '20px'}}>

          {/* Local option 1 */}
          {this.localOption1 &&
            <LineItem
              name={this.localOption1}
              calories={this.local1_cals}
              price6={this.local1_price}
              hideCalories={!this.local1_cals}
              expand={false}
            />
          }

          {/* Local option 2 */}
          {this.localOption2 &&
            <LineItem
              name={this.localOption2}
              calories={this.local2_cals}
              price6={this.local2_price}
              hideCalories={!this.local2_cals}
              expand={false}
            />
          }

          {/* Local option 3 */}
          {this.localOption3 &&
            <LineItem
              name={this.localOption3}
              calories={this.local3_cals}
              price6={this.local3_price}
              hideCalories={!this.local3_cals}
              expand={false}
            />
          }

        </div>

        {this.servesUntil11 &&
          <div className='served-until-11'>
            <span className='asterisk'>*</span> Served until 11 AM
          </div>
        }

      </div>
    );
  }
}
