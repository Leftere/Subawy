import { Component } from 'react'

import isNil from 'lodash/isNil'

import neocastDataProvider from 'api/neocastDataProvider'

// Subs
import SubLineItem from 'components/SubLineItem'
import FootlongHeader from 'components/ColumnHeaders/Footlong'
import SixInchHeader from 'components/ColumnHeaders/SixInch'

import './styles.css'


@neocastDataProvider([
  'gluten_free_bread',
  'gluten_free_bread_price'
])
export default class FreshFitMenu extends Component {

  constructor(props) {
    super(props)

    const { gluten_free_bread } = this.props

    this.hasGlutenFreeBread = !isNil(gluten_free_bread)
      ? JSON.parse(gluten_free_bread)
      : false
  }


  render() {
    return (
      <div className='FreshFitMenu'>

        {/* Menu header */}
        <div className='c-Signature_header'>
          <div className='c-Header_row'>

            <div className='c-Header_column'>
              <div className='c-Menus_header'>
                Subway Fresh Fit<sup>®</sup>
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

        <div className='c-Header_row c-Header_column-block'>
          <div className='c-Header_column'>
            <div className='c-Menus_tagline'>
              These 6" subs are less than 400 calories, low in saturated fat and
              contain 24g of whole grains.<sup>*</sup>
            </div>
          </div>
        </div>


        {/* Menu */}
        <SubLineItem apiKey='rotisserie_style_chicken' />
        <SubLineItem apiKey='subway_club' />
        <SubLineItem apiKey='oven_roasted_chicken' />
        <SubLineItem apiKey='turkey_breast' />
        <SubLineItem apiKey='roast_beef' />
        <SubLineItem apiKey='veggie_delite' />
        <SubLineItem apiKey='bf_ham' />
        <SubLineItem apiKey='soct' />

        {this.hasGlutenFreeBread &&
          <div className='glutenLineItem'>
            <div className='c-TableList_row'>
              <div className='c-TableList_column' style={{ width: '100%' }}>

                <span className='c-Menus_title c-Menus_title-v-expand'>
                  Gluten-Free Bread<sup>**</sup>
                    <span className='glutenCalories'>340 cal</span>
                    +${this.props.gluten_free_bread_price} per 6" sub
                </span>

              </div>
            </div>
          </div>
        }


        {/* Footer */}
        <div className='c-Menus_footer'>

          <div className='c-Menus_copyright'>
            <div className='legalContent'>
              * 6" Subway Fresh Fit<sup>®</sup> subs refer to subs prepared to standard recipe on 9-grain wheat bread with lettuce, tomatoes, onions,<br/>
              <span style={{ marginLeft: 13 }} />green peppers, and cucumbers. Subway Fresh Fit<sup>®</sup> prepared in front of you and are not a diet program.
            </div>

            {this.hasGlutenFreeBread &&
              <div className='legalContent' style={{ top: 5, left: -23 }}>
                ** The Gluten-Free bread is manufactured in a Gluten-Free facility. However, other menu items and ingredients in our restaurants<br/>
                <span style={{ marginLeft: 23 }} />contain gluten and are prepared on shared equipment, so we cannot guarantee that our menu items are 100% Gluten Free.
              </div>
            }
          </div>
        </div>

      </div>
    );
  }
}
