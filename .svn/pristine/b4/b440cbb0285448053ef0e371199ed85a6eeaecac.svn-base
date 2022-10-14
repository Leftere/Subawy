import { Component } from 'react'

import frame1 from '../images/frame1.jpg'
import frame2 from '../images/frame2.jpg'

import frame1Sandwich from '../images/frame1Sandwich.png'
import frame2Sandwich from '../images/frame2Sandwich.png'

import endingFrame from '../images/endingFrame.jpg'
import sandwich1 from '../images/sandwich1.png'
import sandwich2 from '../images/sandwich2.png'
import endingCopy from '../images/endingCopy.png'

import './styles.css'


export default class RscCbrmQuad extends Component {

  state = {
    flipped: false,
    end: false,
    showCopy: false
  }

  componentDidMount() {
    window.requestTimeout(() => {
      this.setState({ flipped: !this.state.flipped })

      window.requestTimeout(() => {
        this.setState({ end: true })
      }, 8000)

    }, 8500)
  }

  componentWillUnmount() {
    clearInterval(this.interval);
  }

  render() {
    const {
      end,
      flipped
    } = this.state

    const endingStyle = end ? { opacity: 1 } : {};
    const flipStyle = end ? { opacity : 0 } : {};

    return (
      <div className='c-Promotion rscCbrFeatured'>

        <div className={`flip-container ${flipped ? 'flipped' : ''}`} style={flipStyle}>
          <div className='flipper'>
            <div>
              <div className='front'>
                <img src={frame1} className='background' />
                <img src={frame1Sandwich} className='panSandwich' />
              </div>

              <div className='back'>
                <img src={frame2} className='background' />
                <img src={frame2Sandwich} className='panSandwich2' />
              </div>
            </div>
          </div>
        </div>

        {end &&
          <div className={'endingFrame'}>
            <img src={endingFrame} className='background' />

            <div className={'endFrameTitleCopy'}>
              Chicken made delicious
            </div>

            <img src={sandwich1} className='sandwich1' />
            <img src={sandwich2} className='sandwich2' />

            <img src={endingCopy} className='endingFrameCopy' />
          </div>
        }

      </div>
    )
  }
}
