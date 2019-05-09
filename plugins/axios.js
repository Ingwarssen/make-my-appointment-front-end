export default function ({ $axios, store }) {
  // Set to all requests
  // axios.config.headers['Authorization'] = 'Bearer xxx'

  // OR for each request
  // $axios.onRequest(config => {
  //   if (store.state.auth.authToken) {
  //     config.headers.common['Authorization'] = `Bearer ${store.state.auth.authToken}`
  //   }
  // })
}
