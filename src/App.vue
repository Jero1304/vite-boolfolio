<script>
// import Project from './components/Project.vue'
// import NavBar from './components/NavBar.vue'
export default {
  components: {
    // Project
    // NavBar,
  }
}
</script>

<template>
  <!-- è una p****a ma funziona -->
  <head>
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0-alpha3/dist/css/bootstrap.min.css" rel="stylesheet"
      integrity="sha384-KK94CHFLLe+nY2dmCWGMq91rCGa5gtU4mk92HdvYe+M/SXH301p5ILy+dN9+nJOZ" crossorigin="anonymous">
  </head>

  <router-view></router-view>
</template>

<style>
.title {
  text-align: center;
  padding: 20px 0;
}</style>
