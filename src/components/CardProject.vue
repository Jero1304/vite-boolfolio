<template>
    <div class="project-card">
        <h3>Titolo: {{ project.title }}</h3>
        <p>ID: {{ project.id }}</p>
        <p>Type: {{ project.type ? project.type.name : '-' }}</p>

        Technologies:
        <ul class="technology-list" v-if="project.technologies && project.technologies.length > 0">
            <li class="technology" v-for="tecnology in project.technologies" :key="tecnology.id">{{ tecnology.name }}</li>
        </ul>

        <p>Descrizione: {{ project.content ? project.content : 'Nessuna Descrizione' }}</p>
    </div>
</template>

<script>
export default {
    props: {
        project: {
            type: Object,
            required: true
        }
    },
    mounted() {
        // console.log(this.project.type);
    }
}
</script>

<style lang="scss" scoped>
.project-card {
    border: 2px solid rgb(122, 122, 122);
    border-radius: 20px;
    padding: 10px;

    .technology-list {
        display: flex;
        flex-wrap: wrap;
        gap: 1rem;
        list-style: none;
        align-items: center;
        padding-bottom: 20px;
        .technology {
            padding: 0 1rem;
            line-height: 24px;
            font-size: 12px;
            border-radius: 999px;
            background-color: rgb(171, 171, 171);

        }
    }
}
</style>
