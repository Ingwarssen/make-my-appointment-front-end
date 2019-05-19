<template>
  <the-login/>
</template>

<script>
  import TheLogin from '@/components/auth/TheLogin'

  import {
    getSettings
  } from '@/store/actionTypes'
  import {AUTH} from '@/store/storeTypes'

  export default {
    components: {TheLogin},

    async asyncData ({app}) {
      const {$mapNameSpaceHelper} = app
      const {fetchAll} = $mapNameSpaceHelper(AUTH)
      await fetchAll(getSettings)
    }
  }

</script>
