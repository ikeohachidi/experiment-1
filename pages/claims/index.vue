<template>
	<section class="wrapper">
		<div class="claims-info">
	    <v-app-bar 
	      elevation="0"
	      style="margin-left: 0"
	    >
	      <v-container fluid>
	        <v-row>
	          <v-col cols="3">
	            <h4>Claims / <span class="text-primary">Claims Types</span></h4>
	          </v-col>
	        </v-row>
	      </v-container>
	      <template v-slot:append>
	        <v-btn class="bg-primary text-white">create</v-btn>
	        <v-btn icon="mdi-refresh" size="small" variant="outlined" rounded="sm" color="primary" class="ml-2"></v-btn>
	        <v-btn icon="mdi-table-column-remove" size="small" rounded="sm" color="primary" class="bg-primary-lighten-1 text-primary ml-2"> </v-btn>	 
	        <v-btn 
	        	icon="mdi-filter-plus-outline" 
	        	size="small" 
	        	rounded="sm" 
	        	color="primary" 
	        	class="bg-primary-lighten-1 text-primary ml-2"
	        	@click="displayFilters = !displayFilters"
	        /> 
	      </template> 
	    </v-app-bar>

	    <div>
				<DataTable
					:headers="headers"
					:rows="userStore.users"
					:isLoading="pending"
				>
					<template #cell(action)>
		        <v-btn icon="mdi-pencil" variant="tonal" size="x-small" rounded="sm" class="ml-2" ></v-btn> 
		        <v-btn icon="mdi-delete" variant="tonal" size="x-small" rounded="sm" class="ml-2" ></v-btn> 
					</template>
				</DataTable>
	    </div>
		</div>

		<div class="filters-wrapper" :class="{'show': displayFilters}">
			<Filters @close="displayFilters = false"/>
		</div>
	</section>
</template>

<script lang="ts" setup>
import { ref, watch, onMounted } from 'vue';
import { useUser } from '~/store';

const API = 'https://jsonplaceholder.typicode.com/users';

const headers = [
	{ label: 'Name', key: 'name' },
	{ label: 'Username', key: 'username' },
	{ label: 'Email', key: 'email' },
	{ label: 'Phone', key: 'phone', style: {textAlign: 'right'} },
	{ label: 'Website', key: 'website' },
	{ label: 'Action', key: 'action' }
];

// const { data: users, pending } = await useFetch(API);
// const displayFilters = ref(false);

const userStore = useUser();
onMounted(() => {
	userStore.fetchUsers()
})
</script>

<style lang="scss" scoped>

.wrapper {
	display: flex;
	> div {
		transition: .5s;
	}
}

.claims-info {
	width: 100%;
}

.filters-wrapper {
	width: 0%;
	&.show {
		width: 23%;
	}
}
</style>