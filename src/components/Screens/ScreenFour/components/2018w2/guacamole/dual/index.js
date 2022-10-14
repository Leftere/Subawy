import { Component } from 'react'

import './styles.css'

import 'gsap'
import 'gsap-then'

import Bg from './bg.png'
import Fg from './fg.png'

import Hass from './hass.png'

import Text1 from './text1.png'
import Text2 from './text2.png'
import TryGuac from './try_guac.png'

const BEAT = 2;
const FADE = 0.25;

export default class GuacFeaturedDual extends Component {

  constructor(props) {
    super(props)
  }

  componentDidMount() {

    console.log(this.props);

    new TimelineMax({ repeat: false})
      .set(this.bg, { opacity: 1})
      .set(this.fg, { opacity: 1})
      .set(this.text1, { opacity: 1})
      .set(this.tryguac, { opacity: 1})
      .set(this.text2, { opacity: 0})
      .set(this.hass, {opacity: 0})


      .to(this.text1, FADE, {opacity: 0}, BEAT)
      .to(this.text2, FADE, {opacity: 1})
      .to(this.fg, 0, {left: -600, top: 0}, "-=0.5")
      .to(this.hass, FADE, {opacity: 1}, "+=0.5")

    TweenLite.defaultEase = Linear.easeNone;
  }

  render() {
    return (
      <div className='c-Promotion c-GuacFeaturedDual'>
        <img src={Bg} className='bg' ref={(node) => this.bg = node } />
        <img src={Fg} className='fg' ref={(node) => this.fg = node } />
        <img src={Text1} className='text1' ref={(node) => this.text1 = node } />
        <img src={Text2} className='text2' ref={(node) => this.text2 = node } />
        <img src={TryGuac} className='tryGuac' ref={(node) => this.tryguac = node } />
        <img src={Hass} className='hass' ref={(node) => this.hass = node } />
      </div>
    )
  }
}
