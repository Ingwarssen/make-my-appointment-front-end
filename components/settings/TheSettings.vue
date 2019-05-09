<template>
  <v-select
    :items="languages"
    :label="$t(LABEL.language)"
    :value="language"
    item-text="text"
    item-value="id"
    menu-props="bottom"
    return-object
    @change="setLocale"
  />
</template>

<script>
  import {mapState, mapActions} from 'vuex'
  import {setLocale} from '@/store/actionTypes'
  import {LANGUAGE} from '@/utils/const'

  export default {
    name: 'TheSettings',

    data: () => ({
      languages  : LANGUAGE
    }),

    computed: {
      ...mapState({
        language: state => state.language
      })
    },

    methods: {
      ...mapActions({
        setLocale
      })
    }
  }
</script>
