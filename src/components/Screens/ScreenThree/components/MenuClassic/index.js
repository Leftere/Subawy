import { Component } from 'react'
import API from 'api'
import isNil from 'lodash/isNil'

import neocastDataProvider from 'api/neocastDataProvider'

import SubLineItem from 'components/Common/SubLineItem'
import SubBlockItem from 'components/Common/SubBlockItem'
import SubImage from './images/subs.png'
import KingImage from './images/king.png'
import UCGBImage from './images/ucgb_callout.png'

import SubImageNoRB from './images/subs-no-rb.png'

import './styles.css'

let featurePromos = [
  API.loc('feature_promotion1'),
  API.loc('feature_promotion2'),
  API.loc('feature_promotion3')
]

let kingPromoSelected = featurePromos.includes('kings_hawaiian');
let alohaPrice = API.loc('kings_hawaiian_price');
let isRBSkuTest = !isNil(API.loc('test_sku_roast_beef'))

let ucgbSelected = featurePromos.includes('ucgb_w6');
let ucgbPrice6Inch = API.loc('ucgb_upgrade_price_6in');
let ucgbPrice12Inch = API.loc('ucgb_upgrade_price_12in');

if (ucgbSelected) {
  let calloutAdjust = "calloutAdjust"
}

let bgImage = SubImage
let testType = ""

if (isRBSkuTest)
{
  bgImage = SubImageNoRB
  testType = "rb-sku-test"
}

@neocastDataProvider([
  'decal_options',
  'spicy_italian_decal_price',
  'meatball_decal_price',
  'ccc_decal_price',
  'spicy_italian_decal_price',
  'store_plus_allergy',
  'local_option_one',
  'local_option_two',
  'local_option_three',
  'local_option_four',
  'buffalo_chicken',
  'ucgb_w6_price'
])

export default class ClassicMenu extends Component {

  constructor(props) {
    super(props);
    this.state = {
      intervalId: null,
      currentFrameCount: 0
    }
  }

  render() {

    // pre-process some decal metadata because it got more complicated
    let decals = {}
    if (this.props.decal_options == 'starting_at') {
      decals['spicy_italian'] = {
        decal12: this.props.spicy_italian_decal_price || '499',
        decal12Color: 'green'
      }
      decals['meatball_marinara'] = {
        decal12: this.props.meatball_decal_price || '499',
        decal12Color: 'green'
      }
      decals['cold_cut_combo'] = {
        decal12: this.props.ccc_decal_price || '499',
        decal12Color: 'green'
      }
    } else if (this.props.decal_options == 'footlong') {
      decals['spicy_italian'] = {
        decal12: this.props.spicy_italian_decal_price || '499'
      }
      decals['meatball_marinara'] = {
        decal12: this.props.meatball_decal_price || '499'
      }
      decals['cold_cut_combo'] = {
        decal12: this.props.ccc_decal_price || '499'
      }
    } else if (this.props.decal_options == 'footlong_alt') {
      let decalLookup = {
        'pizza_sub': 'pizza_decal_price',
        'falafel': 'falafel_decal_price',
        'bbq_rib': 'bbq_decal_price'
      }
      let options = ['local_option_one', 'local_option_two', 'local_option_three', 'local_option_four']
      options.forEach(option => {
        let sub = this.props[option]
        if (Object.keys(decalLookup).includes(sub)) {
          decals[option] = {
            decal12: this.props[decalLookup[sub]] || '499'
          }
        }
      })

    }

    return (
      <div className={`c-MenuClassic ${testType}`}>

        <img src={SubImage} className='subImage'/>

        <div className={`classicHeader`}>
            <h1>Keep It Classic.</h1>
            <h2>  6" /Footlong</h2>
        </div>

        <div className={`blockItems`}>
            <SubBlockItem apiKey='steak_cheese'/>
            <SubBlockItem apiKey='chicken_bacon_ranch'/>
            <SubBlockItem apiKey='italian_bmt'/>
            <SubBlockItem apiKey='tuna'/>
            <SubBlockItem apiKey='spicy_italian' {...decals['spicy_italian']}/>
            <SubBlockItem apiKey='meatball_marinara' {...decals['meatball_marinara']}/>
            <SubBlockItem apiKey='cold_cut_combo' {...decals['cold_cut_combo']}/>
        </div>

        <div className={`localItems`}>
            <SubLineItem apiKey='buffalo_chicken' priceSeparator='/'/>
            <SubLineItem apiKey='local_option_one' priceSeparator='/' local {...decals['local_option_one']}/>
            <SubLineItem apiKey='local_option_two' priceSeparator='/' local {...decals['local_option_two']}/>
            <SubLineItem apiKey='local_option_three' priceSeparator='/' local {...decals['local_option_three']}/>
        </div>

        {kingPromoSelected &&
          <div>
            <img src={KingImage} className='kingImage'/>
            <span className='kingPrice'>${alohaPrice}</span>
          </div>
        }

        {ucgbSelected &&
          <div>
            <img src={UCGBImage} className='ucgbImage'/>
            <span className='ucbgPrice'>+ ${ucgbPrice6Inch}/${ucgbPrice12Inch}</span>
          </div>
        }

        {/* Footer */}
        <div className='c-Menus_footer'>

          <div className='c-Menus_copyright'>
            <div className='legalContent'>
              {this.props.store_plus_allergy &&
                <span>
                  Before placing your order, please inform your server if a person
                  in your party has a food allergy. Subway Seafood <br/>Sensation™ is a
                  processed seafood and crab blend. Calories refer to subs as shown.
                  Prices do not include any applicable taxes.</span>
              }

              {!this.props.store_plus_allergy &&
                <span>
                  Calories refer to subs prepared to standard recipe on
                  9-grain wheat bread with lettuce, tomatoes, onion,<br/>
                  green peppers and cucumbers. Prices do not include any applicable taxes.
                </span>
              }

            </div>
          </div>
        </div>

      </div>
    );
  }
}

