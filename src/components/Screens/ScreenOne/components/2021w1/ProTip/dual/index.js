import React from 'react'
import { Component } from 'react'
import neocastDataProvider from 'api/neocastDataProvider'
import API from 'api'
import 'gsap'
import 'gsap-then'

import './styles.css'


import Coke from '../images/coke.jpg';
import NoCoke from '../images/no_coke.jpg';

@neocastDataProvider([
    'serves_coca_cola',
    'meal_deal_fountain_additional_price'
  ])

export default class ProTip extends Component {


    render() {

    let servesCoke = `${API.loc('serves_coca_cola')}`
    let price = `${API.loc('meal_deal_fountain_additional_price')}`;

    let bg = NoCoke;

    if (servesCoke == true || servesCoke == 'true') {
        bg = Coke;
    }



    return (
        <div className="pro-tip-quad">
            <img src={bg} />
            <p className="price"><span>Add </span>{'$' + price}</p>
        </div>
    )
    }
}
