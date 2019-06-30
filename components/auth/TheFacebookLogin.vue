<template>
  <section class="container">
    <div v-if="fbSettings.appId">
      <v-facebook-login
        :app-id="fbSettings.appId"
        :version="fbSettings.apiVersion"
        @login="fbLogin"
        @logout="logout"
        @connect="handleConnect"
        @sdk-init="handleInit"
      >
        <template slot="login">{{$t(LABEL.fb_sign_in)}}</template>
        <template slot="logout">{{$t(LABEL.fb_sign_out)}}</template>
        <template slot="working">{{$t(LABEL.please_wait)}}</template>
      </v-facebook-login>
    </div>
  </section>
</template>

<script>
  import {createNamespacedHelpers} from 'vuex'

  import {AUTH} from '@/store/storeTypes'
  import {fbLogin, logout} from '@/store/actionTypes'

  const {mapState, mapActions} = createNamespacedHelpers(AUTH)
  export default {
    computed: {
      ...mapState({
        fbSettings: state => state.settings.facebook
      })
    },

    methods: {
      ...mapActions({
        fbLogin,
        logout
      }),
      handleConnect (e) {
        console.log('connect done', e)
      },
      handleInit (e) {
        console.log('init done', e)
      }
    }
  }
</script>
