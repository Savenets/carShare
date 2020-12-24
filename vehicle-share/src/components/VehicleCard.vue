<template>
  <v-card
    elevation="24"
    max-width="256"
    class="ma-1"
  >
    <v-system-bar lights-out></v-system-bar>
    <v-card-title>
      <h1 class="title">Vehicle details</h1>
    </v-card-title>
    <v-card-text>
      <v-carousel
        height="200"
      >
        <v-carousel-item
          v-for="(image, i) in vehicle.images"
          :key="vehicle.id + i"
          :src="image"
          reverse-transition="fade-transition"
          transition="fade-transition"
        >
        </v-carousel-item>
      </v-carousel>
      <div class="wrapper">
        <p class="description">Car type: <span class="descriptionValue">{{ vehicle.type }}</span></p>
        <p class="description">Make: <span class="descriptionValue">{{ vehicle.make }}</span></p>
        <p class="description">Model: <span class="descriptionValue">{{ vehicle.model }}</span></p>
      </div>
    </v-card-text>
    <v-divider></v-divider>
    <v-card-actions class="flex justify-center">
      <v-btn @click="buttonClick" color="success">{{ buttonLabel }}</v-btn>
    </v-card-actions>
  </v-card>
</template>

<script lang="ts">
  import {Component, Vue, Prop, Emit} from 'vue-property-decorator'
  import { IVehicle } from '@/models/vehicleTypes'

  @Component
  export default class Intro extends Vue {

    @Prop({required: true}) readonly vehicle: IVehicle
    @Prop({required: false, default: 'I wanna ride!'}) buttonLabel: string

    @Emit('on-button-click')
    buttonClick() {
      return { vehicle: this.vehicle }
    }

  }
</script>

<style scoped>
  .title{
    font-size: 18px;
  }
  .wrapper{
    margin-top: 16px;
  }
  .description{
    font-size: 1rem;
    line-height: 1rem;
    font-weight: bolder;
  }
  .descriptionValue {
    font-weight: normal;
  }

</style>
