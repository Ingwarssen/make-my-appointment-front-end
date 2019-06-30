export default () => ({
  settings: {
    facebook: {
      appId     : '',
      apiVersion: '',
      appName   : ''
    }
  },

  session: {
    facebookUser: false,
    instagramUser: false,
    isLogged: false,
    userId: null,
    userRole: null,
    authToken: null,
    refreshToken: null,
    tokenExpires: null,
  }
})
