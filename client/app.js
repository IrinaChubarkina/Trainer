import Vue from 'vue';
import list from './components/list/list';

const app = new Vue({
    components: {
        list
    },
    render(h) {
        return (
            <div class="container" >
                <h1 class="page__title">Weather</h1>
                {/*<div class="search-panel">*/}
                    {/*<input class="search-panel__input"*/}
                           {/*type="search"*/}
                           {/*placeholder="Search city"*/}
                    {/*>*/}
                    {/*<div class="search-panel__list" v-if="foundedCities.length > 0">*/}
                        {/*<div class="search-panel__list__item" v-for="city in foundedCities">*/}
                            {/*{{ city.name }}*/}
                        {/*</div>*/}
                    {/*</div>*/}
                {/*</div>*/}
                <list></list>
            </div>
        );
    }
});

export { app }
