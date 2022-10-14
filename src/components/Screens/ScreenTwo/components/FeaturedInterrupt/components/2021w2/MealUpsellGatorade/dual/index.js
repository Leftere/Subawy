import { Component } from 'react'
import API from 'api'

import './styles.css'
import BG from '../images/bg.jpg'

export default class MealUpsellGatorade extends Component {

	render() {
	return (
		<img className="meal-upsell-gatorade" src={BG} />
	)
	}
}