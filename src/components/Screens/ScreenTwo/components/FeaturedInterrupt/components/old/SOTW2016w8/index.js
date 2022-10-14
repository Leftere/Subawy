import { Component } from 'react'

import subData from 'data/subs'

import './styles.css'


export default class SOTW2016w8 extends Component {

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

        <div className="c-SOTW_header">

          <div className="c-SOTW_header_option">
            <div className="c-SOTW_header_option_value">
              <span className="c-SOTW_header_option_value_dollar">$</span>
              <span className="c-SOTW_header_option_value_price">6</span>
            </div>

            <div className="c-SOTW_header_option_info">
              <div className="c-SOTW_header_option_info_footlong">FOOTLONG</div>
              <div className="c-SOTW_header_option_info_sub">SUB</div>
              <div className="c-SOTW_header_option_info_type">
                <span className="c-SOTW_header_option_info_type_ofthe">
                  <span>OF</span><br />
                  <span>THE</span>
                </span>
                <span className="c-SOTW_header_option_info_type_name">DA<span>Y</span></span>
              </div>
            </div>
          </div>

          <div className="c-SOTW_header_context">
            <div className="c-SOTW_accent"></div>

              <div className="c-SOTW_header_context_title">TRY A DIFFERENT</div>
              <div className="c-SOTW_header_context_subtitle">FOOTLONG EACH DAY</div>

            <div className="c-SOTW_accent"></div>
          </div>

        </div>
        

        <div className="c-SOTW_body">

          {this.subsByWeek.map((sub) =>
            <div className={`c-SOTW_tile ${sub.id === this.SOTD.id ? 'c-SOTW_tile-selected' : ''}`} key={sub.id}>
              <div className="c-SOTW_tile_body">
                
                <div className="c-SOTW_tile_header">
                  {sub.sotd}
                </div>
                
                <div
                  className="c-SOTW_tile_content"
                  dangerouslySetInnerHTML={{ __html: sub.label }}
                />

              </div>
            </div>
          )}

          <div className="c-SOTW_tile c-SOTW_tile-inverted">
            <div className="c-SOTW_tile_body">
              <div className="c-SOTW_tile_header">OR GET A</div>
              <div className="c-SOTW_tile_subheader">6-INCH SUB</div>
              <div className="c-SOTW_tile_header">FOR $3.50</div>
            </div>
          </div>

        </div>
        
        <div className="c-SOTW_footer">
          Additional charge for Extras & Deluxe. Plus applicable tax. No additional discounts or coupons may be applied.
        </div>

      </div>
    )
  }
}