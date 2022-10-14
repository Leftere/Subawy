import { Component } from 'react'

import API from 'api'

import backgroundImage from './background.jpg'
import vitaminImage from './background-vitamin.jpg'

import backgroundChickenImage from './background-chicken.jpg'
import backgroundChickenVitaminImage from './background-chicken-vitamin.jpg'


export default class DealOfTheDayW2b2017 extends Component {
  constructor(props) {
    super(props)

    const servesVitaminWater = API.loc('serves_coca_cola', false)
    const servesChickenStrips = API.loc('serves_chicken_strips', false)

    this.background = backgroundImage

    if (servesVitaminWater) {
      this.background = vitaminImage
    }

    if (servesChickenStrips) {
      this.background = backgroundChickenImage

      if (servesVitaminWater) {
        this.background = backgroundChickenVitaminImage
      }
    }
  }

  render() {
    return (
      <div className='c-Promotion'>
        <img className='c-Promotion_background' src={this.background} />

      </div>
    )
  }
}
