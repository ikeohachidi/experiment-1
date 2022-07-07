import { defineNuxtConfig } from 'nuxt'

export default defineNuxtConfig({
	css: ['vuetify/lib/styles/main.sass', '@mdi/font/css/materialdesignicons.min.css'],
	build: {
		transpile: ['vuetify', '@fawmi/vue-google-maps'],
	},
	publicRuntimeConfig: {
		googleApiKey: process.env.GOOGLE_MAPS_KEY
	},
	vite: {
		define: {
		  'process.env.DEBUG': false,
		},
	},
})
