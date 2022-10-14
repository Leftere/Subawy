import React from 'react'
import { Component } from 'react'

import neocastDataProvider from 'api/neocastDataProvider'
import API from 'api'
import 'gsap'
import 'gsap-then'

import './styles.css'

import BG from '../images/BG.png'
import BG_Eggs from '../images/BG_eggs.png'

import Headline from '../images/Headline.png'
import Text from '../images/Text.png'
import Sam from '../images/sam.png'

import TextMask from '../images/TextMask.png'
import HeadlineMask from '../images/HeadlineMask.png'

let isCaliNY = API.loc('geah_la_ny')
let promoBG = (isCaliNY) ? BG_Eggs : BG;


@neocastDataProvider([
  'kids_meal_promo',
  'kids_meal_price',
  'geah_la_ny',
])

export default class GEAHKids extends Component {

  componentDidMount() {
    let timeline = new TimelineMax()

    timeline
    .set(this.Text, {top: 720, left: 280, width: "300px", autoAlpha: 0, WebkitMaskPosition: "0 0"})
    .set(this.Headline, {WebkitMaskPosition: "-960px 800px"})
    .set(this.Sam, {top: 550, left: -500})

    .to(this.Text, 0.5, {width: "377px", autoAlpha: 1}, "+=2")
    
    .to(this.Sam, 0.1, {rotation: 5, left: -350, ease: Power0.easeNone}, "+=1")
    .to(this.Sam, 0.1, {rotation: -5, left: -200, ease: Power0.easeNone}, "+=0.25")
    .to(this.Sam, 0.1, {rotation: 5, left: -50, ease: Power0.easeNone}, "+=0.25")
    .to(this.Sam, 0.1, {rotation: -5, left: 100, ease: Power0.easeNone}, "+=0.25")
    .to(this.Sam, 0.1, {rotation: 5, left: 250, ease: Power0.easeNone}, "+=0.25")
    .to(this.Sam, 0.1, {rotation: -5, left: 400, ease: Power0.easeNone}, "+=0.25")
    .to(this.Sam, 0.1, {rotation: 5, left: 550, ease: Power0.easeNone}, "+=0.25")
    .to(this.Sam, 0.1, {rotation: -5, left: 700, ease: Power0.easeNone}, "+=0.25")
    .to(this.Sam, 0.1, {rotation: 5, left: 850, ease: Power0.easeNone}, "+=0.25")
    .to(this.Sam, 0.1, {rotation: -5, left: 1000, ease: Power0.easeNone}, "+=0.25")

    .to(this.Text, 0.9, {WebkitMaskPosition: "377px 0", ease: Power0.easeNone}, "-=2.2")
    .to(this.Headline, 2.2, {WebkitMaskPosition: "0px 800px", ease: Power0.easeNone}, "-=2.5")
  }

  render() {

  let price = API.loc('kids_meal_price')

  return(
    <div className="c-geah-kids-quad">

        <div className="frame1">
          
          <div className='c-KidsMeal_header'>
            <div className='c-Header_row'>
              <div className='c-Header_column'>
                <div className='c-Menus_header c-Menus_title-inline'>
                  FRESH FIT FOR KIDS<sup>™</sup>.
                </div>
                <div className='c-Menus_subheader'>
                  <span className='price-currency'>$</span>{price}
                </div>
                <div className='c-Header_sub'>
                  Includes one mini sub on 9-grain wheat, <br/>applesauce, &amp; low fat white milk<span className='restricted'>®</span>
                </div>
              </div>
            </div>
          </div>

          <div className='c-KidsMeal_body'>
            <div className='c-List_item'>
              <div className='c-Menus_title c-Menus_title-inline'>
                Black Forest Ham <span className="calories">320 cals</span>
              </div>
            </div>
            <div className='c-List_item'>
              <div className='c-Menus_title c-Menus_title-inline'>
                Roast Beef <span className="calories">340 cals</span>
              </div>
            </div>
            <div className='c-List_item'>
              <div className='c-Menus_title c-Menus_title-inline'>
                Turkey Breast <span className="calories">320 cals</span>
              </div>
            </div>
            <div className='c-List_item'>
              <div className='c-Menus_title c-Menus_title-inline'>
                Veggie Delite<span className='restricted'>®</span> <span className="calories">290 cals</span>
              </div>
            </div>
          </div>

        </div>

      <img src={promoBG} />
      <img className="text-a" src={Text} ref={(node) => this.Text = node} />
      <img className="text-b" src={Headline} ref={(node) => this.Headline = node} />
      <img src={Sam} ref={(node) => this.Sam = node} />
    </div>
  )
  }
}
