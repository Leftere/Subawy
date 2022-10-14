import { Component } from 'react'

import API from 'api'
import neocastDataProvider from 'api/neocastDataProvider'

import './styles.css'
import image from './background.png'


/**
 * Mapping of local option to calorie amount
 * @type {Object}
 */
const localOptionCals = {
  meatball: 500,
  sausage: 500
}


@neocastDataProvider([
  'flatizza_cheese_veggie_price',
  'flatizza_pepperoni_spicy_italian_price',

  'flatizza_meatball_boolean',
  'flatizza_sausage_boolean',

  'flatizza_meatball_price',
  'flatizza_sausage_price'
])
export default class FlatizzaFooter extends Component {

  render() {
    const {
      flatizza_meatball_boolean,
      flatizza_sausage_boolean,

      flatizza_meatball_price,
      flatizza_sausage_price
    } = this.props;


    if (true) {
      this.hasLocal = true;
      this.localName = 'Meatball';
      this.localCals = localOptionCals.meatball;
      this.localPrice = flatizza_meatball_price;

    } else if (flatizza_sausage_boolean) {
      this.hasLocal = true;
      this.localName = 'Sausage';
      this.localCals = localOptionCals.sausage;
      this.localPrice = flatizza_sausage_price
    }


    return (
      <div className='c-Footer c-flatizza'>
        <div
          className='c-Footer_background'
          style={{ background: `url(${image})` }}
        >

        <span className='flatizza_price_cheese'>
          ${this.props.flatizza_cheese_veggie_price}
        </span>


        <span className='flatizza_price_pepperoni'>
          ${this.props.flatizza_pepperoni_spicy_italian_price}
        </span>

        {this.hasLocal &&
          <div className='flatizza-alt-option'>
            <span>
              {this.localName}
            </span>

            <span className='flatizza-alt-calories c-Menus_caption-highlight'>
              {this.localCals} cal
            </span>
          </div>
        }


        </div>
      </div>
    )
  }
}
