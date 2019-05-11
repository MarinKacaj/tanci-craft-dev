/* eslint-disable */

import React from 'react'
import get from 'lodash/get'
import { Image, Header, Container } from 'semantic-ui-react'
import Helmet from 'react-helmet'
import ProductList from '../components/ProductList'
import PostList from '../components/PostList'
import SiteHead from '../components/SiteHead'
import logo from '../images/ill-short-dark.svg'

class PostIndex extends React.Component {
  render() {
    const siteTitle = get(this, 'props.data.site.siteMetadata.title')
    const posts = get(this, 'props.data.allMarkdownRemark.edges')
    return (
      <Container text>
        <Helmet title={siteTitle} />
        <SiteHead />
        <PostList posts={posts} />
      </Container>
    )
  }
}

export default PostIndex

export const pageQuery = graphql`
  query PostsQuery {
    site {
      siteMetadata {
        title
      }
    }
    allMarkdownRemark(sort: { fields: [frontmatter___date], order: DESC }) {
      edges {
        node {
          frontmatter {
            path
            date(formatString: "Do MMMM YYYY")
            title
          }
          excerpt(pruneLength: 235)
          html
        }
      }
    }
}
`
