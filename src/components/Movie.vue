<template>
    <div class="movies">
      <sMovie v-for="smovie in movie" :smovie="smovie" :key="smovie.imdbID" />
    </div>
</template>
<script>
    import sMovie from './sMovie';
    export default {
        name: "Movie",
        components: { sMovie },
        props: ['movie']
    }
</script>