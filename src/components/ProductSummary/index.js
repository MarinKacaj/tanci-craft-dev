import React from 'react'
import Img from 'gatsby-image'

import { Item, Label } from 'semantic-ui-react'

import AddToCart from '../AddToCart'

export default ({ listing_id, title, price, currency_code, sku, mainImage }) => (
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
          <p>{price} {currency_code}</p>
          <Label>SKU: {sku}</Label>
        </Item.Description>
        <Item.Extra>
          <AddToCart productId={id} />
        </Item.Extra>
      </Item.Content>
    </Item>
  </Item.Group>
)
