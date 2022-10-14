import { Component } from 'react'

import 'gsap'
import 'gsap-then'

import full from './images/full.png'

import text1 from './images/f1_text.png'
import text2 from './images/f2_text.png'
import text3 from './images/f3_text.png'

import wrap from './images/wrap.png'

import footer1 from './images/f1_footer.png'

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

      // init
      .set(this.full1, { autoAlpha: 0 })
      .set(this.full2, { autoAlpha: 0 })
      .set(this.full4, { autoAlpha: 0 })
      .set(this.mask, { autoAlpha: 0 })
      .set(this.bg, { autoAlpha: 0 })
      .set(this.text1, { autoAlpha: 0 })
      .set(this.text2, { autoAlpha: 0 })
      .set(this.text3, { autoAlpha: 0 })
      .set(this.footer1, { autoAlpha: 0 })

      // frame 1a
      .to(this.full1, 1, { autoAlpha: 0.5}, 0)
      .to(this.full2, 1, { autoAlpha: 0.5}, 0)
      .to(this.full4, 1, { autoAlpha: 0.5}, 0)
      .to(this.bg, 1, { autoAlpha: 1 }, 0)
      .to(this.text1, 1, { autoAlpha: 1}, 0)
      .to(this.footer1, 1, { autoAlpha: 1}, 0)

      // frame 1b
      .to(this.wrap, 1, { className: "wrap", ease: Quad.easeOut })

      // frame 2
      .to(this.text1, 0.5, { autoAlpha: 0, delay: 2})
      .to(this.footer1, 0.5, { autoAlpha: 0}, "-=0.5")
      .to(this.text2, 0.5, { autoAlpha: 1})

      // frame 3
      .to(this.text2, 0.5, { autoAlpha: 0, delay: 2})
      .to(this.text3, 0.5, { autoAlpha: 1})

      // frame 4
      .set(this.mask, { autoAlpha: 1, delay: 2 })
      .to(this.text3, 0.5, { autoAlpha: 0})
      .to(this.bg, 0.5, { autoAlpha: 0 }, "-=0.5" )
      .to(this.wrap, 1, { className: "wrap-small", ease: Quad.easeOut })

      // end
      .set(this.mask, { autoAlpha: 0 })
      .set(this.wrap, { autoAlpha: 0 })

    TweenLite.defaultEase = Linear.easeNone;
}
  render() {
    return (
      <div className="CaesarInterrupt">
        <img className="overlay f1" src={full} ref={(node) => this.full1 = node} />
        <img className="overlay f2" src={full} ref={(node) => this.full2 = node} />
        <img className="overlay f4" src={full} ref={(node) => this.full4 = node} />

        <div className="mask" ref={(node) => this.mask = node} />
        <div className="bg" ref={(node) => this.bg = node} />

        <div className="container">
          <img className="text text1" src={text1} ref={(node) => this.text1 = node} />
          <img className="text text2" src={text2} ref={(node) => this.text2 = node} />
          <img className="text text3" src={text3} ref={(node) => this.text3 = node} />

          <img className="wrap-hidden" src={wrap} ref={(node) => this.wrap = node} />

          <img className="text footer1" src={footer1} ref={(node) => this.footer1 = node }/>  
        </div>

        <style>
          {"\
            .c-WrapsMenu .c-rotisserie_chicken_caesar_wrap span {color: #4c006a !important}\
            .c-WrapsMenu .c-chipotle_southwest_steak_and_cheese_wrap span {color: #008938 !important}\
            .c-WrapsMenu .c-turkey_bacon_guacamole_wrap span {color: #008938 !important}\
            .c-WrapsMenu .imgChicken {opacity: 1 !important}\
            .c-WrapsMenu .imgSteak   {opacity: 0 !important}\
            .c-WrapsMenu .imgTurkey  {opacity: 0 !important}\
          "}
        </style>

      </div>
    )
  }
}
