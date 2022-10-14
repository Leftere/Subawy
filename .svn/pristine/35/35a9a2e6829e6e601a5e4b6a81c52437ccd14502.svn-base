import { Component } from 'react'

import neocastDataProvider from 'api/neocastDataProvider'

import './styles.css'
import image from './background.jpg'


@neocastDataProvider([
  'sides_soup_price'
])
export default class SoupFooter extends Component {
  render() {
    return (
      <div className='c-Footer'>
        <div
          className='c-Footer_background c-Footer_background-Soup'
          style={{ background: `url(${image})` }}
        />

        <span className='soup_price'>
          ${this.props.sides_soup_price}
        </span>   
      </div>
    )
  }
}
