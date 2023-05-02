<template>
    <div>
        <p v-for="project in projects" :key="project.id">{{ project.title }}</p>
    </div>
</template>

<script>
import axios from 'axios'
export default {
    data(){
        return{
            projects: []
        }
    },
    methods:{
        fetchProjects(){
            axios.get('http://127.0.0.1:8000/api/projects')
            .then(res =>{
                console.log(res);
                const { results } = res.data
                this.projects = results
            })
            .catch(err =>{
                console.log('Errore: ', err);
            })
        }
    },
    mounted(){
        this.fetchProjects()
    }
}
</script>

<style scoped>

</style>