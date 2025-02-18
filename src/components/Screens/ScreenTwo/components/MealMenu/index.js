import { Component } from 'react';
import MealTile from 'components/Common/MealTile'

import neocastDataProvider from 'api/neocastDataProvider'

import API from 'api'
import data from 'data/subs'
import isNil from 'lodash/isNil'

import imgSteakMeal20ozCoke from './images/steak-meal-20oz-coke.png'
import imgSteakMeal21ozCoke from './images/steak-meal-21oz-coke.png'
import imgSteakMeal21ozNoCoke from './images/steak-meal-21oz-nocoke.png'
import imgTurkeyMeal20ozCoke from './images/turkey-meal-20oz-coke.png'
import imgTurkeyMeal21ozNoCoke from './images/turkey-meal-21oz-nocoke.png'

import imgChicken from './images/chicken.png'
import imgHam from './images/ham.png'
import imgMeatball from './images/meatball.png'
import imgSpicyItalian from './images/spicy-italian.png'
import imgSteak from './images/steak.png'
import imgTuna from './images/tuna.png'
import imgTurkey from './images/turkey.png'

import './styles.css'


let showSKU = API.loc('test_sku_reduction');
let skuClass = '';
if (isNil(showSKU)) showSKU = false;

if (showSKU) skuClass = 'isSKU';

const displayList = [
  'ShowTurkey',
  'ShowSteak'
]

const mealPrice = parseFloat(API.loc('meal_deal_fountain_additional_price'))

const getDisplayData = (apiKey) => {
  let displayData = {}
  let subData = data.find(sub => sub.apiMap === apiKey)
  if (subData) {
    displayData.label = subData.label.replace(/&amp;/g, '&')
    if (subData.sizes && subData.sizes.length) {
     if (subData.sizes[0].meal) {
        displayData.price = subData.sizes[0].meal
      } else {
        displayData.price = (parseFloat(subData.sizes[0].price) + mealPrice).toFixed(2)
      }
    }
  }
  return displayData
}

@neocastDataProvider([
  'serves_coca_cola',
  'show_20_oz_drink',
  'meal_deal_fountain_additional_price',
  'show_20_oz_clear_drink',
])
export default class MealMenu extends Component {

  constructor(props) {
    super(props)

    // hero
    this.turkeyData = getDisplayData('turkey_breast')
    this.steakData = getDisplayData('steak_cheese')
    if (this.props.show_20_oz_drink && this.props.show_20_oz_clear_drink) {
      this.turkeyData.image = imgTurkeyMeal20ozCoke
      this.steakData.image = imgSteakMeal20ozCoke
    } else if (this.props.show_20_oz_drink) {
      this.turkeyData.image = imgTurkeyMeal21ozNoCoke
      this.steakData.image = imgSteakMeal21ozNoCoke
    } else if (!this.props.serves_coca_cola) {
      this.turkeyData.image = imgTurkeyMeal21ozNoCoke
      this.steakData.image = imgSteakMeal21ozNoCoke
    } else {
      this.turkeyData.image = imgTurkeyMeal21ozNoCoke
      this.steakData.image = imgSteakMeal21ozCoke
    }

    // frame
    this.state = {
      currentFrame: 0
    }
  }

  componentWillReceiveProps(nextProps) {
    let nextFrame = nextProps.currentFrameCount % displayList.length
    this.setState({currentFrame: nextFrame})
  }

	render() {
    return (
    	<div className={`c-MealMenu r-${displayList[this.state.currentFrame]} ${this.props.layout} ${skuClass}`}>

        {/* Header & Featured Meal */}
        <div className='featured'>
          <div className='c-Menus_header'>
            MAKE IT A MEAL.
          </div>
          <div className='c-Menus_note'>
              Meal includes 6“ sub, chips &amp; a {this.props.show_20_oz_drink ? '20' : '21'}oz drink.
          </div>
          <div className='hero turkey_breast'>
            <img src={this.turkeyData.image}/>
            <div className='price'>${this.turkeyData.price}</div>
            <div className='name'>{this.turkeyData.label}</div>
          </div>
          <div className='hero steak_cheese'>
            <img src={this.steakData.image}/>
            <div className='price'>${this.steakData.price}</div>
            <div className='name'>{this.steakData.label}</div>
          </div>
        </div>

        {/* Other Meals */}
        <div className='meals'>
          <MealTile apiKey="tuna" image={imgTuna}/>
          <MealTile apiKey="bf_ham" image={imgHam}/>
          <MealTile apiKey="oven_roasted_chicken" image={imgChicken}/>
          <MealTile apiKey="steak_cheese" image={imgSteak}/>
          <MealTile apiKey="turkey_breast" image={imgHam}/>
          <MealTile apiKey="spicy_italian" image={imgSpicyItalian}/>
        </div>

    	</div>
    )
  }

}
