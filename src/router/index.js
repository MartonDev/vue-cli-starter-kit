import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import About from '../views/About'
import NotFound from '../views/NotFound'

Vue.use(VueRouter)

const routes = [

  {

    path: '/',
    name: 'Home',
    component: Home

  },
  {

    path: '/about',
    name: 'About',
    component: About

  },
  //404
  {

    path: '/404',
    name: 'NotFound Manual',
    component: NotFound

  },
  {

    path: '*',
    name: 'NotFound',
    component: NotFound

  }

]

const router = new VueRouter({

  mode: 'history',
  base: process.env.BASE_URL,
  routes

})

export default router
