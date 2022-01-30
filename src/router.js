import { createRouter, createWebHashHistory } from 'vue-router'

import HomeView from './views/HomeView.vue'

import AboutView from './views/AboutView.vue'

import BeerView from './views/BeerView.vue'

export default createRouter({
  history: createWebHashHistory(),
  routes: [
    {
      name: 'home',
      component: HomeView,
      path: '/'
    },
    {
      name: 'aboutview',
      component: AboutView,
      path: '/about'
    },
    {
      name: 'beerview',
      component: BeerView,
      path: '/beerview/:id'
    }
  ]
})
