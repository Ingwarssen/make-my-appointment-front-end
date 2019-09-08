import Vue from 'vue'
import VueI18n from 'vue-i18n'
import en from '@/locales/messages/en.json'
import ua from '@/locales/messages/ua.json'

Vue.use(VueI18n)

export default ({ app, store }) => {
  app.i18n = new VueI18n({
    locale: store.state.locale.code,
    fallbackLocale: 'en',
    messages: {
      en,
      ua
    }
  })
}
