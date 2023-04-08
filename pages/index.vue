<template lang="pug">
main
  h1 Nuxt Movie Database
section
  input(type="text"
        placeholder="Search for a movie"
        v-model="searchTerm")
button(@click="search") Search
section.results(v-if="results")
  h2 Results
    ul
      li(v-for="result in results.results"
         :key="result.id")
        span {{ result.title }}
</template>

  <script setup lang="ts">

  import type { APIResponse } from "@/types/APIResponse";

  const searchTerm = ref('');
  const results = ref<APIResponse>();

  const url = computed (() => {
    return `api/movies/search?query=${searchTerm.value}`;
  });

  const search = () => {
    console.log(searchTerm.value);
    const {data, error} = useFetch<APIResponse>(url.value);

    if (error.value) {
      console.log(error.value);
    }

    if (data.value) {
      results.value = data.value;
      console.log(results.value);
    }
  };
  </script>

  <style lang="scss" scoped>
  h1 {
    color: $primary-color;
  }
  </style>