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
            allMoltinProduct {
              edges {
                node {
                  originalId
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

        result.data.allMoltinProduct.edges.forEach(edge => {
          createPage({
            path: `/product/${edge.node.originalId}/`,
            component: productPageTemplate,
            context: {
              originalId: edge.node.originalId,
            },
          })
        })
      })
    )
  })
}

const internalTypeToMainImage = {
  MoltinProduct: 'includedData.main_image.link.href',
  EtsyListing: 'MainImage.url_fullxfull',
}

exports.onCreateNode = async ({ node, boundActionCreators, cache, store }) => {
  const { createNode } = boundActionCreators
  let fileNode

  if (node.internal) {
    const mainImagePath = internalTypeToMainImage[node.internal.type]
    if (mainImagePath) {
      const mainImageHref = get(node, mainImagePath)

      fileNode = await createRemoteFileNode({
        url: mainImageHref,
        store,
        cache,
        createNode,
      })
      if (fileNode && fileNode.id) node.mainImage___NODE = fileNode.id
    }
  }
}

exports.modifyWebpackConfig = ({ config }) => {
  config.merge({
    node: { fs: 'empty' },
  })

  return config
}
