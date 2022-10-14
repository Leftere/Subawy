import { Component } from 'react'

import API from 'api'

import image from './classic.jpg'
import './styles.css'

/* 499_fvm_without_steak_classic_meals */
export default class FVMVersion2Classic extends Component {

  constructor(props) {
    super(props)
    this.item1 = API.loc(`steak_and_cheese_meal_price_6in`)
    this.item2 = API.loc(`tuna_meal_price_6in`)
    this.item3 = API.loc(`turkey_breast_meal_price_6in`)
    this.item4 = API.loc(`soct_meal_price_6in`)
  }

  render() {
    return (
      <div className='c-ValueClassic2017w8'>
        <img className='c-Promotion_background' src={image} />

        <div className='price upper left'>${this.item1}</div>
        <div className='price upper right'>${this.item2}</div>
        <div className='price bottom left'>${this.item3}</div>
        <div className='price bottom right'>${this.item4}</div>
      </div>
    )
  }
}
