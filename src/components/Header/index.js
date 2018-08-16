import React from 'react'
import { Responsive } from 'semantic-ui-react'
import DesktopMenu from './DesktopMenu'
import MobileMenu from './MobileMenu'
import AuthContext from '../Context/AuthContext'
import CartContext from '../Context/CartContext'

class Header extends React.PureComponent {
  render() {
    return (
      <CartContext.Consumer>
        {cart => (
          <React.Fragment>
            <Responsive maxWidth={Responsive.onlyMobile.maxWidth}>
              <MobileMenu
                location={this.props.location}
                cartCount={cart.cartCount}
              />
            </Responsive>
            <Responsive minWidth={Responsive.onlyTablet.minWidth}>
              <DesktopMenu
                location={this.props.location}
                cartCount={cart.cartCount}
              />
            </Responsive>
          </React.Fragment>
        )}
      </CartContext.Consumer>
    )
  }
}

export default Header
