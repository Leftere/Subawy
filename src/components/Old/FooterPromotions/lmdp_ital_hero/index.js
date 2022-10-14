import { Component } from 'react'

import neocastDataProvider from 'api/neocastDataProvider'

import './styles.css'
import image from './background.jpg'


@neocastDataProvider([
  'italian_hero_6in',
  'italian_hero_12in'
])
export default class LmdpItalHero extends Component {
  render() {
    return (
      <div className='c-Footer c-Footer-old-school'>
        <div
          className='c-Footer_background c-Footer_background-LmdpItalHero c-Footer_background-old-school'
          style={{ background: `url(${image})` }}
        >

          <span className='lmdp_ital_hero_6in'>
            <sup>$</sup>{this.props.italian_hero_6in}
          </span>
          
          <span className='lmdp_ital_hero_12in'>
            <sup>$</sup>{this.props.italian_hero_12in}
          </span>

        </div>
 
      </div>
    )
  }
}
