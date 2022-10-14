import { Component } from 'react'
import PropTypes from 'prop-types'
import './styles.css'

import img1 from './images/steak.jpg'
import img2 from './images/chicken_bacon.jpg'
import img3 from './images/italian.jpg'
import img4 from './images/tuna.jpg'
import img5 from './images/spicy_italian.jpg'
import img6 from './images/meatball.jpg'
import img7 from './images/cold_cut.jpg'

let frameCount = 0;

let displayList = {
  0: 'img1',
  1: 'img2',
  2: 'img3',
  3: 'img4',
  4: 'img5',
  5: 'img6',
  6: 'img7',
}

let keyToResource = {
  'img1' : img1,
  'img2' : img2,
  'img3' : img3,
  'img4' : img4,
  'img5' : img5,
  'img6' : img6,
  'img7' : img7,
}



// Iterate through each
let imageList = []

for (const [key, value] of Object.entries(keyToResource)) {
  imageList.push((
    <div className={`imageItem c-${key}`} key={key}>
      <img src={value}/>
    </div>
  ))
}

export default class SignatureFeatured extends Component {

  constructor(props) {
    super(props)

  }

  // When props update...
  componentWillReceiveProps(nextProps) {
    frameCount = nextProps.currentFrameCount % Object.keys(displayList).length
  }

  // Reset on unmount
  componentWillUnmount() {
    frameCount = 0;
  }

  render() {
    return (
      <div className={`${this.props.screenClass} signatureFeatured`}>

        <style dangerouslySetInnerHTML={{__html: `
          .signatureFeatured .c-${displayList[frameCount]} img {
            opacity: 1;
          }
        `}} />

        {/*imageList*/}

      </div>
    );
  }
}
