import Vue from 'vue'
import Router from 'vue-router'
import Home from '../views/Home.vue'

Vue.use(Router)

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
    },
    {
      path: '/about',
      name: 'about',
      component: () =>
          import('../views/About.vue')
    },
    {
      path: '/vehicles',
      name: 'vehicles',
      component: () => import('../views/Vehicles.vue')
    },
    {
      path: '/rentVehicle/:id',
      name: 'rentVehicle',
      props: true,
      component: () => import('../views/RentVehicle.vue')
    },
    {
      path: '/shareVehicle',
      name: 'shareVehicle',
      component: () => import('../views/ShareVehicle.vue')
    },
    {
      path: '/dashboard',
      name: 'dashboard',
      component: () => import('../views/Dashboard.vue')
    },
    {
      path: '/login',
      name: 'login',
      component: () => import('../views/Login.vue')
    },
    {
      path: '/signup',
      name: 'signup',
      component: () => import('../views/SignUp.vue')
    }
  ]
})

// Vehicles
