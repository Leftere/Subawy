import React from 'react'
import { Component } from 'react'

import neocastDataProvider from 'api/neocastDataProvider'
import API from 'api'

import './styles.css'

import Paninis from './images/PaninisPanel.jpg'




export default class SdPaninis extends Component {

  render() {
     
  return(
    <div className="sd-paninis">
      <img src={Paninis} />
    </div>
  )
  }
}
