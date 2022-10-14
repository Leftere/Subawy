import { Component } from 'react'

/**
 * Higher order Component (HoC) which renders null initially for a certain amount of time, and then
 * will proceed to render acutal content. Used for delaying rendering panel content after a
 * panel transition (in the case where this new content should animate).
 *
 * @param {Number} delay (ms)
 */
export default (delay = 800) => {

  return (ComposedComponent) => {
    class delayedRender extends Component {

      state = {
        show: false
      }

      componentDidMount() {
        window.requestTimeout(() => {
          this.setState({ show: true })
        }, delay)
      }

      render() {
        if (!this.state.show) {
          return null;
        }

        return (
          <ComposedComponent
            {...this.props}
          />
        )
      }

    }

    return delayedRender
  }
}
