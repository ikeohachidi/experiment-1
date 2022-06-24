<template>
	<section>
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
        <v-btn icon="mdi-filter-plus-outline" size="small" rounded="sm" color="primary" class="bg-primary-lighten-1 text-primary ml-2"> </v-btn> 
      </template> 
    </v-app-bar>

		<DataTable
			:headers="headers"
			:rows="users"
		>
			<template #cell(action)>
        <v-btn icon="mdi-pencil" variant="tonal" size="small" rounded="sm" class="ml-2" ></v-btn> 
        <v-btn icon="mdi-delete" variant="tonal" size="small" rounded="sm" class="ml-2" ></v-btn> 
			</template>
		</DataTable>
	</section>
</template>

<script lang="ts" setup>
import { watch } from 'vue';
const API = 'https://jsonplaceholder.typicode.com/users';

const headers = [
	{ label: 'Name', key: 'name' },
	{ label: 'Username', key: 'username' },
	{ label: 'Email', key: 'email' },
	{ label: 'Phone', key: 'phone', style: {textAlign: 'right'} },
	{ label: 'Website', key: 'website' },
	{ label: 'Action', key: 'action' }
];

const { data: users, pending, error } = await useFetch(API)
watch(users, (value) => {
  console.log('---', value)
})
</script>
