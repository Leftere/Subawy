import { Component } from 'react'
import { DOMinator } from 'components/Common/DOMinator'
import API from 'api'
import 'gsap'
import 'gsap-then'

import './styles.css'

import frame1 from './images/bg-1.png'
import frame2 from './images/bg-2.png'
import frame3 from './images/bg-3.png'
import frame4 from './images/bg-4.png'
import frame5 from './images/bg-5.png'
import frame6 from './images/bg-6.png'
import frame7 from './images/bg-7.png'
import frame8 from './images/bg-8.png'
import frame9 from './images/bg-9.png'

let R = React.createElement // Render Element

// Build DOM
let domClass = 'c-MiniPromo'
let elements = {
  frame1: ['img', frame1],
  frame2: ['img', frame2],
  frame3: ['img', frame3],
  frame4: ['img', frame4],
  frame5: ['img', frame5],
  frame6: ['img', frame6],
  frame7: ['img', frame7],
  frame8: ['img', frame8],
  frame9: ['img', frame9],
}

let dominate = DOMinator.dominate(elements)
let result = dominate.result
let C = dominate.references // Children lookup

let dom = R('div', {
  className: domClass
}, result)

export default class MiniPromo extends Component {

	componentDidMount() {

    let timeline = new TimelineMax()
        .set([
          C.frame2, C.frame3, C.frame4, C.frame5, 
          C.frame6, C.frame7, C.frame8, C.frame9], {autoAlpha: 0});

    let beat = 1;
    let beatLength = 0.4;
    let beatLengthLong = 1.5;

    timeline.set(C.frame2, {autoAlpha: 1}, beat);
      beat += beatLength;
    
    timeline.set(C.frame3, {autoAlpha: 1}, beat);
      beat += beatLengthLong;
    
    timeline.set(C.frame4, {autoAlpha: 1}, beat);
      beat += beatLength;

    timeline.set(C.frame5, {autoAlpha: 1}, beat);
      beat += beatLength;

    timeline.set(C.frame6, {autoAlpha: 1}, beat);
      beat += beatLengthLong;

    timeline.set(C.frame7, {autoAlpha: 1}, beat);
      beat += beatLength;

    timeline.set(C.frame8, {autoAlpha: 1}, beat);
      beat += beatLengthLong;

    timeline.set(C.frame9, {autoAlpha: 1}, beat);

    TweenLite.defaultEase = Linear.easeNone;
  }

  render() {
    return dom
  }
}
