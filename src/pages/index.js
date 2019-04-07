/* eslint-disable */

import React from 'react'
import get from 'lodash/get'
import { Image, Header } from 'semantic-ui-react'
import Helmet from 'react-helmet'
import ProductList from '../components/ProductList'
import logo from '../images/heart.png'

class StoreIndex extends React.Component {
  render() {
    const siteTitle = get(this, 'props.data.site.siteMetadata.title')
    const etsyListings = get(this, 'props.data.allEtsyListing.edges')
    return (
      <div>
        <Helmet title={siteTitle} />
        <Header as="h3" icon textAlign="center" style={{ marginBottom: '2em' }}>
          <Header.Content style={{ width: '100%', margin: '0 auto' }}>
            <p style={{ fontSize: '4em', letterSpacing: '0.3em' }}>I <Image style={{ height: '100%' }} src={logo} alt={'logo'} /> HANDMADE</p>
          </Header.Content>
        </Header>
        <ProductList products={etsyListings} />
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
          sku

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
