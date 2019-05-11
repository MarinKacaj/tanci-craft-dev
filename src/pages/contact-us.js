import React from 'react'
import {
  Header,
  Form,
  Input,
  Button,
  Segment,
  Message,
  TextArea,
  Container,
} from 'semantic-ui-react'
import Helmet from 'react-helmet'
import { withPrefix } from 'gatsby-link'

export default class ContactUs extends React.Component {
  state = {
    email: '',
    subject: '',
    message: '',
    loading: false,
    errors: null,
  }

  _handleSubmit = e => {
    const stateCopy = this.state
    const { email, subject, message } = stateCopy

    this.setState({
      loading: true,
      errors: null,
    })

    const errors = this.state.errors
    this.setState({ loading: false })
    if (Array.isArray(errors) && errors.length > 0) {
      e.preventDefault()
    }
  }

  _handleChange = ({ target: { name, value } }) =>
    this.setState({ [name]: value })

  handleErrors = errors => {
    if (!Array.isArray(errors) && !errors.length > 0) {
      return (
        <Message
          error
          header="Sorry"
          content="Please check your message details and try again."
        />
      )
    }
    return errors.map((error, i) => (
      <Message error header={error.title} content={error.detail} key={i} />
    ))
  }

  render() {
    const { loading, errors } = this.state

    return (
      <Container text>
        <Helmet title="Contact us" />
        <Header as="h1">Send us a message</Header>
        <Form
          onSubmit={e => this._handleSubmit(e)}
          method="POST"
          action="https://formspree.io/m93_vkacaj@yahoo.com"
          loading={loading}
          error={!!errors}
        >
          {errors ? this.handleErrors(errors) : null}
          <Segment>
            <Form.Field>
              <label htmlFor="email">Email</label>
              <Input
                id="email"
                fluid
                name="email"
                type="email"
                autoFocus
                onChange={e => this._handleChange(e)}
                required
              />
            </Form.Field>

            <Form.Field>
              <label htmlFor="subject">Subject</label>
              <Input
                id="subject"
                fluid
                name="subject"
                type="text"
                required
                onChange={e => this._handleChange(e)}
              />
            </Form.Field>

            <Form.Field hidden>
              <Input
                type="hidden"
                name="_next"
                value={withPrefix('contact-thanks')}
              />
            </Form.Field>

            <Form.Field>
              <label htmlFor="message">Message</label>
              <TextArea
                id="message"
                fluid="true"
                name="message"
                type="text"
                required
                onChange={e => this._handleChange(e)}
              />
            </Form.Field>

            <Button type="submit" color="orange">
              Send
            </Button>
          </Segment>
        </Form>
      </Container>
    )
  }
}
