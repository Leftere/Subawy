import { Component } from 'react'
import API from 'api'
import isNil from 'lodash/isNil'

import neocastDataProvider from 'api/neocastDataProvider'

// Subs
import SubLineItem from 'components/Common/SubLineItem'
import FootlongHeader from 'components/Common/ColumnHeaders/Footlong'
import SixInchHeader from 'components/Common/ColumnHeaders/SixInch'

import Doodle from './doodle.png'
import Header from './header.png'

import imgTurkey  from './turkey.png'
import imgClub    from './club.png'
import imgChicken from './chicken.png'

import './styles.css'

let frameCount = 0;

let displayList = {
  0: 'showTurkey',
  1: 'showClub',
  2: 'showChicken',
}

let crispy_chicken_test = API.loc('crispy_chicken_fresh_fit');

@neocastDataProvider([
  'decal_options',

  'veggie_decal_price',
  'bf_ham_decal_price',
])
export default class FreshFitMenu extends Component {

  constructor(props) {
    super(props);
    this.state = {
      intervalId: null,
      currentFrameCount: 0
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

    return (
      <div className={`FreshFitMenu r-`+displayList[frameCount]}>

        <div className='c-subRotation'>
          <img className='rotateSub imgTurkey' src={imgTurkey}/>
          <img className='rotateSub imgClub' src={imgClub}/>
          <img className='rotateSub imgChicken' src={imgChicken}/>
        </div>

        {/* Menu header */}
        <div className='c-Signature_header'>
          <div className='c-Header_main'>
              <span>MAKE IT FRESH FIT<sup>™</sup>.</span>
              These 6" subs are less than 400 calories, low in saturated fat and
              contain 24g of whole grains.<sup>*</sup>
          </div>

          <div className='c-Header_row'>
            <div className='c-Header_column'>
              <div className='c-Menus_header'>
               &nbsp;
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

        {/* Menu */}
        <SubLineItem apiKey='rotisserie_style_chicken'/>
        <SubLineItem apiKey='subway_club'/>

        {!crispy_chicken_test &&
          <SubLineItem apiKey='oven_roasted_chicken' />
        }

        {crispy_chicken_test &&
          <SubLineItem apiKey='crispy_chicken' />
        }

        <SubLineItem apiKey='turkey_breast' />
        <SubLineItem apiKey='roast_beef' />
        <SubLineItem apiKey='veggie_delite' {...decals['veggie_delite']}/>
        <SubLineItem apiKey='bf_ham' {...decals['bf_ham']}/>
        <SubLineItem apiKey='soct' />

        {/* Footer */}
        <div className='c-Menus_footer'>

          <div className='c-Menus_copyright'>
            <div className='legalContent'>
                2,000 calories a day is used for general nutrition advice, but calorie needs vary. Additional nutrition information available upon request.
              {/* <div style={{ fontSize: '10px'}}> Subway® is a Registered Trademark of Subway IP Inc. Menu Panels ©2017 Subway IP Inc.</div> */}
            </div>
          </div>
        </div>

      </div>
    );
  }
}
