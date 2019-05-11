import React from 'react'
import { Header, Container } from 'semantic-ui-react'
import Helmet from 'react-helmet'
import Link from 'gatsby-link'

export default class ContactThanks extends React.Component {
  render() {
    return (
      <Containter text>
        <Helmet title="Contact us" />
        <Header as="h1">Message sent successfully</Header>
        <p>Thank you! Your message has been received. We will reply shortly</p>
        <p>
          <Link to="/">Back to home page</Link>
        </p>
      </Container>
    )
  }
}
