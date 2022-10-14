import { Component } from 'react'

import subData from 'data/subs'

import './styles.css'


import tuna from './subs/tuna.png'
import sweet_onion_chicken_teriyaki from './subs/sweet_onion_chicken_teriyaki.png'
import oven_roasted_chicken from './subs/oven_roasted_chicken.png'
import turkey_breast from './subs/turkey_breast.png'
import italian_bmt from './subs/italian_bmt.png'
import black_forest_ham from './subs/black_forest_ham.png'
import meatball_marinara from './subs/meatball_marinara.png'


const idToImg = {
  sweet_onion_chicken_teriyaki,
  oven_roasted_chicken,
  turkey_breast,
  italian_bmt,
  tuna,
  black_forest_ham,
  meatball_marinara
}


export default class SOTD2016w8 extends Component {

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
  }


  render() {
    return (
      <div className='c-SOTW'>

        {/* Header */}
        <div className='c-SOTW_header'>

          <div className='c-SOTW_header_option'>
            <div className='c-SOTW_header_option_value'>
              <span className='c-SOTW_header_option_value_dollar'>$</span>
              <span className='c-SOTW_header_option_value_price'>6</span>
            </div>

            <div className='c-SOTW_header_option_info'>
              <div className='c-SOTW_header_option_info_footlong'>FOOTLONG</div>
              <div className='c-SOTW_header_option_info_sub'>SUB</div>
              <div className='c-SOTW_header_option_info_type'>
                <span className='c-SOTW_header_option_info_type_ofthe'>
                  <span>OF</span><br />
                  <span>THE</span>
                </span>
                <span className='c-SOTW_header_option_info_type_name'>DA<span>Y</span></span>
              </div>
            </div>
          </div>

          <div className='c-SOTW_header_context'>
            <div className='c-SOTW_accent'></div>
              <div className='c-SOTW_header_context_title'>TODAY'S SUB</div>
              <div
                className='c-SOTW_header_context_name'
                dangerouslySetInnerHTML={{ __html: this.SOTD.label }}
              />
            <div className='c-SOTW_accent'></div>
          </div>

        </div>

        {/* Body */}
        <div className='c-SOTW_body'>

          <img className='c-SOTW_sotd' src={idToImg[this.SOTD.id]} />

          <div className='c-SOTW_tile c-SOTW_tile-offset'>
            <div className='c-SOTW_tile_body c-SOTW_tile_body-flush'>
              <div className='c-SOTW_tile_header'>TRY A DIFFERENT</div>
              <div className='c-SOTW_tile_subheader'>FOOTLONG EACH DAY</div>
            </div>
          </div>
          <div className='c-SOTW_tile c-SOTW_tile-inverted'>
            <div className='c-SOTW_tile_body'>
              <div className='c-SOTW_tile_header'>OR GET A</div>
              <div className='c-SOTW_tile_subheader'>6-INCH SUB</div>
              <div className='c-SOTW_tile_header'>FOR $3.50</div>
            </div>
          </div>

        </div>

        {/* Legal */}
        <div className='c-SOTW_footer'>
          Additional charge for Extras & Deluxe. Plus applicable tax. No additional discounts or coupons may be applied.
        </div>

      </div>
    )
  }
}