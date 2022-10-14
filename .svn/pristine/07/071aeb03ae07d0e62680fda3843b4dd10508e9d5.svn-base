import { Component } from 'react'

import './styles.css'
import bread from './bread.png'
import lto from './lto.png'
import fg from './fg.png'

export default class RyeBreadFeatured extends Component {

  constructor(props) {
    super(props)
  }

  componentDidMount() {

    var master = new TimelineMax({repeat: false});
    var panel1 = new TimelineLite();

    panel1
      .set(this.bread, { top: -1500})
      .set(this.lto, { opacity: 0, top: 90})
      .to(this.bread, 1.5, {top: 90}, 0.5)
      .to(this.lto, 0.5, { opacity: 1, top: 508}, 2)

    master
      .add(panel1)

  }

  render() {
    return (
      <div className='c-Promotion c-RyeBreadFeatured'>
        <img src={bread} className='bread' ref={(node) => this.bread = node } />
        <img src={lto} className='lto' ref={(node) => this.lto = node } />
        <img src={fg} className='fg' ref={(node) => this.fg = node } />
      </div>
    )
  }
}
