import { Component } from 'react'

import API from 'api'
import image from './background.jpg'
import './styles.css'

export default class FreshDynamic2018w6 extends Component {


  constructor(props) {
    super(props)
    this.item1 = API.loc(`meatball_marinara_meal_price_6in`)
    this.item2 = API.loc(`subway_club_meal_price_6in`)
    this.item3 = API.loc(`cold_cut_combo_meal_price_6in`)
    this.item4 = API.loc(`rotisserie_style_chicken_meal_price_6in`)
  }

  render() {
    return (
      <div className='c-FreshDynamic2018w6'>
        <img className='c-Promotion_background' src={image} />

        <div className='price upper left'>${this.item1}</div>
        <div className='price upper right'>${this.item2}</div>
        <div className='price bottom left'>${this.item3}</div>
        <div className='price bottom right'>${this.item4}</div>
      </div>
    )
  }
}
