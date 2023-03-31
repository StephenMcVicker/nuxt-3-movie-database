<template lang="pug">
main
  h1 Nuxt Movie Database
section
  input(type="text"
        placeholder="Search for a movie"
        v-model="searchTerm")
section.results
</template>

<script setup lang="ts">
import { APIResponse } from '@/types/APIResponse';

const searchTerm = ref('');

const url = computed (() => {
  return `api/movies/search?query=${searchTerm.value}`;
})

const { data } = useFetch<APIResponse>(url);

</script>
