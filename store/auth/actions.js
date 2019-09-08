import { apiStringify } from '../../api-settings'
import * as mt from '../mutationTypes'
import * as actionType from '../actionTypes'
import * as serviceNames from '../serviceTypes'

import { METHOD } from '@/utils/const'

const { put, post } = METHOD
const serviceName = serviceNames.AUTH_SERVICE

const root = true

const api = apiStringify(serviceName)

export default {
  async [actionType.fbLogin]({ commit, dispatch }, fbResponse) {
    if (fbResponse.status !== 'connected') {
      return
    }

    const { accessToken: access_token } = fbResponse.authResponse

    let authData

    try {
      authData = await dispatch(
        actionType.apiService,
        {
          method: post,
          action: api.facebook,
          data: { access_token },
          serviceName
        },
        { root }
      )
    } catch (e) {
      return this.app.logger.error('Error during fb auth in fbLogin action.\nError: ', e)
    }

    commit(mt.SET_AUTH, { ...authData, facebookUser: true })
  },

  async [actionType.logout]({ commit }) {
    commit(mt.DROP_AUTH)
  },

  async [actionType.getSettings]({ commit, dispatch }) {
    let settings

    try {
      settings = await dispatch(
        actionType.apiService,
        {
          action: api.settings,
          serviceName
        },
        { root }
      )
    } catch (e) {
      return this.app.logger.error('Error during settings get in getSettings action.\nError: ', e)
    }

    commit(mt.SET_SETTINGS, settings)
  },

  async [actionType.setAccessToken]({ dispatch }) {
    try {
      await dispatch(
        actionType.apiService,
        {
          action: api.setFbToken,
          method: put,
          serviceName
        },
        { root }
      )
    } catch (e) {
      return this.app.logger.error('Error during fb access token set in setAccessToken action.\nError: ', e)
    }
  }
}
