import React from 'react'
import { Card, Image, Label } from 'semantic-ui-react'
import Img from 'gatsby-image'
import Link from 'gatsby-link'

const mapProductsToItems = products =>
  products.map(
    ({ node: { title, listing_id, slug, price, currency_code, mainImage } }) => {
      const formattedPrice = `${price} ${currency_code}`
      return {
        as: Link,
        to: `/product/${listing_id}/${slug}/`,
        childKey: listing_id,
        image: (
          <Image>
            <Img
              sizes={{...mainImage.childImageSharp.sizes, aspectRatio: 1 }}
              alt={title}
              style={{
                background: '#fafafa',
              }}
            />
          </Image>
        ),
        header: title,
        meta: (
          <Card.Meta style={{ color: 'dimgray' }}>
            {price} {currency_code}
          </Card.Meta>
        ),
      }
    }
  )

export default ({ products }) => (
  <Card.Group items={mapProductsToItems(products)} itemsPerRow={2} stackable />
)
