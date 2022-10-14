import { Component } from 'react'

import neocastDataProvider from 'api/neocastDataProvider'

import './styles.css'
import image from './background.jpg'


@neocastDataProvider([
  'soup_price'
])
export default class LocalFooterSoupsOnOldSchoolFooterPromotion extends Component {
  render() {
    return (
      <div className='c-Footer c-Footer-old-school'>
        <div
          className='c-Footer_background c-Footer_background-LocalFooterSoupsOn c-Footer_background-old-school dynamic-footer'
          style={{ background: `url(${image})` }}
        />

        <span className='soups-on-price'>
          <sup>$</sup>{this.props.soup_price}
        </span>   
      </div>
    )
  }
}
