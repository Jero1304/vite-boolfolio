<script>
import Project from './components/Project.vue'
export default {
  components: {
    Project
  }
}
</script>

<template>
  <div class="container">
    <h1 class="title">Project</h1>
  </div>
  <main class="container">
    <Project />
  </main>
</template>

<style>
.title{
  text-align: center;
  padding: 20px 0;
}
</style>
