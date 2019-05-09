<template>
  <v-menu
    ref="menu"
    v-model="menu"
    :close-on-content-click="false"
    :return-value.sync="birthdayDateComputed"
    transition="scale-transition"
    min-width="290px"
    full-width
    :nudge-width="200"
    offset-y
    lazy
  >
    <v-text-field
      slot="activator"
      readonly
      clearable
      v-model="birthdayDateComputed"
      :label="label"
      prepend-icon="event"
    />
    <v-date-picker
      ref="birthDayPicker"
      v-model="birthdayDateComputed"
      :max="maxDate"
      no-title
      scrollable
      @input="$refs.menu.save(birthdayDateComputed)"
    />
  </v-menu>
</template>

<script>
  export default {
    name: 'TheDateOfBirth',

    props: {
      value: {
        type   : String,
        default: null
      },
      label: {
        type: String,
        default: ''
      }
    },

    computed: {
      birthdayDateComputed: {
        get () {
          return this.birthdayDate
        },
        set (date) {
          this.$emit('input', date)
          this.birthdayDate = date
        }
      }
    },

    watch: {
      menu (isOpen) {
        isOpen && setTimeout(() => {
          this.$refs['birthDayPicker'].activePicker = 'YEAR'
        }, 250)
      }
    },

    mounted () {
      this.birthdayDate = this.value
    },

    data: () => ({
      birthdayDate: '',
      menu        : false,
      maxDate     : new Date().toISOString().substr(0, 10)
    })
  }

</script>
