<template>
	<v-form>
		<v-col
		cols="12">
			<v-text-field 
			label="Marka"
			v-model="carMake"
			outlined
			></v-text-field>
	
			<v-text-field
			label="Model"
			v-model="carModel"
			outlined
			></v-text-field>
			
			<v-text-field
			label="Numer rejestracyjny (bez spacji)"
			v-model="carLicence"
			outlined
			></v-text-field>

			<v-text-field
			label="Dodatkowe informacje"
			v-model="description"
			outlined
			></v-text-field>
				
		</v-col>
		<v-col cols="12">	
			<v-btn @click="add">Dodaj</v-btn>
		</v-col>
	</v-form>
</template>

<script>

import { mapActions } from 'vuex';

export default {
	
	addCar: {
		required: true,
		type: Object
	},

	data(){
		return{
			carMake: '',
			carModel: '',
			carLicence: '',
			description:'',
		};
	},

	methods: {
		...mapActions({
			addCar: 'addCar'
		}),
		async add(){
			await this.addCar({
				carMake: this.carMake, carModel: this.carModel, carLicence: this.carLicence, description: this.description
			});
			this.carMake= '',this.carModel= '', this.carLicence= '', this.description= '';
		}
	}


};	
</script>

