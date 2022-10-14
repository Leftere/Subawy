import { Component } from 'react'

import 'gsap'
import 'gsap-then'

import flowers from './images/flowers.png'
import bottom from './images/bottom.png'
import bread from './images/bread.png'


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
      .set(this.flowers, {bottom: -241 })
      .set(this.bottom, {autoAlpha: 0, width: 1920 })
      .set(this.bread, {left: 1920 })

      .to(this.flowers, 1, {bottom: 0})
      .to(this.bottom, 0.3, {autoAlpha: 1, delay:1})
      .to(this.flowers, 0.5, {autoAlpha: 0, delay:1})
      .to(this.bread, 6, {left: -850, delay:1})
      .to(this.bottom, 4, {width: 0}, "-=5")



    TweenLite.defaultEase = Linear.easeNone;
}
  render() {
    return (
      <div className="SunflowerInterrupt">
        <div className="bottom" ref={(node) => this.bottom = node}>
          <img src={bottom}/>
        </div>

        <div className="breadWrapper">
        <div className="bread" ref={(node) => this.bread = node}>
          <img src={bread}/>
        </div>
        </div>

        <div className="flowers" ref={(node) => this.flowers = node}>
          <img src={flowers}/>
        </div>
      </div>
    )
  }
}
