<template>
  <v-container>

        <v-card-actions class="justify-center">
        <v-text> <h3> Przeglądaj Pojazd</h3> </v-text>
        </v-card-actions>

        <v-card-actions class="justify-center">

<table width="1000px">
      <tr>
        <td><b><center>Marka</center></b></td>
        <td><b><center>Model</center></b></td>
        <td><b><center>Numer rejestracyjny</center></b></td>
        <td><b><center>Przegląd techniczny</center></b></td>
        <td><b><center>Ubezpieczenie</center></b></td>
        <td><b><center>Akcja</center></b></td>
      </tr>
      <tr v-for="pojazd in pojazdy" :key="pojazd.id">
        <td><center>{{pojazd.marka}}</center></td>
        <td><center>{{pojazd.model}}</center></td>
        <td><center>{{pojazd.rejestracyjny}}</center></td>
        <td><center>{{pojazd.przeglad}}</center></td>
        <td><center>{{pojazd.uoc}}</center></td>
        <td><button @click="deletePojazd(pojazd)">
                <center><v-icon color="red">mdi-delete</v-icon></center>
            </button></td>
      </tr>
</table> 
        </v-card-actions>

	
        </v-container>
</template>
<script>

import axios from 'axios';
const URL = 'http://localhost:8000/pojazd/';

export default{

        data(){
                return{
            pojazd: '', 
            pojazdy: [{
                    marka: '',
                    model: '',
                    rejestracyjny: '',
                    przeglad: '',
                    uoc: '',
                }]
                };
        },
// Wyświetla wszystkie informacje na temat pojazdu

async created(){
        try{
                const response = await axios.get(URL)
                this.pojazdy = response.data;
        } catch(err){
                console.log(err);
        }
}, 
    methods: {

    
// Metoda usuwająca pojazd

        async deletePojazd (pojazd) {
            try {
                await axios.delete (`${URL}${pojazd.id}/`);
                window.location.reload();
                this.pojazd = this.pojazd.filter(del => del.id !== pojazd.id);
                      
                                
            } catch (err) 
            {
                console.log(err);
            }
        
        }, 
        

    } 

 
}


</script>
