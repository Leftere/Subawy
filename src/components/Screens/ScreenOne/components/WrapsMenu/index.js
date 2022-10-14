import { Component } from 'react';

import API from 'api'

import neocastDataProvider from 'api/neocastDataProvider'
import SubLineItem from 'components/Common/SubLineItem'

import SodiumWarning from 'components/Common/SodiumWarning'
import ProteinBowls from './ProteinBowls.png';
import FLPRO from './fl_pro.png';

import bgNY from './bg-ny.jpg';
import bgPhilly from './bg-philly.jpg';

import './styles.css'

let bgImage = FLPRO;

let isSodiumStore = API.loc('store_plus_sodium');
let isPhilly = API.loc('is_philadelphia_store');

if (isSodiumStore)
{
  bgImage = bgNY;

  if (isPhilly) 
    bgImage = bgPhilly;
}


let displayList = [
  'showTurkey'
]

@neocastDataProvider([
  'make_any_sub_a_wrap_price',
  'sd_signature_wraps',
  'avocado_wraps_menu',
  'sd_wraps_panini'
])

export default class WrapsMenu extends Component {

  constructor(props) {
    super(props)
  }


  render() {
    const {
      make_any_sub_a_wrap_price,
    } = this.props


    return (
      <div className={`c-SignatureWrapsMenu ${this.props.layout}`}>

        {/* Promo panel for protein bowls */}

        {/* <div className="protein-bowls-side-panel">
          <img src={ProteinBowls} />
        </div> */}

        <div className="protein-bowls-side-panel">
          <img src={bgImage} />
        </div>
      </div>
    );
  }
}
