import { createRouter, createWebHistory } from 'vue-router'

import Home from '../Views/home.vue'
import About from '../Views/about.vue'
import Contact from '../Views/contact.vue'
import Services from '../Views/services.vue'
import login from '../Views/login.vue'
import Register from '../Views/register.vue'

import Kigali from '../Views/kigali.vue'
import Northern from '../Views/northern.vue'
import Southern from '../Views/southern.vue'
import Western from '../Views/western.vue'
import Eastern from '../Views/eastern.vue'
import dashboard from '../Views/dashboard.vue'

import Photos from '../Views/photos.vue'
import Videos from '../Views/videos.vue'


const routes = [
  {
    path: '/',
    name: 'home',
    component: Home
  },

  {
    path: '/login',
    name: 'login',
    component: login
  },
    
  {
    path: '/register',
    name: 'register',
    component: Register
  },

  {
    path: '/about',
    name: 'about',
    component: About
  },

  {
    path: '/services',
    name: 'services',
    component: Services
  },

  {
    path: '/contact',
    name: 'contact',
    component: Contact
  },

  {
    path: '/kigali',
    name: 'kigali',
    component: Kigali
  },

  {
    path: '/northern',
    name: 'northern',
    component: Northern
  },

  {
    path: '/southern',
    name: 'southern',
    component: Southern
  },

  {
    path: '/western',
    name: 'western',
    component: Western
  },

  {
    path: '/eastern',
    name: 'eastern',
    component: Eastern
  },

  {
    path: '/dashboard',
    name: 'dashboard',
    component: dashboard
  },

  {
    path: '/photos',
    name: 'photos',
    component: Photos
  },

  {
    path: '/videos',
    name: 'videos',
    component: Videos
  }
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router
