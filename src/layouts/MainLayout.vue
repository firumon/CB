<template>
  <q-layout view="lHh Lpr lFf">
    <q-header elevated>
      <q-toolbar><q-toolbar-title>{{ title }}</q-toolbar-title></q-toolbar>
    </q-header>
    <q-page-container><router-view /></q-page-container>
  </q-layout>
</template>

<script setup>
	import { ref } from 'vue'
	const title = ref('മുസ്ലിം ചരിത്ര കലണ്ടർ 2023')
</script>
