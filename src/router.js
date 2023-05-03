import { createRouter, createWebHistory } from "vue-router";

import Home from './pages/Home.vue'
import About from './pages/About.vue'
import Project from './pages/Project.index.vue'


const router = createRouter({
    history: createWebHistory(),
    routes: [
        {
            path: '/',
            name: 'home',
            component: Home,
        },
        {
            path: '/about',
            name: 'about',
            component: About,
        },
        {
            path: '/project',
            name: 'project',
            component: Project,
        },
    ],
})

export { router }