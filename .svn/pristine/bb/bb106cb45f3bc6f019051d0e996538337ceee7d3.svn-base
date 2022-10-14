import { Component } from 'react'

import neocastDataProvider from 'api/neocastDataProvider'
import API from 'api'
import 'gsap'
import 'gsap-then'

import Calories from 'components/Common/Calories'
import delayedRender from 'components/Common/delayedRender'

import bgImage from './images/bg.png'
import bgImageCali from './images/bg-cali.png'

import bg from './images/kidzbop/bg.png'
import frame1 from './images/kidzbop/frame-1.png'
import frame2 from './images/kidzbop/frame-2.png'
import frame2header from './images/kidzbop/frame-2-header.png'


import littlePeople from './images/little.png'

import './styles.css'

let kidsImage = bg;
let isCali = API.loc('kids_meal_california');

//if (isCali) kidsImage = bgImageCali;

@neocastDataProvider([
	'kids_meal_promo',
	'kids_meal_price'
])
@delayedRender()
export default class KidsMealQuad extends Component {

  constructor(props) {
    super(props)
    const { kids_meal_promo } = this.props

    this.isPremium = true;
    this.isEvergreen = false;
  }

  componentDidMount() {
    if (this.props.player == 'dual') {
    }

    new TimelineMax()
      .set([
        this.frame2,
      ], {top: 510})

      .to([
        this.covers
      ], 0.5, {background: "#f6ed08"}, 4)

      .to([
        this.frame1
      ], 0.5, {autoAlpha: 0}, 4)

      .to([
        this.frame2
      ], 10, {top: "-=1700"}, 3.8)

      .to([
        this.covers
      ], 0.5, {autoAlpha: 0}, 13)

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
        <img src={kidsImage} className='bg' />

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
                  Includes one mini sub on 9-grain wheat, <br/>applesauce, &amp; low fat white milk or Honest Kids<span className='restricted'>®</span>
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

        <img src={littlePeople} className='little' ref={(node) => this.LittlePeople = node }/>

          {/* Footer */}
          <div className={`c-Menus_footer ${this.props.layout}`} ref={(node) => this.HonestCals = node }>
            <div className={`deduct-wording c-Menus_caption c-Menus_caption-highlight ${!this.isPremium && 'evergreen'}`}>
              <div className='deduct-asterisk'>*</div>
              {/*Kids' Meal with Honest Kids<span className='restricted'>®</span> deduct 60 cals.*/}
            </div>


            {/* Legal */}
            {/* {this.isPremium &&
              <div className={`c-Menus_copyright ${this.props.layout}`}>
                Limited time only while supplies last. Fresh Fit for KidsTM<br/>
                meals are prepared in front of you and are not a diet program.
              </div>
            } */}

            {this.isPremium &&
              <div className='txt-copyright txt-default' ref={(node) => this.copyright = node }>

              </div>
            }


          </div>


        </div>

        <div className='covers' ref={(node) => this.covers = node }>
          <img src={frame2} className='cover frame-2' ref={(node) => this.frame2 = node }/>
          <img src={frame2header} className='cover frame-2-header' ref={(node) => this.frame2header = node }/>
          <img src={frame1} className='cover frame-1' ref={(node) => this.frame1 = node }/>
        </div>

			</div>
		)
	}
}
