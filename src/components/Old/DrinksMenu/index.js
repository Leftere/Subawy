import { Component } from 'react'

import API from 'api'
import neocastDataProvider from 'api/neocastDataProvider'

import drinksData from './data'

import LineItem from 'components/LineItem'

import './styles.css'


@neocastDataProvider([
  // Fountain sizes
  'drinks_fountain_price_21oz',
  'drinks_fountain_price_30oz',
  'drinks_fountain_price_40oz',

  // Bottled
  'serves_bottled_drinks',
  'drinks_bottle_price',

  // Second column
  'drinks_milk_price',

  // Local options
  'drinks_local_option_one',
  'drinks_local_option_two',
  'drinks_local_option_three',
  'drinks_local_option_four'
])
export default class DrinksMenu extends Component {

  constructor(props) {
    super(props)

    const {
      drinks_local_option_one,
      drinks_local_option_two,
      drinks_local_option_three,
      drinks_local_option_four
    } = this.props;

    /**
     * Check if the price for 21 oz is valid, otherwise don't show it
     */
    if (API.v.loc('drinks_fountain_price_21oz').isValid) {
      this.has21oz = true
    }

    /**
     * Check to see if this store carries 40 oz drinks
     */
    if (API.v.loc('drinks_fountain_price_40oz').isValid) {
      this.has40oz = true
    }

    /**
     * Local options
     */
    // Option 1
    this.localOption1 = API.loc(drinks_local_option_one);
    const localOption1Data = drinksData.find((d) => d.apiMap === drinks_local_option_one)

    if (this.localOption1 && localOption1Data) {
      this.localOption1 = localOption1Data.label
      this.local1Cal = localOption1Data.sizes[0].calories || 0
      this.local1Price = localOption1Data.sizes[0].price
    }

    // Option 2
    this.localOption2 = API.loc(drinks_local_option_two);
    const localOption2Data = drinksData.find((d) => d.apiMap === drinks_local_option_two)

    if (this.localOption2 && localOption2Data) {
      this.localOption2 = localOption2Data.label
      this.local2Cal = localOption2Data.sizes[0].calories || 0
      this.local2Price = localOption2Data.sizes[0].price
    }

    // Option 3
    this.localOption3 = API.loc(drinks_local_option_three);
    const localOption3Data = drinksData.find((d) => d.apiMap === drinks_local_option_three)

    if (this.localOption3 && localOption3Data) {
      this.localOption3 = localOption3Data.label
      this.local3Cal = localOption3Data.sizes[0].calories || 0
      this.local3Price = localOption3Data.sizes[0].price
    }

    // Option 4
    this.localOption4 = API.loc(drinks_local_option_four);
    const localOption4Data = drinksData.find((d) => d.apiMap === drinks_local_option_four)

    if (this.localOption4 && localOption4Data) {
      this.localOption4 = localOption4Data.label
      this.local4Cal = localOption4Data.sizes[0].calories || 0
      this.local4Price = localOption4Data.sizes[0].price
    }
  }


  render() {
    const {
      drinks_fountain_price_21oz,
      drinks_fountain_price_30oz,
      drinks_fountain_price_40oz,

      serves_bottled_drinks,
      drinks_bottle_price,

      drinks_milk_price
    } = this.props;


    return (
      <div className='DrinksMenu c-Menus'>

        <div className='c-Menus_header'>
          Drinks
        </div>
        
        <div className='l-region l-flush l-inline' style={{ width: '50%' }}>
          <div className='c-Menus_title'>
            Fountain
          </div>

          {/* Fountain drinks */}
          <div className='l-pad-lt-md l-pad-top-sm'>
            {this.has21oz &&
              <LineItem
                name={'21 oz.'}
                calories={'0-310'}
                price6={drinks_fountain_price_21oz}
              />
            }

            <LineItem
              name={'30 oz.'}
              calories={'0-450'}
              price6={drinks_fountain_price_30oz}
            />

            {this.has40oz &&
              <LineItem
                name={'40 oz.'}
                calories={'0-640'}
                price6={drinks_fountain_price_40oz}
              />
            }
          </div>

          {/* Bottled */}
          {serves_bottled_drinks &&
            <div>
              <LineItem
                name={'Bottled'}
                calories={'0-300'}
                price6={drinks_bottle_price}
                priceStyle={{
                  marginLeft: 12
                }}
              />
            </div>
          }

        </div>
        
        {/* Additional drinks (local) */}
        <div className='l-region l-flush l-inline localDrinks'>

          <LineItem
            name={'Milk'}
            calories={'100/200'}
            price6={drinks_milk_price}
            expand={false}
          />

          {this.localOption1 &&
            <LineItem
              name={this.localOption1}
              calories={this.local1Cal}
              hideCalories={!this.local1Cal}
              price6={this.local1Price}
              expand={false}
            />
          }

          {this.localOption2 &&
            <LineItem
              name={this.localOption2}
              calories={this.local2Cal}
              hideCalories={!this.local2Cal}
              price6={this.local2Price}
              expand={false}
            />
          }

          {this.localOption3 &&
            <LineItem
              name={this.localOption3}
              calories={this.local3Cal}
              hideCalories={!this.local3Cal}
              price6={this.local3Price}
              expand={false}
            />
          }

          {this.localOption4 &&
            <LineItem
              name={this.localOption4}
              calories={this.local4Cal}
              hideCalories={!this.local4Cal}
              price6={this.local4Price}
              expand={false}
            />
          }

        </div>

      </div>
    )
  }
}
