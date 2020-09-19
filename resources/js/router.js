import Vue from 'vue';
import Router from 'vue-router';
Vue.use(Router);

import firstPage from './components/pages/myFirstVuePage';
import newRoutePage from './components/pages/newRoutePage';
import hookRoutePage from './components/pages/hooks';
const routes = [
    {
        path: '/my-new-vue-route',
        component: firstPage

    },
    {
        path: '/new-route',
        component: newRoutePage

    },
    {
        path: '/hook-route',
        component: hookRoutePage

    },
]

export default new Router({
    mode: 'history',
    routes

});