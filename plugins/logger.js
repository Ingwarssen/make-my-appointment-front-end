import { SET_SNACKBAR } from '../store/mutationTypes'
import { LOGGER } from '../utils/const'
import { LABEL } from '@/locales/const/labels'
import { GLOBAL_SERVICE } from '@/store/serviceTypes'

const snackBar = `${GLOBAL_SERVICE}/${SET_SNACKBAR}`
const isProduction = process.env.NODE_ENV === 'production'

function extractErrorMessage(error) {
  let message = error.message
  if (Array.isArray(error)) {
    // try to get and show validation error
    message = `${error[0].message}`
  }

  if (Array.isArray(error.reasons)) {
    message = `${error.reasons[0].message}`
  }

  if (error.response) {
    message = `${error.response.status} ${error.response.statusText}`

    if (error.response.data) {
      message = `${error.response.data.message}`
    }
  }

  return message
}

export default ({ app, store }) => {
  app.logger = {
    success(...message) {
      const timeout = 2000
      store.commit(snackBar, { message, timeout, color: 'light-green lighten-1' })
    },
    authError() {
      store.commit(snackBar, { message: LABEL.wrong_credentials, color: 'red' })
    },
    userWarning(message) {
      store.commit(snackBar, { message, color: 'orange' })
    },
    error(errorHint, error) {
      let message, timeout
      if (LOGGER.snackBar) {
        if (isProduction) {
          message = LABEL.unknown_error

          if (error && error.statusCode === 400) {
            message = extractErrorMessage(error)
          }

          timeout = 3000
          store.commit(snackBar, { message, timeout, color: 'red' })
          return
        }

        if (error) {
          timeout = 7000
          message = `${errorHint} ${extractErrorMessage(error)}`
        }

        store.commit(snackBar, { message, timeout, color: 'red' })
      }

      if (LOGGER.consoleLog) {
        console.log(errorHint, error)
      }
    }
  }
}
