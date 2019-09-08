<template>
  <section class="container">
    <div>
      <app-logo />
      <h1 class="title">
        make-my-appointment-front-end
      </h1>
      <h2 class="subtitle">
        Hello G-woman
      </h2>
      <div class="links">
        <the-facebook-login />
        <v-btn to="/register">
          Register
        </v-btn>
        <v-btn>
          Instagram login
        </v-btn>
      </div>
    </div>
  </section>
</template>

<script>
import AppLogo from '@/components/AppLogo.vue'
import TheFacebookLogin from '@/components/auth/TheFacebookLogin'

export default {
  components: {
    AppLogo,
    TheFacebookLogin
  }
}
</script>

<style>
.container {
  min-height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
}

.title {
  font-family: 'Quicksand', 'Source Sans Pro', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue',
    Arial, sans-serif; /* 1 */
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
