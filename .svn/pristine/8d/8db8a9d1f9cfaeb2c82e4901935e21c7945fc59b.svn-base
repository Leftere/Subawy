import { Component } from 'react'

import './style.pcss'

import Frame1 from '../images/frame1.png';
import Frame2 from '../images/frame2.png';
import Frame3 from '../images/frame3.png';
import Frame4 from '../images/frame4.png';


export default class AppRemoteOrderDual extends Component {


  constructor(props) {
    super(props)
  }

  componentDidMount() {

    TweenLite.defaultEase = Linear.easeNone;

    let master = new TimelineMax({repeat: false});
    let panel1 = new TimelineLite();

    let fadeLength = 0.5;

    let beat1 = 3;
    let beat2 = 6;
    let beat3 = 9;

    panel1
      .set(this.frame1, { opacity: 1 })
      .set(this.frame2, { opacity: 0 })
      .set(this.frame3, { opacity: 0 })
      .set(this.frame4, { opacity: 0 })

      .to(this.frame1, fadeLength, { opacity: 0 }, beat1)
      .to(this.frame2, fadeLength, { opacity: 1 }, beat1)

      .to(this.frame2, fadeLength, { opacity: 0 }, beat2)
      .to(this.frame3, fadeLength, { opacity: 1 }, beat2)

      .to(this.frame3, fadeLength, { opacity: 0 }, beat3)
      .to(this.frame4, fadeLength, { opacity: 1 }, beat3)

      master
      .add(panel1)

  }

  render() {
    return (
      <div className='c-AppRemoteOrderDual'>
          <img className='frame1' src={Frame1} ref={(node) => this.frame1 = node}/>
          <img className='frame2' src={Frame2} ref={(node) => this.frame2 = node}/>
          <img className='frame3' src={Frame3} ref={(node) => this.frame3 = node}/>
          <img className='frame4' src={Frame4} ref={(node) => this.frame4 = node}/>
      </div>
    )
  }
}
