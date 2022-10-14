import React from 'react'
import { Component } from 'react'
import neocastDataProvider from 'api/neocastDataProvider'
import API from 'api'
import 'gsap'
import 'gsap-then'

import './styles.css'

import Frame1 from '../images/Frame1.png';
import Frame1New from '../images/Frame1New.png';
import Frame1Baja from '../images/Frame1Baja.png';
import Frame1Steak from '../images/Frame1Steak.png';
import Frame1Featuring from '../images/Frame1Featuring.png';
import Frame1Arrow from '../images/Frame1Arrow.png';

import Frame2 from '../images/Frame2.png';
import Frame2New from '../images/Frame2New.png';
import Frame2Steak from '../images/Frame2Steak.png';
import Frame2Arrow from '../images/Frame2Arrow.png';

import Frame3 from '../images/Frame3.png';
import Frame3New from '../images/Frame3New.png';
import Frame3Bread from '../images/Frame3Bread.png';
import Frame3Arrow from '../images/Frame3Arrow.png';

import Frame4 from '../images/Frame4.png';
import Frame4New from '../images/Frame4New.png';
import Frame4Sauce from '../images/Frame4Sauce.png';
import Frame4Arrow from '../images/Frame4Arrow.png';

import Frame5Sub from '../images/Frame5Sub.png';
import Frame5New from '../images/Frame5New.png';
import Frame5Drink from '../images/Frame5Drink.png';
import Frame5Baja from '../images/Frame5Baja.png';
import Frame5Arrow from '../images/Frame5Arrow.png';

import NoCoke from '../images/blank.png';

@neocastDataProvider([
    'serves_coca_cola',
  ])
  

export default class BajaSteak extends Component {

    componentDidMount() {
        let timeline = new TimelineMax();

        timeline
        .set([this.Frame2, this.Frame2New, this.Frame2Steak, this.Frame2Arrow], {autoAlpha: 0})

        .set([this.Frame3, this.Frame3New, this.Frame3Bread, this.Frame3Arrow], {autoAlpha: 0})

        .set([this.Frame4, this.Frame4New, this.Frame4Sauce, this.Frame4Arrow], {autoAlpha: 0})

        .set([this.Frame5Sub, this.Frame5Drink, this.Frame5New, this.Frame5Baja, this.Frame5Arrow], {autoAlpha: 0})


        .to([this.Frame1New, this.Frame1Baja, this.Frame1Steak, this.Frame1Arrow, this.Frame1, this.Frame1Featuring], 0, {autoAlpha: 0}, 2.0)

        .to([this.Frame2New, this.Frame2Steak, this.Frame2Arrow, this.Frame2], 0, {autoAlpha: 1}, '+= 0')
        .to([this.Frame2New, this.Frame2Steak, this.Frame2Arrow, this.Frame2], 0, {autoAlpha: 0}, '+= 2')

        .to([this.Frame3New, this.Frame3Bread, this.Frame3Arrow, this.Frame3], 0, {autoAlpha: 1}, '+= 0')
        .to([this.Frame3New, this.Frame3Bread, this.Frame3Arrow, this.Frame3], 0, {autoAlpha: 0}, '+= 2')

        .to([this.Frame4New, this.Frame4Sauce, this.Frame4Arrow, this.Frame4], 0, {autoAlpha: 1}, '+= 0')
        .to([this.Frame4New, this.Frame4Sauce, this.Frame4Arrow, this.Frame4], 0, {autoAlpha: 0}, '+= 2')

        .to([this.Frame5Sub, this.Frame5Drink, this.Frame5New, this.Frame5Baja, this.Frame5Arrow], 0, {autoAlpha: 1}, '+= 0')

    }


    render() {

    let servesCoke = `${API.loc('serves_coca_cola')}`

    let bg = NoCoke;

    if (servesCoke == true || servesCoke == 'true') {
        bg = Frame5Drink;
    }

    return (
        <div className="baja-steak-quad">
            <div className="green-bg"></div>
            <img src={Frame1} ref={(node) => this.Frame1 = node }/>
            <img src={Frame1Featuring} ref={(node) => this.Frame1Featuring = node }/>
            <img src={Frame1New} ref={(node) => this.Frame1New = node }/>
            <img src={Frame1Baja} ref={(node) => this.Frame1Baja = node }/>
            <img src={Frame1Steak} ref={(node) => this.Frame1Steak = node }/>
            <img src={Frame1Arrow} ref={(node) => this.Frame1Arrow = node }/>

            <img src={Frame2} ref={(node) => this.Frame2 = node }/>
            <img src={Frame2New} ref={(node) => this.Frame2New = node }/>
            <img src={Frame2Steak} ref={(node) => this.Frame2Steak = node }/>
            <img src={Frame2Arrow} ref={(node) => this.Frame2Arrow = node }/>

            <img src={Frame3} ref={(node) => this.Frame3 = node }/>
            <img src={Frame3New} ref={(node) => this.Frame3New = node }/>
            <img src={Frame3Bread} ref={(node) => this.Frame3Bread = node }/>
            <img src={Frame3Arrow} ref={(node) => this.Frame3Arrow = node }/>

            <img src={Frame4} ref={(node) => this.Frame4 = node }/>
            <img src={Frame4New} ref={(node) => this.Frame4New = node }/>
            <img src={Frame4Sauce} ref={(node) => this.Frame4Sauce = node }/>
            <img src={Frame4Arrow} ref={(node) => this.Frame4Arrow = node }/>

            <img src={bg} ref={(node) => this.Frame5Drink = node }/>
            <img src={Frame5Sub} ref={(node) => this.Frame5Sub = node }/>
            <img src={Frame5New} ref={(node) => this.Frame5New = node }/>
            <img src={Frame5Baja} ref={(node) => this.Frame5Baja = node }/>
            <img src={Frame5Arrow} ref={(node) => this.Frame5Arrow = node }/>

        </div>
    )
    }
}
