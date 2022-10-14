import { Component } from 'react'

import neocastDataProvider from 'api/neocastDataProvider'

import regularMealImage from './makeAMeal-ROTF.png'
import mealPromo from './makeAMeal-coke.png'

import './styles.css'


@neocastDataProvider([
  'meal_deal_fountain_additional_price',
  'serves_coca_cola'
])
export default class MakeItAMeal extends Component {

  render() {
    const {
      meal_deal_fountain_additional_price,
      serves_coca_cola
    } = this.props;


    let mealImage = regularMealImage

    if (serves_coca_cola) {
      mealImage = mealPromo
    }


    return (
      <div className='MakeAMealSection c-Addon l-pad-top-md'>
        <div className='c-Addon_info c-Addon_info-constrain'>

          <div className='c-Addon_heading'>
            Make It A Meal
          </div>

          {meal_deal_fountain_additional_price && meal_deal_fountain_additional_price !== '0.00' &&
            <div className='c-Addon_subheading makeMealPrice'>
              +&nbsp;${meal_deal_fountain_additional_price}
            </div>
          }

          <div className='c-Addon_subheading'>
            Pair sub with a 21 oz. drink and a side<br/>
            (apples, 2 cookies, or chips).
          </div>

        </div>

        <div className='c-Addon_media'>
          <div className='c-Addon_media_caption'>
            Swap any drink or size & pay the difference.
          </div>

          <img className='c-Addon_media_image' src={mealImage} />
        </div>
      </div>
    );
  }
}
