import { Component } from 'react'
import API from 'api'

import spiceOil from './images/oil.png'
import spiceMustard from './images/mustardSeed.png'
import spiceSP from './images/saltPepper.png'
import spiceHerb from './images/herbs.png'
import spiceSub from './images/subSpice.png'

import './styles.css'

let showHerbs = API.loc(`herbs_depletion`);

export default class FooterSpice extends Component {

  componentDidMount() {
    if (this.props.player == 'dual') {}

  }

  render() {


    return (
      <div className='footerSpice'>

        <div className='footer-1' ref={(node) => this.footer1 = node }>

          <div className='footer-title'>
            SPICE IT UP.<br/>
            <span>
              Choose from a variety of spices,<br/>
              dressings and classic sub sauces.<br/>
              <strong>Ask for off-menu options!</strong>
            </span>
          </div>

          
          { showHerbs &&
            <div>

              <div className='f-col f-1'>
                <div className='wrapper'>
                  <img src={spiceSub}/>
                  <div className='title'>Sub<br/>Spice</div>
                  <div className='pricing'>
                    0/0
                  </div>
                </div>
              </div>
              

              <div className='f-col f-2'>
                <div className='wrapper'>
                  <img src={spiceHerb}/>
                  <div className='title'>Provençal<br/>herbs</div>
                  <div className='pricing'>
                    0/0
                  </div>
                </div>
              </div>
                

              <div className='f-col f-3'>
                <div className='wrapper'>
                  <img src={spiceSP}/>
                  <div className='title'>Sea Salt<br/>&amp; Pepper</div>
                  <div className='pricing'>
                    0/0
                  </div>
                </div>
              </div>

              <div className='f-col f-4'>
                <div className='wrapper'>
                  <img src={spiceMustard}/>
                  <div className='title'>Mustard<br/>Seed Spread</div>
                  <div className='pricing'>
                    40/80
                  </div>
                </div>
              </div>

              <div className='f-col f-5'>
                <div className='wrapper'>
                  <img src={spiceOil}/>
                  <div className='title'>Subway<sup>&reg;</sup> Herb<br/>&amp; Garlic Oil</div>
                  <div className='pricing'>
                    40/80
                  </div>
                </div>
              </div>

            </div>
          }

          
          { !showHerbs &&
            <div>
              
              <div className='f-col f-1'>
                <div className='wrapper'>
                  <img src={spiceSub}/>
                  <div className='title'>Sub<br/>Spice</div>
                  <div className='pricing'>
                    0/0
                  </div>
                </div>
              </div>
              


              <div className='f-col f-2'>
                <div className='wrapper'>
                  <img src={spiceSP}/>
                  <div className='title'>Sea Salt<br/>&amp; Pepper</div>
                  <div className='pricing'>
                    0/0
                  </div>
                </div>
              </div>

              <div className='f-col f-3'>
                <div className='wrapper'>
                  <img src={spiceOil}/>
                  <div className='title'>Subway<sup>&reg;</sup> Herb<br/>&amp; Garlic Oil</div>
                  <div className='pricing'>
                    40/80
                  </div>
                </div>
              </div>

              
            </div>
          }

          

        </div>

      </div>
    );
  }
}
