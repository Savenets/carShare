<template>
  <v-container>
    <v-row class="text-center">
      <v-col class="mb-4">
        <h1 class="display-2 font-weight-bold mb-3">
          Share your car or get your car shared!
        </h1>
      </v-col>
      <v-col
        class="mb-5"
        cols="12"
      >
        <v-btn x-large color="success" class="mr-6" dark> I want to share a vehicle</v-btn>
        <v-btn x-large color="error" dark>I want to get my vehicle shared</v-btn>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
  export default {
    name: 'Intro',

    data: () => ({

    }),
  }
</script>
