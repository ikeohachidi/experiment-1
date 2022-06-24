<template>
  <div>
    <v-app>
      <v-app-bar 
        color="primary" 
        elevation="0"
      >
        <template v-slot:prepend>
          <v-btn icon="mdi-account-box"></v-btn>
        </template>
        <v-container fluid>
          <v-row>
            <v-col cols="3">
              <v-select
                :items="items"
                label="Quick Load (Ctrl + Shift + F)"
                variant="underlined"
                hide-details
                density="compact"
                class="text-white"
              ></v-select>
            </v-col>
          </v-row>
        </v-container>
        <template v-slot:append>
          <v-btn icon="mdi-tune"></v-btn>
          <v-btn icon="mdi-file-chart-outline"></v-btn>
          <v-btn icon="mdi-trash-can-outline"></v-btn>
          <v-avatar color="primary-darken-1" class="text-white">VJ</v-avatar>
        </template>
      </v-app-bar>

      <v-navigation-drawer 
        expand-on-hover
        permanent
        rail
      >
        <v-list density="compact" nav>
          <v-list-item prepend-icon="mdi-plus" title="Claims" value="claims"></v-list-item>
          <v-list-item prepend-icon="mdi-plus" title="FNOls" value="fnols"></v-list-item>
          <v-list-item prepend-icon="mdi-plus" title="Other" value="other"></v-list-item>
        </v-list>
      </v-navigation-drawer>

      <!-- <v-app-bar 
        elevation="0"
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
      <hr> -->

      <v-main>
        <NuxtPage/>
      </v-main>
    </v-app>
  </div>
</template>

<script setup lang="ts">
const items = [];

</script>