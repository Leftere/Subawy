import { Component } from 'react'

import API from 'api'

import image from './background.jpg'
import './styles.css'

/* houston_classic_meals */
export default class FVMVersion8 extends Component {

  constructor(props) {
    super(props)
    this.item1 = API.loc(`spicy_italian_meal_price_6in`)
    this.item2 = API.loc(`meatball_marinara_meal_price_6in`)
    this.item3 = API.loc(`bf_ham_meal_price_6in`)
    this.item4 = API.loc(`turkey_breast_meal_price_6in`)
  }

  render() {
    return (
      <div className='c-ValueClassic2017w8b'>
        <img className='c-Promotion_background' src={image} />

        <div className='price upper left'>${this.item1}</div>
        <div className='price upper right'>${this.item2}</div>
        <div className='price bottom left'>${this.item3}</div>
        <div className='price bottom right'>${this.item4}</div>
      </div>
    )
  }
}
