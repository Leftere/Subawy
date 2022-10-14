import { Component } from 'react'
import PropTypes from 'prop-types'


export default class SteakCollectionPromoPlayerContentSwitcher extends Component {
  static propTypes = {
    player: PropTypes.oneOf(['dual', 'quad'])
  }

  state = {
    Component: null
  }

  componentWillMount() {
    const fetchComponent = import('./quad')

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
