import Vue from 'vue'
import { LABEL } from '@/locales/const/labels'

const labelPlugin = {
  install(Vue) {
    Vue.prototype.LABEL = LABEL
  }
}

Vue.use(labelPlugin)
