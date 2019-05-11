/* eslint-disable */

import React from 'react'
import get from 'lodash/get'
import { Image, Header, Container } from 'semantic-ui-react'
import Helmet from 'react-helmet'
import ProductList from '../components/ProductList'
import SiteHead from '../components/SiteHead'
import logo from '../images/heart-red.png'

class StoreIndex extends React.Component {
  render() {
    const siteTitle = get(this, 'props.data.site.siteMetadata.title')
    const etsyListings = get(this, 'props.data.allEtsyListing.edges')
    return (
      <div>
        <Helmet title={siteTitle} />
        <SiteHead />
        <Container text>
            <ProductList products={etsyListings} />
        </Container>
      </div>
    )
  }
}

export default StoreIndex

export const pageQuery = graphql`
  query IndexQuery {
    site {
      siteMetadata {
        title
      }
    }
    allEtsyListing {
      edges {
        node {
          listing_id
          title
          description
          price
          currency_code
          slug

          MainImage {
            url_fullxfull
            url_75x75
            url_170x135
            url_570xN
          }

          mainImage {
            childImageSharp {
              sizes(maxWidth: 600) {
                ...GatsbyImageSharpSizes
              }
            }
          }
        }
      }
    }
  }
`
