<template>
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
</template>

<script>
  import navigationLinks from '@/constants/navigationLinks'

  export default {
    name: 'Header',
    data() {
      return {
        themeName: 'dark',
        links: navigationLinks
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

