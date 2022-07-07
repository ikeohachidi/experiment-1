<template>
	<GMapMap
		:center="center"
		:zoom="zoom"
		:map-type-id="mapType"
		:options="mapOptions"
	>
		<GMapCluster :zoomOnClick="true">
			<GMapMarker
				v-for="(location, locationIndex) in locations"
				:key="locationIndex"
				:position="location.position"
				:clickable="true"
				:draggable="true"
				@click="updateCenter(location)"
			>
			</GMapMarker>
		</GMapCluster>
	</GMapMap>	
</template>

<script setup lang='ts'>
import { UWBLocation, MapOptions } from '~/types';

const props = withDefaults(defineProps<{
	locations: UWBLocation[],
	zoom?: number,
	mapType?: 'terrain' | 'street',
	mapOptions: MapOptions
}>(), {
	zoom: 20,
	mapType: 'terrain',
	mapOptions: {
		mapTypeControl: true,
		scaleControl: true,
		streetViewControl: true,
		zoomControl: true 
	}
})

const center = reactive({ lat: 51.093048, lng: 6.842120 });

const updateCenter = ({ position }: UWBLocation): void => {
	center.lat = position.lat;
	center.lng = position.lng;
}

onMounted(() => {
	if (props.locations && props.locations.length >= 1) {
		const [location] = props.locations;
		updateCenter(location);
	}
})
</script>