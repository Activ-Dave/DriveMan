<template>
  <v-app>
<Menu/>
  
    <v-main>
  
      <router-view/>
    </v-main>
<Stopka/>
  </v-app>
</template>

<script>
import Menu from '@/components/menu'
import Stopka from '@/components/stopka'

export default {
  name: 'App',

  components: {

  Menu,
  Stopka,
  },

};
</script>
