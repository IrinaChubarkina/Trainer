import Vue from 'vue';
import store from './store/store';
import { sync } from 'vuex-router-sync';
import router from './router';
import App from './components/App';

sync(store, router);

const app = new Vue({
    router,
    store,
    ...App
});

export { app, router, store }