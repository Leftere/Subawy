import { Component } from 'react'
import API from 'api'

import imgBg from './background.png'

// Alright, so the mixed-casing is stupid with things like doordash being 1 word
// For consistancy we are going to go all lower-case for this
import imgUbereats from './ubereats.png'
import imgPostmates from './postmates.png'
import imgDoordash from './doordash.png'
import imgGrubhub from './grubhub.png'
import imgBlank from './blank.png'

import './styles.css'
let oImgLookup = {
  third_party_delivery_uber: imgUbereats,
  third_party_delivery_postmates: imgPostmates,
  third_party_delivery_doordash: imgDoordash,
  third_party_delivery_grubhub: imgGrubhub,
  none: imgBlank,
}

let oServices = [
  API.loc(`footer_third_party_pos_1`) || 'none',
  API.loc(`footer_third_party_pos_2`) || 'none',
  API.loc(`footer_third_party_pos_3`) || 'none',
  API.loc(`footer_third_party_pos_4`) || 'none',
].reverse();


export default class ThirdPartyFooter extends Component {
  render() {
    return (
      <div className='c-Footer c-ThirdPartyFooter'>
        <div className='c-Footer_background' style={{ background: `url(${imgBg})` }} />
        <div className='c-Footer_floatWrapper'>
          {oServices.map((el, i) => {
              return <img key={el + i} src={oImgLookup[el]} />
          })}
        </div>
      </div>
    )
  }
}
