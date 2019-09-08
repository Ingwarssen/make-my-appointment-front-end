import * as type from '../mutationTypes'
import Cookies from '@/utils/cookies'

export default {
  [type.SET_AUTH](state, authData) {
    Cookies.setItem('authToken', authData.jwtToken)
    Cookies.setItem('userId', authData.id)
    Cookies.setItem('isLogged', true)

    state.session.authToken = authData.jwtToken
    state.session.userId = authData.id
    state.session.isLogged = authData.id

    // TODO: to be implemented
    Cookies.setItem('refreshToken', authData.refreshToken)
    Cookies.setItem('tokenExpires', authData.tokenExpires)

    state.session.refreshToken = authData.refreshToken
    state.session.role = authData.role
    state.session.tokenExpires = authData.tokenExpires
  },
  [type.DROP_AUTH](state) {
    state.session.role = null
    state.session.userId = null
    state.session.authToken = null
    state.session.refreshToken = null
    state.session.tokenExpires = null
    state.session.facebookUser = false
    state.session.instagramUser = false
    state.session.isLogged = false

    Cookies.removeItem('authToken')
    Cookies.removeItem('refreshToken')
    Cookies.removeItem('tokenExpires')
    Cookies.removeItem('userRole')
    Cookies.removeItem('userId')
    Cookies.removeItem('isLogged')
    Cookies.removeItem('facebookUser')
    Cookies.removeItem('instagramUser')
  },
  [type.SET_SETTINGS](state, settings) {
    state.settings = { ...state.settings, ...settings }
  }
}
