import Vue from 'vue';
import Router from 'vue-router';
import List from './../components/list/list.vue';
import ListDetails from './../components/details/list-details.vue';

Vue.use(Router);

export default new Router({
    mode: 'history',
    routes: [
        {
            path: '/',
            component: List
        },
         {
             name: 'section',
            path: '/section/:id',
            component: ListDetails
        },
    ]
});
