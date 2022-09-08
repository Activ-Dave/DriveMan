<template>
	<v-container>
		<cars/>
	</v-container>
</template>

<script>

import {mapMutations, mapActions } from 'vuex';
import cars from '@/components/cars';

export default{

	name:"cars-list",

	components:{
		cars
	},

	async created(){
		this.fetchCars({ id: this.id });
	},

	methods: {
		...mapMutations({
			setCars: 'setCars'
		}),
		...mapActions({
			fetchCars: 'fetchCars'
		})
	},
};

</script>
