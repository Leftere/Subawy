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
  ])

export default class GoPro extends Component {


    render() {

    let servesCoke = `${API.loc('serves_coca_cola')}`

    let bg = NoCoke;

    if (servesCoke == true || servesCoke == 'true') {
        bg = Coke;
    }



    return (
        <div className="go-pro-quad">
            <img src={bg} />
        </div>
    )
    }
}
