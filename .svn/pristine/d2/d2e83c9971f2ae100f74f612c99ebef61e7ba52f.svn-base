import isNil from 'lodash/isNil'

import transition from './transition'


export default (frames, onComplete) => {
  const tl = {
    tl         : frames,
    current    : 0,
    onComplete : (isNil(onComplete) ? false : onComplete),

    _play(tl, current, frames, next, onComplete, complete) {
      if (current < frames) {
        Promise.all( tl[current].map(frame => transition(frame)) )
          .then(() => next(tl, current + 1, frames, next, onComplete, complete))
      } else {
        if (onComplete) onComplete(tl)
        complete(tl)
      }
    },

    play() {
      const { tl, _play, onComplete } = this

      return new Promise((resolve) =>
        _play(tl, 0, tl.length, _play, onComplete, resolve))
    }
  }

  return tl
}
