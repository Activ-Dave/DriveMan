<template>
  <v-container>
        <v-card-actions class="justify-center">
        <v-text> <h3> Przeglądaj Pracownika</h3> </v-text>
        </v-card-actions>
           <v-card-actions class="justify-center">
<table width="1000px">
      <tr>
        <td><b><center>Imię</center></b></td>
        <td><b><center>Nazwisko</center></b></td>
        <td><b><center>Data urodzenia</center></b></td>
        <td><b><center>Numer Telefonu</center></b></td>
        <td><b><center>Akcja</center></b></td>

      </tr>
      <tr v-for="pracownik in pracownicy" :key="pracownik.id">
        <td><center>{{pracownik.imie}}</center></td>
        <td><center>{{pracownik.nazwisko}}</center></td>
        <td><center>{{pracownik.urodzony}}</center></td>
        <td><center>{{pracownik.telefon}}</center></td>
        <td><button @click="deletePracownik(pracownik)">
                <center><v-icon color="red">mdi-delete</v-icon></center>
            </button></td>
      </tr>
</table>
           </v-card-actions>
        </v-container>
</template>
<script>
import axios from 'axios';
const URL = 'http://localhost:8000/pracownik/';

export default{

        data(){
                return{
            pracownik: '', 
            pracownicy: [{
                    imie: '',
                    nazwisko: '',
                    urodzony: '',
                    telefon: '',
                }]
                };
        },
// Wyświetla wszystkie informacje na temat pracownika

async created(){
        try{
                const response = await axios.get(URL)
                this.pracownicy = response.data;
        } catch(err){
                console.log(err);
        }
}, 
    methods: {
// Metoda usuwająca pracownika

        async deletePracownik (pracownik) {
            try {
                await axios.delete (`${URL}${pracownik.id}/`);
                window.location.reload();
                this.pracownik = this.pracownik.filter(del => del.id !== pracownik.id);
            
            } catch (err) 
            {
                console.log(err);
            }
        
        }, 

    } 

 
}


</script>
