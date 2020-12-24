<template>
  <div>
    <h1 class="title">Good Choice</h1>
    <p class="subTitle">
      Now when you selected a vehicle to ride fill in the form with required information. An owner is going to contact you as soon as possible
    </p>
    <v-row class="d-flex justify-space-between">
      <v-col class="d-flex justify-center">
        <VehicleCard :vehicle="vehicle" buttonLabel="I wanna another ride" @on-button-click="eventHandler" />
      </v-col>
      <v-col>
        <h2>Fill in the form for the owner of the {{vehicle.make}} to contact you as soon as possible</h2>
        <v-form
          ref="form"
          v-model="valid"
          lazy-validation
        >
          <v-text-field
            v-model="name"
            :counter="10"
            :rules="nameRules"
            label="Your Name"
            required
          ></v-text-field>
          <v-text-field
            v-model="phone"
            label="Your Phone"
            required
          ></v-text-field>
          <v-text-field
            v-model="email"
            :rules="emailRules"
            label="E-mail"
            required
          ></v-text-field>
          <v-checkbox
            v-model="checkbox"
            :rules="[v => !!v || 'You must agree to continue!']"
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
          <v-btn
            color="warning"
            @click="resetValidation"
          >
            Reset Validation
          </v-btn>
        </v-form>
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
    private valid = false
    private name = ''
    private email = ''
    private phone = ''
    private nameRules = [
      v => !!v || 'Name is required',
      v => (v && v.length <= 10) || 'Name must be less than 10 characters',
    ]
    private  emailRules = [
      v => !!v || 'E-mail is required',
      v => /.+@.+\..+/.test(v) || 'E-mail must be valid',
    ]
    private checkbox = false

    private  validate () {
      this.$refs.form.validate()
    }
    private reset () {
      this.$refs.form.reset()
    }
    private resetValidation () {
      this.$refs.form.resetValidation()
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
