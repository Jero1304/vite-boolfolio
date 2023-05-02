<template>
    <div class="project-card">
        <h3>Titolo: {{ project.title }}</h3>
        <p>ID: {{ project.id }}</p>
        <p>Type: {{ project.type ? project.type.name : '-' }}</p>
        <p>Descrizione: {{ project.content }}</p>

    </div>
</template>

<script>
export default {
    props: ['project']
}
</script>

<style lang="scss" scoped>
.project-card{
    border: 2px solid red;
}
</style>
