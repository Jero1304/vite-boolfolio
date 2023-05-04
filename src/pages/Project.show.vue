<template>
    <Default>
        <template v-if="project">
            <div class="container">
                <h1>{{ project.title }}</h1>
                <p v-if="project.type">{{ project.type.name }}</p>

                <ul>
                    <li v-for="technology in project.technologies" :key="technology.slug">{{ technology.name }}</li>
                </ul>
            </div>
            <div class="container">
                <div v-html="project.content"></div>
            </div>
            
        </template>
    </Default>
</template>

<script>
import Default from '../layouts/Default.vue';
import axios from 'axios';
export default {
    components: {
        Default
    },

    props: ['slug'],

    data() {
        return {
            project: null
        }
    },
    methods: {
        fetchProject() {
            axios.get(`http://127.0.0.1:8000/api/projects/${this.slug}`)
                .then(res => {
                    console.log('res: ', res);
                    const { success, project } = res.data
                    if (success) {
                        this.project = project
                    }
                    else {
                        this.$router.replace('/404')
                    }
                })
                .catch(err => {
                    console.log('Errore!: ', err);
                    this.$router.replace('/404')
                })
        }
    },
    mounted() {
        this.fetchProject()
    }
}
</script>

<style scoped></style>