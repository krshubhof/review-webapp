<template>
  <v-app>
      <v-navigation-drawer v-model="sideNav">
          <v-list >
              <v-list-title>
                  <v-list-content>Movie</v-list-content>
              </v-list-title>
          </v-list>
      </v-navigation-drawer>
  </v-app>
</template>

<script>
export default {
  data () {
    return {
      sideNav: true
    }
  }
}
</script>
