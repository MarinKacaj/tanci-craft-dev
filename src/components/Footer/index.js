import React from 'react'
import Link from 'gatsby-link'
import { Segment, Container, Grid, List, Header } from 'semantic-ui-react'

const Footer = () => (
  <Segment
    vertical
    style={{
      padding: '4em 0em',
      marginTop: '3em',
      borderTop: '1px solid #f2f2f2',
    }}
  >
    <Container text>
      <Grid stackable>
        <Grid.Row>
          <Grid.Column width={4}>
            <Header as="h4" content="About" />
            <List>
              <List.Item as={Link} to="/privacy/">
                Privacy
              </List.Item>
              <List.Item as={Link} to="/terms/">
                Terms
              </List.Item>
            </List>
          </Grid.Column>
          <Grid.Column width={5}>
            <Header as="h4" content="Services" />
            <List>
              <List.Item as={Link} to="/">
                Our Products
              </List.Item>
              <List.Item as={Link} to="/gatsbyimage/">
                Gatsby Image Example
              </List.Item>
            </List>
          </Grid.Column>
          <Grid.Column width={7}>
            <Header as="h4">Tanci Craft on Social Media</Header>
            <p>
              Follow us on social media
            </p>
            <List horizontal>
              <List.Item
                icon="pinterest"
                content={
                  <a href="https://gr.pinterest.com/kostancadule/" alt="pinterest link">
                    Pinterest
                  </a>
                }
              />
              <List.Item
                icon="instagram"
                content={
                  <a href="https://www.instagram.com/tanci_craft/" alt="instagram link">
                    Instagram
                  </a>
                }
              />
              <List.Item
                icon="facebook"
                content={
                  <a href="https://www.facebook.com/tanci.craft.7" alt="facebook link">
                    Facebook
                  </a>
                }
              />
              <List.Item
                icon="twitter"
                content={
                  <a href="https://twitter.com/TanciCraft5" alt="twitter link">
                    Twitter
                  </a>
                }
              />
              <List.Item
                icon="mail"
                content={
                  <a href="mailto:ildadule@gmail.com" alt="email link">
                    Email
                  </a>
                }
              />
            </List>
          </Grid.Column>
        </Grid.Row>
      </Grid>
    </Container>
  </Segment>
)

export default Footer
