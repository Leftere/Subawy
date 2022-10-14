import { Component } from 'react'
import neocastDataProvider from 'api/neocastDataProvider'

import './style.pcss'

import Coke from './coke.png'
import NoCoke from './no_coke.png'

@neocastDataProvider([
  'serves_coca_cola',
  'bf_ham_meal_price_6in',
  'meatball_marinara_meal_price_6in',
  'spicy_italian_meal_price_6in',
  'cold_cut_combo_meal_price_6in',
  'veggie_delite_meal_price_6in'
])
export default class FreshValue62018w1 extends Component {
  render() {
    const {
      serves_coca_cola,
      bf_ham_meal_price_6in,
      meatball_marinara_meal_price_6in,
      spicy_italian_meal_price_6in,
      cold_cut_combo_meal_price_6in,
      veggie_delite_meal_price_6in,
    } = this.props;

    return (
      <div className='c-Promotion c-FreshValue62018w1'>

        {serves_coca_cola &&
          <img className='c-Promotion_background' src={Coke} />
        }

        {!serves_coca_cola &&
          <img className='c-Promotion_background' src={NoCoke} />
        }

        <div className='price top left'>${bf_ham_meal_price_6in}</div>
        <div className='price top right'>${meatball_marinara_meal_price_6in}</div>
        <div className='price bottom left'>${spicy_italian_meal_price_6in}</div>
        <div className='price bottom right'>${cold_cut_combo_meal_price_6in}</div>

        <div className='price veggie'>${veggie_delite_meal_price_6in}</div>

      </div>
    )
  }
}
