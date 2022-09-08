<template>
	<v-container>
	<v-row>

		<v-col
		cols="12" lg="6" md="8" sm="12">
			<v-card>
				<v-card-title>Dodaj trasę</v-card-title>
				<addTour/>
			</v-card>
		</v-col>
		<v-spacer/>
		<v-col
		cols="12" lg="6" md="8" sm="12">
			<v-card>
				<v-card-title>Dodaj pojazd</v-card-title>
				<addCar/>
			</v-card>
		</v-col>

	</v-row>
	</v-container>
</template>

<script>

import addTour from '@/components/AddTour.vue';
import addCar from '@/components/AddCar.vue';

export default {

	name:"add-things",

	components: {
		addTour,
		addCar
	},
};	
</script>
