<template>
  <v-app>
    <v-container>
    <NavBar/>
    
    
  </v-container>
    <v-main class="mb-8 pa-0">
      <router-view/>
    </v-main>
    <Footer/>
    
  </v-app>
</template>

<script>
import Footer from './components/Footer.vue';

import NavBar from './components/NavBar.vue'

export default {
  name: 'App',
  components: {
    NavBar,
    Footer
    },

  data: () => ({
    //
  }),
};
</script>
<style>
  *{
    font-family: 'Courier New', Courier, monospace;
    
  }
  body{
    background-color: #000000;
  }
</style>
