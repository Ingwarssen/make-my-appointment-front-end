<template>
  <v-app id="keep">
    <v-navigation-drawer
      v-model="drawer"
      fixed
      clipped
      class="grey lighten-4"
      app
    >
      <v-list
        dense
        class="grey lighten-4"
      >
        <template v-for="(item, i) in items">
          <v-layout
            v-if="item.heading"
            :key="i"
            row
            align-center
          >
            <v-flex xs6>
              <v-subheader v-if="item.heading">
                {{ item.heading }}
              </v-subheader>
            </v-flex>
            <v-flex xs6 class="text-xs-right">
              <v-btn small flat>edit</v-btn>
            </v-flex>
          </v-layout>
          <v-divider
            v-else-if="item.divider"
            :key="i"
            dark
            class="my-3"
          ></v-divider>
          <v-list-tile
            v-else
            :key="i"
          >
            <v-list-tile-action>
              <v-icon>{{ item.icon }}</v-icon>
            </v-list-tile-action>
            <v-list-tile-content>
              <v-list-tile-title class="grey--text">
                {{ item.text }}
              </v-list-tile-title>
            </v-list-tile-content>
          </v-list-tile>
        </template>
      </v-list>
    </v-navigation-drawer>
    <v-toolbar color="grey lighten-2" app absolute clipped-left>
      <v-toolbar-side-icon @click="drawer = !drawer"></v-toolbar-side-icon>
      <v-btn flat round to="/">GFamily</v-btn>
      <span>{{ $te(pageName) ? $t(pageName) : '' | capitalize }}</span>
      <v-spacer></v-spacer>
    </v-toolbar>
    <v-content>
      <v-container fluid fill-height class="grey lighten-4">
        <v-layout justify-center align-center>
          <v-flex shrink>
            <nuxt/>
          </v-flex>
        </v-layout>
      </v-container>
    </v-content>
  </v-app>
</template>

<script>
  import {snakeCase} from 'lodash'

  export default {
    computed: {
      pageName () {
        console.log('wtf', this.$route.name)
        if (this.$route.name === 'index') {
          return 'main'
        }
        return snakeCase(this.$route.name)
      }
    },

    data: () => ({
      drawer: null,
      items : [
        {icon: 'lightbulb_outline', text: 'Notes'},
        {icon: 'touch_app', text: 'Reminders'},
        {divider: true},
        {heading: 'Labels'},
        {icon: 'add', text: 'Create new label'},
        {divider: true},
        {icon: 'archive', text: 'Archive'},
        {icon: 'delete', text: 'Trash'},
        {divider: true},
        {icon: 'settings', text: 'Settings'},
        {icon: 'chat_bubble', text: 'Trash'},
        {icon: 'help', text: 'Help'},
        {icon: 'phonelink', text: 'App downloads'},
        {icon: 'keyboard', text: 'Keyboard shortcuts'}
      ]
    }),

    props: {
      source: String
    }
  }
</script>

<style lang="stylus">
  #keep
    .v-navigation-drawer__border
      display: none
</style>
