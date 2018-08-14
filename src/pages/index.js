/* eslint-disable */

import React from 'react'
import get from 'lodash/get'
import { Image, Header } from 'semantic-ui-react'
import Helmet from 'react-helmet'
import ProductList from '../components/ProductList'
import logo from '../images/ill-short-dark.svg'

// todo - remove
import Img from 'gatsby-image'

class StoreIndex extends React.Component {
  render() {
    const siteTitle = get(this, 'props.data.site.siteMetadata.title')
    const products = get(this, 'props.data.allMoltinProduct.edges')
    const etsyListings = get(this, 'props.data.allEtsyListing.edges')
    const filterProductsWithoutImages = products.filter(
      v => v.node.includedData.main_image
    )
    console.log({filterProductsWithoutImages: filterProductsWithoutImages})
    console.log({etsyListings: etsyListings})
    return (
      <div>
        <Helmet title={siteTitle} />
        <Header as="h3" icon textAlign="center" style={{ marginBottom: '2em' }}>
          <Header.Content style={{ width: '60%', margin: '0 auto' }}>
            <Image src={logo} alt={'logo'} />
          </Header.Content>
        </Header>
        <ProductList products={filterProductsWithoutImages} />
        <div>{etsyListings[0].node.title}</div>
        <Image>
          <Img 
            sizes={etsyListings[0].node.mainImage.childImageSharp.sizes}
            alt={etsyListings[0].node.title}
            style={{
              background: '#fafafa',
            }}
          />
        </Image>
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
    allMoltinProduct {
      edges {
        node {
          originalId
          name
          description

          background_colour
          new
          meta {
            display_price {
              with_tax {
                amount
                currency
                formatted
              }
            }
          }
          includedData {
            main_image {
              id
              link {
                href
              }
            }
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
