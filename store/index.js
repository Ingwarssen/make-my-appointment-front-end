import { get } from 'lodash'
import { api } from '@/api-settings'
import Cookies from '@/utils/cookies'
import { LANGUAGE } from '@/utils/const'
import * as mt from './mutationTypes'
import * as actionType from './actionTypes'
import { AUTH } from './storeTypes'

export const state = () => ({
  loading: false,
  locales: LANGUAGE,
  locale: LANGUAGE[0]
})

export const getters = {}

export const mutations = {
  [mt.SET_LANG](state, { id } = {}) {
    const localeItem = state.locales.find(item => item.id === id)

    if (localeItem) {
      this.app.i18n.locale = localeItem.code
      state.locale = localeItem
    }
  }
}

export const actions = {
  [actionType.setLocale]({ commit }, locale) {
    commit(mt.SET_LANG, locale)
  },

  async apiService(ctx, options) {
    const {
      uuid = '',
      data = null,
      params = null,
      method = 'get',
      action = 'get',
      entity = '',
      serviceName,
      responseType,
      headers,
      itemId,
      onUploadProgress
    } = options

    let result

    const apiFunc = get(api, [serviceName, entity, action].filter(e => e))
    const url = api.url + apiFunc(uuid, itemId)

    const axiosExtra = {}
    if (responseType) {
      axiosExtra.responseType = responseType
    }

    if (headers) {
      axiosExtra.headers = headers
    }
    ;``
    if (Object.keys(axiosExtra).length && serviceName === 'upload') {
      console.log('You are probably uploading images, check headers:', axiosExtra)
    }

    try {
      result = await this.$axios({
        url,
        data,
        method,
        params,
        onUploadProgress,
        ...axiosExtra
      })
    } catch (error) {
      if (error.response && error.response.status === 400 && error.response.data.reasons) {
        throw error.response.data.reasons
      } else {
        throw error
      }
    }

    if (result.status === 200) {
      // to handle download headers with content type required on actions level
      if (serviceName === 'upload' && action === 'get') {
        return result
      }

      return result.data
    } else {
      throw result
    }
  },

  async nuxtServerInit({ commit }, { req }) {
    const tokenExpires = Cookies.getItem(req.headers.cookie, 'tokenExpires')
    const authToken = Cookies.getItem(req.headers.cookie, 'authToken')
    const isLogged = Cookies.getItem(req.headers.isLogged, 'isLogged')
    const refreshToken = Cookies.getItem(req.headers.cookie, 'refreshToken')
    const userRole = Cookies.getItem(req.headers.cookie, 'userRole')
    const userId = Cookies.getItem(req.headers.cookie, 'userId')

    commit(`${AUTH}/${mt.SET_AUTH}`, {
      userId,
      userRole,
      isLogged,
      authToken,
      refreshToken,
      tokenExpires
    })
  }
}
