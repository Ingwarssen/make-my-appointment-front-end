<template>
  <v-container grid-list-lg d-flex>
    <v-layout column wrap>
      <v-flex lg3 md6 xs21>
        <vue-phone-number-input
          v-model="phoneNumber"
          default-country-code="UA"
          :only-countries="['UA']"
          :translations="{
            countrySelectorLabel: $t(LABEL.country_code),
            phoneNumberLabel: $t(LABEL.phone_number),
            example: $t(LABEL.example)
          }"
        />
      </v-flex>
      <v-flex lg3 md6 xs12>
        <v-text-field v-model="fullName" :label="$t(LABEL.firstName) | capitalize" />
      </v-flex>
      <v-flex lg3 md6 xs12>
        <the-date-of-birth v-model="dateOfBirth" :label="$t(LABEL.date_of_birth) | capitalize" />
      </v-flex>
    </v-layout>
  </v-container>
</template>

<script>
import { createNamespacedHelpers } from 'vuex'
import { USER_PROFILE_STORE } from '@/store/storeTypes'
import { updateProfile } from '@/store/actionTypes'
import TheDateOfBirth from './parts/ThedateOfBirth'

const { mapActions, mapState } = createNamespacedHelpers(USER_PROFILE_STORE)

export default {
  name: 'TheRegister',

  components: {
    TheDateOfBirth
  },

  data: () => ({
    phoneNumber: ''
  }),

  computed: {
    ...mapState({
      profile: state => state.profile
    }),

    fullName: {
      get() {
        return this.profile.fullName
      },
      set(fullName) {
        this.updateProfile({ fullName })
      }
    },

    dateOfBirth: {
      get() {
        return this.profile.dateOfBirth
      },
      set(dateOfBirth) {
        this.updateProfile({ dateOfBirth })
      }
    }
  },

  methods: {
    ...mapActions({
      updateProfile
    })
  }
}
</script>
