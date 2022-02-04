<template>
  <v-container
    class="mb-10" 
    fluid
    max-width="auto"
  >
       <v-layout class="" row wrap>

        <!-- primera card -->
        <v-flex 
          v-for="(item,index) in personajes" 
          :key="index"
          xs6 md6 lg3>
          <v-card
            class=" mx-auto my-auto"
            
            max-width="344"
            outlined
            dark
          >
            <v-list-item three-line>
              <v-list-item-content>
                <v-list-item-title class="text-h5 ">
                  {{item.name}}
                </v-list-item-title>
                <v-list-item-subtitle>{{item.species}}</v-list-item-subtitle>
                <v-list-item-subtitle>{{item.gender}}</v-list-item-subtitle>
                
              </v-list-item-content>

              <v-list-item-avatar
                tile
                size="100"
                color="grey"
              >
                <v-img
                  class=""
                  size="100"
                  :src="item.image"
                ></v-img>
              </v-list-item-avatar>
            </v-list-item>

            <v-card-actions>
              <v-btn
                outlined
                rounded
                text
              >
                Ver Más
              </v-btn>
            </v-card-actions>
          </v-card>
        </v-flex>
    </v-layout>
  </v-container>
</template>

<script>


export default {
  name:'CardsHome',
  data(){
    return{
      personajes: Object,    
    }
  },
  created(){
      console.log('Verificando')
      fetch('https://rickandmortyapi.com/api/character')
      .then(response => response.json())
      .then(data => {
        console.log(data.results)
        this.personajes = data.results
        })
      
      .catch(e => {
        console.log(e)
      })
  },

  

}
</script>
