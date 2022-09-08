import axios from 'axios';
import store from '@/store/';

export default function(){
	const http = axios.create({
		headers: {
			Authorization: `Bearer ${store.getters.getAccessToken}`
	
		}
	});
	return http;
}

