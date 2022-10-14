import { Component } from 'react'
import API from './index'

/**
 * Higher order Component (HoC) which looks up keys using the API and provides them
 * as props to the wrapped Component.
 *
 * 
 * Usage:
 *
 *    @neocastDataProvider([
 *      'loc_key_1',
 *      'loc_key_2'
 *    ])
 *    class MyComponentHere extends Component {
 *      ...
 *    }
 * 
 * @param {Array} keys
 * @param {String} method (location|network|player|customer)
 */
export default (keys = [], method = 'loc') => {

  if (process.env.NODE_ENV !== 'production') {
    if (!keys.length) {
      throw new Error('You must specify at least one key for this data provider.');
    }
  }

  return (ComposedComponent) => {
    class NeocastDataProvider extends Component {

      render() {
        /**
         * Converts all given keys to an object hash using the API method
         * @return {Object}
         */
        const neocastKeyData = keys.reduce((obj, key) => ({
          ...obj,
          [key]: API[method](key)
        }), {})


        return (
          <ComposedComponent
            {...this.props}
            {...neocastKeyData}
          />
        )
      }

    }

    return NeocastDataProvider
  }
}
