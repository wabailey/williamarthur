/**
 * Configure your Gatsby site with this file.
 *
 * See: https://www.gatsbyjs.com/docs/gatsby-config/
 */

module.exports = {
  /* Your site config here */
  plugins: [
    `gatsby-transformer-remark`,
    `gatsby-plugin-image`,
    `gatsby-plugin-sharp`,
    `gatsby-transformer-sharp`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images/`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `projects`,
        path: `${__dirname}/src/projects/`,
      },
    },
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        icon: `${__dirname}/src/images/WA-Logo-WoB.svg`,
        name: `Will - Web Developer`,
        start_url: `/`,
        background_color: `#0b0b0b`,
        theme_color: `#101010`,
        display: `standalone`,
      },
    },
  ],
  siteMetadata: {
    title: "William Arthur",
    description: "Web Dev Portfolio",
    copyright: "Copyright 2023 William Arthur",
    contact: "willarthbailey@gmail.com",
    linkedin: "https://www.linkedin.com/in/willab/",
    github: "https://github.com/wabailey",
  }
}
