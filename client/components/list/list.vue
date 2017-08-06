<template>
    <div class="cities-list">
        <div class="city-card" v-for="city in getFavouriteCityList">
            <div class="city-card__content">
                <div class="city-card__content__status-icon"
                :style="{ 'background-image': 'url(' + city.icon + ')' }"></div>
                <div class="city-card__content__condition">{{ city.condition }}</div>
                <div class="city-card__content__temperature">{{ city.temp }}°C</div>
                <div class="city-card__content__title">{{ city.name }}</div>
            </div>
            <button class="city-card__remove" @click="removeFromFav(city)">Remove from fav</button>
        </div>
    </div>
</template>

<script>
    import {DELETE_CITY} from './../../store/mutation-types';

    export default {
        computed: {
            getFavouriteCityList() {
                return this.$store.state.favouriteCityList;
            }
        },
        methods: {
            removeFromFav: function (city) {
                this.$store.commit(DELETE_CITY, city);
            }
        }
    }
</script>
