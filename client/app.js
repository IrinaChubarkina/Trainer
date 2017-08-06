import Vue from 'vue';
import * as list from './components/list/list';
import * as search from './components/search/search';
import store from './store';

const app = new Vue({
    components: {
        list,
        search
    },
    render(h) {
        return (
            <div class="container" >
                <h1 class="page__title">Weather</h1>
                <search></search>
                <list></list>
            </div>
        );
    },
    store
});

export { app }
