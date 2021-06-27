<!-- Komponent wyświetlający stopkę -->

<template>
<div height="40px">
  <v-toolbar color="#222222" dark>
    <v-toolbar-title><b>{{wykonal}}</b>  - Informatyka NST 5 sem </v-toolbar-title>
  </v-toolbar>
     </div>
</template>

<script>
export default {
  data () {
    return {
    wykonal: 'Łukasz Lato / Dawid Wąsala',
  }
  }
    }
</script>