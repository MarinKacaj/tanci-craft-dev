const crypto = require('crypto')
const fetch = require('node-fetch')
const queryString = require('query-string')
require("dotenv").config({
  path: `.env.${process.env.NODE_ENV}`,
})

// https://www.gatsbyjs.org/docs/source-plugin-tutorial/

exports.sourceNodes = (
  { boundActionCreators, createNodeId },
  configOptions
) => {
  const { createNode } = boundActionCreators

  // Gatsby adds a configOption that's not needed for this plugin, delete it
  delete configOptions.plugins

  const processEtsyListing = etsyListing => {
    const nodeId = createNodeId(`etsy-listing-${etsyListing.listing_id}`)
    const nodeContent = JSON.stringify(etsyListing)
    const nodeContentDigest = crypto
      .createHash('md5')
      .update(nodeContent)
      .digest('hex')

    const nodeData = Object.assign({}, etsyListing, {
      id: nodeId,
      originalId: etsyListing.listing_id,
      parent: null,
      children: [],
      internal: {
        type: `EtsyListing`,
        content: nodeContent,
        contentDigest: nodeContentDigest,
      },
    })

    return nodeData
  }

  // Convert the options object into a query string
  // const apiOptions = queryString.stringify(configOptions)
  const apiKey = process.env.REACT_APP_ETSY_API_KEY

  // Join apiOptions with the Etsy API URL
  const apiUrl = `https://openapi.etsy.com/v2/shops/TanciCraft/listings/active?includes=["MainImage"]&api_key=${apiKey}`

  // Gatsby expects sourceNodes to return a promise
  return (
    // Fetch a response from the apiUrl
    fetch(apiUrl)
      // Parse the response as JSON
      .then(response => response.json())
      // Process the JSON data into a node
      .then(data => {
        data.results.forEach(etsyListing => {
          // Process the etsy listing data to match the structure of a Gatsby node
          const nodeData = processEtsyListing(etsyListing)
          // Use Gatsby's createNode helper to create a node from the node data
          createNode(nodeData)
        })
      })
  )
}
