require("dotenv").config()

module.exports = {
  siteMetadata: {
    siteTitle: process.env.GATSBY_SITE_TITLE,
    siteTitleDefault: process.env.GATSBY_SITE_TITLE_TEMPLATE,
    siteUrl: process.env.GATSBY_SITE_URL,
    hrefLang: "en",
    siteDescription: process.env.GATSBY_SITE_DESCRIPTION,
    siteImage: `/${process.env.GATSBY_SITE_LOGO}`,
    googleSiteVerification: process.env.GOOGLE_SITE_VERIFICATION_TOKEN,
    twitter: process.env.TWITTER,
  },
  flags: {
    FAST_DEV: true,
  },
  plugins: [
    {
      resolve: "gatsby-source-shopify",
      options: {
        password: process.env.SHOPIFY_SHOP_PASSWORD,
        storeUrl: process.env.GATSBY_SHOPIFY_STORE_URL,
        shopifyConnections: ["collections"],
      },
    },
    "gatsby-plugin-image",
    "gatsby-plugin-sharp",
    "gatsby-transformer-sharp",
    "gatsby-plugin-react-helmet",
    "gatsby-plugin-sitemap",
    "gatsby-plugin-gatsby-cloud",
    // Add your Google Analytics ID to the .env file to enable
    // Otherwise, this plugin can be removed
    process.env.GOOGLE_ANALYTICS_ID && {
      resolve: "gatsby-plugin-google-analytics",
      options: {
        trackingId: process.env.GOOGLE_ANALYTICS_ID,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/assets/img/`,
      },
    },
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: process.env.GATSBY_SITE_TITLE,
        short_name: process.env.GATSBY_SITE_SHORT_TITLE,
        description: process.env.GATSBY_SITE_DESCRIPTION,
        start_url: `/`,
        background_color: `#000000`,
        theme_color: process.env.GATSBY_SITE_THEME_COLOR,
        display: `standalone`,
        icon: `static/${process.env.GATSBY_SITE_LOGO}`,
      },
    },
    `gatsby-plugin-offline`,
  ].filter(Boolean),
}
