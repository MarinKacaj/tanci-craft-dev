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
      resolve: 'gatsby-source-etsy',
      options: {
        api_key: '5r5zqtaejknkt5yuwkumw5y3',
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
      resolve: 'gatsby-source-filesystem',
      options: {
        name: 'img',
        path: `${__dirname}/src/images`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        path: `${__dirname}/blog`,
        name: 'markdown-pages',
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    `gatsby-transformer-remark`,
    `gatsby-plugin-netlify-cms`,
    {
      resolve: `gatsby-plugin-google-analytics`,
      options: {
        trackingId: `UA-137861858-1`,
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

/*
{
      resolve: 'gatsby-source-facebook',
      options: {
        key: 'EAAPaeSmp1x8BAGGyHaLEL3eXuZCrS77YdXgC0t6GTJJcZCIrBmHmKyO3k5rUMC2A3WfhWezgaJHq62Y7WA68QXJZCUXiANGP8NZAXTyAb3kJC2sZCDWCHfFn6rh5ZBH6xijNF9HCh73diDztCDdpEB2b3VB0UJ23nwIlIJtFKAkxpZALH9bI6axcRb0xDvkmbkZD',
        places: ['1862596497096207', 'posts']
      }
    },
    */
