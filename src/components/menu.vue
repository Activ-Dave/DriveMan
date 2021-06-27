<!-- Komponent wyświetlający nazwę projektu wraz z górnym menu -->

<template>


<div>
  <v-toolbar color="primary" dark>
    <v-toolbar-title><b>{{nazwa}}</b></v-toolbar-title>
    <v-divider class="mx-4" vertical></v-divider>

        <v-btn height="80px" text href="/">
          Strona Główna
        </v-btn>

<v-divider class="mx-4" vertical></v-divider>
    <v-menu offset-y>
      <template color="black" class="hidden-sm-and-down" v-slot:activator="{ on, attrs }">
        
        <v-btn tile large height="100%" text v-bind="attrs" v-on="on">
          Trasy
        </v-btn>
      </template>
             <v-btn tile dark color="blue" width="150px"  href="dodajtrase">
        Dodaj
      </v-btn><br>
           <v-btn tile dark color="blue" width="150px" href="przegladajtrase">
        Przeglądaj
      </v-btn>
      
        </v-menu>
        <v-divider class="mx-4" vertical></v-divider>
    
    <v-menu offset-y>
      <template class="hidden-sm-and-down" v-slot:activator="{ on, attrs }">
        
        <v-btn height="101%" text v-bind="attrs" v-on="on">
          Pojazdy
        </v-btn>
      </template>
             <v-btn tile dark color="blue" width="150px" href="dodajpojazd">
        Dodaj
      </v-btn><br>
           <v-btn tile dark color="blue" width="150px" href="przegladajpojazd">
        Przeglądaj
      </v-btn>
      
        </v-menu>
        <v-divider class="mx-4" vertical></v-divider>

        <v-menu offset-y>
      <template class="hidden-sm-and-down" v-slot:activator="{ on, attrs }">
        
        <v-btn height="101%" text v-bind="attrs" v-on="on">
          Pracownicy
        </v-btn>
      </template>
             <v-btn tile dark color="blue" width="150px" href="dodajpracownika">
        Dodaj
      </v-btn><br>
           <v-btn tile dark color="blue" width="150px" href="przegladajpracownika">
        Przeglądaj
      </v-btn>
      
        </v-menu>
        <v-divider class="mx-4" vertical></v-divider>
       <v-btn height="80px" text href="/zaplanujtrase">
          Zaplanuj Trasę
        </v-btn>

<v-divider class="mx-4" vertical></v-divider>

  </v-toolbar>
  </div>
</template>

<script>

	export default {
	data() {
   return {
   nazwa: 'DriveMan',
   menus: [{
     name:'Strona główna',
     href: '/'
     },{
         name:'Dodaj trasę',
         href:'dodajtrase'
     },{
         name:'Dodaj pojazd',
         href:'dodajpojazd'
     },     {
         name:'Dodaj Pracownika',
         href:'dodajpracownika'
     },{
         name: 'Zaloguj się',
         href: 'login'
     }]
  };
    }
      };
</script>

<style scoped>
</style>