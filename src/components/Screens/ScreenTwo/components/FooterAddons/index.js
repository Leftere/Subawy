import { Component } from 'react'

import API from 'api'
import isNil from 'lodash/isNil'
import neocastDataProvider from 'api/neocastDataProvider'

import 'gsap'
import 'gsap-then'

import imgAvocado from './images/Silo.png'
import imgAvocadoSliced from './images/sliced.png'
import imgMozzarella from './images/mozzarella.png'
import imgBelgio from './images/belgioioso.png'
import SodiumWarning from 'components/Common/SodiumWarning'

import './styles.css'

/**
 * These are calories for local options - they keep changing, and it's a longer
 * process for RDM to update them.
 */
const localCals = {
  extras_avocado: [60, 120],
  extras_pepperoni: [80, 160],
  extras_guacamole: [70, 140],
  extras_spicy_guacamole: [70, 140],
  sides_chili: [360],
  sides_brownie: ['350-370']
}

const imageLookup = {
  'sides_chili': imgAvocado,
  'sides_brownie': imgAvocado,
  'sides_soup': imgAvocado,


}

const getLocalOptionData = (localOptionKey = 'extras_local_option_one') => {
  const local = API.v.loc(localOptionKey)
  if (!local.isValid) {
    return {
      isValid: false
    };
  }

  console.log('TEST: ' + `${localCals[localOptionKey]}`)

  return {
    isValid: true,
    name: local.data,
    price6: API.loc(`${localOptionKey}_price_6in`),
    price12: API.loc(`${localOptionKey}_price_12in`),
    calories: `${localCals[localOptionKey]}`
  }
}

const BreakfastSides = [
  // 'sides_cinnamon_rolls',
  // 'sides_cinnamon_rolls_11am',
  // 'sides_hash_browns',
  // 'sides_hash_browns_11am',
  // 'sides_muffins',
  // 'sides_muffins_11am',
  // 'sides_biscuits_and_gravy',
  // 'sides_biscuits_and_gravy_11am',
]


let isBreakfastSide = (item) => {
  return BreakfastSides.indexOf(item) > -1
}

let listSidesNoBreakfast = [];
let listExtras = [];

let avocadoSliced = API.loc(`avocado_sliced`);

@neocastDataProvider([
  /**
   * These are part of every Extras menu.
   */
  'extras_bacon_price_6in',
  'extras_bacon_price_12in',

  'deluxe_addon_price_6in',
  'deluxe_addon_price_12in',

  'extras_double_meat_price_6in',
  'extras_double_meat_price_12in',

  'extras_cheese_price_6in',
  'extras_cheese_price_12in',


  'sides_chips_price',
  'sides_cookies_price_1ct',
  'sides_apples_price',

  'gluten_free_bread',
  'gluten_free_bread_price',

  'extras_pepperoni_price_6in',
  'extras_pepperoni_price_12in',

  'extras_guacamole_price_6in',
  'extras_guacamole_price_12in',

  'extras_avocado_price_6in',
  'extras_avocado_price_12in',

  'gluten_free_bread_price',

  
  'extras_mozzarella_price_6in',
  'extras_mozzarella_price_12in',

  'sides_local_option_one',
  'sides_local_option_two',

  /**
   * Local options.
   *
   * If either of these keys are specified, then the corresponding
   * prices and calorie information should be looked up.
   */
  'extras_local_option_one',
  'extras_local_option_two',
  'extras_local_option_three'
])
export default class FooterAddons extends Component {

