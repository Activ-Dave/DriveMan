<template>
  <v-container>
        <v-card-actions class="justify-center">
        <v-text> <h3> Dodaj Trasę</h3> </v-text>
        </v-card-actions>
      
		<v-form ref="form">
    <v-text-field v-model="trasy.mstart" :rules=" [value => !!value || 'To pole jest wymagane']" label="Miejsce rozpoczęcia" outlined></v-text-field>
		<v-text-field v-model="trasy.mstop" :rules=" [value => !!value || 'To pole jest wymagane']" label="Miejsce zakończenia" outlined></v-text-field>
    <v-text-field type="date" v-model="trasy.dstart" :rules="[value => !!value || 'To pole jest wymagane']" label="Data rozpoczęcia" outlined></v-text-field>
    <v-text-field type="date" v-model="trasy.dstop" :rules="[value => !!value || 'To pole jest wymagane']" label="Data zakończenia" outlined></v-text-field>
    <v-text-field v-model="trasy.kilometry" :rules="[value => !!value || 'To pole jest wymagane']" label="Suma kilometrów" outlined></v-text-field>


		</v-form>


        <v-btn class="center" color="primary" dark @click="dodajTrase"> Dodaj </v-btn>
		
        </v-container>
</template>
<script>

import axios from 'axios';
const URL = 'http://localhost:8000/trasa/';

export default {
        data(){
                return{
                  
                  trasy: [{
                    mstart: '',
                    mstop: '',
                    dstart: '',
                    dstop:'',
                    kilometry:'',
                    
                }]
                             
                };
        },

async created(){
        try{
                const response = await axios.get(URL)
                this.opis = response.data;
        } catch(err){
                console.log(err);
        }
}, 
    methods: {

// Metoda dodająca nową listę zadań
        
        async dodajTrase () {

// Sprawdza czy podana jest nazwa listy 
 
            try {

                const response = await axios.post (URL, {
                  mstart: this.trasy.mstart,
                  mstop: this.trasy.mstop,
                  dstart: this.trasy.dstart,
                  dstop: this.trasy.dstop,
                  kilometry: this.trasy.kilometry,
                  
                  });
                this.trasy.push (response.data)
                this.$refs.form.reset()
                } catch (err)
            {
                console.log(err);
            }
                  }

    } }

  

//  dodajTrase () {
//   this.$refs.form.validate()
//   this.$refs.form.reset()
//
//  },
//  clear () {
//        this.mstart = ''
//        this.mkoniec = ''
//        this.dstart = ''
//        this.dkoniec = ''
//              },
</script>


