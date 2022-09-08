<template>
	<v-container>
		<v-form>
			<v-col
			cols="12">
				<v-text-field 
				label="Skąd"
				v-model="forTour"
				outlined
				></v-text-field>
		
				<v-text-field
				label="Dokąd"
				v-model="toTour"
				outlined
				></v-text-field>
				
				<v-text-field
				label="Data początkowa (w formacie RRRR-MM-DD)"
				v-model="startTour"
				outlined
				></v-text-field>

				<v-text-field
				label="Data końcowa (w formacie RRRR-MM-DD)"
				v-model="stopTour"
				outlined
				></v-text-field>

				<v-text-field
				label="Długość trasy w km"
				v-model="distance"
				outlined
				></v-text-field>
				
			</v-col>
			<v-col cols="12">	
				<v-btn @click="add">Dodaj</v-btn>
			</v-col>
		</v-form>
	</v-container>
</template>

<script>

import { mapActions } from 'vuex';

export default {
	
	addTour: {
		required: true,
		type: Object
	},

//	props: {
//		addtour: {
//			required: true,
//			type: Object
//		}
//	},

	data(){
		return{
			forTour: '',
			toTour: '',
			startTour: '',
			stopTour: '',
			distance: '',
		};
	},

	methods: {
		...mapActions({
			addTour: 'addTour'
		}),
		async add(){
			await this.addTour({
				forTour: this.forTour, toTour: this.toTour, startTour: this.startTour, stopTour: this.stopTour, distance: this.distance
			});
			this.forTour= '',this.toTour= '', this.startTour= '', this.stopTour= '', this.distance= '';
		}
	}


};	
</script>

