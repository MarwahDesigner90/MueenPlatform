import { createRouter, createWebHistory } from 'vue-router'


import signup from '@/views/signup.vue'
import login from '@/views/login.vue'
import visitore from '@/views/visitore.vue'
import admin from '@/views/admin.vue'
import profile from '@/views/profile.vue'
import services from '@/views/services.vue'
import ServicesOne from '@/views/ServicesOne.vue'
import chat from '@/views/chat.vue'
import join from '@/views/join.vue'
import tlkhes from '@/views/tlkhes.vue'
import map from '@/views/khareta.vue'
const routes = [


  {
    path: '/signup',
    name: 'signup',
    component: signup
  },
  {
    path: '/login',
    name: 'login',
    component: login
  },
  {
    path: '/visitore',
    name: 'visitore',
    component: visitore
  },
  {
    path: '/admin',
    name: 'admin',
    component: admin
  },
  {
    path: '/profile',
    name: 'profile',
    component: profile
  },
  {
    path: '/services',
    component: services
  },
  {
    path: '/services/ServicesOne',
    name: 'ServicesOne',
    component: ServicesOne,
  },
  {
    path: '/services/chat',
    name: 'chat',
    component: chat,
  }
  ,
  {
    path: '/services/join',
    name: 'join',
    component: join,
  } ,
  {
    path: '/services/tlkhes',
    name: 'tlkhes',
    component: tlkhes,
  },
  {
    path: '/services/map',
    name: 'map',
    component: map,
  }

]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
