import Vue from 'vue';
import VueRouter from 'vue-router';
import Home from '@/views/HomeView.vue';
import Tours from '@/views/Tours.vue';
import Cars from '@/views/Cars.vue';
import Add from '@/views/Add.vue';

Vue.use(VueRouter)

const routes = [
	{
		path: '/',
		name: 'home',
		component: Home
	},
	{
		path: '/trasy',
		name: 'trasy',
		component: Tours,
		props: true
	},
	{
		path: '/pojazdy',
		name: 'pojazdy',
		component: Cars,
	},
	{
		path: '/dodaj',
		name: 'dodaj',
		component: Add,
	},



	{
		path: '/about',
		name: 'about',
		// route level code-splitting
		// this generates a separate chunk (about.[hash].js) for this route
		// which is lazy-loaded when the route is visited.
		component: () => import(/* webpackChunkName: "about" */ '../views/AboutView.vue')
	}
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
