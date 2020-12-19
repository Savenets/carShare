<template>
  <v-app>
    <v-app-bar app color="primary" dark>
      <v-toolbar-title>Share your vehicle</v-toolbar-title>
      <v-btn class="ma-2" outlined color="indigo" @click="toggleTheme" >change theme to {{ themeName }}</v-btn>
      <v-spacer></v-spacer>
      <v-btn
        v-for="link in links"
        :key="`${link.label}-header-link`"
        text
        rounded
        :to="link.url"
      >
        {{ link.label }}
      </v-btn>
    </v-app-bar>
    <v-main>
      <router-view></router-view>
    </v-main>
    <v-footer color="primary lighten-1" padless>
      <v-layout justify-center wrap>
        <v-btn
          v-for="link in links"
          :key="`${link.label}-footer-link`"
          color="white"
          text
          rounded
          class="my-2"
          :to="link.url"
        >
          {{ link.label }}
        </v-btn>
        <v-flex primary lighten-2 py-4 text-center white--text xs12>
          <strong>{{ new Date().getFullYear() }}</strong>
        </v-flex>
      </v-layout>
    </v-footer>
  </v-app>
</template>

<script>
  export default {
    name: 'App',
    data() {
      return {
        themeName: 'dark',
        links: [
          {
            label: 'Home',
            url: '/'
          },
         /* {
            label: 'Signup',
            url: '/signup'
          },*/
          {
            label: 'Dashboard',
            url: '/dashboard'
          },
          {
            label: 'Login',
            url: '/login'
          },
        ]
      }
    },
    methods: {
      toggleTheme() {
        this.$vuetify.theme.dark = !this.$vuetify.theme.dark;
        this.themeName = this.$vuetify.theme.isDark ? 'white' : 'dark';
      }
    }
  }
</script>
