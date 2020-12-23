<template>
  <div>
    <h1 class="title">Select a car you want to rent! And go go ride!!</h1>
    <p class="subTitle">Here you can select a vehicle to choose. You can select an automobile or a truck or even a bicycle or a bike. Use pagination or filters(to be done) to look through
    available vehicles. When you select an item you can hit I WANNA RIDE submit all required information and you are good to go. Owner of the selected vehicle will contact you for
      the terms etc. Once more friendly reminder administration of the site is not responsible for your deal with the owner. This is your responsibility to settle this all up
    </p>
    <v-row class="d-flex justify-space-between">
      <VehicleCard v-for="vehicle in vehicle.vehicles" :key="vehicle.id" :vehicle="vehicle"/>
    </v-row>
    <v-col class="d-flex justify-center pa-8">
      <template v-if="page != 1">
        <router-link :to="{ name: 'vehicles', query: { page: page - 1 } }" rel="prev">Prev Page</router-link>|
      </template>
      <template v-if="vehicle.totalVehicles > this.page * 4">
        <router-link :to="{ name: 'vehicles', query: { page: page + 1 } }" rel="next">Next Page</router-link>
      </template>
    </v-col>
  </div>
</template>

<script>
  import VehicleCard from '@/components/VehicleCard.vue'
  import numberOfPagesPerPage from '@/constants/numberOfPagesPerPage'
  import { mapState } from 'vuex'

  export default {
    components: {
      VehicleCard
    },
    created() {
      this.perPage = numberOfPagesPerPage;
      this.$store.dispatch('vehicle/getVehicles', {
        perPage: this.perPage,
        page: this.page
      })
    },
    computed: {
      page() {
        return parseInt(this.$route.query.page || 1)
      },
      hasNextPage() {
        return this.vehicle.totalVehicles > this.page * this.perPage
      },
      ...mapState(['vehicle'])
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
