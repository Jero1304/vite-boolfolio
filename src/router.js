import { createRouter, createWebHistory } from "vue-router";

import Home from './pages/Home.vue'
import About from './pages/About.vue'
import Project from './pages/Project.index.vue'
import NotFound from './pages/404.vue'


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
        {
            path: '/404',
            name: '404',
            component: NotFound,
        },
    ],
})

export { router }