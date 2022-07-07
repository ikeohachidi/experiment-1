import { ApolloClient, createHttpLink, InMemoryCache } from "@apollo/client";
import { DefaultApolloClient, provideApolloClient } from "@vue/apollo-composable";

const link = createHttpLink({
	uri: 'https://rickandmortyapi.com/graphql'
})

const cache = new InMemoryCache();

const client = new ApolloClient({
	link,
	cache
})

export default defineNuxtPlugin(nuxtApp => {
	nuxtApp.vueApp.provide(DefaultApolloClient, client)
})