  constructor(props) {
    super(props)

    const {
      gluten_free_bread,
      serves_bfast_all_day,

      sides_local_option_one,
      sides_local_option_two,
      sides_local_option_three
    } = this.props;

    this.hasGlutenFreeBread = !isNil(gluten_free_bread)
      ? JSON.parse(gluten_free_bread)
      : false

    this.local1 = getLocalOptionData(this.props.sides_local_option_one)
    this.local2 = getLocalOptionData(this.props.sides_local_option_two)
    this.local3 = getLocalOptionData(this.props.extras_local_option_three)


    /**
     * Local option 1
     */

     // If it is 11am, use the base price
    let localCheck1 = (sides_local_option_one == null ? null : sides_local_option_one.replace("_11am", ""));
    this.localOption1 = API.loc(localCheck1);

    console.log('LOG: ' + this.localOption1)
    console.log('LOG1: ' + this.localCheck1)

    if (this.localOption1) {

      if (localCheck1 !== sides_local_option_one) {
        this.localOption1 = `${this.localOption1}<sup>*</sup>`
        this.servesUntil11 = true
      }

      this.local1_price = API.loc(`${localCheck1}_price`)

      if (this.local1.calories !== 'undefined' && this.local1.calories !== undefined) {
        this.local1_cals = this.local1.calories
      } else {
        this.local1_cals = API.net(`${localCheck1}_cal`)
      }

      if (!isBreakfastSide(localCheck1)) listSidesNoBreakfast.push({
        side: localCheck1,
        name: API.loc(`${localCheck1}`),
        price: this.local1_price,
        cals: this.local1_cals
      });

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

      if (this.local2.calories !== 'undefined' && this.local2.calories !== undefined) {
        this.local2_cals = this.local2.calories
      } else {
        this.local2_cals = API.net(`${localCheck2}_cal`)
      }

      if (!isBreakfastSide(localCheck2)) listSidesNoBreakfast.push({
        side: localCheck2,
        name: API.loc(`${localCheck2}`),
        price: this.local2_price,
        cals: this.local2_cals
      });
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

      if (this.local3.calories !== 'undefined' && this.local3.calories !== undefined) {
        this.local3_cals = this.local3.calories
      } else {
        this.local3_cals = API.net(`${localCheck3}_cal`)
      }

      if (!isBreakfastSide(localCheck3)) listSidesNoBreakfast.push({
        side: localCheck3,
        name: API.loc(`${localCheck3}`),
        price: this.local3_price,
        cals: this.local3_cals
      });
    }

    // Extras
    this.extras1 = API.loc(`extras_local_option_one`);
    if (this.extras1 && this.extras1 != "extras_guacamole")
    {
      let extras1 = {
        key: this.extras1,
        name:    API.loc(`${this.extras1}`),
        price6:  API.loc(`${this.extras1}_price_6in`),
        price12: API.loc(`${this.extras1}_price_12in`),
        cals:   localCals[this.extras1],
      }

      listExtras.push(extras1)
    }

    this.extras2 = API.loc(`extras_local_option_two`);
    if (this.extras2 && this.extras2 != "extras_guacamole")
    {
      let extras2 = {
        key: this.extras2,
        name:    API.loc(`${this.extras2}`),
        price6:  API.loc(`${this.extras2}_price_6in`),
        price12: API.loc(`${this.extras2}_price_12in`),
        cals:   localCals[this.extras2],
      }

      listExtras.push(extras2)
    }

    console.log("LOCALS", this.localOption1);

  }

  componentDidMount() {
    if (this.props.player == 'dual') {}

  }

  render() {

    const {
      extras_bacon_price_6in,
      extras_bacon_price_12in,
      deluxe_addon_price_6in,
      deluxe_addon_price_12in,
      extras_double_meat_price_6in,
      extras_double_meat_price_12in,
      extras_cheese_price_6in,
      extras_cheese_price_12in,
      extras_guacamole_price_6in,
      extras_guacamole_price_12in,
      extras_pepperoni_price_6in,
      extras_pepperoni_price_12in,
      extras_avocado_price_6in,
      extras_avocado_price_12in,
      sides_chips_price,
      sides_cookies_price_1ct,
      sides_apples_price,
      gluten_free_bread_price,
      extras_mozzarella_price_6in,
      extras_mozzarella_price_12in
    } = this.props

    return (
      <div className='footerAddonsHero'>

        <div className='footer-1' ref={(node) => this.footer1 = node }>

          <div className='footer-title'>ADD-<br/>ONS</div>

          <div className='f-col f-1'>
            <div className='wrapper'>
              
            
              { avocadoSliced &&
                <img src={imgAvocadoSliced}/>
              }

              { !avocadoSliced &&
                <img src={imgAvocado}/>
              }

              <div className="info">
                { avocadoSliced &&
                  <span className='title'>Sliced Avocado</span>
                }
                { !avocadoSliced &&
                  <span className='title'>Smashed Avocado</span>
                }
              <span className="new">new</span>
              <div className='pricing'>
                <span>80 | 160 added cal</span>
                <strong>${extras_bacon_price_6in} | ${extras_bacon_price_12in}</strong><br/>
                
              </div>
              </div>
              
            </div>
          </div>

          <div className='f-col f-2 footer-mozzarella'>
            <div className='wrapper'>
              <img src={imgMozzarella}/>
              <div className="info">
              <div className='title'>Fresh Mozzarella</div>
              
              <div className='pricing'>
              <span>40-60 | 80-120  added cal <SodiumWarning/></span>
                <strong>${extras_mozzarella_price_6in} | ${extras_mozzarella_price_12in}</strong><br/>
                
              </div>  
              </div>
            </div>
            <img src={imgBelgio} className='belgio'/>
          </div>


        </div>

      </div>
    );
  }
}
