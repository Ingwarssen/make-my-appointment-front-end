import * as mt from '../mutationTypes'
import {set} from 'lodash'

export default {
  [mt.SET_PROFILE] (state, data) {
    state.profile = {...state.profile, ...data}
    console.log('result?', state.profile)
  },
  [mt.SET_SETTINGS] (state, data) {
    state.settings = {...state.settings, ...data}
  },
  [mt.UPDATE_FIELD] (state, {value, pathKey}) {
    set(state, pathKey, value)
  }
}
