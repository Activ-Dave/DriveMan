import http from '@/http';
const CARS_URL = 'http://127.0.0.1:8000/api/v1/Pojazd/';

const state = {
	cars: []
};

const getters= {
	getCars(state){
		return state.cars;
	}
};

const mutations= {
	setCars(state, cars){
		state.cars = [...cars]
	},
	addCar(state, car){
		state.cars = car
	}
};

const actions= {
	async fetchCars(context, payload){
		try{
			const response = await http().get(CARS_URL, {params: payload });
			context.commit('setCars', response.data);
		}catch(err){
			console.log(err)
		}
	},
	async addCar(context, payload){
		try{
			const response = await http().post(CARS_URL, payload);
			context.commit('addCar', response.data);
		}catch(err){
			console.log(err);
		}
	},
	async changeCar(context, payload){
		try{
			const response = await http().patch(CARS_URL, payload);
			context.commit('changeCar', response.data);
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
