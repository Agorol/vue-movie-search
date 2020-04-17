<template>
  <div class="movie">
    <h2>{{ smovie.Title }}</h2>
    <div>
      <img @click="CheckInf(smovie.imdbID)" width="200" :src="smovie.Poster" style = 'cursor: pointer;'/>
    </div>
    <p>{{ smovie.Year }}</p>
  </div>
</template>
<script>
  import { computed } from '@vue/composition-api';
  export default {
    name: "sMovie",
    props: ['smovie'],
    setup({ smovie }) {
      const altText = computed(() => `The movie titled: ${smovie.Title}`);
      return { altText} 
    },
    methods:{
       CheckInf(MovID) {
          this.$router.push({name:'pMovie',params:{mID:MovID}})
        } 
    }
  };
</script>