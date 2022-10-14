import React from 'react'
import { Component } from 'react'
import neocastDataProvider from 'api/neocastDataProvider'
import API from 'api'
import 'gsap'
import 'gsap-then'

import './styles.css'

import Frame1 from '../images/Frame1.jpg'
import Frame2 from '../images/Frame2.jpg'
import Frame3 from '../images/Frame3.png'
import BG from '../images/BG.jpg'
import Coke from '../images/coke.png'
import Text from '../images/text.png'

export default class Coke2020W4 extends Component {

    componentDidMount() {
        let timeline = new TimelineMax();

        timeline
        .set([this.Frame2, this.Frame3, this.BG, this.Text], {autoAlpha: 0})
        .set(this.Coke, {left: 500})

        .to([this.Frame2], 0.5, {autoAlpha: 1}, "+=1.5")
        .to([this.Frame3, this.BG], 0.5, {autoAlpha: 1}, "+=1.5")
        .to(this.Coke, 1, {left: 100}, "+=0.5")
        .to(this.Text, 1, {autoAlpha: 1}, "+=0.5")
    }

    render() {
    return (
        <div className="coke-2020-w4-quad">
            <img src={Frame1} ref={(node) => this.Frame1 = node } />
            <img src={Frame2} ref={(node) => this.Frame2 = node } />
            <img src={BG} ref={(node) => this.BG = node } />
            <img src={Coke} ref={(node) => this.Coke = node } />
            <img src={Frame3} ref={(node) => this.Frame3 = node } />
            <img src={Text} ref={(node) => this.Text = node } />
        </div>
    )
    }
}
