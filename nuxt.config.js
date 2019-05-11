module.exports = {
  /*
  ** Headers of the page
  */
  head   : {
    title: 'make-my-appointment-front-end',
    meta : [
      {charset: 'utf-8'},
      {name: 'viewport', content: 'width=device-width, initial-scale=1'},
      {
        hid    : 'description',
        name   : 'description',
        content: 'PWA with possibility to set fitness trainings and interact with clients'
      }
    ],
    link : [
      {rel: 'icon', type: 'image/x-icon', href: '/favicon.ico'}
    ]
  },
  plugins: [
    '~plugins/i18n',
    '~plugins/axios',
    '~plugins/labels',
    '~plugins/filters',
    '~plugins/vuetify',
    {src: '~plugins/vue-phone-number-input', ssr: false},
    {src: '~/plugins/facebook-login', ssr: false}
  ],
  css    : ['~/assets/style/app.styl'],

  modules: [
    '@nuxtjs/pwa'
  ],
  /*
  ** Customize the progress bar color
  */
  loading:
    {color: '#3B8070'}
  ,
  /*
  ** Build configuration
  */
  build  : {
    vendor: ['axios', 'vuetify'],
    /*
    ** Run ESLint on save
    */
    extend (config, {isDev, isClient}) {
      if (isDev && isClient) {
        config.module.rules.push({
          enforce: 'pre',
          test   : /\.(js|vue)$/,
          loader : 'eslint-loader',
          exclude: /(node_modules)/
        })
      }
    }
  }
}

