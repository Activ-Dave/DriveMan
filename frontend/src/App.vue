<template>
	<v-app>
		<Menu/>
			<v-main>
				<router-view/>
			</v-main>
		<Footer/>
	</v-app>
</template>

<script>

import Menu from '@/components/menu';
import Footer from '@/components/footer';


export default {
  name: 'App',

	components: {
		Menu,
		Footer
	},

  data: () => ({
    //
  }),
};
</script>
