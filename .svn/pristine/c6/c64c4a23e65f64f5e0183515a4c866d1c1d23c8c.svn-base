import { Component } from 'react'

import neocastDataProvider from 'api/neocastDataProvider'

import 'gsap'
import 'gsap-then'

import Calories from 'components/Common/Calories'
import delayedRender from 'components/Common/delayedRender'

import kidsMeal from '../images/meal.png'
import mealStatic from '../images/mealStatic.png'

import toy1 from '../images/1.png'
import toy2 from '../images/2.png'
import toy3 from '../images/3.png'
import toy4 from '../images/4.png'

import mini from '../images/mini.png'
import watches from '../images/watches.png'
import sky from '../images/sky.png'
import planes from '../images/planes.png'
import mealText from '../images/mealText.png'

import littlePeople from '../images/little.png'

import './styles.css'

@neocastDataProvider([
	'kids_meal_promo',
	'kids_meal_price'
])
@delayedRender()
export default class KidsMealDual extends Component {

  constructor(props) {
    super(props)
    const { kids_meal_promo } = this.props

    this.isPremium = kids_meal_promo === 'kids_meal_promo_premium'
    this.isEvergreen = kids_meal_promo === 'kids_meal_promo_evergreen'
  }

  componentDidMount() {
    if (this.props.player == 'dual') {
    }

    // Barbie/Hot Wheels Animation
    // const tTime  = 1
    // let beat1 = 0
    // let beat2 = 5
    // let beat3 = 9

    // // Create Timeline
    // var master = new TimelineMax();
    // var panel1 = new TimelineLite();

    // panel1
    //   .set(this.barbieToys, { opacity: 0, left: -200})
    //   .set(this.hotwheelsToys, { opacity: 0, left: -200})
    //   .set(this.pinkBg, { opacity: 1})
    //   .set(this.blueBg, { opacity: 0})
    //   .set(this.overlay, { opacity: 1})
    //   .set(this.kidsMeal, { opacity: 1, right: -200, top: 15})
    //   .to(this.barbieToys, tTime, {opacity: 1, left: 30}, beat1)
    //   .to(this.barbieToys, tTime, {opacity: 0, left: -200}, beat2 - tTime)
    //   .to(this.pinkBg, tTime, {opacity: 0}, beat2 - tTime)
    //   .to(this.blueBg, tTime, {opacity: 1}, beat2 - tTime)
    //   .to(this.hotwheelsToys, tTime, {opacity: 1, left: 5, top: 15}, beat2 - (tTime/2))
    //   .to(this.hotwheelsToys, tTime, {opacity: 0, left: -200, top: 200}, beat3 - (tTime/2))
    //   .to(this.overlay, tTime, {opacity: 0}, beat3)
    //   .to(this.kidsMeal, tTime*2, {opacity: 1, right: 15}, beat3 - (tTime/2))

    // master.add(panel1)

    // Sonic Animation (Gotta Go Fast)
    // new TimelineMax()
    //   .set(this.sonicCollect, {width: 0, height: 0, left: "+=50", top: "+=50"})
    //   .from(this.sonicToy, 0.5, {left: "-=300", ease: Quad.easeOut})
    //   .from(this.sonicLogo, 0.5, {left: "+=300", ease: Quad.easeOut})
    //   .to(this.sonicCollect, 0.5, {width: 98, height: 97, left: "-=50", top: "-=50", ease: Back.easeOut})

    // Mr / Miss
    new TimelineMax()
      .set(this.toy1, {opacity:0})
      .set(this.toy2, {opacity:0})
      .set(this.toy3, {opacity:0})
      .set(this.toy4, {opacity:0})

      .set(this.mini, {opacity:1, width:0})
      .set(this.watches, {opacity:0, width:0})
      .set(this.sky, {opacity:0})
      .set(this.planes, {opacity:0})
      .set(this.mealText, {opacity:0})

      .set(this.mini, {opacity:1, width: 306})
      .set(this.watches, {opacity:1, width: 276})

      .set(this.mini, { autoAlpha: 0, delay: 2 })
      .set(this.watches, { autoAlpha: 0 })

      .set(this.sky, {opacity:1, width: 207})
      .set(this.planes, {opacity:1, left:120, width: 260})

      .set(this.planes, { autoAlpha: 0, delay: 2 })
      .set(this.sky, { left: 215, bottom:300, width: 137 })

      .set(this.mini, { autoAlpha: 1, left: 0, width: 208 })
      .set(this.mealText, { autoAlpha: 1, left: 0, width: 331})



  }

