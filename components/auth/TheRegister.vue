<template>
  <div>
    <vue-phone-number-input
      v-model="phoneNumber"
      default-country-code="UA"
      :only-countries="['UA']"
      :translations="{
        countrySelectorLabel: 'Код країни',
        phoneNumberLabel: 'Номер телефону',
        example: 'Приклад:'
      }"
    />
  </div>

</template>

<script>
  export default {
    name: 'TheRegister',

    data: () => ({
      phoneNumber: ''
    })
  }

</script>
