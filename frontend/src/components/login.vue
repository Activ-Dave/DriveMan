<template>
	<v-container>
		<v-row>
			<v-col cols="12">
				<h2>Panel Logowania</h2>
				<v-form @submit.prevent="submit">
					<v-text-field 
					name="username"
					label="email"
					type="text"
					v-model="username"
					></v-text-field>
					<v-text-field
					name="password"
					label="hasło"
					type="password"
					v-model="password"
					></v-text-field>
					<v-btn type="submit">Zaloguj</v-btn>
				</v-form>
			</v-col>
		</v-row>
	</v-container>
</template>

<script>
import { mapActions } from 'vuex';
import router from '@/router';

export default {

	name: 'login-form',
	
	data(){
		return{
			username: '',
			password: ''
		};
	},
	methods: {
		...mapActions({
			login: 'login'
		}),
		async submit (){
			const { username, password } = this;
			if  (await this.login({ username, password })){
				console.log('zalogowano pomyślnie');
				router.push({ name: 'trasy' })
			}else{
				console.log('błąd logowania')
			}
		}
	}
};
</script>
