module.exports = {
  siteMetadata: {
    title: 'Uriel Aguilar',
    author: 'Salem Aziel',
    description: 'Profile for Uriel Aguilar',
    banner: 'src/images/bg.jpg'
  },
  plugins: [
    'gatsby-plugin-react-helmet',
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: 'Uriel Aguilar Profile',
        short_name: 'Aguilar',
        start_url: '/',
        background_color: '#0e71c8',
        theme_color: '#0e71c8',
        display: 'minimal-ui',
        icon: 'src/images/gatsby-icon.png', // This path is relative to the root of the site.
      },
    },
    'gatsby-plugin-sass',
  ],
}
