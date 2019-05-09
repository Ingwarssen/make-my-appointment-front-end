export const api = {
  url: 'http://fak-web-development.eu-central-1.elasticbeanstalk.com/api/v1/',
  // auth api
  getToken: 'oauth2/authorize',
  forgotRequest: 'oauth2/forgot-request',
  // users2 api points
  aclList: 'user/levels',
  userProfile: {
    get: () => 'user/me',
    menu: () => 'user/menu'
  },
  user: {
    add: () => 'user/add',
    get: uuid => `user/${uuid}`,
    update: uuid => `user/${uuid}`,
    list: () => 'user/list',
    settings: () => 'user/settings',
    filters: () => 'user/settings/filter'
  },

  auth: {
    login: (url, token, clientId, clientSecret) =>
      `${url}${token}?client_id=${clientId}&client_secret=${clientSecret}`,
    logout: `oauth2/logout`
  }
}

export const apiStringify = moduleName => {
  return Object.keys(api[moduleName]).reduce((acc, prop)=> ({ ...acc, [prop]: prop}), {})
}
