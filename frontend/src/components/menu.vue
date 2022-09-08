<!-- Komponent wyświetlający nazwę projektu wraz z górnym menu -->

<template>
	<v-card>
		<v-card-title>
			<h1 class="font-weight-bold">
				DriveMan
			</h1>
		</v-card-title>
		<v-card-text>
			<h3 class="text-right">
				Aplikacja do zarządzania firmą transportową
			</h3>
		</v-card-text>
		<v-tabs
		background-color="black"
		color="white"
		dark
		grow>
			<v-tab :to="'/trasy'">Trasy</v-tab>
			<v-tab :to="'/pojazdy'">Pojazdy</v-tab>
			<v-tab :to="'/dodaj'">Dodaj</v-tab>
		</v-tabs>
	</v-card>

</template>

<script>
export default {
	name: 'main-menu',
	data: () => ({
	//
	}),			
};
</script>

<style scoped>
</style>
