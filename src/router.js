import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/components/home/Home'

Vue.use(Router)

export default new Router({
    mode: 'history',
    routes: [
        {
            path: '/',
            component: Home
        },
        {
            path: '/news',
            component: () => import('./components/news/NewsAll')
        },
        {
            path: '/news/:id',
            name: 'NewsItem',
            component: () => import('./components/news/NewsItem')
        },
        {
            path: '/pages/:id',
            name: 'PageItem',
            component: () => import('./components/pages/PageItem')
        },
        {
            path: '/r01routes',
            component: () => import('./components/routes/RoutesAll')
        }
    ]
})