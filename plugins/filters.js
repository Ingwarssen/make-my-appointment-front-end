import Vue from 'vue'
import {capitalize} from 'lodash'
import VueTruncate from 'vue-truncate-filter'

export default ({store}) => {
  Vue.filter('capitalize', capitalize)
}

Vue.use(VueTruncate)
