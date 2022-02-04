import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/personajes',
    name: 'Personajes',
    component: () => import(/* webpackChunkName: "about" */ '../views/Personajes.vue')
  },

  {
    path: '/lugares',
    name: 'Lugares',
    component: () => import(/* webpackChunkName: "about" */ '../views/Lugares.vue')
  },

  {
    path: '/videos',
    name: 'Videos',
    component: () => import(/* webpackChunkName: "about" */ '../views/Videos.vue')
  },

  {
    path: '/episodios',
    name: 'Episodios',
    component: () => import(/* webpackChunkName: "about" */ '../views/Episodios.vue')
  },
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
