<template>
  <v-container grid-list-lg>
    <v-layout row wrap>
      <v-flex lg3 md6 xs12>
        <vue-phone-number-input
          v-model="phoneNumber"
          default-country-code="UA"
          :only-countries="['UA']"
          :translations="{
        countrySelectorLabel:$t(LABEL.country_code),
        phoneNumberLabel: $t(LABEL.phone_number),
        example: $t(LABEL.example)
      }"
        />
      </v-flex>
      <v-flex lg3 md6 xs12>
        <v-text-field
          :label="$t(LABEL.firstName) | capitalize"
          v-model="fullName"
        />
      </v-flex>
      <v-flex lg3 md6 xs12>
        <the-date-of-birth
          :label="$t(LABEL.date_of_birth) | capitalize"
          v-model="dateOfBirth"
        />
      </v-flex>
    </v-layout>
  </v-container>
</template>

<script>
  import {createNamespacedHelpers} from 'vuex'
  import {USER_PROFILE_STORE} from '@/store/storeTypes'
  import {updateProfile} from '@/store/actionTypes'
  import TheDateOfBirth from './parts/ThedateOfBirth'

  const {mapActions, mapState} = createNamespacedHelpers(USER_PROFILE_STORE)

  export default {
    name: 'TheRegister',

    components: {
      TheDateOfBirth
    },

    computed: {
      ...mapState({
        profile: state => state.profile
      }),

      fullName: {
        get () {
          return this.profile.fullName
        },
        set (fullName) {
          this.updateProfile({fullName})
        }
      },

      dateOfBirth: {
        get () {
          return this.profile.dateOfBirth
        },
        set (dateOfBirth) {
          this.updateProfile({dateOfBirth})
        }
      }
    },

    data: () => ({
      phoneNumber: ''
    }),

    methods: {
      ...mapActions({
        updateProfile
      })
    }
  }

</script>
