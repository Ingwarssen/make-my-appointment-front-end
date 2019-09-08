<template>
  <section class="container pa-0">
    <v-container grid-list-lg pa-0>
      <v-layout column wrap>
        <v-flex lg3 md6 xs12>
          <app-logo />
        </v-flex>
        <v-flex>
          <h2 class="subtitle">Hello G-woman</h2>
        </v-flex>
        <v-flex>
          <the-user-profile />
        </v-flex>
        <v-flex>
          <div v-if="facebookUser">
            <the-facebook-login />
          </div>
        </v-flex>
      </v-layout>
    </v-container>
  </section>
</template>

<script>
import AppLogo from "@/components/AppLogo.vue";
import TheUserProfile from "@/components/userProfile/TheUserProfile";
import TheFacebookLogin from "@/components/auth/TheFacebookLogin";

import { createNamespacedHelpers } from "vuex";

import { AUTH } from "@/store/storeTypes";

const { mapState } = createNamespacedHelpers(AUTH);

export default {
  components: {
    AppLogo,
    TheUserProfile,
    TheFacebookLogin
  },

  computed: {
    ...mapState({
      facebookUser: state => state.session.facebookUser
    })
  }
};
</script>

<style>
.container {
  min-height: 100vh;
  display: flex;
  justify-content: center;
  align-items: start;
  text-align: center;
}

.title {
  font-family: "Quicksand", "Source Sans Pro", -apple-system, BlinkMacSystemFont,
    "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif; /* 1 */
  display: block;
  font-weight: 300;
  font-size: 100px;
  color: #35495e;
  letter-spacing: 1px;
}

.subtitle {
  font-weight: 300;
  font-size: 42px;
  color: #526488;
  word-spacing: 5px;
  padding-bottom: 15px;
}

.links {
  padding-top: 15px;
}
</style>

