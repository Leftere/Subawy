import { Component } from 'react'
import Odometer from 'react-odometerjs'
//import neocastDataProvider from 'api/neocastDataProvider'

import 'gsap'
import 'gsap-then'

import frame1 from './frame1.jpg'
import frame3 from './frame3.jpg'

import plate from './plate.png'

import './styles.css'
import './odoTheme.css'

export default class w8wsdDayOf extends Component {

  constructor(props) {

    let store = {
      count: -1,
      lastUpdate: null,
    }

    if (localStorage)
    {
      let ls = JSON.parse(localStorage.getItem("wsdw8"))
      //console.table(ls)

      if (ls) {
        store = ls
      } else {
        localStorage.setItem("wsdw8", store)
      }

    } else
    {
      // Well uh...
      console.warn("No support for localStorage")
    }

    super(props)
    this.state = store
  }

  getRandomInt(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }

  getSubData() {
    return {
      count: parseInt(NEOCAST.data.customer("wsd17_unitedstates")),
      lastUpdate: new Date(NEOCAST.data.customer("wsd17_accurateAsOf"))
    }
  }

  componentWillMount() {

    let update
    update = this.getSubData()

    this.setState(update)

    if (localStorage) localStorage.setItem("wsdw8", JSON.stringify(update))
  }

  componentDidMount() {

    let transitionTime = 4;
    let master = new TimelineMax()
    let panel1 = new TimelineLite()
    let deltaTime = new Date().getTime() - this.state.lastUpdate
    let deltaMins = deltaTime / 1000 / 60

    console.log(deltaMins)

    panel1
      .set(this.Frame1, {opacity: 1})
      .set(this.Frame2, {opacity: 0})
      .set(this.Frame3, {opacity: 0})
      .set(this.Count, {opacity: 0, transform: 'scale(0.8)'})
      .set(this.Subtitle, {opacity: 0})
      .set(this.Plate, {opacity: 0});

    if ( this.state.count > 1000 && deltaMins < 30) {

      panel1.to(this.Frame2, 1, {opacity: 1}, "+=" + transitionTime)
        .add( () => {
            console.log(this.state);
            let test = {
              count: this.state.count + 40,
              lastUpdate: this.state.lastUpdate
            }

            this.setState(test)
         }, "-=0.5")
        .to(this.Count, 0.5, {opacity: 1, transform: 'scale(1)'}, "-=0.5")
        .to(this.Subtitle, 0.5, {opacity: 1}, "-=0.3")
        .to(this.Plate, 0.5, {opacity: 1}, "-=0.3")
    }
    
    panel1.to(this.Frame3, 0.5, {opacity: 1}, "+=" + transitionTime)

    master
      .add(panel1)


  }

	render() {

    let odometerOptions = { 
      format: '(,ddd)', 
      duration: 25000 
    }

		return (
			<div className='c-w8wsdDayOf'>

        <div className='frame1' ref={(node) => this.Frame1 = node }>
          <img src={frame1} />
        </div>

        <div className='frame2' ref={(node) => this.Frame2 = node }>
          <span className='count' ref={(node) => this.Count = node }><Odometer value={this.state.count} options={odometerOptions} /></span>
          <span className='subtitle' ref={(node) => this.Subtitle = node }>meals donated, thanks to you!</span>
          <img src={plate} className='plate' ref={(node) => this.Plate = node }/>
        </div>

        <div className='frame3' ref={(node) => this.Frame3 = node }>
          <img src={frame3} />
        </div>

			</div>
		)
	}
}
