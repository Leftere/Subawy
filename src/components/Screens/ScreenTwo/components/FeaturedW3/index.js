import { Component } from 'react'
import PropTypes from 'prop-types'
import API from 'api'
import neocastDataProvider from 'api/neocastDataProvider'
import PlaylistDJ from 'components/Common/PlaylistDJ'

import promo1 from './images/steak.png'
import promo2 from './images/meatball.png'
import promo3 from './images/chicken.png'

import promo1NoCoke from './images/steak_nocoke.png'
import promo2NoCoke from './images/meatball_nocoke.png'

import R2Lpromo1 from './images/R2Lsteak.png'
import R2Lpromo2 from './images/R2Lmeatball.png'
import R2Lpromo3 from './images/R2Lchicken.png'

import R2Lpromo1NoCoke from './images/R2Lsteak_nocoke.png'
import R2Lpromo2NoCoke from './images/R2Lmeatball_nocoke.png'

import './styles.css'

let frameCount = 0;
let isL2R = true;

let displayList = {
  0: 'showPromo1',
  1: 'showPromo2',
  2: 'showPromo1',
  3: 'showPromo3',
}

@neocastDataProvider([
  'meal_deal_fountain_additional_price',
  'serves_coca_cola',
  'chicken_bacon_test'
])
export default class w3Feature extends Component {

  constructor(props) {
    super(props);
    this.state = {
      intervalId: null,
      currentFrameCount: 0
    }

    if (props.layout == "R2L") isL2R = false;

    // disable chicken bacon ranch promo if the chicken_bacon_test key is true
    if (this.props.chicken_bacon_test) {
      displayList = {
        0: 'showPromo1',
        1: 'showPromo2'
      };
    }
  }

  // When props update...
  componentWillReceiveProps(nextProps) {
    frameCount = nextProps.currentFrameCount % Object.keys(displayList).length
  }

  componentWillUnmount() {
    frameCount = 0;
  }


  render() {
    const {
      meal_deal_fountain_additional_price,
      serves_coca_cola
    } = this.props;
    return (
      <div className={`w3Feature ` + displayList[frameCount]}>

        {isL2R && serves_coca_cola &&
          <div>
            <img src={promo1} className='promoImage promo1'/>
            <img src={promo2} className='promoImage promo2'/>
            <img src={promo3} className='promoImage promo3'/>
          </div>
        }

        {isL2R && !serves_coca_cola &&
          <div>
            <img src={promo1NoCoke} className='promoImage promo1'/>
            <img src={promo2NoCoke} className='promoImage promo2'/>
            <img src={promo3} className='promoImage promo3'/>
          </div>
        }

        {!isL2R && serves_coca_cola &&
          <div>
            <img src={R2Lpromo1} className='promoImage promo1'/>
            <img src={R2Lpromo2} className='promoImage promo2'/>
            <img src={R2Lpromo3} className='promoImage promo3'/>
          </div>
        }

        {!isL2R && !serves_coca_cola &&
          <div>
            <img src={R2Lpromo1NoCoke} className='promoImage promo1'/>
            <img src={R2Lpromo2NoCoke} className='promoImage promo2'/>
            <img src={R2Lpromo3} className='promoImage promo3'/>
          </div>
        }

        <div className='makeMeal'>
          MAKE IT<br/>
          A MEAL +&nbsp;${meal_deal_fountain_additional_price}
        </div>

        <div className='subtitle'>
          Any sub + 21oz. drink <br/>
          + side (applesauce, 2 cookies, or chips)
        </div>
      </div>
    );
  }
}
