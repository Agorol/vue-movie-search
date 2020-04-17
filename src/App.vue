<template>
  <div class="App">
      <router-link to="/"><h2 class="header">Composition API</h2></router-link>
      <router-view/>
  </div>
</template>

<script>
  export default {
    name: 'App',
  }
</script>

<style>
.App {
  text-align: center
}

.header {
  background-color: #282c34;
  height: 70px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  font-size: calc(10px + 2vmin);
  color: white;
  padding: 20px;
  cursor: pointer;
  margin: 0
}

.header a{
  text-decoration: none;
  color: #fff;
}

.intro {
  font-size: large
}

* {
  box-sizing: border-box
}

.movies {
  display: flex;
  flex-wrap: wrap;
  flex-direction: row
}

.movie {
  padding: 5px 25px 10px 25px;
  max-width: 25%;
  flex: 0 0 25%;
  flex-direction: column;
  justify-content: flex-end;
  display: flex
}

.movie div {
  height: 320px;
  display: flex;
  align-items: center;
  justify-content: center
}

.movie div img {
  max-height: 100%;
  max-width: 100%
}

.errorMessage {
  margin: auto;
  font-weight: bold;
  color: rgb(161, 15, 15)
}

.search {
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: center;
  margin-top: 10px
}
.info{
  text-align: left;
}

input[type="submit"] {
  padding: 5px;
  background-color: transparent;
  color: black;
  border: 1px solid black;
  width: 80px;
  margin-left: 5px;
  cursor: pointer
}

input[type="submit"]:hover {
  background-color: #282c34;
  color: antiquewhite
}

.search > input[type="text"] {
  width: 40%;
  min-width: 170px
}
.poster{
    display: flex;
    justify-content: center;
    max-width: 600px;
    margin: auto;
}
.poster .img{
      margin-right: 20px;
}
.poster .main_info{}
.poster .main_info ul{
  list-style: none;
    padding: 0;
    text-align: left;
    height: 100%;
    margin: 0;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
}
.App .info{
      max-width: 600px;
    margin: auto;
}
.App .info ul{
      padding: 0;
    list-style: none;
}
@media screen and (min-width:694px) and (max-width:915px) {
  .movie {
    max-width: 33%
  }

}

@media screen and (min-width:652px) and (max-width:693px) {
  .movie {
    max-width: 50%
  }

}

@media screen and (max-width:651px) {
  .movie {
    max-width: 100%;
    margin: auto
  }

}

</style>
