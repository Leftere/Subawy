import { Component } from 'react'

import neocastDataProvider from 'api/neocastDataProvider'

import Calories from 'components/Common/Calories'
import delayedRender from 'components/Common/delayedRender'

import kidsMeal from '../images/meal.png'

import './styles.css'

@neocastDataProvider([
	'kids_meal_promo',
	'kids_meal_price'
])
@delayedRender()
export default class KidsMealDual extends Component {

  constructor(props) {
    super(props)
    const { kids_meal_promo } = this.props

    this.isPremium = kids_meal_promo === 'kids_meal_promo_premium'
    this.isEvergreen = kids_meal_promo === 'kids_meal_promo_evergreen'
  }

  componentDidMount() {
    if (this.props.player == 'dual') {
    }
  }

	render() {
		const { kids_meal_price } = this.props

		return (
			<div className={`c-KidsMeal ${this.props.layout} kids-${this.props.player}`}>


        {/* Image */}
        <img src={kidsMeal} className='kidsMeal' />

        <div className="frame1" ref={(node) => this.frame1 = node }>
          <div className='c-KidsMeal_header'>

            <div className='c-Header_row'>

              <div className='c-Header_column'>
                <div className='c-Menus_header c-Menus_title-inline'>
                  KIDS' MEAL
                </div>

                <div className='c-Menus_subheader c-Menus_subheader-inline'>
                  <span className='price-currency'>$</span>{kids_meal_price}
                </div>

                <div className='c-Header_sub'>
                  Includes one mini sub on 9-grain wheat, <br/>apples, &amp; low fat white milk or Honest Kids<span className='restricted'>®</span>
                </div>
              </div>

            </div>
          </div>

          {/* List */}
          <div className='c-KidsMeal_body'>

            <div className='c-List_item'>
              <div className='c-Menus_title c-Menus_title-inline'>
                Black Forest Ham
              </div>
              <Calories>
                320
              </Calories>
            </div>

            <div className='c-List_item'>
              <div className='c-Menus_title c-Menus_title-inline'>
                Roast Beef
              </div>
              <Calories>
                340
              </Calories>
            </div>

            <div className='c-List_item'>
              <div className='c-Menus_title c-Menus_title-inline'>
                Turkey Breast
              </div>
              <Calories>
                320
              </Calories>
            </div>

            <div className='c-List_item'>
              <div className='c-Menus_title c-Menus_title-inline'>
                Veggie Delite<span className='restricted'>®</span>
              </div>
              <Calories>
                290
              </Calories>
            </div>

          </div>

          {/* Footer */}
          <div className={`c-Menus_footer ${this.props.layout}`}>
            {/*<div className={`deduct-wording c-Menus_caption c-Menus_caption-highlight ${!this.isPremium && 'evergreen'}`}>
              <div className='deduct-asterisk'>*</div>
              Kids' Meal with Honest<br/>Kids<span className='restricted'>®</span> deduct 60 cals.
            </div>*/}


            {/* Legal */}
            {this.isPremium &&
              <div className={`c-Menus_copyright ${this.props.layout}`}>
                Limited time only, while supplies last.
              </div>
            }

            {this.isPremium &&
              <div className='txt-copyright txt-default'>
                BARBIE, HOT WHEELS, Fisher Price, Little People and associated trademarks and<br/> trade dress are owned by, and used under license from Mattel. ©2018 Mattel.  All Rights Reserved.
              </div>
            }

            <div className='mealCaption' ref={(node) => this.mealCaption = node }>
              Barbie or Hot Wheels<br/>
              toy in every Kids’ meal!
            </div>

          </div>
        </div>

			</div>
		)
	}
}
