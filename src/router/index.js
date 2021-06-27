import Vue from 'vue'
import VueRouter from 'vue-router'


Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Strona Główna',
    component: () => import('../views/Glowna.vue')
  },  
  {
    path: '/dodajtrase',
    name: 'Dodaj Trasę',
    component: () => import('../views/Dodajtrase.vue')
  },
  {
    path: '/dodajpojazd',
    name: 'Dodaj Pojazd',
    component: () => import('../views/Dodajpojazd.vue')
  },
  {
    path: '/dodajpracownika',
    name: 'Dodaj Pracownika',
    component: () => import('../views/Dodajpracownika.vue')
  },
  {
    path: '/przegladajpracownika',
    name: 'Przeglądaj Pracownika',
    component: () => import('../views/Przegladajpracownika.vue')
  },
  {
    path: '/przegladajpojazd',
    name: 'Przeglądaj Pojazd',
    component: () => import('../views/Przegladajpojazd.vue')
  },
  {
    path: '/przegladajtrase',
    name: 'Przeglądaj Trasę',
    component: () => import('../views/Przegladajtrase.vue')
  },
  {
    path: '/zaplanujtrase',
    name: 'Zaplanuj Trasę',
    component: () => import('../views/Zaplanujtrase.vue')
  },
  
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
