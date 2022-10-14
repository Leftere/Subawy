import { Component } from 'react'

import cta1 from './images/cta1.png'
import cta2 from './images/cta2.png'
import foreground from './images/foreground.png'
import './styles.css'


export default class ChipFlavorInterrupt extends Component {
  state = {
    show: false
  }

  componentDidMount() {
    setTimeout(() => {
      this.setState({ show: true })
    }, 800);
  }

  render() {
    if (!this.state.show) {
      return false;
    }

    return (
      <div className='chipInterrupt'>


        <div className='cta'>
          <img className='cta1' src={cta1} />
          <img className='cta2' src={cta2} />
        </div>

        <div className='chips'>
          <div className='chip1 type2 offset2'></div>
          <div className='chip2 type3 offset1'></div>
          <div className='chip3 type1 offset3'></div>
          <div className='chip4 type3 offset1'></div>
          <div className='chip5 type1 offset1'></div>
          <div className='chip6 type1 offset4'></div>
          <div className='chip7 type2 offset1'></div>
          <div className='chip8 type3 offset2'></div>
          <div className='chip9 type1 offset1'></div>
          <div className='chip10 type3 offset3'></div>
          <div className='chip11 type1 offset2'></div>
        </div>

        <img className='foreground' src={foreground} />
      </div>
    )
  }
}
