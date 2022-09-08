<template>
	<div height="40px">
		<v-toolbar color="#222222" dark>
			<v-toolbar-title>Praca inżynierska. Autorzy: <b>{{make}}</b>.<br> WSPA Lublin 2022.</v-toolbar-title>
		</v-toolbar>
	</div>
</template>

<script>

export default {
	name: 'footer-down',

	data (){
		return{
			make: 'Łukasz Lato / Dawid Wąsala',
		}
	}
}
</script>
