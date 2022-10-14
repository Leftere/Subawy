import { Component } from 'react'
import neocastDataProvider from 'api/neocastDataProvider'

import image from './background.png'
import './styles.css'

export default class TemplateFooter extends Component {
  render() {
    return (
      <div className='c-Footer c-TemplateFooter'>
        <div className='c-Footer_background' style={{ background: `url(${image})` }} />
      </div>
    )
  }
}
