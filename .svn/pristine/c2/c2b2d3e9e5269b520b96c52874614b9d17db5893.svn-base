import { Component } from 'react'
import PropTypes from 'prop-types'

import choicemarkImg from './choicemark.png'

export default class ChoicemarkFlip extends Component {
  static propTypes = {
    style: PropTypes.object,

    // Duration of the flip
    duration: PropTypes.number,

    // Number of miliseconds before `flipping in` this choicemark
    delay: PropTypes.number
  };

  static defaultProps = {
    style: {},
    duration: 1500,
    delay: 5000
  }

  render() {
    const {
      delay,
      duration,
      style
    } = this.props

    return (
      <img
        src={choicemarkImg}
        style={{
          position: 'absolute',
          height: 'auto',
          bottom: 10,
          right: 10,
          zIndex: 10,
          WebkitBackfaceVisibility: 'hidden',
          backfaceVisibility: 'hidden',
          transform: 'rotateY(-180deg)',
          animation: `translateIntoPlace ${duration}ms ease-in-out ${delay}ms forwards`,
          ...style
        }}
      />
    )
  }
}
