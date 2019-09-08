import * as type from '../mutationTypes'
import { TIMINGS } from '@/utils/const'

export default {
  [type.SET_SNACKBAR](state, params) {
    let { timeout, message = '' } = params

    if (!timeout) {
      timeout = message.length * TIMINGS.SNACKBAR_SYMBOL_READ_TIME
    }

    state.snackbar = Object.assign({}, state.snackbar, params, { open: true })
  },
  [type.CLOSE_SNACKBAR](state) {
    state.snackbar.open = false
  }
}
