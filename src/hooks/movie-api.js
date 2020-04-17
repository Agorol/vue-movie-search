import { reactive, watchEffect } from '@vue/composition-api';
const API_KEY = 'f4a81e3a';
export const useMovieApi = () => {
  const state = reactive({
    search: 'Joker',
    loading: true,
    movie: []
  });
  watchEffect(() => {
    const MOVIE_API_URL = `https://www.omdbapi.com/?s=${state.search}&apikey=${API_KEY}`;
    fetch(MOVIE_API_URL)
      .then(response => response.json())
      .then(jsonResponse => {
        state.movie = jsonResponse.Search;
        state.loading = false;
      });
  });
  return state;
};