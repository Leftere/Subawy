import { Component } from 'react'

import neocastDataProvider from 'api/neocastDataProvider'

import subData from 'data/subs'

import background from './background.jpg'
import backgroundVitamin from './background-vitamin.jpg'
import './styles.css'


import shadow from './shadow.png'
import tuna from './subs/tuna.png'
import sweet_onion_chicken_teriyaki from './subs/sweet_onion_chicken_teriyaki.png'
import oven_roasted_chicken from './subs/oven_roasted_chicken.png'
import turkey_breast from './subs/turkey_breast.png'
import italian_bmt from './subs/italian_bmt.png'
import black_forest_ham from './subs/black_forest_ham.png'
import meatball_marinara from './subs/meatball_marinara.png'

// Special case for different soct version
import soctChickenStrips from './subs/sweet_onion_chicken_teriyaki_strips.png'


const idToImg = {
  sweet_onion_chicken_teriyaki,
  oven_roasted_chicken,
  turkey_breast,
  italian_bmt,
  tuna,
  black_forest_ham,
  meatball_marinara
}


const shiftShadowDownFor = [
  'Sunday',
  'Monday'
];


@neocastDataProvider([
  'meal_deal_fountain_additional_price',
  'serves_chicken_strips',
  'serves_coca_cola'
])
export default class SOTD2017w2ValuePromotion extends Component {
  
  constructor(props) {
    super(props)

    let week = [
      'Sunday',
      'Monday',
      'Tuesday',
      'Wednesday',
      'Thursday',
      'Friday',
      'Saturday'
    ]

    const date = new Date()
    const today = week[date.getDay()]

    week.push(week.shift())
    this.subsByWeek = week.map((day) => subData.find((sub) => sub.sotd === day))

    this.SOTD = subData.find((sub) => sub.sotd === today)


    this.todaySubImage = idToImg[this.SOTD.id]


    /**
     * If the SOTD is 'Sweet Onion Chicken Teriyaki' and the store serves chicken strips
     * (typically a CA store), then use a different sub image
     */
    if (today === 'Monday' && this.props.serves_chicken_strips) {
      this.todaySubImage = soctChickenStrips
    }

    this.backgroundImg = background
    if (this.props.serves_coca_cola) {
      this.backgroundImg = backgroundVitamin
    }


    /**
     * Conditionally move shadow down for large sandwiches
     */
    this.shadowStyle = {}
    if (shiftShadowDownFor.includes(today)) {
      this.shadowStyle = {
        top: 507
      }
    }

    if (today === 'Tuesday') {
      this.shadowStyle = {
        top: 525
      }
    }

    if (today === 'Friday') {
      this.shadowStyle = {
        top: 517
      }
    }
  }


  render() {
    return (
      <div className='c-SOTD2017w2'>

        <img className='c-SOTD2017w2_background' src={this.backgroundImg} />
        <img className='sotdShadow' src={shadow} style={this.shadowStyle} />

        <div className='c-SOTD2017w2_sub'>
          <img
            className='c-SOTD2017w2_sub_img'
            src={this.todaySubImage}
          />
        </div>

        <div className='c-SOTD2017w2_week'>     

          {this.subsByWeek.map((sub) =>
            <div className='c-SOTD2017w2_week_day' key={sub.id}>
              <div className='c-SOTD2017w2_week_day_name'>
                <div className={`c-SOTD2017w2_week_day_label ${sub.id === this.SOTD.id ? 'c-SOTD2017w2_week_day_label-selected' : '' } txt-brand`}>
                  {sub.sotd}
                </div>
              </div>
              <div className='c-SOTD2017w2_week_day_sub'>
                <div
                  className={`c-SOTD2017w2_week_day_label ${sub.id === this.SOTD.id ? 'c-SOTD2017w2_week_day_label-selected' : '' } txt-brand`}
                  dangerouslySetInnerHTML={{ __html: sub.label }}
                />
              </div>
            </div>
          )}

        </div>

        <div className='c-SOTD2017w2_mealdeal'>
          Make it a meal. Add ${this.props.meal_deal_fountain_additional_price}.
        </div>

      </div>
    )
  }
}
