<template>
	<v-container>
		<v-row>
			<v-col
			v-for="car in cars"
			:key="car.id"
			cols="12">

			<car :car="car"></car>
			</v-col>
		</v-row>
	</v-container>
</template>

<script>
import car from '@/components/car';
import { mapGetters } from 'vuex';

export default{
	name: "car-list",

	components:{
		car
	},

	computed:{
		...mapGetters({
			cars: 'getCars'
		})
	},
};

</script>
