import axios from 'axios'

const TOKEN_URL = 'http://localhost:8000/api/v1/token/';
const REFRESH_URL = 'http://localhost:8000/api/v1/refresh/';

const state = {
	accessToken: null,
	refreshToken: null,
	isAuthenticated: false
};

const getters = {
	getAccessToken(state){
		return state.accessToken;
	},
	getRefreshToken(state){
		return state.refreshToken;
	},
	isAuthenticated(state){
		return state.isAuthenticated
	}
};

const mutations = {
	setAccessToken(state, accessToken){
		state.accessToken = accessToken;
	},
	setRefreshToken(state, refreshToken){
		state.refreshToken = refreshToken;
	},
	setAuthenticated(state, isAuthenticated){
		state.isAuthenticated = isAuthenticated;
	}
};

const actions = {
	async login(context, payload){
		try{
			const response = await  axios.post(TOKEN_URL, payload);
			context.commit('setAccessToken', response.data.access);
			context.commit('setRefreshToken', response.data.refresh);
			context.commit('isAuthenticated', true);
			return true;
		}catch (err){
			context.commit('setAccessToken', null);
			context.commit('setRefreshToken', null);
			context.commit('isAuthenticated', false);
			console.log(err);
			return false;
	}
	},
	async refresh(context){
	
		try{
			const response = await axios.post(REFRESH_URL, {refresh: context.getters.getRefreshToken});
			context.commit('setAccessToken', response.data.access);
		}catch (err){
			context.commit('setAccessToken', null);
			context.commit('setRefreshToken', null);
			context.commmit('isAuthenticated', false);
			console.log(err);
		}
	},
	async logout (context){
			context.commit('setAccessToken', null);
			context.commit('setRefreshToken', null);
			context.commmit('isAuthenticated', false);
	}
};

export default {
	state,
	getters,
	mutations,
	actions
};
