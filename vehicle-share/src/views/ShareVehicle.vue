<template>
  <div>
    <h1 class="title">Here you can get your vehicle shared</h1>
    <p class="subTitle">
      Here you can get some money by giving your asset. When your vehicle is chosen by someone you'll receive a message with contact information. Call or send a message to get a deal
    </p>
    <v-row class="d-flex justify-space-between">
      <v-col>
        <h2>Fill in all required fields about your vehicle</h2>
        <v-form
          ref="form"
          v-model="valid"
          lazy-validation
        >
          <v-select
            v-model="selectVehicleType"
            :items="vehicleTypes"
            :rules="[v => !!v || 'Vehicle type is required']"
            label="Select vehicle type"
            required
          ></v-select>
          <v-text-field
            v-model="make"
            :counter="10"
            :rules="makeRules"
            label="Make"
            required
          ></v-text-field>
          <v-text-field
            v-model="model"
            label="Model"
            required
          ></v-text-field>
          <v-checkbox
            v-model="checkbox"
            :rules="[v => !!v || 'You must agree to the terms of use!']"
            label="Do you agree?"
            required
          ></v-checkbox>
          <v-btn
            :disabled="!valid"
            color="success"
            class="mr-4"
            @click="validate"
          >
            Validate
          </v-btn>
          <v-btn
            color="error"
            class="mr-4"
            @click="reset"
          >
            Reset Form
          </v-btn>
        </v-form>
      </v-col>
    </v-row>
  </div>
</template>

<script lang="ts">
  import {Component, Vue, Prop} from 'vue-property-decorator'
  import VehicleCard from '@/components/VehicleCard.vue'
  import { IVehicle, VehicleTypes } from '@/models/vehicleTypes'

  @Component({
    components: {
      VehicleCard
    }
  })

  export default class Intro extends Vue {
    private valid = false
    private make = ''
    private model = ''
    private makeRules = [
      v => !!v || 'Make is required',
      v => (v && v.length <= 10) || 'Make must be less than 10 characters',
    ]
    private checkbox = false
    private selectVehicleType = ''
    private vehicleTypes: VehicleTypes = Object.keys(VehicleTypes);


    private reset () {
      this.$refs.form.reset()
    }

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
