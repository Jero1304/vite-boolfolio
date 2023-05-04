<template>
    <div class="container">
        <h1>dettagli project</h1>
        <p>{{ $route.params.slug }} __________ {{ slug }}</p>
    </div>
</template>

<script>
import Default from '../layouts/Default.vue';
import axios from 'axios';
export default {
    components: {
        Default
    },

    props: ['slug'],

    methods: {
        fetchProject() {
            axios.get(`http://localhost:5173/api/project/${ this.slug }`)
                .then(res => {
                    console.log('res: ', res);
                })
                .catch(err => {
                    console.log('Errore!: ', err);
                })
        }
    },
    mounted() {
        this.fetchProject()
    }
}
</script>

<style scoped></style>