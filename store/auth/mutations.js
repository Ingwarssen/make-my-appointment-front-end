import * as type from '../mutationTypes'

export default {
  [type.SET_AUTH] (state, authData) {
    console.log('set auth')
  },
  [type.DROP_AUTH] (state) {
    console.log('drop auth')
  },
  [type.SET_SETTINGS] (state, settings) {
    state.settings = {...state.settings, ...settings}
  }
}
