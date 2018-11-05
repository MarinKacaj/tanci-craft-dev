import React from 'react'
import { Card, Image, Label } from 'semantic-ui-react'
import Img from 'gatsby-image'
import Link from 'gatsby-link'

const mapPostsToItems = posts =>
  posts.map(
    ({ node: { frontmatter, excerpt } }) => {
      return {
        as: Link,
        to: frontmatter.path,
        header: frontmatter.title,
        meta: (
          <Card.Meta style={{ color: 'dimgray' }}>
            {excerpt}
          </Card.Meta>
        ),
      }
    }
  )

export default ({ posts }) => (
  <Card.Group items={mapPostsToItems(posts)} itemsPerRow={1} stackable />
)