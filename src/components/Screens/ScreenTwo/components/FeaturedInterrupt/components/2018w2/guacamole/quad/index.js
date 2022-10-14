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
const FASTFADE = 0.15;

export default class GuacFeatured extends Component {

  constructor(props) {
    super(props)
  }

  componentDidMount() {

    new TimelineMax({ repeat: false})
      .set(this.bg, { opacity: 1})
      .set(this.fg, { opacity: 1})
      .set(this.text1, { left: 27, top: 102, opacity: 1})
      .set(this.tryguac, { opacity: 1})
      .set(this.text2, { opacity: 0})
      .set(this.hass, { left: 680, top: 648, opacity: 0})

      .to(this.fg, 1.5, {left: -600, top: 0}, BEAT)
      .to(this.text1, FASTFADE, {opacity: 0}, "-=1.5")
      .to(this.text2, FASTFADE, {opacity: 1})
      .to(this.hass, FADE, {left: 640, top: 648, opacity: 1}, "+=0.5")

    TweenLite.defaultEase = Linear.easeNone;
  }

  render() {
    return (
      <div className='c-Promotion c-GuacFeatured'>
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
