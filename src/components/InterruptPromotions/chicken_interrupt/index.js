import { Component } from 'react'

import background from './images/background.png'
import './styles.css'


export default class ChickenInterrupt extends Component {
  render() {
    return (
      <div className='chickenInterrupt'>
        <img src={background} />

        <div className='chickenInterruptCta'>
          Order.
        </div>
      </div>
    )
  }
}
