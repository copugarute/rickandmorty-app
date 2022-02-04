<template>
  <v-container 
    class="my-10 black"
    xs12 
    fluid 
  >
    <v-layout 
      class=""
      xs12  
    >
      <v-flex 
        class="pt-10" 
        xs12>
          <v-img
            lazy-src="https://picsum.photos/id/11/10/6"
            max-height="400"
            min-height="200"
            min-widht="auto"
            max-width="auto"
            aspect-ratio="1.0"
            position="center center"
            src="../assets/banner2.jpg"
          ></v-img>
      </v-flex>
    </v-layout>

    <v-divider 
      dark
    >
    </v-divider>
    <!-- CarouselHome -->
    <v-flex>
      <carousel-home/>
    </v-flex>
    <h1 
      class=" my-8 titulo_1 white--text" 
    >
      Personajes Principales
    </h1>
    <!-- CardsHome -->
    <v-flex>
      <cards-home/>
    </v-flex>
    
     
  </v-container>
</template>
  
<script>
import CardsHome from '../components/CardsHome.vue'
import CarouselHome from '../components/CarouselHome.vue'
  

  export default {
    name: 'Home',

    components: {
        CardsHome,
        CarouselHome
   
    },
    data(){
      return{
        
      }
    }
  }
</script>

