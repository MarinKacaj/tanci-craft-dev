import React from 'react'
import { navigateTo } from 'gatsby-link'
import {
  Header,
  Form,
  Input,
  Button,
  Segment,
  Message,
  TextArea
} from 'semantic-ui-react'
import Helmet from 'react-helmet'

export default class Login extends React.Component {
  state = {
    email: '',
    subject: '',
    message: '',
    loading: false,
    errors: null,
  }

  _handleSubmit = (e) => {
    e.preventDefault()

    const stateCopy = this.state
    const { email, subject, message } = stateCopy

    this.setState({
      loading: true,
      errors: null,
    })

    fetch(`https://formspree.io/m93_vkacaj@yahoo.com`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/x-www-form-urlencoded'
        },
        body: Object.keys(stateCopy)
          .map(k => `${encodeURIComponent(k)}=${encodeURIComponent(stateCopy[k])}`)
          .join('&')
      })
      .then(({ id, token }) => {
        navigateTo('/')
      })
      .catch(e => {
        console.log(e.message)
        this.setState({
          loading: false,
          errors: e.errors || e,
        })
      })
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
      <React.Fragment>
        <Helmet title="Contact us" />
        <Header as="h1">Send us a message</Header>
        <Form
          onSubmit={e => this._handleSubmit(e)}
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

            <Form.Field>
              <label htmlFor="message">Message</label>
              <TextArea 
                id="message"
                fluid
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
      </React.Fragment>
    )
  }
}
