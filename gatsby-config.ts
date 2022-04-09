import { GatsbyConfig } from 'gatsby'

require('dotenv').config({
  path: `.env.${process.env.NODE_ENV}`,
})

const gatsbyConfig: GatsbyConfig = {
  siteMetadata: {
    siteTitle: `US Leather Craft`,
    siteDescription: `Leather Repair Services in New Jersey, USA`,
    navLinks: [
      {
        name: 'Home',
        link: '/',
      },
      {
        name: 'Services',
        link: '/services',
      },
      {
        name: 'About',
        link: '/about',
      },
      {
        name: 'Contact',
        link: '/contact',
      },
    ],
  },
  plugins: [
    `gatsby-plugin-smoothscroll`,
    `gatsby-plugin-styled-components`,
    {
      resolve: `gatsby-plugin-material-ui`,
      options: {
        stylesProvider: {
          injectFirst: true,
        },
      },
    },
    {
      resolve: 'gatsby-source-graphcms',
      options: {
        endpoint: process.env.GCMS_ENDPOINT,
        buildMarkdownNodes: true,
      },
    },
    `gatsby-plugin-image`,
    `gatsby-plugin-sharp`,
    `gatsby-transformer-sharp`,
  ],
}

export default gatsbyConfig
