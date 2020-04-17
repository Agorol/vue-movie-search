<template>
  <div class="App">
    <Search :search="state.search" @search="handleSearch" />
    <p class="App-intro">Найдите свои любимые фильмы</p> 
    <div class="movies">
      <Movie :movie="state.movie"/>
    </div>
  </div>
</template>

<script>
  import Search from './Search.vue';
  import Movie from './Movie.vue';
  import { useMovieApi } from '@/hooks/movie-api';
  export default {
    name: 'home',
    //props: ['state', 'title'],
    components: {Search, Movie},
    setup() {
      const state = useMovieApi();
      return {
        state,
        handleSearch(searchTerm) {
          state.loading = true;
          state.search = searchTerm;
        }
      };
    }
}
</script>