import React from 'react'
import Helmet from 'react-helmet'
import CartItemList from '../components/CartItemList/'
import CartSummary from '../components/CartSummary/'
import CartContext from '../components/Context/CartContext'

export default class Cart extends React.Component {
  state = {
    items: [],
    loading: true,
    completed: false,
  }

  componentDidMount() {}

  _handleCheckout = data => {
    const cartId = localStorage.getItem('mcart')
    const customerId = localStorage.getItem('mcustomer')

    const {
      id: token,
      email,
      card: {
        name,
        address_line1: line_1,
        address_city: city,
        address_country: country,
        address_state: county,
        address_zip: postcode,
      },
    } = data

    const customer = { name, email } // token ? customerId : { name, email };

    const address = {
      first_name: name.split(' ')[0],
      last_name: name.split(' ')[1],
      line_1,
      city,
      county,
      country,
      postcode,
    }
  }

  _handleRemoveFromCart = (itemId, context) => {
    const { cartId } = this.state
  }

  render() {
    const { meta, ...rest } = this.state
    const { loading } = rest
    return (
      <div>
        <Helmet title="Cart" />
        <CartContext.Consumer>
          {context => (
            <CartItemList
              {...rest}
              removeFromCart={item => this._handleRemoveFromCart(item, context)}
            />
          )}
        </CartContext.Consumer>
        {!loading &&
          !rest.completed && (
            <CartSummary {...meta} handleCheckout={this._handleCheckout} />
          )}
      </div>
    )
  }
}
