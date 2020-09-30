require(`dotenv`).config({
  path: `.env`,
})

const shouldAnalyseBundle = process.env.ANALYSE_BUNDLE

module.exports = {
  siteMetadata: {
    siteTitle: `Katarzyna Kmiotek`,
    siteTitleAlt: `Kat Kmiotek`,
    siteHeadline: `Personal Website`,
    siteUrl: `https://katk.dev`,
    siteDescription: `Personal website with my aricles and projects`,
    siteLanguage: `en`,
    siteImage: `/vintage.jpg`,
    author: `Kat Kmiotek`,

  },
  plugins: [
    {
      resolve: `@lekoarts/gatsby-theme-minimal-blog`,
      // See the theme's README for all available options
      options: {
        navigation: [
          {
            title: `Blog`,
            slug: `/blog`,
          },
          {
            title: `About`,
            slug: `/about`,
          },
          {
            title: `Contact`,
            slug: `/contact`,
          },
        ],
        externalLinks: [
          {
            name: `GitHub`,
            url: `https://github.com/KatKmiotek`,
          },
          {
            name: `LinkedIn`,
            url: `https://www.linkedin.com/in/katarzyna-kmiotek/`,
          },
        ],
      },
    },
    {
      resolve: `gatsby-plugin-google-analytics`,
      options: {
        trackingId: process.env.GOOGLE_ANALYTICS_TRACKING_ID || 'none',
      },
    },
    `gatsby-plugin-sitemap`,
    {
      resolve: 'gatsby-plugin-preconnect',
      options: {
        domains: ['https://katk.dev'],
      },

      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `Katarzyna Kmiotek personal website`,
        short_name: `personal website`,
        description: `Katarzyna Kmiotek personal website`,
        start_url: `/`,
        background_color: `#fff`,
        theme_color: `#6B46C1`,
        display: `standalone`,
        icons: [
          {
            src: `/home_office.jpg`,
            sizes: `192x192`,
            type: `image/jpg`,
          },
          {
            src: `/home_office.jpg`,
            sizes: `512x512`,
            type: `image/jpg`,
          },
        ],
      },
    },
    `gatsby-plugin-offline`,
    `gatsby-plugin-netlify`,
    `gatsby-plugin-preact`,
    shouldAnalyseBundle && {
      resolve: `gatsby-plugin-webpack-bundle-analyser-v2`,
      options: {
        analyzerMode: `static`,
        reportFilename: `_bundle.html`,
        openAnalyzer: false,
      },
    },
  ].filter(Boolean),
}
