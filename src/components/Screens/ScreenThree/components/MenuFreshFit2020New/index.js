import { Component } from 'react'
import API from 'api'
import isNil from 'lodash/isNil'

import neocastDataProvider from 'api/neocastDataProvider'

import SubLineItem from 'components/Common/SubLineItem'
import SubBlockItem from 'components/Common/SubBlockItem'
import SubImage from './images/subs.png'

import './styles.css'

@neocastDataProvider([
  'decal_options',
  'veggie_decal_price',
  'bf_ham_decal_price',
  'chopped_salad_addon_price',
  'chopped_salad_price',
  'chopped_salad_type',
  'local_option_one',
  'local_option_two',
  'local_option_three',
  'local_option_four',
  'local_option_five',
])

export default class FreshFit2020New extends Component {

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
      decals['veggie_delite'] = {
        decal12: this.props.veggie_decal_price || '499',
        decal12Color: 'green'
      }
      decals['bf_ham'] = {
        decal12: this.props.bf_ham_decal_price || '499',
        decal12Color: 'green'
      }
    } else if (this.props.decal_options == 'footlong') {
      decals['veggie_delite'] = {
        decal12: this.props.veggie_decal_price || '499'
      }
      decals['bf_ham'] = {
        decal12: this.props.bf_ham_decal_price || '499'
      }
    } else if (this.props.decal_options == 'footlong_alt') {
      decals['veggie_delite'] = {
        decal12: this.props.veggie_decal_price || '499'
      }
    }


    const {
      chopped_salad_addon_price,
      chopped_salad_price,
      chopped_salad_type } = this.props;

    // Default values
    let saladPriceType = "addon"
    let saladPrice = chopped_salad_addon_price // Old key by default
    let saladPriceFormatted = "$"

    let hasNewSaladPriceType = !isNil(API.loc('chopped_salad_type'))

    // We added the "addon" and "full" salad price types
    // addon : Put a "+" at the beginning to show the value is added
    // full : The full set price, useful for fixed-price promotions
    if (hasNewSaladPriceType)
    {
      saladPriceType = chopped_salad_type
      saladPrice = chopped_salad_price
    }

    // Prepend the needed prefixes
    saladPriceFormatted += saladPrice
    if (saladPriceType == "addon") saladPriceFormatted = "+ " + saladPriceFormatted

    let veggiePatty = 'hidden';

    let localOptions = [ API.loc('local_option_one'), API.loc('local_option_two'), API.loc('local_option_three'), API.loc('local_option_four'), API.loc('local_option_five') ]

    if (localOptions.includes('veggie_patty') == true) {
      veggiePatty = 'veggie-patty'
    }
    

    return (
      <div className={`c-MenuFresh2020`}>

        <img src={SubImage} className='subImage'/>

        <div className={`freshHeader`}>
            <h1>Make It Fresh Fit<sup>&reg;</sup>.</h1>
            <h2>  6" /Footlong</h2>
        </div>

        <div className={`blockItems`}>
            <SubBlockItem apiKey='turkey_breast'/>
            <SubBlockItem apiKey='bf_ham' {...decals['bf_ham']}/>
            <SubBlockItem apiKey='soct'/>
            <SubBlockItem apiKey='oven_roasted_chicken'/>
            <SubBlockItem apiKey='veggie_delite'/>
        </div>

        <div className={veggiePatty}>
          <div className={'c-TableList_row'}></div>
          <div className={'c-TableList_row'}></div>
          <div className={'c-TableList_row'}></div>
          <div className={'c-TableList_row'}></div>
          <SubBlockItem apiKey='veggie_patty'/>
        </div>

    <p className="salad-price">{saladPriceFormatted}</p>
        {/* Footer */}
        <div className='c-Menus_footer'>

          <div className='c-Menus_copyright'>
            <div className='legalContent'>
              *Upcharge added to full priced 6” sub.
              <br/>
              Fresh Fit&reg; refers to 6” sub on 9-grain wheat bread with all the fresh vegetables. Fresh Fit&reg; subs are prepared in front of you.
              <br/>
              Prices do not include any applicable taxes.
            </div>
          </div>
        </div>

      </div>
    );
  }
}

