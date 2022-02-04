<template>
    <v-container
        class="mt-5" 
        fluid   
    >
        <v-layout>
            <v-flex>
                    <v-footer
                    class="mt-5"
                    :padless="padless"
                    absolute
                    dark
                    >
                    <v-card
                        flat
                        tile
                        width="100%"
                        class="black text-center"
                    >
                        <v-card-text>
                        <v-btn
                            v-for="icon in icons"
                            :key="icon"
                            class="mx-4"
                            icon
                        >
                            <v-icon size="24px">
                            {{ icon }}
                            </v-icon>
                        </v-btn>
                        </v-card-text>

                        <v-divider></v-divider>

                        <v-card-text class="white--text">
                        {{ new Date().getFullYear() }} — <strong>Rick y Morty</strong>
                        </v-card-text>
                    </v-card>
                    </v-footer>
                </v-flex>
        </v-layout>
       
    </v-container>
</template>

<script>
export default {
    name:'Footer',
    data(){
        return{
        icons: [
            'mdi-home',
            'mdi-email',
            'mdi-calendar',
            'mdi-delete',
        ],
        items: [
            'default',
            'absolute',
            'fixed',
        ],
        padless: true,
        variant: 'default',
      }
    },
  
}
</script>

<style>

</style>