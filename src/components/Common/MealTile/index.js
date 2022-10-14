import { Component } from 'react'
import neocastDataProvider from 'api/neocastDataProvider'
import PropTypes from 'prop-types'
import API from 'api'

import data from 'data/subs'

import SodiumIcon from './sodium-icon.png'
import './styles.css'

const mealPrice = parseFloat(API.loc('meal_deal_fountain_additional_price'))

@neocastDataProvider([
  'store_plus_sodium'
])
export default class MealTile extends Component {

  static propTypes = {
    apiKey: PropTypes.string.isRequired,
  };

  constructor(props) {
    super(props)
    this.state = {
      name: "",
      price: ""
    }
    let subData = data.find(sub => sub.apiMap === this.props.apiKey)
    if (subData) {

      // look up name
      this.state.name = subData.label

      // determine price
      if (subData.sizes && subData.sizes.length) {
        if (subData.sizes[0].meal) {
          this.state.price = subData.sizes[0].meal
        } else {
          this.state.price = (parseFloat(subData.sizes[0].price) + mealPrice).toFixed(2)
        }
      }
    }
  }

  render() {
    return (
      <div className={`c-MealTile ${this.props.apiKey}`}>
        <img src={this.props.image}/>
        <div
          className="name"
          dangerouslySetInnerHTML={{ __html: this.state.name }}
        />
        {this.props.store_plus_sodium && (this.state.name == 'Spicy Italian') &&
          <img className="sodiumIcon" src={SodiumIcon}/>
        }
        <div className="price">Meal ${this.state.price}</div>
      </div>
    )
  }
}
