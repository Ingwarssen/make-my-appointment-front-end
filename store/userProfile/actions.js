import * as actionType from '../actionTypes'
import * as mt from '../mutationTypes'
import { apiStringify } from '../../api-settings'
import { METHOD } from '@/utils/const'
import { USER_PROFILE_SERVICE } from '@/store/serviceTypes'

const serviceName = USER_PROFILE_SERVICE
const root = true
const api = apiStringify(serviceName)
const { put } = METHOD

export default {
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
      return this.app.logger.error(
        'Error on load user-profile settings  in getSettings action.\nError: ',
        e
      )
    }

    commit(mt.SET_SETTINGS, settings)

    return settings
  },

  async [actionType.getProfile]({ commit, dispatch }) {
    let profile

    try {
      profile = await dispatch(actionType.apiService, { serviceName }, { root })
    } catch (e) {
      return this.app.logger.error('Error on load user-profile  in getProfile action.\nError: ', e)
    }

    commit(mt.SET_PROFILE, profile)
    dispatch(actionType.setLocale, { id: profile.language }, { root })

    return profile
  },

  async [actionType.updateProfile]({ commit, dispatch, state }) {
    let profile

    try {
      profile = await dispatch(
        actionType.apiService,
        {
          data: state.profile,
          method: put,
          action: api.update,
          serviceName
        },
        { root }
      )
    } catch (e) {
      return this.app.logger.error(
        'Error on update user-profile  in getProfile action.\nError: ',
        e
      )
    }

    commit(mt.SET_PROFILE, profile)

    return profile
  },

  async [actionType.changeLanguage]({ dispatch, commit }, locale) {
    commit(mt.SET_PROFILE, { language: locale.id })
    dispatch(actionType.setLocale, locale, { root })

    await dispatch(actionType.updateProfile)
  },

  [actionType.updateField]({ commit }, { value, pathKey }) {
    commit(mt.UPDATE_FIELD, { value, pathKey })
  },
  [actionType.updateProfile]({ commit }, data) {
    commit(mt.SET_PROFILE, data)
  }
}
