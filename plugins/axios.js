export default function ({ $axios, store }) {
  // Set to all requests
  // axios.config.headers['Authorization'] = 'Bearer xxx'

  // OR for each request
  $axios.onRequest(config => {
    const {authToken} = store.state.auth
    if (authToken) {
      config.headers.common['Authorization'] = `Bearer ${authToken}`
    }

    console.log('no token, try to redirect to login page')
  })
}
