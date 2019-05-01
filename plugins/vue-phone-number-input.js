import Vue from 'vue'
import VuePhoneNumberInput from 'vue-phone-number-input'
import 'vue-phone-number-input/dist/vue-phone-number-input.css'

// current component could work only in browser (requires window object)
if (process.client) {
  Vue.component('vue-phone-number-input', VuePhoneNumberInput)
}
