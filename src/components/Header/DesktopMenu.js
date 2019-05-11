import React, { Component } from 'react'
import Link, { withPrefix } from 'gatsby-link'
import { Menu, Container, Icon } from 'semantic-ui-react'
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
    return (
      <Menu size="huge" borderless pointing>
        <Container text>
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
              to="/blog/"
              active={activeItem === withPrefix('/blog/')}
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
          </Menu.Menu>
        </Container>
      </Menu>
    )
  }
}

export default DesktopMenu
