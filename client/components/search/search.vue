<template>
    <div class="search-panel">
        <input class="search-panel__input"
               type="search"
               placeholder="Search city"
        >
        <div class="search-panel__list" v-if="foundedCities.length > 0">
            <div
                class="search-panel__list__item"
                @click="addCity(city)"
                v-for="city in foundedCities">
                {{ city.name }}
            </div>
        </div>
    </div>
</template>

<script>
    import {ADD_CITY} from './../../store/action-types';

    export default {
        data: function () {
            return {
                foundedCities: [
                    {
                        name: 'Самара'
                    }
                ]
            }
        },
        methods: {
            addCity: function (city) {
                this.$store.dispatch(ADD_CITY, city);
            }
        }
    }
</script>
