import { Component } from 'react'

import neocastDataProvider from 'api/neocastDataProvider'

import SubLineItem from 'components/SubLineItem'
import FootlongHeader from 'components/ColumnHeaders/Footlong'
import SixInchHeader from 'components/ColumnHeaders/SixInch'

import './styles.css'


@neocastDataProvider([
  'kids_meal_promo'
])
export default class SignatureMenu extends Component {
  render() {
    const isPremium = this.props.kids_meal_promo === 'kids_meal_promo_premium';

    return (
      <div className='SignatureMenu'>

        {/* Menu header */}
        <div className='c-Signature_header'>
          <div className='c-Header_row'>

            <div className='c-Header_column c-Header_column-spacer'>
              <div className='c-Menus_header'>
                Signature Subs
              </div>
            </div>

            <div className='c-Header_column'>
              <SixInchHeader />
            </div>

            <div className='c-Header_column'>
              <FootlongHeader />
            </div>

          </div>
        </div>


        {/* Menu content */}
        <div className='c-Signature_body'>

          {/* Standard options */}
          <SubLineItem apiKey='steak_cheese' />
          <SubLineItem apiKey='chicken_bacon_ranch' />
          <SubLineItem apiKey='italian_bmt' />
          <SubLineItem apiKey='tuna' />
          <SubLineItem apiKey='spicy_italian' />
          <SubLineItem apiKey='meatball_marinara' />
          <SubLineItem apiKey='cold_cut_combo' />

          {/* Local options */}
          <SubLineItem apiKey='local_option_one' local />
          <SubLineItem apiKey='local_option_two' local />
          <SubLineItem apiKey='local_option_three' local />
          <SubLineItem apiKey='local_option_four' local />
          <SubLineItem apiKey='local_option_five' local />

        </div>


        {/* Footer */}
        <div className='c-Menus_footer'>

          <div className='calorieFooterInfo txt-legal txt-default'>
            2,000 calories a day is used for general nutrition advice, but calorie needs vary.
            Additional nutrition information available upon request.
          </div>


          <div className='taxLine txt-legal txt-default'>
            Calories refer to subs prepared to standard recipe on
            9-grain wheat bread with lettuce, tomatoes, <br/>
            onions, green peppers and cucumbers.
          </div>

        </div>

      </div>
    );
  }
}
