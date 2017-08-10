import Vue from 'vue';
import List from './components/list/list.vue';
import ListDetails from './components/details/list-details.vue';
import store from './store/store';



const app = new Vue({
    components: {
        List, ListDetails
    },
    render(h) {
        return (
            <div class="container">
                <h1 class="page__title">Trainer</h1>
                <list></list>
                <list-details></list-details>
            </div>
            
        )
    },
    store
});

export {app}