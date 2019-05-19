import {apiStringify} from '../../api-settings'
import * as mt from '../mutationTypes'
import * as actionType from '../actionTypes'
import * as serviceNames from '../serviceTypes'

import {METHOD} from '@/utils/const'

const {put, post, remove} = METHOD
const serviceName = serviceNames.AUTH_SERVICE

const root = true

const api = apiStringify(serviceName)

export default {
  async [actionType.login] ({commit, dispatch, rootState, state}, {email, password}) {
  },

  async [actionType.getSettings] ({commit, dispatch}) {
    let settings

    try {
      settings = await dispatch(actionType.apiService, {
        action: api.settings,
        serviceName
      }, {root})
    } catch (e) {
      return this.app.logger.error('Error during settings get in getSettings action.\nError: ', e)
    }

    commit(mt.SET_SETTINGS, settings)
  }
}
