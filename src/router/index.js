import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

export default new Router({
    mode: 'history',
    routes: [
        {
            path: '/',
            name: 'indexComponent',
            component: require('@/components/indexComponent').default,
            meta: { requiresAuth: true }
        },
        {
            path: '*',
            redirect: '/'
        }
    ]
})
