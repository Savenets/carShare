<template>
  <div>
    <h1 class="title">Good Choice</h1>
    <p class="subTitle">Lore lipsum upLore lipsum upLore lipsum upLore lipsum upLore lipsum upLore lipsum upLore lipsum upLore lipsum upLore lipsum upLore lipsum upLore lipsum upLore lipsum up
    </p>
    <v-row class="d-flex justify-space-between">
      <v-col class="d-flex justify-center">
        <VehicleCard :vehicle="vehicle" buttonLabel="I wanna another ride" @on-button-click="eventHandler" />
      </v-col>
    </v-row>
  </div>
</template>

<script lang="ts">
  import {Component, Vue, Prop} from 'vue-property-decorator'
  import VehicleCard from '@/components/VehicleCard.vue'
  import { IVehicle } from '@/models/vehicleTypes'

  @Component({
    components: {
      VehicleCard
    }
  })

  export default class Intro extends Vue {
    @Prop({required: true})
    public vehicle: IVehicle

    private eventHandler() {
      this.$router.push({
        name: 'vehicles',
      });
    }

  }
</script>

<style scoped>
  .title {
    font-size: 2.2rem;
    text-align: center;
  }
  .subTitle {
    font-size: 1.2rem;
  }
</style>
