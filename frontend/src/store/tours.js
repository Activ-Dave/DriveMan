import http from '@/http';
const TOURS_URL = 'http://127.0.0.1:8000/api/v1/Trasy/';
//import axios from 'axios';

const state = {
	tours: []
};

const getters= {
	getTours(state){
		return state.tours;
	}
};

const mutations= {
	setTours(state, tours){
		state.tours = [...tours]
	},
	addTour(state, tour){
		state.tours = tour
	},
};

const actions= {
	async fetchTours(context, payload){
		try{
			const response = await http().get(TOURS_URL, {params: payload });
			context.commit('setTours', response.data);
		}catch(err){
			console.log(err)
		}
	},
	async addTour(context, payload){
		try{
			const response = await http().post(TOURS_URL, payload);
			context.commit('addTour', response.data);
		}catch(err){
			console.log(err);
		}
	}
};

export default{
	state,
	getters,
	mutations,
	actions
};
