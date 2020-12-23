<template>
  <div class="containerWithBackground">
    <Intro message="Share your car or get your car shared!!!!"/>
  </div>
</template>

<script>

import Intro from '@/components/Intro.vue'

export default {
  name: 'Home',
  components: {
    Intro
  }
}
</script>

<style scoped>
   .containerWithBackground{
    position: relative;
    z-index:1;
    overflow:hidden;
    height: 100vh;
    display: flex;
    align-items: center;
  }
  .containerWithBackground:before{
    background-image: url("./assets/vehiclesalot.jpg");
    background-size: cover;
    content: '';
    height: 100vh;
    width: 100vw;
    display: flex;
    justify-content: center;
    align-items: center;
    z-index:-1;
    position:absolute;
    left:0;
    top:0;
    opacity:0.4;
  }
</style>
