import { Component } from 'react'

import 'gsap'
import 'gsap-then'

import seeds from './images/seeds.png'
import bottom from './images/bottom.png'
import sandwich from './images/sandwich.png'

import seedsSmall from './images/small_seeds.png'
import seedsLarge from './images/big_seeds.png'

import './styles.css'

export default class CaesarInterrupt extends Component {

  constructor(props) {
    super(props)
    this.state = {
      isL2R: props.layout != "R2L"
    }
  }

  componentDidMount() {

    new TimelineMax()

      // // init
      .set(this.seeds, {autoAlpha: 0, bottom: -241 })
      .set(this.bottom, {autoAlpha: 1, width: 0 })
      .set(this.seedsSmall, {autoAlpha: 0, width: 1920, top:-2350 })
      .set(this.seedsLarge, {autoAlpha: 0, width: 1920, top:-2300 })
      .set(this.sandwich, {left: -800 })

      .to(this.sandwich, 2, {left: 1230, delay:1})
      .to(this.bottom, 1.5, {autoAlpha: 1, width: 1920}, "-=1.5")

      .to(this.seeds, 1, {autoAlpha: 1}, 7)
      .to(this.seedsSmall, 1, {autoAlpha: 1}, "-=1")
      .to(this.seedsLarge, 1, {autoAlpha: 1}, "-=1")

      .to(this.seeds, 7, {bottom: 0}, 4)
      .to(this.seedsSmall, 6, {top: -0}, "-=6")
      .to(this.seedsLarge, 8, {top: 0}, "-=8")

      .to(this.seedsSmall, 1.5, {autoAlpha: 0}, "-=1.5")
      .to(this.seedsLarge, 1.5, {autoAlpha: 0}, "-=1.5")
      // .to(this.bottom, 1, {autoAlpha: 0}, "-=1.5")
      // .to(this.sandwich, 1, {autoAlpha: 0}, "-=1.5")
      // .to(this.seeds, 1, {autoAlpha: 0}, "+=2.5")


    TweenLite.defaultEase = Linear.easeNone;
}
  render() {
    return (
      <div className="ChipotleInterrupt">

        <div className="bottom" ref={(node) => this.bottom = node}>
          <img src={bottom}/>
        </div>

        <div className="seedsSmall" ref={(node) => this.seedsSmall = node}>
          <img src={seedsSmall}/><br/>
          <img src={seedsSmall}/>
        </div>

        <div className="seedsLarge" ref={(node) => this.seedsLarge = node}>
          <img src={seedsLarge}/><br/>
          <img src={seedsLarge}/>
        </div>

        <div className="sandwichWrapper">
        <div className="sandwich" ref={(node) => this.sandwich = node}>
          <img src={sandwich}/>
        </div>
        </div>

        <div className="seeds" ref={(node) => this.seeds = node}>
          <img src={seeds}/>
        </div>
      </div>
    )
  }
}
