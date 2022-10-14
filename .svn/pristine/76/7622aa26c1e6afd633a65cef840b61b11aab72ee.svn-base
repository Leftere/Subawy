/*/
* * * * * * * * * * *
🖥    S u b w a y  🖥
🖥 D i g i t a l   🖥
🖥    M e n u      🖥
🖥       B o a r d 🖥
* * * * * * * * * * *
/*/

// Data
import 'neocast/local-data'
import 'neocast/neocast-data'

// Polyfills
import 'animations/request-timeout'

// Dependencies
import moment from 'moment'
import { render } from 'react-dom'

import MenuBoard from 'components/MenuBoard'
import './index.css'

// Dev
import Clock from 'dev/Clock'
//import 'styles/dev.css'


// TEST STUFFS
// import 'gsap'
// import 'gsap-then'
// import 'styles/2019.css'
// import { Component } from 'react'
//import TestImage from '../test.png'

const devStartTime = moment('10:59:30', 'hh:mm:ss') // Time for testing
let   devContent   = null
let   entryPoint   = document.getElementById('app')

/**
 * Dev content panel used for debugging. This should ONLY be available when you run `yarn push` with
 * the update option, which pushes directly the player in the JM office.
 */

if (process.env.SHOW_DEV_INFO === 'true') {
  devContent = (
    <div className='dev-user-info'>
      <div>
        Pushed by: {process.env.USER} @: {process.env.BUILD_TIME}
      </div>

      <Clock startTime={devStartTime} />
    </div>
  )
}

let main = null;



  // TESTING
  // render(
  //   <div>
  //     <h1>Testing</h1>
  //     <h2>Testing</h2>
  //     <h3 ref={(node) => main = node} >Testing</h3>

  //   </div>
  //   ,
  //   entryPoint
  // )


      // new TimelineMax({ delay: 0.5, repeat:-1 })
      //   .set(main, { opacity: 0 })
      //   .set(main, {  opacity: 1, delay: 1 })
      //   .set(main, {  opacity: 0, delay: 1 })

      //   TweenLite.defaultEase = Linear.easeNone;

// Keep me
render(
  <div>
    {devContent}
    <MenuBoard />

  </div>
  ,
  entryPoint
)
