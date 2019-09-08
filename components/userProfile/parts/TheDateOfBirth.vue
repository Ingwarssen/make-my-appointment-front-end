<template>
  <v-menu
    ref="menu"
    v-model="menu"
    :close-on-content-click="false"
    :return-value.sync="birthdayDateComputed"
    transition="scale-transition"
    min-width="190px"
    :nudge-width="100"
    offset-y
  >
    <template v-slot:activator="{ on }">
      <v-text-field
        v-model="birthdayDateComputed"
        readonly
        clearable
        :label="label"
        prepend-icon="cancel"
        v-on="on"
      />
    </template>
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
      type: String,
      default: null
    },
    label: {
      type: String,
      default: ''
    }
  },

  data: () => ({
    birthdayDate: '',
    menu: false,
    maxDate: new Date().toISOString().substr(0, 10)
  }),

  computed: {
    birthdayDateComputed: {
      get() {
        return this.birthdayDate
      },
      set(date) {
        this.$emit('input', date)
        this.birthdayDate = date
      }
    }
  },

  watch: {
    menu(isOpen) {
      isOpen &&
        setTimeout(() => {
          this.$refs['birthDayPicker'].activePicker = 'YEAR'
        }, 250)
    }
  },

  mounted() {
    this.birthdayDate = this.value
  }
}
</script>
