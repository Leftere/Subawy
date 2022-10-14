import { Component } from 'react'

import isNil from 'lodash/isNil'
import neocastDataProvider from 'api/neocastDataProvider'

import './styles.css'
import image from './background.png'


@neocastDataProvider([
  'personal_pizza_cheese_price',
  'personal_pizza_extra_toppings_price',

  'personal_pizza_meatball_boolean',
  'personal_pizza_sausage_boolean'
])
export default class RoundCheesePizzaOldSchoolFooterPromotion extends Component {
  render() {
    const {
      personal_pizza_meatball_boolean,
      personal_pizza_sausage_boolean
    } = this.props;

    let numLocal = 0;

    if (personal_pizza_meatball_boolean) {
      numLocal++;
    }

    if (personal_pizza_sausage_boolean) {
      numLocal++;
    }


    return (
      <div className='c-Footer'>
        <div
          className='c-Footer_background c-Footer_background-RoundCheesePizza'
          style={{ background: `url(${image})` }}
        >

          <span className='pizza_cheese_price'>
            ${this.props.personal_pizza_cheese_price}
          </span>

          <span className='pizza_extra_toppings_price'>
            ${this.props.personal_pizza_extra_toppings_price}
          </span>

          {/* Local options */}
          <div className='pizza-alt-option' style={{ bottom: numLocal === 2 ? 15 : 50 }}>

            {personal_pizza_meatball_boolean &&
              <div className='option-container'>
                <span>
                  Meatball
                </span>

                <span className='pizza-alt-calories c-Menus_caption-highlight'>
                  500 added cal
                </span>
              </div>
            }

            {personal_pizza_sausage_boolean &&
              <div className='option-container'>
                <span>
                  Sausage
                </span>

                <span className='pizza-alt-calories c-Menus_caption-highlight'>
                  500 added cal
                </span>
              </div>
            }

          </div>


        </div>
      </div>
    )
  }
}
