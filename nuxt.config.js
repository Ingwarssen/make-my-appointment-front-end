module.exports = {
  /*
   ** Headers of the page
   */
  head: {
    title: 'make-my-appointment-front-end',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      {
        hid: 'description',
        name: 'description',
        content: 'PWA with possibility to set fitness trainings and interact with clients'
      }
    ],
    link: [{ rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }]
  },
  plugins: [
    '~plugins/i18n',
    '~plugins/axios',
    '~plugins/labels',
    '~plugins/filters',
    '~plugins/logger',
    { src: '~plugins/vue-phone-number-input', ssr: false },
    { src: '~/plugins/facebook-login', ssr: false }
  ],

  buildModules: ['@nuxtjs/vuetify'],
  vuetify: {
    defaultAssets: {
      font: true,
      icons: 'md'
    }
  },

  modules: [
    '@nuxtjs/pwa',
    '@nuxtjs/axios',
    '~/modules/common',
    [
      'nuxt-fontawesome',
      {
        imports: [
          {
            set: '@fortawesome/free-solid-svg-icons',
            icons: ['fas']
          },
          {
            set: '@fortawesome/free-brands-svg-icons',
            icons: ['fab']
          }
        ]
      }
    ]
  ],
  /*
   ** Customize the progress bar color
   */
  loading: { color: '#3B8070' },
  /*
   ** Build configuration
   */
  build: {
    vendor: ['axios', 'vuetify'],
    /*
     ** Run ESLint on save
     */
    extend(config, { isDev, isClient }) {
      if (isDev && isClient) {
        config.module.rules.push({
          enforce: 'pre',
          test: /\.(js|vue)$/,
          loader: 'eslint-loader',
          exclude: /(node_modules)/
        })
      }
    }
  },

  env: {
    IS_MOBILE: true,
    SERVER_API_URL: 'http://localhost:3001/api/v1/'
  }
}
