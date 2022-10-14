import React from 'react'
import { Component } from 'react'
import neocastDataProvider from 'api/neocastDataProvider'
import API from 'api'
import 'gsap'
import 'gsap-then'

import './styles.css'

import Frame1 from '../images/Frame1.jpg'
import Frame2 from '../images/Frame2.jpg'
import Frame3 from '../images/Frame3.jpg'
import Frame2Text from '../images/Frame2Text.png'
import Frame3Text from '../images/Frame3Text.png'
import Border from '../images/Border.png'
import FinalFrame from '../images/FinalFrame.jpg'
import Callout from '../images/callout.png'
import Legal from '../images/Legal.png'

export default class TurkeyBaconGuac extends Component {

    componentDidMount() {
        let timeline = new TimelineMax();

        timeline
        .set([this.Frame2, this.Frame2Text, this.Frame3, this.Frame3Text, this.Legal], {autoAlpha: 0})

        .to([this.Frame2, this.Frame2Text], 0.5, {autoAlpha: 1}, "+=2")
        .to(this.Callout, 0, {autoAlpha: 0})
        .to([this.Frame3, this.Frame3Text], 0.5, {autoAlpha: 1}, "+=2")
        .to([this.Frame2, this.Frame2Text, this.Frame3, this.Frame3Text], 0.5, {autoAlpha: 0}, "+=2")
        .to([this.Callout, this.Legal,], 1, {autoAlpha: 1}, "+=.5")
    }

    render() {
    return (
        <div className="turkey-bacon-guac-dual">
            <img src={FinalFrame} ref={(node) => this.FinalFrame = node} />
            <img src={Callout} ref= {(node) => this.Callout = node} />
            <img src={Frame2} ref={(node) => this.Frame2 = node } />
            <img src={Frame2Text} ref={(node) => this.Frame2Text = node } />
            <img src={Frame3} ref={(node) => this.Frame3 = node } />
            <img src={Frame3Text} ref={(node) => this.Frame3Text = node } />
            <img src={Border} ref={(node) => this.Border = node } />
            <img src={Legal} ref={(node) => this.Legal = node } />
        </div>
    )
    }
}
