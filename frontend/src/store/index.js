import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

import tours from '@/store/tours.js';
import cars from '@/store/cars.js';
import shows from '@/store/shows.js';
import auth from '@/store/auth.js';

export default new Vuex.Store({
	state: {

	},
	getters:{

	},
	mutations: {

	},
	actions: {

	},
	modules: {
	tours,
	cars,
	shows,
	auth
	}
});
