<template>
    <div class="container">
        <div class="project">
            <CardProject v-for="project in projects" :key="project.id" :project="project" />
        </div>
        <p>currrent page: {{ currentPage }}</p>
        <ul class="pagination">
            <li :class="[n === currentPage ? 'active' : '', 'page-link']" v-for="n in lastPage" @click="fetchProjects(n)"
                :key="n">{{ n }}</li>
        </ul>
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
            projects: [],
            lastPage: null,
            currentPage: 1,
            links: []
        }
    },
    methods: {
        fetchProjects(page) {
            axios.get('http://127.0.0.1:8000/api/projects', {
                params: {
                    page: page
                }
            })
                .then(res => {
                    // console.log(res);
                    const { results } = res.data
                    this.links = results.links
                    this.lastPage = results.last_page
                    this.projects = results.data
                    // console.log(results);
                    this.currentPage = results.current_page

                })
                .catch(err => {
                    console.log('Errore: ', err);
                })
        }
    },
    mounted() {
        this.fetchProjects(this.currentPage)
    }
}
</script>

<style lang="scss" scoped>
.project {
    display: grid;
    gap: 1.5rem;
    grid-template-columns: repeat(3, 1fr);
}

.pagination {
    display: flex;
    gap: 0.75rem;
    flex-wrap: wrap;
    align-items: center;
    justify-content: center;
    padding: 20px 0;

    .page-link {
        background-color: #999;
        border-radius: 50%;
        width: 2rem;
        aspect-ratio: 1;
        display: flex;
        align-items: center;
        justify-content: center;
        list-style: none;

    }

    .active {
        background-color: crimson;
        color: white;
    }
}
</style>