<template>
  <v-container>
        <v-card-actions class="justify-center">
        <v-text> <h3> Przeglądaj Trasę</h3> </v-text>
        </v-card-actions>
              
    <v-card-actions class="justify-center">
     
		<table width="1000px">
      <tr>
        <td><b><center>Miejsce rozpoczęcia</center></b></td>
        <td><b><center>Miejsce zakończenia</center></b></td>
        <td><b><center>Data rozpoczęcia</center></b></td>
        <td><b><center>Data zakończenia</center></b></td>
        <td><b><center>Dystans</center></b></td>
        <td><b><center>Akcja</center></b></td>
      </tr>
      
      <tr v-for="trasa in trasy" :key="trasa.id">
        <td><center>{{trasa.mstart}}</center></td>
        <td><center>{{trasa.mstop}}</center></td>
        <td><center>{{trasa.dstart}}</center></td>
        <td><center>{{trasa.dstop}}</center></td>
        <td><center>{{trasa.kilometry}}  km</center></td>
        <td><button @click="deleteT(trasa)">
                <center><v-icon color="red">mdi-delete</v-icon></center>
            </button></td>
      </tr>
    </table>

        </v-card-actions>


       </v-container>
</template>

<script>
import axios from 'axios';
const URL = 'http://localhost:8000/trasa/';

export default{

        data(){
                return{
            trasa: '', 
            trasy: [{
                    mstart: '',
                    mstop: '',
                    datastart: '',
                    datastop: '',
                    kilometry: '',
                }]
                };
        },
// Wyświetla wszystkie informacje na temat pracownika

async created(){
        try{
                const response = await axios.get(URL)
                this.trasy = response.data;
        } catch(err){
                console.log(err);
        }
}, 
    methods: {
// Metoda usuwająca pracownika

        async deleteT (trasa) {
            try {
                await axios.delete (`${URL}${trasa.id}/`);
                window.location.reload();
                this.trasa = this.trasa.filter(del => del.id !== trasa.id);
            
            } catch (err) 
            {
                console.log(err);
            }
        
        }, 

    } 

 
}


</script>
