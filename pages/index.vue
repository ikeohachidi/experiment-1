<template>
	<uwb-location-map
		:locations="locations"
	/>
</template>

<script setup lang="ts">
import { UWBLocation } from '~/types';

const locations: UWBLocation[] = [
	{
		position: {
			lat: 51.093048,
			lng: 6.842120
		},
		address: ''
	},
	{
		position: {
			lat: 51.093048,
			lng: 6.842120
		},
		address: ''
	}
]
</script>