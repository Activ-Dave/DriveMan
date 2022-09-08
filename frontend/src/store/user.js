import http from '@/http';
const PROFIL_URL = 'http://127.0.0.1:8000/api/v1/User';

const state = {
	user: []
};

const getters= {
	getUser(state){
		return state.user;
	}
};

const mutations= {
	setCars(state, user){
		state.user = [...user]
	}
};

const actions= {
	async fetchUser(context, payload){
		try{
			const response = await http().get(PROFIL_URL, {params: payload });
			context.commit('setUser', response.data);
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
