<template>
	<v-card>
		<v-card-title>{{tour.toTour}}</v-card-title>
		<v-card-text v-text="tour.startTour">
		</v-card-text>

		<v-card-actions>

			<v-dialog
			v-model="dialog"
			width="500">

				<template v-slot:activator="{ on, attrs }">
					<v-btn
					icon
					v-bind="attrs"
					v-on="on">
						<v-icon>mdi-arrow-right</v-icon>
					</v-btn>

				</template>

				<v-card>
					<v-card-title>{{tour.forTour}}{{' -> '}}{{tour.toTour}}</v-card-title>
					<v-card-subtitle>
						<div>{{'Dystans: '}}{{tour.distance}}{{' km'}}</div>
						<div>{{'Od: '}}{{tour.startTour}}{{' do: '}}{{tour.stopTour}}
						</div>
					</v-card-subtitle>
					<v-card-text class="text-right text--disabled">{{tour.addTour}}</v-card-text>
				</v-card>
			</v-dialog>
	
		</v-card-actions>

	</v-card>
</template>

<script>

export default{
	name:"tours-list",

	props:{
		tour:{
			reqired: true,
			type: Object
		}
	}
};
</script>
