import { Component } from 'react'
import neocastDataProvider from 'api/neocastDataProvider'

import image from './BG.jpg'
import './styles.css'



export default class GiftCardFoooter extends Component {
  render() {
    return (
      <div className='c-Footer c-GiftCardFoooter'>
        <div className='c-Footer_background' style={{ background: `url(${image})` }} />
      </div>
    )
  }
}
