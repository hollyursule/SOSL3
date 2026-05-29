import { createRouter, createWebHistory } from 'vue-router'

import Home from '../Views/home.vue'
import About from '../Views/about.vue'
import Contact from '../Views/contact.vue'
import Services from '../Views/services.vue'

import Kigali from '../Views/kigali.vue'
import Northern from '../Views/northern.vue'
import Southern from '../Views/southern.vue'
import Western from '../Views/western.vue'
import Eastern from '../Views/eastern.vue'

import Photos from '../Views/photos.vue'
import Videos from '../Views/videos.vue'


const routes = [
  {
    path: '/',
    component: Home
  },

  {
    path: '/about',
    component: About
  },

  {
    path: '/services',
    component: Services
  },

  {
    path: '/contact',
    component: Contact
  },

  {
    path: '/kigali',
    component: Kigali
  },

  {
    path: '/northern',
    component: Northern
  },

  {
    path: '/southern',
    component: Southern
  },

  {
    path: '/western',
    component: Western
  },

  {
    path: '/eastern',
    component: Eastern
  },

  {
    path: '/photos',
    component: Photos
  },

  {
    path: '/videos',
    component: Videos
  }
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router
