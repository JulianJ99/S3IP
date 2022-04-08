<template>
  <nav-bar/>
  <Index msg="Spotify Project"/>
</template>

<script>
import Index from './components/Index.vue'
import NavBar from "./components/NavBar.vue";
export default {
  name: 'App',
  components: {
    NavBar,
    Index
  }
}

</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}

.center {
  margin-left: auto;
  margin-right: auto;
}

table, th {
  border: 1px solid black;
  border-collapse: collapse;
}
header {
  line-height: 1.5;
}

.logo {
  display: block;
  margin: 0 auto 2rem;
}

a,
.green {
  text-decoration: none;
  color: hsla(160, 100%, 37%, 1);
  transition: 0.4s;
}

@media (hover: hover) {
  a:hover {
    background-color: hsla(160, 100%, 37%, 0.2);
  }
}

</style>
