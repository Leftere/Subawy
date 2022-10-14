import { Component } from 'react'

import 'gsap'
import 'gsap-then'

import frame1 from './images/frame-1.png'
import frame2 from './images/frame-2.png'
import frame3 from './images/frame-3.png'
import text1 from './images/text-1.png'
import text2 from './images/text-2.png'
import text3 from './images/text-3.png'
import text4 from './images/text-4.png'

import './styles.css'

export default class SignatureWrapInterrupt extends Component {

  constructor(props) {
    super(props);
  }

componentDidMount() {
  new TimelineMax({ delay: 0.5 })

    .to(this.text1, 0.3, { autoAlpha: 1}, 0)
    .to(this.frame1, 0.5, { top: 0}, 1)

    .to(this.text2, 0.3, { autoAlpha: 1}, 2)
    .to(this.frame2, 0.5, { top: 0}, 3)

    .to(this.text3, 0.3, { autoAlpha: 1}, 4)
    .to(this.frame3, 0.5, { top: 0}, 5)

    .to(this.text4, 0.3, { autoAlpha: 1}, 6)
    .timeScale(1.5)

    TweenLite.defaultEase = Linear.easeNone;
}
  render() {
    return (
      <div className={`ClubInterrupt`}>

        <img className='f1 club-text' src={text1} ref={(node) => this.text1 = node}  />
        <img className='f2 club-text' src={text2} ref={(node) => this.text2 = node}  />
        <img className='f3 club-text' src={text3} ref={(node) => this.text3 = node}  />
        <img className='f4 club-text' src={text4} ref={(node) => this.text4 = node}  />

        <img className='f1 club-frame' src={frame1} ref={(node) => this.frame1 = node}  />
        <img className='f2 club-frame' src={frame2} ref={(node) => this.frame2 = node}  />
        <img className='f3 club-frame' src={frame3} ref={(node) => this.frame3 = node}  />

      </div>
    )
  }
}
