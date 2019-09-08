export default function({ route, store, redirect, app }) {
  const { isLogged } = store.state.auth.session

  if (!isLogged && route.path !== '/login') {
    return redirect('/login')
  }

  if (isLogged && route.path === '/login') {
    return redirect('/')
  }

  app.$axios.interceptors.response.use(
    response => {
      return response
    },
    error => {
      // Token expired
      if (error.statusCode === 401) {
        app.store.commit('auth/DROP_AUTH')

        return redirect('/login')
      }

      throw error
    }
  )
}
