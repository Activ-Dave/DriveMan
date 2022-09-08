<template>
	<v-container>
		<list/>
	</v-container>
</template>

<script>

import { mapMutations, mapActions } from 'vuex';
import list from '@/components/list';
//import http from  '@/http';


export default{
	name: "view-list",

	components:{
		list
	},

	async created(){
		this.fetchTours({ id: this.id });
	},	
	
	methods: {
		...mapMutations({
			setTours: 'setTours'
		}),
		...mapActions({
			fetchTours: 'fetchTours'
		})
	},

//	data (){
//		return{
//			tours:[]
//		};
//	},
//	
//	async created (){
//		try{
//			const response = await http().get('http://localhost:8000/api/v1/Trasy/');
//			this.tours = response.data;
//		}catch(err){
//			console.log(err);
//		}
//	}
};	
</script>
