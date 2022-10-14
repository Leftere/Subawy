import 'neocast/local-data'

if (!window.NEOCAST) {
  require('neocast/neocast-data')
}

/**
 * requestTimeout polyfill
 */
import 'animations/request-timeout'
import { render } from 'react-dom'
import './index.css'


import('components/MenuBoard')
  .then((module) => {
    const MenuBoard = module.default

    render(<MenuBoard />,
      document.getElementById('app')
    )
  })
