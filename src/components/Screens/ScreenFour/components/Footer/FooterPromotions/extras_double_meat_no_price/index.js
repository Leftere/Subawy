import { Component } from 'react'

import image from './background.jpg'


export default class ExtrasDoubleMeatNoPrice extends Component {
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
