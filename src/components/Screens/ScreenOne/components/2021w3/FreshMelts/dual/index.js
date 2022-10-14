import React from 'react'
import { Component } from 'react'
import neocastDataProvider from 'api/neocastDataProvider'
import API from 'api'
import 'gsap'
import 'gsap-then'

import './styles.css'

import Frame1 from '../images/Frame1.jpg';
import Frame1Text1 from '../images/Frame1Text1.png';
import Frame1Text2 from '../images/Frame1Text2.png';
import Frame1Text3 from '../images/Frame1Text3.png';

import Frame2Text from '../images/Frame2Text.png';
import Frame2 from '../images/Frame2.jpg';

import Frame3Text from '../images/Frame3Text.png';
import Frame3 from '../images/Frame3.jpg';

import Frame4Text from '../images/Frame4Text.png';
import Frame4 from '../images/Frame4.jpg';

import Frame5 from '../images/Frame5.jpg';
import Frame5Text1 from '../images/Frame5Text1.png';
import Frame5Text2 from '../images/Frame5Text2.png';
import Frame5Text3 from '../images/Frame5Text3.png';


export default class FreshMelts extends Component {

    componentDidMount() {
        let timeline = new TimelineMax();

        timeline
        .set([this.Frame1Text1,this.Frame1Text2,this.Frame1Text3,this.Frame2,this.Frame2Text,this.Frame3,this.Frame3Text,this.Frame4,this.Frame4Text,this.Frame5,this.Frame5Text1,this.Frame5Text2,this.Frame5Text3], {autoAlpha: 0})
        .set(this.Frame3, {x: -300})
        //--------------------------------------------//

        .to(this.Frame1Text1, 0.5, {autoAlpha: 1}, "+=0.5")
        .to(this.Frame1Text2, 0.5, {autoAlpha: 1}, "+=0.25")
        .to(this.Frame1Text3, 0.5, {autoAlpha: 1}, "+=0.5")

        .to([this.Frame2,this.Frame2Text], 0, {autoAlpha: 1}, "+=1")
        .to(this.Frame2, 3, {x:0, ease: Linear.easeNone})

        .to([this.Frame3,this.Frame3Text], 0, {autoAlpha: 1}, "-=1")
        .to(this.Frame3, 3, {x:-300, ease: Linear.easeNone}, "-=1")

        .to([this.Frame4,this.Frame4Text], 0, {autoAlpha: 1}, "-=1")
        .to(this.Frame4, 3, {x:0, ease: Linear.easeNone}, "-=1")

        .to(this.Frame5, 0, {autoAlpha: 1}, "+=0")
        .to(this.Frame5Text1, 0.5, {autoAlpha: 1}, "+=0.5")
        .to(this.Frame5Text2, 0.5, {autoAlpha: 1}, "+=0.25")
        .to(this.Frame5Text3, 0.5, {autoAlpha: 1}, "+=0.5")

    }

    render() {

    return (
        <div className="fresh-melts-quad">
            <img src={Frame1} ref={(node) => this.Frame1 = node }/>
            <img src={Frame1Text1} ref={(node) => this.Frame1Text1 = node }/>
            <img src={Frame1Text2} ref={(node) => this.Frame1Text2 = node }/>
            <img src={Frame1Text3} ref={(node) => this.Frame1Text3 = node }/>

            <img src={Frame2} ref={(node) => this.Frame2 = node }/>
            <img src={Frame2Text} ref={(node) => this.Frame2Text = node }/>

            <img src={Frame3} ref={(node) => this.Frame3 = node }/>
            <img src={Frame3Text} ref={(node) => this.Frame3Text = node }/>

            <img src={Frame4} ref={(node) => this.Frame4 = node }/>
            <img src={Frame4Text} ref={(node) => this.Frame4Text = node }/>

            <img src={Frame5} ref={(node) => this.Frame5 = node }/>
            <img src={Frame5Text1} ref={(node) => this.Frame5Text1 = node }/>
            <img src={Frame5Text2} ref={(node) => this.Frame5Text2 = node }/>
            <img src={Frame5Text3} ref={(node) => this.Frame5Text3 = node }/>
        </div>
    )
    }
}
