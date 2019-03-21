/* eslint-disable */
import React from 'react'
import Helmet from 'react-helmet'
import get from 'lodash/get'
import ProductSummary from '../components/ProductSummary'
import ProductAttributes from '../components/ProductAttributes'

class ProductPageTemplate extends React.PureComponent {
  render() {
    const productInfo = get(this, 'props.data.allEtsyListing')
    const data = productInfo.edges[0].node
    const title = data.title
    const slug = data.slug
    const description = data.description
    const image = get(data, 'MainImage.url_fullxfull')
    const sizes = get(data, 'mainImage.childImageSharp.sizes')
    const product = {
      ...data,
      id: data.originalId,
      image,
      mainImage: data.mainImage,
      header: data.title,
      sku: data.sku,
    }

    if (!sizes) return null

    return (
      <article>
        <Helmet>
          <title>{title}</title>
          <meta name="description" content={description} />
        </Helmet>
        <section>
          <ProductSummary {...product} />
        </section>
        <section>
          <ProductAttributes {...product} />
        </section>
      </article>
    )
  }
}

export default ProductPageTemplate

export const pageQuery = graphql`
  query ProductsQuery($listing_id: Int!) {
    allEtsyListing(filter: { listing_id: { eq: $listing_id } }) {
      edges {
        node {
          listing_id
          title
          description
          price
          currency_code
          sku
          slug
          materials
          processing_min
          processing_max
          url

          MainImage {
            url_fullxfull
            url_75x75
            url_170x135
            url_570xN
          }

          mainImage {
            childImageSharp {
              sizes(maxWidth: 400) {
                ...GatsbyImageSharpSizes
              }
            }
          }
        }
      }
    }
  }
`
