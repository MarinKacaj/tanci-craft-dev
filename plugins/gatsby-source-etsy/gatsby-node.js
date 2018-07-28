const crypto = require('crypto')
const fetch = require('node-fetch')
const queryString = require('query-string')

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
  const apiOptions = queryString.stringify(configOptions)

  // Join apiOptions with the Etsy API URL
  const apiUrl = `https://openapi.etsy.com/v2/shops/tancicraftdev/listings/active?${apiOptions}&include_private=true`

  // Gatsby expects sourceNodes to return a promise
  return (
    // Fetch a response from the apiUrl
    fetch(apiUrl)
      // Parse the response as JSON
      .then(response => response.json())
      // Process the JSON data into a node
      .then(data => {
        // dummy
        data.results = [{
          listing_id: 1234,
          state: 'active',
          category_id: 567,
          title: 'Test Listing 1',
          description: 'This is test listing 1',
          price: '5',
          currency_code: 'EUR',
          quantity: 1,
          sku: 'abcdef',
          MainImage: {
            url_fullxfull: 'https://img2.cgtrader.com/items/203614/f6eb4f9155/large/mig-29-fulcrum-russian-airforce-3d-model-low-poly-max-obj-c4d.jpg',
            url_75x75: 'https://img2.cgtrader.com/items/203614/f6eb4f9155/large/mig-29-fulcrum-russian-airforce-3d-model-low-poly-max-obj-c4d.jpg',
            url_170x135: 'https://img2.cgtrader.com/items/203614/f6eb4f9155/large/mig-29-fulcrum-russian-airforce-3d-model-low-poly-max-obj-c4d.jpg',
            url_570xN: 'https://img2.cgtrader.com/items/203614/f6eb4f9155/large/mig-29-fulcrum-russian-airforce-3d-model-low-poly-max-obj-c4d.jpg'
          }
        }]
        data.count = data.results.length
        // For each query result (or 'hit')
        data.results.forEach(etsyListing => {
          // Process the etsy listing data to match the structure of a Gatsby node
          const nodeData = processEtsyListing(etsyListing)
          // Use Gatsby's createNode helper to create a node from the node data
          createNode(nodeData)
        })
      })
  )
}
