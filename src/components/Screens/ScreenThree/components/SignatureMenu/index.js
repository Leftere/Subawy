import { Component } from 'react'

import API from 'api'
import neocastDataProvider from 'api/neocastDataProvider'

import SubLineItem from 'components/Common/SubLineItem'
import FootlongHeader from 'components/Common/ColumnHeaders/Footlong'
import SixInchHeader from 'components/Common/ColumnHeaders/SixInch'

import './styles.css'

let frameCount = 0;

let displayList = {
  0: 'showPromo1',
  1: 'showPromo2',
  2: 'showPromo1',
  3: 'showPromo3',
}

let chicken_bacon_test = API.loc('chicken_bacon_test');

@neocastDataProvider([
  'kids_meal_promo',

  'decal_options',
  
  'spicy_italian_decal_price',
  'meatball_decal_price',
  'ccc_decal_price',

  'pizza_decal_price',
  'falafel_decal_price',
  'bbq_decal_price',
  'local_option_one',
  'local_option_two',
  'local_option_three',
  'local_option_four',

  'spicy_italian_decal_price',
  'meatball_decal_price',
  'ccc_decal_price',

  'chicken_bacon_test'
])
export default class SignatureMenu extends Component {

  constructor(props) {
    super(props);
    this.state = {
      intervalId: null,
      currentFrameCount: 0
    }

    // disable chicken bacon ranch promo if the chicken_bacon_test key is true
    if (this.props.chicken_bacon_test) {
      displayList = {
        0: 'showPromo1',
        1: 'showPromo2'
      };
    }
  }

  // When props update...
  componentWillReceiveProps(nextProps) {
    frameCount = nextProps.currentFrameCount % Object.keys(displayList).length
  }

  componentWillUnmount() {
    frameCount = 0;
    console.log('unmount')
  }

  /*
<style dangerouslySetInnerHTML={{__html: `
          .${displayList[frameCount]} * {
            color: #dd3705;
          }
        `}} />

  */

  render() {
    const isPremium = this.props.kids_meal_promo === 'kids_meal_promo_premium';

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
      <div className={`SignatureMenu ` + displayList[frameCount]}>

        {/* Menu header */}
        <div className='c-Signature_header'>
          <div className='c-Header_row'>

            <div className='c-Header_column c-Header_column-spacer'>
              <div className='c-Menus_header'>
                KEEP IT CLASSIC.
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
          <SubLineItem apiKey='steak_cheese'/>

          {!chicken_bacon_test &&
            <SubLineItem apiKey='chicken_bacon_ranch'/>
          }

          {chicken_bacon_test &&
            <SubLineItem apiKey='chicken_rotisserie_bacon_ranch'/>
          }

          <SubLineItem apiKey='italian_bmt' />
          <SubLineItem apiKey='tuna' />
          <SubLineItem apiKey='spicy_italian' {...decals['spicy_italian']}/>
          <SubLineItem apiKey='meatball_marinara' {...decals['meatball_marinara']}/>
          <SubLineItem apiKey='cold_cut_combo' {...decals['cold_cut_combo']}/>

          {/* Local options */}
          <SubLineItem apiKey='local_option_one' local {...decals['local_option_one']}/>
          <SubLineItem apiKey='local_option_two' local {...decals['local_option_two']}/>
          <SubLineItem apiKey='local_option_three' local {...decals['local_option_three']}/>
          <SubLineItem apiKey='local_option_four' local {...decals['local_option_four']}/>

        {/*

          <SubLineItem apiKey='local_option_five' local />
        */}
        </div>


        {/* Footer
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
      */}

      </div>
    );
  }
}
