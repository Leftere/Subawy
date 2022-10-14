import { Component } from 'react';


import neocastDataProvider from 'api/neocastDataProvider'
import SubLineItem from 'components/Common/SubLineItem'

import imgChicken from './chicken.png'
import imgSteak from './steak.png'
import imgTurkey from './turkey.png'

import './styles.css'

let frameCount = 0;

let displayList = {
  0: 'showChicken',
  1: 'showSteak',
  2: 'showTurkey',
}

@neocastDataProvider([
  'make_any_sub_a_wrap_price',
])
export default class WrapsMenu extends Component {

  constructor(props) {
    super(props)
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
  }

  render() {
    const {
      make_any_sub_a_wrap_price,
    } = this.props


    return (
      <div className={`c-WrapsMenu ${this.props.layout} r-`+displayList[frameCount]}>

        {/* Header */}
        <div className='c-Header_row'>

          <div className='c-Header_column c-Header_column-spacer'>
            <div className='c-Menus_header'>
              GET IT <br/>WRAPPED.
            </div>
          </div>

        </div>

        <SubLineItem apiKey='rotisserie_chicken_caesar_wrap'/>
        <SubLineItem apiKey='chipotle_southwest_steak_and_cheese_wrap'/>
        <SubLineItem apiKey='turkey_bacon_guacamole_wrap'/>

        <div className="c-TableList_row">
          <div className="c-TableList_column">
            <div className="c-Menus_title c-Menus_title-left c-Menus_title-v-expand">
            <span className="sub_title">
            Or make any sub a Signature Wrap.</span>
            <span className="c-Menus_caption c-Menus_caption-highlight">
            <span className=" cals"><span>&nbsp;</span>
            &nbsp;
            </span></span></div>
            </div>
        <div className="c-TableList_column c-TableList-center">
          <div className="c-Menus_title c-Menus_title-left"><span className="">
          <span>
            ${make_any_sub_a_wrap_price}
            </span></span></div></div></div>

        {/* Extra Cheese */}
        {/* <LineItem
          name={'Extra Cheese'}
          calories={'40-60/80-120'}
          price6={extras_cheese_price_6in}
          price12={extras_cheese_price_12in}
          nextLine
          expand={false}
          indentCals={false}
          suffix=""
        /> */}



          <img src={imgChicken} className='wrapImage imgChicken'/>
          <img src={imgSteak} className='wrapImage imgSteak'/>
          <img src={imgTurkey} className='wrapImage imgTurkey'/>


      </div>
    );
  }
}
