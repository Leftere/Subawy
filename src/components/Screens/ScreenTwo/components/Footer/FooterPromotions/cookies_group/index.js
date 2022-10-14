import { Component } from 'react'

import image from './background.png'


export default class CookiesFooter extends Component {
  render() {
    return (
      <div className='c-Footer c-Footer-old-school'>
        <div
          className='c-Footer_background c-Footer_background-old-school'
          style={{ background: `url(${image})` }}
        />
      </div>
    )
  }
}
