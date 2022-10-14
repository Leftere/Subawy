import { Component } from 'react'
import neocastDataProvider from 'api/neocastDataProvider'
import API from 'api'
import 'gsap'
import 'gsap-then'

import './styles.css'

import SlotsOverlay from './images/Slots_Overlay.png'
import Text from './images/Slots_Text.png'
import BlurSlots from './images/Blur_Slots.jpg'
import NoBlurSlots from './images/No_Blur_Slots.jpg'

export default class Slots extends Component {

    componentDidMount() {
        let screens = API.loc('layout_direction')
        let position = 1920;
        let slotsPosition = 0;

        if (screens == 'R2L') {
            position = 3840;
            slotsPosition = 640;
        }

        let timeline = new TimelineMax()
        timeline
        .set(this.interruptContainer, {left: position})
        .set(this.SlotsContainer, {top: 1080, left: slotsPosition})
        .set([this.Wheel1, this.Wheel1B], {backgroundPosition: "0px -4000px"})
        .set([this.Wheel2, this.Wheel2B], {backgroundPosition: "0px -3500px"})
        .set([this.Wheel3, this.Wheel3B], {backgroundPosition: "0px -4500px"})
        .set([this.Wheel1B, this.Wheel2B, this.Wheel3B], { autoAlpha: 0, backgroundImage: `url(${NoBlurSlots})`})
        .set(this.Text, {autoAlpha: 0})

        .to(this.SlotsContainer, 1.5, {top: 495}, "+=1")
        .to([this.Wheel1, this.Wheel1B], 5, {backgroundPosition: "0px -1650px"}, "-=1.5")
        .to([this.Wheel2, this.Wheel2B], 5, {backgroundPosition: "0px -1120px"}, "-=5")
        .to([this.Wheel3, this.Wheel3B], 5, {backgroundPosition: "0px -2090px"}, "-=5")
        .to([this.Wheel1B, this.Wheel2B, this.Wheel3B], 1, {autoAlpha: 1}, "-=1")
        .to(this.Text, 1, {autoAlpha: 1}, "-=1")
    }

    render() {
    return(
    
    <div className="turkey-bacon-guac-interrupt" ref={(node) => this.interruptContainer = node}>
        <div className="slots-container"  ref={(node) => this.SlotsContainer = node}>
            <div className="wheel-1" ref={(node) => this.Wheel1 = node}></div>
            <div className="wheel-2" ref={(node) => this.Wheel2 = node}></div>
            <div className="wheel-3" ref={(node) => this.Wheel3 = node}></div>

            <div className="wheel-1" ref={(node) => this.Wheel1B = node}></div>
            <div className="wheel-2" ref={(node) => this.Wheel2B = node}></div>
            <div className="wheel-3" ref={(node) => this.Wheel3B = node}></div>

            <img className="overlay" src={SlotsOverlay} />
            <img className="text" src={Text} ref={(node) => this.Text = node} />
        </div>
    </div>

    )
    }
}