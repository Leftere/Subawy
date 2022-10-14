import { Component } from 'react'

import neocastDataProvider from 'api/neocastDataProvider'

import mealImage from './w8meal.png'
//import mealPromo from './makeAMeal-coke.png'

import cookies from './cookies.png'
import chips from './chips.png'
import apples from './apples.png'

import './styles.css'


@neocastDataProvider([
  'meal_deal_fountain_additional_price',
  'serves_coca_cola'
])
export default class MakeItAMeal extends Component {

  constructor(props) {
    super(props)
  }

  componentDidMount() {

    const fadeInTime  = 0.5
    const delayTime = 3

    var master = new TimelineMax({repeat: -1});
    var panel1 = new TimelineLite();

    if (this.props.player == 'dual')
    {
      panel1
        .set(this.cookies, { opacity: 0})
        .set(this.chips  , { opacity: 0})
        .set(this.apples , { opacity: 0})
        .to(this.cookies , fadeInTime, { opacity: 1} )
        .to(this.cookies , fadeInTime, { opacity: 0}, "+=" + delayTime)
        .to(this.chips   , fadeInTime, { opacity: 1}, "-=" + fadeInTime)
        .to(this.chips   , fadeInTime, { opacity: 0}, "+=" + delayTime)
        .to(this.apples  , fadeInTime, { opacity: 1}, "-=" + fadeInTime)
        .to(this.apples  , fadeInTime, { opacity: 0}, "+=" + delayTime)

    } else {

      panel1
        .set(this.cookies, { bottom: 460, opacity: 0})
        .set(this.chips, { bottom: 460, opacity: 0})
        .set(this.apples, { bottom: 460, opacity: 0})
        .to(this.cookies, fadeInTime, {bottom: 60, opacity: 1})
        .to(this.cookies, fadeInTime, {bottom: -60, opacity: 0}, "+=" + delayTime)
        .to(this.chips, fadeInTime, {bottom: 60, opacity: 1}, "-=" + fadeInTime)
        .to(this.chips, fadeInTime, {bottom: -60, opacity: 0}, "+=" + delayTime)
        .to(this.apples, fadeInTime, {bottom: 60, opacity: 1}, "-=" + fadeInTime)
        .to(this.apples, fadeInTime, {bottom: -60, opacity: 0}, "+=" + delayTime)

    }

    master
      .add(panel1)

  }

  render() {
    const {
      meal_deal_fountain_additional_price,
      serves_coca_cola
    } = this.props;

/*
    let mealImage = regularMealImage

    if (serves_coca_cola) {
      mealImage = mealPromo
    }

*/
    return (
      <div className='MakeAMealSection c-Addon l-pad-top-md'>
        <div className='c-Addon_info c-Addon_info-constrain'>

          <div className='c-Addon_heading'>
            MAKE IT <br/>A MEAL.
          </div>

          {meal_deal_fountain_additional_price && meal_deal_fountain_additional_price !== '0.00' &&
            <div className='c-Addon_makeMealPrice'>
              +&nbsp;${meal_deal_fountain_additional_price}
            </div>
          }

          <div className='c-Addon_subheading'>
            (apples, 2 cookies, <br/>or chips)
          </div>

          <div className='c-AnySub'>
            Any sub + 21 oz.<br/>
            drink + side
          </div>

        </div>

        <div className='c-Addon_media'>
          <div className='c-Addon_media_caption'>
            Swap any drink or size & pay the difference.
          </div>

          <img className='c-Addon_media_image' src={mealImage} />
        </div>

        <img className='side cookies' src={cookies} ref={(node) => this.cookies = node } />
        <img className='side chips' src={chips} ref={(node) => this.chips = node } />
        <img className='side apples' src={apples} ref={(node) => this.apples = node } />

      </div>
    );
  }
}
