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
  }
}
