module.exports = {
  siteMetadata: {
    title: 'Uriel Aguilar',
    author: 'Salem Aziel',
    description: 'Profile for Uriel Aguilar',
  },
  plugins: [
    'gatsby-plugin-react-helmet',
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: 'Uriel Aguilar Profile',
        short_name: 'Aguilar',
        start_url: '/',
        background_color: '#663399',
        theme_color: '#663399',
        display: 'minimal-ui',
        icon: 'src/images/gatsby-icon.png', // This path is relative to the root of the site.
      },
    },
    'gatsby-plugin-sass',
  ],
}
