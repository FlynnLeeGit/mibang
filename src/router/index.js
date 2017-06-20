import Vue from 'vue'
import Router from 'vue-router'

import Index from '@/pages/index.vue'
import Recipe from '@/pages/recipe.vue'

Vue.use(Router)

const routes = [
    {
        path: '/',
        name: 'Index',
        component: Index
    },
    {
        path: '/recipe',
        name: 'Recipe',
        component: Recipe
    }
]

export default new Router({
    routes,
    mode: 'history',
    scrollBehavior: () => ({
        y: 0
    }),
})