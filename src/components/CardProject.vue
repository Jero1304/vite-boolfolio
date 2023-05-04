<template>
    <div class="project-card">
        <router-link class="router" :to="`/project/${project.slug}`">
            <div class="card" style="height: 500px; width: 100%;">
                <div class="card-body">
                    <h5 class="card-title">{{ project.title }}</h5>
                    <h6 class="card-subtitle mb-2 text-body-secondary">Slug: {{ project.slug }}</h6>

                    <p class="card-text">ID: {{ project.id }}</p>
                    <p class="card-text">Type: {{ project.type ? project.type.name : 'not found' }}</p>

                    <p>Technology: </p>
                    <ul class="technology-list" v-if="project.technologies && project.technologies.length > 0">
                        <li class="technology" v-for="technology in project.technologies" :key="technology.id">
                            <span class="badge bg-primary rounded-pill">{{ technology.name }}</span>
                        </li>
                    </ul>

                    <p class="card-text">{{ project.content ? project.content : 'Nessuna Descrizione' }}</p>
                </div>
            </div>
        </router-link>
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
    .router {
        color: currentColor;
        text-decoration: none;
    }

    .technology-list {
        display: flex;
        flex-wrap: wrap;
        gap: 1rem;
        list-style: none;
        align-items: center;
        padding-left: 0;
        padding-bottom: 20px;

        .technology {
            line-height: 24px;
            font-size: 22px;
        }
    }
}
</style>
