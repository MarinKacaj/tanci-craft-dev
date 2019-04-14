import React from 'react'
import Img from 'gatsby-image'

import { Item, Label } from 'semantic-ui-react'

export default ({
  listing_id,
  title,
  price,
  currency_code,
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
        </Item.Description>
        <Item.Extra>
	  <button class="ui orange button" role="button">
	    <i aria-hidden="true" class="plus cart icon" />
	    <a href={url} target="_blank" style={{ color: 'white' }}>
              Buy on Etsy
	    </a>
	  </button>
        </Item.Extra>
      </Item.Content>
    </Item>
  </Item.Group>
)
