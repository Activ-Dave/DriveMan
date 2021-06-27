<template>
  <v-container>
        <v-card-actions class="justify-center">
        <v-text> <h3> Zaloguj</h3> </v-text>
        </v-card-actions>
      
		<v-form>
    <v-text-field type= "text" label="Login" outlined v-model="login"></v-text-field>
		<v-text-field type="password" label="Hasło" outlined v-model="haslo"></v-text-field>

		</v-form>


        <v-btn class="center" color="primary" dark @click="zaloguj"> Zaloguj się </v-btn>
		

        </v-container>
</template>

<script>
export default {
  
}
</script>
