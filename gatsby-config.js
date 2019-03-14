const slugify = require('slugify')

const siteName = 'California Fires'
const description =
  'On Nov. 8, the sky over California was filled with ash. Two wildfires, the Camp Fire and the Woolsey Fire, had ignited within eight hours of each other, forcing evacuations in Butte, Los Angeles and Ventura counties.'
const image =
  'https://assets.dailybruin.com/images/interactive.2019.california-fires/TYLER_RAY3-512b716bd96330b009edd6d663bff5f4.jpg'
const year = '2019'

const url = `https://features.dailybruin.com/${year}/${slugify(siteName)}`

module.exports = {
  siteMetadata: {
    siteName,
    description,
    url,
    image,
  },
  plugins: [
    {
      resolve: 'gatsby-plugin-manifest',
      options: {
        name: siteName,
        short_name: siteName,
        start_url: '/',
        background_color: '#ffffff',
        theme_color: '#ffffff',
        display: 'browser',
        icon: 'src/images/db-logo.png',
      },
    },
    'gatsby-plugin-typescript',
    'gatsby-plugin-react-helmet',
    'gatsby-plugin-emotion',
    {
      resolve: 'gatsby-plugin-typography',
      options: {
        pathToConfigModule: 'src/utils/typography',
      },
    },
    {
      resolve: '@dailybruin/gatsby-source-kerckhoff',
      options: {
        slug: 'interactive.2019.california-fires',
      },
    },
    {
      resolve: 'gatsby-plugin-google-analytics',
      options: {
        trackingId: 'UA-28181852-23',
        head: false,
        anonymize: true,
      },
    },
  ],
}
