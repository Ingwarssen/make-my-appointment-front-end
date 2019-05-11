<template>
  <section class="container">
    <div>
      <v-facebook-login
        app-id="390625541666819"
        version="v3.3"
        @login="handleLogin"
        @logout="handleLogout"
        @connect="handleConnect"
        @sdk-init="handleInit"
      >
        <template slot="login">hello</template>
      </v-facebook-login>
    </div>
  </section>
</template>

<script>

  export default {
    methods: {
      handleLogin (e) {
        console.log('login done', e)
      },
      handleLogout (e) {
        console.log('logout done', e)
      },
      handleConnect (e) {
        console.log('connect done', e)
      },
      handleInit (e) {
        console.log('init done', e)
      }
    }
  }
</script>
