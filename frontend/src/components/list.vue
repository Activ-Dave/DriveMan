<template>
	<v-container>
		<v-row>
			<v-col
			v-for="tour in tours"
			:key="tour.id"
			cols="12" lg="3" md="4" sm="4" xs="12">
				<tour
				:tour="tour"></tour>
			</v-col>
		</v-row>
	</v-container>
</template>

<script>

import tour from '@/components/tours';
import { mapGetters } from 'vuex';

export default{
	name: "tour-list",

	components:{
		tour
	},

	computed:{
		...mapGetters({
			tours: 'getTours'
		})
	},
};	
</script>
