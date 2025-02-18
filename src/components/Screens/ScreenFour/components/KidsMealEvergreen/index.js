import { Component } from 'react'

import neocastDataProvider from 'api/neocastDataProvider'
import API from 'api'
import 'gsap'
import 'gsap-then'

import Calories from 'components/Common/Calories'
import delayedRender from 'components/Common/delayedRender'

import bgImage from './images/bg.png'
import bgImageCali from './images/bg-cali.png'
import bgImageTest from './images/no-eyes.png'

import littlePeople from './images/little.png'

import './styles.css'

let kidsImage = bgImage;
let isCali = API.loc('kids_meal_california');
let isRBSkuTest = API.loc('test_sku_roast_beef');

if (isCali) kidsImage = bgImageCali;
if (isRBSkuTest) kidsImage = bgImageTest;

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

    // Barbie/Hot Wheels Animation
    // const tTime  = 1
    // let beat1 = 0
    // let beat2 = 5
    // let beat3 = 9

    // new TimelineMax()
    //   .set([
    //     this.copyright,
    //     this.text2,
    //     this.HonestCals,
    //     this.logos,
    //     this.LittlePeople,
    //   ], {autoAlpha: 0})

    //   .staggerTo([
    //     this.toy4,
    //     this.toy3,
    //     this.toy2,
    //     this.toy1,
    //   ]
    //   , 1.5, {left: "-=1000"}, 0.3, 2)

    //   .from(this.ticket, 1, {autoAlpha: 0, left:"-=50", top:"+=200",ease: Back.easeOut.config(1.7)}, 4)

    //   .staggerTo([
    //     this.text2,
    //     this.logos,
    //     this.HonestCals,
    //     this.copyright,
    //     this.LittlePeople
    //   ], 0.4, {autoAlpha: 1}, 0.4, 4.4)

      // .set(this.backpack, {autoAlpha: 1, left: -400, top:0, rotation:110})
      // .set(this.collect, {autoAlpha: 0, left: 192, top:174, rotation:-20})
      // .set(this.watch1, {autoAlpha: 1, left: -120, top:80})
      // .set(this.watch2, {autoAlpha: 1, left: -130, top:100})
      // .set(this.dance, {autoAlpha: 1, left: -400, top:0})

      // .to(this.backpack, 1, {left: -95}, 1)

      // .to(this.watch1, 1, {left: 270, top:120}, 1.5)
      // .to(this.watch2, 1, {left: 320, top:220}, 1.5)

      // .to(this.backpack, 1, {left: 165, top:60, scale:0.7, rotation: 0}, 3)
      // .to(this.watch1, 1, {left: 365, top:150, scale:0.7, rotation: 5}, 3)
      // .to(this.watch2, 1, {left: 405, top:230, scale:0.7, rotation: 20}, 3)
      // .to(this.dance, 1.5, {left: 0, top:0}, 3.5)
      // .to(this.collect, 1, {autoAlpha: 1, rotation:0, left: 176}, 5)
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
              Kids' Meal with Honest Kids<span className='restricted'>®</span> deduct 60 cals.
              <br />
              <span className="small-legal">Fresh Fit for Kids&trade; Meals are prepared in front of you.</span>
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

			</div>
		)
	}
}
