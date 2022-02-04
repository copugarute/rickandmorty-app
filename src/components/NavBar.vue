<template>
  <v-container class="ma-0 pa-0">
    <v-app-bar
      color="black"
      dark
      app
    >
      <v-app-bar-nav-icon 
        @click="drawer = true"
      ></v-app-bar-nav-icon>

      <v-toolbar-title 
        class="ml-5">
          Rick y Morty Wikia
      </v-toolbar-title>
    </v-app-bar>

    <v-navigation-drawer
      v-model="drawer"
      temporary
      fixed
      color="secondary"
    >
      <v-list
        nav
        dense
      >
        <v-list-item-group
          v-model="group"
        >
          <v-list-item
            v-for="(item, index) in items"
            :key="index"
            :to="item.path"
          >
            <v-list-item-title
              class="font-weight-thin white--text list-item subtitle-1"
            > 
              {{item.title}} 
            </v-list-item-title>
          </v-list-item>
        </v-list-item-group>
      </v-list>
    </v-navigation-drawer>
  </v-container>
</template>
  
<script>
  
  export default {
    name: 'NavBar',

    components: {
      
    },

    data(){
        return{
          drawer: false,
          group: null,
          items:[
            {title:"Home", path:"/"},
            {title: "Personajes", path:"/personajes"},
            {title:"Lugares", path:"/lugares"},
            {title:"Episodios", path:"/episodios"},
            {title:"Videos", path:"/videos"},
          ]
        }
    },

    watch: {
      group () {
        this.drawer = false
      },
    },
  }
</script>
