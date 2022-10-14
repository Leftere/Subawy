import { Component } from 'react'
import PropTypes from 'prop-types'


export default class ItalianCollectionPromoPlayerContentSwitcher extends Component {
  static propTypes = {
    player: PropTypes.oneOf(['dual', 'quad'])
  }

  state = {
    Component: null
  }

  componentWillMount() {
    const fetchComponent = (this.props.player === 'quad')
      ? import('./quad')
      : import('./dual')

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
