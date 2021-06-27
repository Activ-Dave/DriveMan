<!-- Komponent wyświetla dodaje oraz usuwa listy zadań  -->
<template>

        <v-container>
            <v-layout row wrap>
<!-- Ustawianie list zadań obok siebie  -->

        <v-flex  xs 12 sm6 md4 lg3 v-for="opisy in opis"
        :key="opisy.id">
	<v-card flat class="ma-3" >

		<v-card-text>
		<div style="color: red; font-size: 25px; float: right;">
<!-- Przycisk do usuwania listy zadań -->
            <button @click="deleteOpis(opisy)">
                <v-icon color="red">mdi-delete</v-icon>
            </button>
<!-- Wyświetlanie danych nazwy i opisu listy -->            
        </div>				

		<div style="font-size: 20px; text-align: center;"><b>{{opisy.nazwalisty}}</b> </div>
		<div>0/0</div>
		<div>{{opisy.opislisty}} </div>
		
		</v-card-text>		

	</v-card>


</v-flex>

<!-- Ramka służąca do dodawania listy zadań -->

<v-card elevation="0" class="ma-3" >
		
        <v-card-actions class="justify-center">
        <v-text v-show="!aktywne"> <h3> Dodaj Listę</h3> </v-text>
        </v-card-actions>
		<v-form>
		<v-text v-show="!aktywne" class="red--text"><center><b>{{wymagane}}</b></center></v-text> 
        <v-text-field v-model="opisy.nazwalisty" v-show="!aktywne" label="Nazwa" outlined></v-text-field>
		<v-text-field v-model="opisy.opislisty" v-show="!aktywne" label="Opis" outlined ></v-text-field>
		</v-form>
				<v-card-actions class="justify-center">
        <v-btn color="primary" @click="aktywne = !aktywne" >    
            {{ aktywne ? 'Dodaj' : 'Anuluj' }}	
        </v-btn>
        <v-btn v-show="!aktywne" color="primary" dark @click="dodajListe"> Zapisz </v-btn>
		
    </v-card-actions>
</v-card>
            </v-layout>

        </v-container>
</template>


<script>


import axios from 'axios';
const URL = 'http://localhost:8000/opis/';

export default{

        data(){
                return{

			wymagane:'',
			aktywne: true,
			komunikat: false,
            opis: '',
            opisy: [{
                    nazwalisty: '',
                    opislisty: '',
                }]
                };
        },
// Wyświetla nazwę i opis listy

async created(){
        try{
                const response = await axios.get(URL)
                this.opis = response.data;
        } catch(err){
                console.log(err);
        }
}, 
    methods: {
// Metoda usuwająca listę zadań

        async deleteOpis (opis) {
            try {
                await axios.delete (`${URL}${opis.id}/`);
                this.opis = this.opis.filter(del => del.id !== opis.id);
                window.location.reload()
            
            } catch (err) 
            {
                console.log(err);
            }
        
        }, 

// Metoda dodająca nową listę zadań
        
        async dodajListe () {

// Sprawdza czy podana jest nazwa listy 
 
        if (this.opisy.nazwalisty){
            try {

                const response = await axios.post (URL, {nazwalisty: this.opisy.nazwalisty, opislisty: this.opisy.opislisty});
                this.opisy.push (response.data)
                
                } catch (err)
            {
                console.log(err);
            }
            } else {
                this.wymagane='Nazwa wymagana'
            }
        }

    } 

 
}


</script>


<style>

</style>

	
	
	
