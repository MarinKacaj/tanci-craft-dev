module.exports = {
  siteMetadata: {
    title: 'Tanci Craft',
    author: 'Marin Kacaj',
    description: 'Handicraft traditional products from Albania and Greece',
    siteUrl: 'http://tanci-craft-dev.surge.sh',
  },
  pathPrefix: '/gatsby-starter-ecommerce',
  plugins: [
    {
      resolve: 'gatsby-source-moltin',
      options: {
        key:
          process.env.MOLTIN_CLIENT_ID ||
          'j6hSilXRQfxKohTndUuVrErLcSJWP15P347L6Im0M4',
        products: ['main_image', 'brands', 'files', 'categories'],
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        path: `${__dirname}/src/pages`,
        name: 'pages',
      },
    },
    {
      resolve: 'gatsby-source-facebook',
      options: {
        key: 'EAAPaeSmp1x8BAMNjFCZBZA6XyUUO9d0Og3iZAM9Pqbz9DYJQYtz3ZBkPMCHBkAcux0E4XfIZBZCl7BjR3h8TUWWcKQTZBw8VTP0DGZBGZBJ1hr5piRBYn3EDiiE40LHohMKgTZAmk80zKeHyvAPr8kWQWT95YVg0IC4rhgHKRlfXYeKY6UNgcX0Y0iSDLiYFAEn0oZD',
        places: ['marin.kacaj']
      }
    },
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        name: 'img',
        path: `${__dirname}/src/images`,
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-plugin-google-analytics`,
      options: {
        // trackingId: `ADD YOUR TRACKING ID HERE`,
      },
    },
    {
      resolve: `gatsby-plugin-nprogress`,
      options: {
        // Setting a color is optional.
        color: `tomato`,
        // Disable the loading spinner.
        showSpinner: false,
      },
    },
    'gatsby-plugin-styled-components',
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: 'Gatsby Shop App',
        short_name: 'Shop App',
        start_url: '/gatsby-starter-ecommerce/',
        background_color: '#ffffff',
        theme_color: '#ffffff',
        display: 'minimal-ui',
        icons: [
          {
            src: `/favicons/android-chrome-192x192.png`,
            sizes: `192x192`,
            type: `image/png`,
          },
          {
            src: `/favicons/android-chrome-512x512.png`,
            sizes: `512x512`,
            type: `image/png`,
          },
        ],
      },
    },
    `gatsby-plugin-offline`,
    `gatsby-plugin-react-helmet`,
    'gatsby-plugin-react-next',
  ],
}
