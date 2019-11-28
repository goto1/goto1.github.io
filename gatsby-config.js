module.exports = {
  siteMetadata: {
    title: `Tom Goralczyk`,
    description: `Personal website of Tom Goralczyk`,
    author: `@goto135`,
  },
  pathPrefix: `/`,
  plugins: [
    {
      resolve: `gatsby-plugin-postcss`,
      options: {
        postCssPlugins: [require("tailwindcss"), require("autoprefixer")],
      },
    },
    {
      resolve: `gatsby-plugin-purgecss`,
      options: {
        printRejected: false,
        develop: false,
        tailwind: true,
      },
    },
    {
      resolve: `gatsby-plugin-prefetch-google-fonts`,
      options: {
        fonts: [
          {
            family: "Roboto",
            variants: ["400", "400i", "700", "700i"],
            subsets: ["latin-ext"],
          },
        ],
        formats: ["woff", "woff2"],
      },
    },
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `Tom's Website`,
        short_name: `Tom's Website`,
        start_url: `/`,
        background_color: `#21d4fd`,
        theme_color: `#21d4fd`,
        display: `minimal-ui`,
        icon: `src/images/icon.svg`,
      },
    },
    // `gatsby-plugin-offline`,
  ],
}
