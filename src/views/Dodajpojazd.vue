
<template>

        <v-container>

        <v-card-actions class="justify-center">
        <v-text> <h3> Dodaj Pojazd</h3> </v-text>
        </v-card-actions>

	<v-form ref="form">
    
    <v-text-field v-model="pojazdy.marka" :rules="[v => !!v || 'To pole jest wymagane']" label="Marka" outlined></v-text-field>
    <v-text-field v-model="pojazdy.model" :rules="[v => !!v || 'To pole jest wymagane']" label="Model" outlined ></v-text-field>
    <v-text-field counter="7" v-model="pojazdy.rejestracyjny" :rules="[v => v.length <= 7 || 'Maxymalnie 7 znaków']" label="Numer rejestracyjny" outlined ></v-text-field>
    <v-text-field type="date" v-model="pojazdy.przeglad" :rules="[v => !!v || 'To pole jest wymagane']" label="Przegląd rejestracyjny" outlined ></v-text-field>
    <v-text-field type="date" v-model="pojazdy.uoc" :rules="[v => !!v || 'To pole jest wymagane']" label="Ubezpieczenie" outlined ></v-text-field>
  
    </v-form>
  <v-btn color="primary" dark @click="dodajPojazd"> Dodaj </v-btn>
		
        

        </v-container>
</template>


<script>


import axios from 'axios';
const URL = 'http://localhost:8000/pojazd/';

export default{

        data(){
                return{
            pojazdy: [{
                    marka: '',
                    model: '',
                    rejestracyjny: '',
                    przeglad:'',
                    uoc:'',
                    
                }]
                };
        },



    methods: {

// Metoda dodająca nową nowy pojazd
        
        
        async dodajPojazd () {

         if (this.$refs.form.validate() ){

            try {

                const response = await axios.post (URL, {
                    
                    marka: this.pojazdy.marka, 
                    model: this.pojazdy.model, 
                    rejestracyjny: this.pojazdy.rejestracyjny, 
                    przeglad: this.pojazdy.przeglad, 
                    uoc: this.pojazdy.uoc}
                    
                    );

                this.pojazdy.push (response.data)
                this.$refs.form.reset()
                } catch (err)
            {
                console.log(err);
            }
         }

        }

    } 

 
}

</script>


<style>

</style>

	
	
	
