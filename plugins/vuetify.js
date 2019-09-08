import Vue from "vue";
import Vuetify from "vuetify/lib";
import colors from "vuetify/es5/util/colors";
import "@fortawesome/fontawesome-free/css/all.css";

Vue.use(Vuetify, {
  theme: {
    primary: colors.lightBlue.darken2,
    secondary: colors.grey.darken1,
    accent: colors.shades.black,
    error: colors.red.accent3,
    background: colors.shades.white,
    graphColor1: colors.orange,
    graphColor2: colors.lightBlue
  }
});

export default new Vuetify({
  icons: {
    iconfont: "fa"
  }
});
