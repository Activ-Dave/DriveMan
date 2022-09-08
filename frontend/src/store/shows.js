import http from '@/http.js';
const SHOWS_URL = 'http://localhost:8000/api/v1/Trasy/';

const state= {
	shows: []
};
const getters= {
	getShows(state){
		return state.shows;
	}
};
const mutations= {
	setShows(state, shows){
		state.shows = [...shows]
	},
};
const actions= {
	async fetchShows(context, payload){
		try{
			const response = await http().get(SHOWS_URL, { params: payload });
			context.commit('setShows', response.data);
		}catch(err){
			console.log(err)
		}
	}
};

export default{
	state,
	getters,
	mutations,
	actions
};
