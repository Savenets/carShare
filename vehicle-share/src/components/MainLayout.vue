<template>
  <v-app>
    <Header />
    <v-main>
      <v-container>
        <router-view></router-view>
      </v-container>
    </v-main>
    <Footer />
  </v-app>
</template>

<script>
  import Header from "@/components/Header";
  import Footer from "@/components/Footer";

  export default {
    components: {Footer, Header},
    name: 'MainLayout',
  }
</script>

