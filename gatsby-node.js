const Promise = require('bluebird')
const path = require('path')
const get = require('lodash/get')

const { createRemoteFileNode } = require(`gatsby-source-filesystem`)

exports.createPages = ({ graphql, boundActionCreators }) => {
  const { createPage } = boundActionCreators

  return new Promise((resolve, reject) => {
    const productPageTemplate = path.resolve('src/templates/ProductPage.js')
    resolve(
      graphql(
        `
          {
            allEtsyListing {
              edges {
                node {
                  listing_id
                }
              }
            }
          }
        `
      ).then(result => {
        if (result.errors) {
          console.log(result.errors)
          reject(result.errors)
        }

        result.data.allEtsyListing.edges.forEach(edge => {
          createPage({
            path: `/product/${edge.node.listing_id}/`,
            component: productPageTemplate,
            context: {
              listing_id: edge.node.listing_id,
            },
          })
        })
      })
    )
  })
}

exports.onCreateNode = async ({ node, boundActionCreators, cache, store }) => {
  const { createNode } = boundActionCreators
  let fileNode

  if (node.internal && node.internal.type === `EtsyListing`) {
    const mainImageHref = get(node, 'MainImage.url_fullxfull')

    fileNode = await createRemoteFileNode({
      url: mainImageHref,
      store,
      cache,
      createNode,
    })
    if (fileNode && fileNode.id) node.mainImage___NODE = fileNode.id
  }
}

exports.modifyWebpackConfig = ({ config }) => {
  config.merge({
    node: { fs: 'empty' },
  })

  return config
}