import { Component } from 'react'
import PropTypes from 'prop-types'

/**
 * Renders a given (async) quad or dual <Component /> depending on
 * player prop.
 */
export default class QuadOrDualComponent extends Component {
  static propTypes = {
    player: PropTypes.oneOf(['dual', 'quad']).isRequired,
    quad: PropTypes.object.isRequired,
    dual: PropTypes.object.isRequired
  }

  state = {
    Component: null
  }

  componentWillMount() {
    const {
      quad,
      dual,
      player
    } = this.props

    const fetchComponent = (player === 'quad')
      ? quad
      : dual

    fetchComponent.then((module) => {
      this.setState({
        Component: module.default
      })
    })
  }

  render() {
    const { Component } = this.state

    if (!Component) {
      return null
    }

    return <Component />
  }
}
