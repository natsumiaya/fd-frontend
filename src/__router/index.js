import Vue from 'vue'
import Router from 'vue-router'

import Main from '@/views/layouts/Main.vue'

import Index from '@/views/pages/index.vue'

Vue.use(Router)

const router = new Router({
    mode: 'history',
    base: process.env.BASE_URL,
    routes: [
        {
            path: '/',
            name: 'female-daily-page',
            component: Main,
            children: [
                {
                    path: '/',
                    name: 'home',
                    component: Index,
                    meta: {
                        title: 'Female Daily'
                    }
                }
            ]
        }
    ]
});

export default router