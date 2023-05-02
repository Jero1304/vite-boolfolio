<template>
    <div class="container">
        <div class="project">
            <CardProject v-for="project in projects" :key="project.id" :project="project" />
        </div>
    </div>
</template>

<script>
import axios from 'axios'
import CardProject from './CardProject.vue'
export default {
    components: {
        CardProject
    },
    data() {
        return {
            projects: []
        }
    },
    methods: {
        fetchProjects() {
            axios.get('http://127.0.0.1:8000/api/projects')
                .then(res => {
                    console.log(res);
                    const { results } = res.data
                    this.projects = results
                    console.log(results);
                })
                .catch(err => {
                    console.log('Errore: ', err);
                })
        }
    },
    mounted() {
        this.fetchProjects()
    }
}
</script>

<style lang="scss" scoped>
.project {
    display: grid;
    gap: 1.5rem;
    grid-template-columns: repeat(4, 1fr);
}
</style>