	render() {
		const { kids_meal_price } = this.props

		return (
			<div className={`c-KidsMeal ${this.props.layout} kids-${this.props.player}`}>

        {/* Sonic */}
        {/* <div className="sonic">
          <img src={sonicToy} className='toy' ref={(node) => this.sonicToy = node }/>
          <img src={sonicLogo} className='logo' ref={(node) => this.sonicLogo = node }/>
          <img src={sonicCollect} className='collect' ref={(node) => this.sonicCollect = node }/>
        </div> */}

        {/* Image */}
        <img src={kidsMeal} className='kidsMeal' />

        <div className="frame1" ref={(node) => this.frame1 = node }>
          <div className='c-KidsMeal_header'>

            <div className='c-Header_row'>

              <div className='c-Header_column'>
                <div className='c-Menus_header c-Menus_title-inline'>
                  FRESH FIT FOR KIDS<sup>™</sup>.
                </div>

                <div className='c-Menus_subheader'>
                  <span className='price-currency'>$</span>{kids_meal_price}
                </div>

                <div className='c-Header_sub' ref={(node) => this.mini = node }>
                  Includes one mini sub on 9-grain wheat, <br/>apples, &amp; low fat white milk or Honest Kids<span className='restricted'>®</span>
                </div>
              </div>

            </div>
          </div>

          {/* List */}
          <div className='c-KidsMeal_body'>

            <div className='c-List_item'>
              <div className='c-Menus_title c-Menus_title-inline'>
                Black Forest Ham
              </div>
              <Calories>
                320
              </Calories>
            </div>

            <div className='c-List_item'>
              <div className='c-Menus_title c-Menus_title-inline'>
                Roast Beef
              </div>
              <Calories>
                340
              </Calories>
            </div>

            <div className='c-List_item'>
              <div className='c-Menus_title c-Menus_title-inline'>
                Turkey Breast
              </div>
              <Calories>
                320
              </Calories>
            </div>

            <div className='c-List_item'>
              <div className='c-Menus_title c-Menus_title-inline'>
                Veggie Delite<span className='restricted'>®</span>
              </div>
              <Calories>
                290
              </Calories>
            </div>

          </div>

        <img src={littlePeople} className='little' />

        <div className="toys">
          <img src={toy1} className='toy toy1' ref={(node) => this.toy1 = node }/>
          <img src={toy2} className='toy toy2' ref={(node) => this.toy2 = node }/>
          <img src={toy3} className='toy toy3' ref={(node) => this.toy3 = node }/>
          <img src={toy4} className='toy toy4' ref={(node) => this.toy4 = node }/>

          <img src={mini} className='toy toyMini' ref={(node) => this.mini = node }/>
          <img src={watches} className='toy toyWatches' ref={(node) => this.watches = node }/>
          <img src={sky} className='toy toySky' ref={(node) => this.sky = node }/>
          <img src={planes} className='toy toyPlanes' ref={(node) => this.planes = node }/>
          <img src={mealText} className='toy toyText' ref={(node) => this.mealText = node }/>
        </div>


          {/* Footer */}
          <div className={`c-Menus_footer ${this.props.layout}`}>
            <div className={`deduct-wording c-Menus_caption c-Menus_caption-highlight ${!this.isPremium && 'evergreen'}`}>
              <div className='deduct-asterisk'>*</div>
              Kids' Meal with Honest Kids<span className='restricted'>®</span> deduct 60 cals.
            </div>


            {/* Legal */}
            {this.isPremium &&
              <div className={`c-Menus_copyright ${this.props.layout}`}>
                Limited time only while supplies last. Fresh Fit for Kids™ Meals are prepared in front of you and are not a diet program.
              </div>
            }

            {this.isPremium &&
              <div className='txt-copyright txt-default'>
                MATCHBOX, MY MINI MIXIEQ’S and associated trademarks and trade dress are owned by, and used under license from, Mattel. ©2018 Mattel. All rights reserved. Fisher-Price, Little People and associated trademarks and trade dress are owned by, and used under license from, Mattel. All rights reserved. ©2018 Mattel. Honest Kids is a trademark of Honest Tea, Inc. ® All rights reserved.
              </div>
            }

            {/* <div className='mealCaption' ref={(node) => this.mealCaption = node }>
              Barbie or Hot Wheels<br/>
              toy in every Kids’ meal!
            </div> */}

          </div>


        </div>

			</div>
		)
	}
}
