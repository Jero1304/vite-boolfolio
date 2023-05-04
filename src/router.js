import { createRouter, createWebHistory } from "vue-router";

import Home from './pages/Home.vue'
import About from './pages/About.vue'
import ProjectIndex from './pages/Project.index.vue'
import NotFound from './pages/404.vue'
import ProjectShow from './pages/Project.show.vue'


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
            component: ProjectIndex,
        },
        {
            path: '/project/:slug',
            name: 'projects.show',
            component: ProjectShow,
            props: true,
        },
        {
            path: '/404',
            name: '404',
            component: NotFound,
        },
    ],
})

export { router }