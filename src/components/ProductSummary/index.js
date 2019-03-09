import React from 'react'
import Img from 'gatsby-image'

import { Item, Label } from 'semantic-ui-react'

export default ({
  listing_id,
  title,
  price,
  currency_code,
  sku,
  url,
  mainImage,
}) => (
  <Item.Group>
    <Item style={{ alignItems: 'center' }}>
      <Item.Image size="medium">
        <Img
          style={{ width: '250px' }}
          sizes={mainImage.childImageSharp.sizes}
          alt={title}
        />
      </Item.Image>
      <Item.Content>
        <Item.Header>{title}</Item.Header>
        <Item.Description>
          <p>
            {price} {currency_code}
          </p>
          <Label>SKU: {sku}</Label>
        </Item.Description>
        <Item.Extra>
          <a target="_blank" href={url}>
            Buy on Etsy
          </a>
        </Item.Extra>
      </Item.Content>
    </Item>
  </Item.Group>
)
