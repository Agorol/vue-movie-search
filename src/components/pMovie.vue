<template>
<div v-if="movie" class="App">
    <h2 class="headr">{{ movie.Title }}</h2>
    <div class="poster">
      <div class="img">
        <img width="200" :src="movie.Poster"/>
      </div>
      <div class="main_info">
        <ul>
          <li><strong>Released:</strong> {{movie.Released}}</li>
          <li><strong>Runtime:</strong> {{movie.Runtime}}</li>
          <li><strong>imdbRating:</strong> {{movie.imdbRating}}</li>
          <li><strong>Rated:</strong> {{movie.Rated}}</li>
          <li><strong>Genre:</strong> {{movie.Genre}}</li>
          <li><strong>Plot:</strong> {{movie.Plot}}</li>
        </ul>
      </div>
    </div>
    <div class="info"> 
       <ul>
           <li><strong>Country:</strong> {{movie.Country}}</li>
           <li><strong>Type:</strong> {{movie.Type}}</li>
           <li><strong>DVD:</strong> {{movie.DVD}}</li>
           <li><strong>Director:</strong> {{movie.Director}}</li>
           <li><strong>Writer:</strong> {{movie.Writer}}</li>
           <li><strong>Actors:</strong> {{movie.Actors}}</li>
           <li><strong>Awards:</strong> {{movie.Awards}}</li>
       </ul> 
    </div>
 </div>   
</template>

<script>
const API_KEY = 'f4a81e3a';
    export default {
        name: 'pMovie',
        data() {  
            return {
                movID:this.$route.params.mID,
                loading: true,
                movie: null
            }
        }, 
        mounted(){
            const MOVIE_API_URL = `https://www.omdbapi.com/?i=${this.movID}&apikey=${API_KEY}`;
            fetch(MOVIE_API_URL)
                .then(response => response.json())
                .then(jsonResponse => {
                    this.movie = jsonResponse;
                    this.loading = false;
                 })
        }

}
    
</script>