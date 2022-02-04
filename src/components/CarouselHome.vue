<template>
  <v-container 
    class="my-10"
    fluid
  >
      <v-carousel
      cycle
      height="400"
      hide-delimiter-background
      show-arrows-on-hover
    >
      <v-carousel-item
        v-for="(item, index) in attr"
        :key="index"
        :href="item.to"
        :src="item.src"
        link
        
      >
      <div
        class="text-h4 white--text ml-5 mt-5 font-weight-thin"
      >
          {{item.titulo}}
      </div>
      </v-carousel-item>
    </v-carousel>
  </v-container>
</template>

<script>
export default {
    name: 'CarouselHome',
    data(){
      return{
        attr:[
          { titulo:'RickYourself', 
            src:'https://blog.redbubble.com/wp-content/uploads/2018/09/rick-morty-banner.png',
            to:'https://gorickyourself.com/'
          },
          { titulo:'Tienda Rick y Morty', 
            src:'https://i.pinimg.com/originals/d3/2b/07/d32b07969093c496250aadff96e9a45c.jpg',
            to:'https://wbshop.com/collections/rick-and-morty'
          },
          { titulo:'Adult Swim', 
            src:'https://i.pinimg.com/736x/cc/8b/50/cc8b50867168cf1b8d871ce53e8c2d30.jpg',
            to:'https://www.adultswim.com/videos/rick-and-morty'
          },

        ]
      }
    }
  
}
</script>

<style>

</style>