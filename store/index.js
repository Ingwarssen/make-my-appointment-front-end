import {LANGUAGE} from '@/utils/const'
import * as mt from './mutationTypes'
import * as actionType from './actionTypes'

export const state = () => ({
  loading: false,
  locales: LANGUAGE,
  locale : LANGUAGE[0]
})

export const getters = {}

export const mutations = {
  [mt.SET_LANG] (state, {id} = {}) {
    const localeItem = state.locales.find(item => item.id === id)

    console.log('state locales', state.locales)
    console.log('run set lang mutation', localeItem)
    if (localeItem) {
      this.app.i18n.locale = localeItem.code
      state.locale = localeItem
    }
  }
}

export const actions = {
  [actionType.setLocale] ({commit}, locale) {
    console.log('run set locale action')
    commit(mt.SET_LANG, locale)
  },

  async apiService ({commit, store}, options) {
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

    if (Object.keys(axiosExtra).length) {
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
  }
}
