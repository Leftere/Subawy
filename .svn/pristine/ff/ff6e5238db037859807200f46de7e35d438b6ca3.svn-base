import React from 'react'
import { Component } from 'react'
import neocastDataProvider from 'api/neocastDataProvider'
import API from 'api'
import 'gsap'
import 'gsap-then'

import './styles.css'

import NormalBG from '../images/BG.jpg'
import HubertsBG from '../images/hubertsBG.jpg'
import Chips from '../images/chips.png'
import Subhead from '../images/subhead.png'
import SubwayCup from '../images/subwayCup.png'
import HubertsCup from '../images/hubertsCup.png'
import TunaSub from '../images/tunaSub.png'

export default class MealUpsell2020W2 extends Component {

    componentDidMount() {
        let timeline = new TimelineMax()

        timeline
        .set(this.Cup, {left: -700})
        .set(this.Sub, {left: 950})
        .set(this.Chips, {left: 40, top: -1100})
        .set(this.Subhead, {autoAlpha: 0})

        .to(this.Cup, 2, {left: 0, ease:Linear.easeNone}, "+=0.5")
        .to(this.Sub, 2, {left: 0, ease:Linear.easeNone}, "-=2")
        .to(this.Chips, 2, {top: 0})
        .to(this.Subhead, 1, {autoAlpha: 1})
    }

    render() {
    
    let servesCoke = API.loc('serves_coca_cola')
    let Cup;
    let Background;

    servesCoke ? Cup = HubertsCup : Cup = SubwayCup;
    servesCoke ? Background = HubertsBG : Background = NormalBG;

    return(
        <div className="c-meal-upsell-2020w2-quad">
            <img src={Background} />
            <img src={TunaSub} ref={(node) => this.Sub = node} />
            <img src={Cup} ref={(node) => this.Cup = node} />
            <img src={Chips} ref={(node) => this.Chips = node} />
            <img src={Subhead} ref={(node) => this.Subhead = node} />
        </div>
    )
    }
}
