<template>
  <v-app>
    <v-navigation-drawer temporary v-model="sideNav" class="hidden-md-and-up">
      <v-list>
       <v-list-tile v-for="item in menuItems" :key="item.title">
          <v-list-tile-action>
            <v-icon>{{ item.icon }}</v-icon>
          </v-list-tile-action>
          <v-list-tile-content>{{ item.title }}</v-list-tile-content>
        </v-list-tile>
      </v-list>
    </v-navigation-drawer>
    <v-toolbar dark fixed app>
      <v-toolbar-side-icon @click.stop="sideNav = !sideNav" class="hidden-md-and-up"></v-toolbar-side-icon>
      <v-toolbar-title>ReviewApp</v-toolbar-title>
      <v-spacer></v-spacer>
      <v-toolbar-items class="hidden-sm-and-down">
        <v-btn flat v-for="item in menuItems" :key="item.title">
          {{ item.title }}
        </v-btn>
        <v-icon>search</v-icon>
      </v-toolbar-items>
    </v-toolbar>
  </v-app>
</template>

<script>
export default {
  name: 'Navbar',
  data () {
    return {
      sideNav: false,
      menuItems: [
        {icon: 'room', title: 'Boxoffice'},
        {icon: 'room', title: 'Upcoming'},
        {icon: 'room', title: 'Trolls'},
        {icon: 'room', title: 'Revenue'}
      ],
      movieName: ''
    }
  }
}
</script>
