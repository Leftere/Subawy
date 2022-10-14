import { Component } from 'react'

import neocastDataProvider from 'api/neocastDataProvider'

import Calories from 'components/Calories'
import delayedRender from 'components/common/delayedRender'

import fold from './fold.png'

import skyLogo from './sky-logo.png'
import mixieLogo from './mixie-logo.png'
import littleLogo from './little-people-logo.png'

import wPlane from './w-plane.png'
import bPlane from './b-plane.png'
import yPlane from './y-plane.png'

import tWatch from './t-watch.png'
import yWatch from './y-watch.png'
import pWatch from './p-watch.png'

import meal from './meal.png'

import './styles.css'

@neocastDataProvider([
	'kids_meal_promo',
	'kids_meal_price'
])
@delayedRender()
export default class KidsMeal extends Component {

  constructor(props) {
    super(props)
    const { kids_meal_promo } = this.props

    this.isPremium = kids_meal_promo === 'kids_meal_promo_premium'
    this.isEvergreen = kids_meal_promo === 'kids_meal_promo_evergreen'
  }

  componentDidMount() {
    if (this.props.player == 'dual') {
      const fadeInTime  = 0.4
      const delayTime = 0.4

      new TimelineMax({ delay: 0 })
        .set(this.frame1, { opacity: 0 })
        .set(this.frame2, { opacity: 0 })
        .to(this.frame1, fadeInTime, { opacity: 1, delay: 0.1 })
        .to(this.frame1, fadeInTime, { opacity: 0, delay: 10 })
        .to(this.frame2, fadeInTime, { opacity: 1, delay: 0 })
        .to(this.frame2, fadeInTime, { opacity: 0, delay: 10 })
        .to(this.frame3, fadeInTime, { opacity: 1, delay: 0 })
        .to(this.frame3, fadeInTime, { opacity: 0, delay: 10 })
    }
  }

	render() {
		const { kids_meal_price } = this.props

		return (
			<div className={`c-KidsMeal ${this.props.layout} kids-${this.props.player}`}>


        <div className="frame1" ref={(node) => this.frame1 = node }>
          <div className='c-KidsMeal_header'>

            <div className='c-Header_row'>

              <div className='c-Header_column'>
                <div className='c-Menus_header c-Menus_title-inline'>
                  Kids' Meal
                </div>

                <div className='c-Menus_subheader c-Menus_subheader-inline'>
                  <span className='price-currency'>$</span>{kids_meal_price}
                </div>

                <div className='c-Header_sub'>
                  Includes one mini sub on 9-grain wheat, apples,<br/>& low fat white milk or Honest Kids<span className='restricted'>®*</span>
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

          {/* Image */}
          <img src={skyLogo} className='sky-logo logo' />
          <img src={mixieLogo} className='mixie-logo logo' />
          <img src={meal} className='meal' />
          <img src={littleLogo} className='little-logo logo' />

          {/* Footer */}
          <div className={`c-Menus_footer ${this.props.layout}`}>
            <div className={`deduct-wording c-Menus_caption c-Menus_caption-highlight ${!this.isPremium && 'evergreen'}`}>
              <div className='deduct-asterisk'>*</div>
              Kids' Meal with Honest<br/>Kids<span className='restricted'>®</span> deduct 60 cals.
            </div>


            {/* Legal */}
            {this.isPremium &&
              <div className={`c-Menus_copyright ${this.props.layout}`}>
                Limited time only, while supplies last.
              </div>
            }

            {this.isPremium &&
              <div className='txt-copyright txt-default'>
                ©2017 Mattel. All Rights Reserved. <br/>
                Fisher-Price, Little People and associated trademarks and trade dress are owned by, and used under license from, MATTEL.  ©2017 MATTEL
              </div>
            }

          </div>
        </div>


        <div className="frame2" ref={(node) => this.frame2 = node }>
          <h2>Now with your kids’ meal:</h2>
          <img src={fold} className='fold' />
          <div className="skyBusters">
            <img src={skyLogo} className='sky-logo logo' />
            <img src={yPlane} className='y-plane plane' />
            <img src={bPlane} className='b-plane plane' />
            <img src={wPlane} className='w-plane plane' />
          </div>
          <div className="mixieQs">
            <img src={mixieLogo} className='mixie-logo logo' />
            <img src={pWatch} className='p-watch watch' />
            <img src={yWatch} className='y-watch watch' />
            <img src={tWatch} className='t-watch watch' />
          </div>
          <div className="meal">
            <img src={meal} className='meal' />
          </div>
        </div>


        <div className="frame3" ref={(node) => this.frame3 = node }>
          <div className='c-KidsMeal_header'>

            <div className='c-Header_row'>

              <div className='c-Header_column'>
                <div className='c-Menus_header c-Menus_title-inline'>
                  Kids' Meal
                </div>

                <div className='c-Menus_subheader c-Menus_subheader-inline'>
                  <span className='price-currency'>$</span>{kids_meal_price}
                </div>

                <div className='c-Header_sub'>
                  Includes one mini sub on 9-grain wheat, apples,<br/>& low fat white milk or Honest Kids<span className='restricted'>®*</span>
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

          {/* Image */}
          <img src={skyLogo} className='sky-logo logo' />
          <img src={mixieLogo} className='mixie-logo logo' />
          <img src={meal} className='meal' />
          <img src={littleLogo} className='little-logo logo' />

          {/* Footer */}
          <div className={`c-Menus_footer ${this.props.layout}`}>
            <div className={`deduct-wording c-Menus_caption c-Menus_caption-highlight ${!this.isPremium && 'evergreen'}`}>
              <div className='deduct-asterisk'>*</div>
              Kids' Meal with Honest<br/>Kids<span className='restricted'>®</span> deduct 60 cals.
            </div>


            {/* Legal */}
            {this.isPremium &&
              <div className={`c-Menus_copyright ${this.props.layout}`}>
                Limited time only, while supplies last.
              </div>
            }

            {this.isPremium &&
              <div className='txt-copyright txt-default'>
                ©2017 Mattel. All Rights Reserved. <br/>
                Fisher-Price, Little People and associated trademarks and trade dress are owned by, and used under license from, MATTEL.  ©2017 MATTEL
              </div>
            }

          </div>
        </div>

			</div>
		)
	}
}
