import React, { Component } from 'react'
import Link, { withPrefix } from 'gatsby-link'
import {
  Menu,
  Container,
  Icon,
  Portal,
  Segment,
  Divider,
  Button,
} from 'semantic-ui-react'
import styled from 'styled-components'
import Logo from './Logo'

const StyledLink = styled(Link)`
  font-weight: bold;
  text-align: center;
  font-size: 2em;
  &:hover {
    text-decoration: underline;
  }
`

const BurgerButton = styled(Button)`
  &&& {
    font-size: 1rem;
    padding: 0.785em 1.5em;
    box-shadow: 0 0 0 1px transparent inset,
      0 0 0 0 rgba(34, 36, 38, 0.15) inset;
  }
`
const CloseButton = BurgerButton.extend`
  &&& {
    position: absolute;
    top: -4em;
    right: 0em;
    padding: 0.5em;
    font-size: 1.5em;
    width: 2em;
    height: 2em;
  }
`

const StyledSegment = styled(Segment)`
  &&& {
    position: fixed;
    top: 0%;
    left: 0vw;
    z-index: 1000;
    width: 100vw;
    height: 110vh;
  }
`

const StyledContainer = styled.div`
  &&& {
    margin-top: 6em;
    text-align: center;
    position: relative;
  }
`

const StyledDivider = styled(Divider)`
  &&& {
    margin: 2em;
  }
`

class MobileMenu extends Component {
  state = {
    open: false,
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

  handleClick = () => this.setState({ open: !this.state.open })

  handleClose = () => this.setState({ open: false })

  render() {
    const { open, activeItem } = this.state
    const { Count } = this.props

    return (
      <Menu size="huge" borderless pointing>
        <Container text>
          <Menu.Item
            as={Link}
            to="/"
            header
            active={activeItem === withPrefix('/')}
          >
            <Logo />
            Store
          </Menu.Item>
          <Menu.Menu position="right">
            <Menu.Item position="right">
              <BurgerButton
                basic
                onClick={this.handleClick}
                aria-label="Open Navigation Menu"
                autoFocus
              >
                <Icon fitted name="bars" />
              </BurgerButton>
            </Menu.Item>
          </Menu.Menu>
          <Portal closeOnEscape onClose={this.handleClose} open={open}>
            <StyledSegment className role="dialog" aria-label="Navigation Menu">
              <StyledContainer>
                <CloseButton
                  aria-label="Close Navigation"
                  basic
                  circular
                  onClick={this.handleClose}
                  autoFocus
                >
                  X
                </CloseButton>
                <StyledLink to="/" onClick={this.handleClose}>
                  Home
                </StyledLink>
                <StyledDivider />
                <StyledLink to="/blog/" onClick={this.handleClose} key={1}>
                  Blog
                </StyledLink>
                <StyledDivider key={2} />
                <StyledLink
                  to="/contact-us/"
                  onClick={this.handleClose}
                  key={3}
                >
                  Contact
                </StyledLink>
              </StyledContainer>
            </StyledSegment>
          </Portal>
        </Container>
      </Menu>
    )
  }
}

export default MobileMenu
