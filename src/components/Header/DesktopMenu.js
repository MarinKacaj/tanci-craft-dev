import React, { Component } from 'react'
import Link, { withPrefix } from 'gatsby-link'
import { Menu, Container, Icon } from 'semantic-ui-react'
import ShoppingCartIcon from './ShoppingCartIcon'
import Logo from './Logo'

class DesktopMenu extends Component {
  state = {
    activeItem: this.props.location.pathname,
  }

  componentWillReceiveProps(nextProps) {
    const nextPathname = nextProps.location.pathname
    const currentPathname = this.props.location.pathname

    if (nextPathname !== currentPathname) {
      this.setState({
        activeItem: nextPathname,
      })
    }
  }

  render() {
    const { activeItem } = this.state
    const { cartCount } = this.props
    return (
      <Menu size="huge" borderless pointing>
        <Container>
          <Menu.Item
            active={activeItem === withPrefix('/')}
            as={Link}
            to="/"
            header
          >
            <Logo />
            Tanci Craft
          </Menu.Item>
          <Menu.Menu position="right">
            <Menu.Item
              as={Link}
              to="/register/"
              active={activeItem === withPrefix('/register/')}
            >
              Blog
            </Menu.Item>
            <Menu.Item
              as={Link}
              to="/contact-us/"
              active={activeItem === withPrefix('/contact-us/')}
            >
              Contact
            </Menu.Item>
            <Menu.Item
              as={Link}
              to="/cart/"
              active={activeItem === withPrefix('/cart/')}
            >
              <ShoppingCartIcon cartCount={cartCount} name="Cart" />
            </Menu.Item>
          </Menu.Menu>
        </Container>
      </Menu>
    )
  }
}

export default DesktopMenu
