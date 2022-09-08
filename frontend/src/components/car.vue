<template>
	<v-card>
		<v-card-title>{{car.carMake}}{{' || '}}{{car.carModel}}</v-card-title>
		<v-card-text v-text="car.carLicence"></v-card-text>
		<v-card-text>{{car.description}}</v-card-text>
	</v-card>
</template>

<script>

export default{
	name:"one-car",

	props:{
		car:{
			required: true,
			type: Object
		}
	},
};

</script>
