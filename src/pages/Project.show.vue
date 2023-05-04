<template>
    <Default>
        <template v-if="project">
            <div class="container pt-5">
                <h1>{{ project.title }}</h1>
                <h3>Slug: {{ project.slug }}</h3>
                <h4>ID: {{ project.id }}</h4>
                <p class="py-3 fs-3">
                    Type:
                    <span class="badge p-2 rounded-pill"
                        :class="[project.type ? 'bg-warning text-dark' : 'bg-danger text-light']">{{ project.type ?
                            project.type.name : 'not found' }}</span>
                </p>

                <h3>Technologies: </h3>
                <ul class="technology">
                    <li v-for="technology in project.technologies" :key="technology.slug">
                        <span class="badge bg-primary rounded-pill">{{ technology.name }}</span>
                    </li>
                </ul>
            </div>
            <div class="container pb-5 pt-4">
                <h4>Content: </h4>
                <div v-html="project.content"></div>
            </div>

            <div class="container back">
                <a class="btn btn-success" href="" role="button">
                    <router-link class="router" :to="{ name: 'project' }">Back to project</router-link>
                </a>
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

<style lang="scss">
.technology {
    list-style: none;
    display: flex;
    padding-left: 0;
    gap: 1rem;
    font-size: 30px;
}
</style>