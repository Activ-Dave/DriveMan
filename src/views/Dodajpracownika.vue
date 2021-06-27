
<template>

        <v-container>

        <v-card-actions class="justify-center">
        <v-text> <h3> Dodaj Pracownika</h3> </v-text>
        </v-card-actions>

	<v-form ref="form">
    
    <v-text-field v-model="pracownicy.imie" :rules="[v => !!v || 'To pole jest wymagane']" label="Imię" outlined></v-text-field>
    <v-text-field v-model="pracownicy.nazwisko" :rules="[v => !!v || 'To pole jest wymagane']" label="Nazwisko" outlined ></v-text-field>
    <v-text-field counter="9" v-model="pracownicy.telefon" :rules="[v => v.length <= 9 || 'Maxymalnie 9 znaków']" label="Numer telefonu" outlined ></v-text-field>
    <v-text-field type="date" v-model="pracownicy.urodzony" :rules="[v => !!v || 'To pole jest wymagane']" label="Data urodzenia" outlined ></v-text-field>
    
    </v-form>
  <v-btn color="primary" dark @click="dodajPracownika"> Dodaj </v-btn>
		
        

        </v-container>
</template>


<script>


import axios from 'axios';
const URL = 'http://localhost:8000/pracownik/';

export default{

        data(){
                return{

            pracownicy: [{
                    imie: '',
                    nazwisko: '',
                    urodzony: '',
                    telefon:'',
                    
                }]
                };
        },



    methods: {

// Metoda dodająca nową nowego pracownika
        
        
        async dodajPracownika () {

         if (this.$refs.form.validate() ){

            try {

                const response = await axios.post (URL, {
                    
                    imie: this.pracownicy.imie, 
                    nazwisko: this.pracownicy.nazwisko, 
                    urodzony: this.pracownicy.urodzony, 
                    telefon: this.pracownicy.telefon,
                    
                    });
                this.pracownicy.push (response.data)
                this.$refs.form.reset()
                } catch (err)
            {
                console.log(err);
            }
         }

        }

    } 

 
}

//      this.$refs.form.validate() 
</script>


<style>

</style>

	
	
	
