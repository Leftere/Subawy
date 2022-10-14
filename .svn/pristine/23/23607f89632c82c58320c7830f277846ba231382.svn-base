import { Component } from 'react'
import neocastDataProvider from 'api/neocastDataProvider'
import coke from './coke.jpg'
import noCoke from './no-coke.jpg'

@neocastDataProvider([
  'serves_coca_cola'
])
export default class CompleteYourMealStaticW4 extends Component {

  constructor(props) {
    super(props)

    const {
      serves_coca_cola,
    } = this.props;

  }


  render() {
    return (
      <div className='c-Promotion'>

        {this.props.serves_coca_cola &&
          <img className='c-Promotion_background' src={coke} />
        }

        {!this.props.serves_coca_cola &&
          <img className='c-Promotion_background' src={noCoke} />
        }
        
      </div>
    )
  }
}

