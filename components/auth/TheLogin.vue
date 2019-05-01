<template>
  <section class="container">
    <div>
      <app-logo/>
      <h1 class="title">
        make-my-appointment-front-end
      </h1>
      <h2 class="subtitle">
        PWA with possibility to set fitness trainings and interact with clients
      </h2>
    </div>
  </section>
</template>

<script>
import AppLogo from '~/components/AppLogo.vue'

export default {
  components: {
    AppLogo
  }
}
</script>
