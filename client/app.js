import Vue from 'vue';
import list from './components/list/list';
import store from './store';

const app = new Vue({
    components: {
        list
    },
    render(h) {
        return (
            <div class="container" >
                <h1 class="page__title">Weather</h1>
                <list></list>
            </div>
        );
    },
    store
});

export { app }
