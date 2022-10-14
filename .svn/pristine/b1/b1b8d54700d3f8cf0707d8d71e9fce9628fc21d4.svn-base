import { Component } from 'react'

import neocastDataProvider from 'api/neocastDataProvider'
import delayedRender from 'components/common/delayedRender'

import startFrame from '../images/startFrameNoText.jpg'
import frame1 from '../images/frame1.png'
import frame2 from '../images/frame2Fade.jpg'
import frame3 from '../images/frame3.png'

import sandy from '../images/sandy.png'
import lto from '../images/LTO.png'

import './animations.css'
import './styles.css'

@delayedRender(300)
@neocastDataProvider([
  'autumn_carved_price_6in',
  'autumn_carved_price_12in'
])
export default class AutumnCarved2017w7 extends Component {
  render() {
    return (
      <div className='c-Promotion-w7autumn'>

        <div className='startFrame'>
          <img className='startFrame' src={startFrame} />

          <div className='largeCopy titleCopy' style={{ zIndex: 11, left: -100 }}>
            Autumn Carved Turkey
          </div>

          <div className='prepricing'>
            <div className='subprice'>
              <div className='price price-six'>${this.props.autumn_carved_price_6in}</div>
              <div className='price price-foot'>${this.props.autumn_carved_price_12in}</div>
            </div>
          </div>

        </div>

        <img className='pan frame1' src={frame1}/>
        <img className='pan frame2' src={frame2}/>
        <img className='pan frame3' src={frame3}/>

        <img className='lto' src={lto}/>
        <img className='sandy' src={sandy}/>

        <div className='largeCopy titleCopy frame1Copy'>
          Carved turkey breast.
        </div>

        <div className='largeCopy titleCopy frame2Copy'>
          Cranberry mustard sauce.
        </div>

        <div className='largeCopy titleCopy frame3Copy'>
          Cheddar cheese.
        </div>

        <div className='largeCopy titleCopy frame4Copy'>
          Happy Tastegiving!
        </div>

        <div className='mediumCopy titleCopy frame5Copy'>
          Autumn Carved Turkey
        </div>

        <div className='pricing'>
          <div className='subprice'>
            <div className='size size-six'>6"</div>
            <div className='price price-six'>${this.props.autumn_carved_price_6in}</div>
            <div className='cal cal-six'>420 cal</div>

            <div className='size size-foot'>Footlong</div>
            <div className='price price-foot'>${this.props.autumn_carved_price_12in}</div>
            <div className='cal cal-foot'>840 cal</div>
          </div>
        </div>

        <div className='disclaimer'>
          <small>Subway<sup>&reg;</sup> is a Registered Trademark
          of Subway IP Inc. &copy;2017 Subway IP Inc.</small>
        </div>

      </div>
    )
  }
}
