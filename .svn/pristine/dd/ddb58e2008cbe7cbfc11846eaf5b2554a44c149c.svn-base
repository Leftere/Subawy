import { Component } from 'react'
import PropTypes from 'prop-types'
import './styles.css'

import img1 from './images/bfast_bacon_egg_and_cheese.jpg'


let frameCount = 0;

let displayList = {
  0: 'img1',
}

let keyToResource = {
  'img1': img1,
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

export default class BreakfastFeatured extends Component {

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
      <div className={`${this.props.screenClass} breakfastFeatured`}>

        <style dangerouslySetInnerHTML={{__html: `
          .breakfastFeatured .c-${displayList[frameCount]} img {
            opacity: 1;
          }
        `}} />

        {imageList}

      </div>
    );
  }
}
