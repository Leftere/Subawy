import { Component } from 'react'
import neocastDataProvider from 'api/neocastDataProvider'
import moment from 'moment'

import './style.css'

import Background1 from './background1.png'
import Background2 from './background2.png'
import Background3 from './background3.png'
import Background4 from './background4.png'
import Background5 from './background5.png'
import Background6 from './background6.png'
import Background7 from './background7.png'

let Backgrounds = [
  Background1,
  Background2,
  Background3,
  Background4,
  Background5,
  Background6,
  Background7
]

@neocastDataProvider([
  '6in_sotd_price'
])
export default class SOTD2019w1 extends Component {
  render() {
    return (
      <div className='c-Promotion c-SOTD2019w1'>
        <img className='c-Promotion_background' src={Backgrounds[moment().weekday()]} />

        <div className='price'>${this.props['6in_sotd_price']}</div>

      </div>
    )
  }
}