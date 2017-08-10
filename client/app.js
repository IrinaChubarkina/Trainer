import Vue from 'vue';
import List from './components/list/list.vue';
import store from './store/store';

const app = new Vue({
    components: {
        List
    },
    render(h) {
        return (
            <div class="container">
                <h1 class="page__title">Trainer</h1>
                <list></list>
            </div>
            
        )
    },
    store
});

export {app}