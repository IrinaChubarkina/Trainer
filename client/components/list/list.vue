<template>
    <div class="cities-list">
        <div class="city-card" v-for="city in cities">
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
    export default {
        data: function () {
            return {
                cities: [
                    {
                        name: 'Пермь',
                        temp: '+12',
                        condition: 'Clear',
                        icon: '//cdn.apixu.com/weather/64x64/night/113.png'
                    },
                    {
                        name: 'Москва',
                        temp: '+15',
                        condition: 'Partly cloudy',
                        icon: '//cdn.apixu.com/weather/64x64/day/116.png'
                    },
                    {
                        name: 'Санкт-Петербург',
                        temp: '+12',
                        condition: 'Light rain shower',
                        icon: '//cdn.apixu.com/weather/64x64/day/353.png'
                    }
                ]
            }
        },
        methods: {
            removeFromFav: function (value) {
                this.cities.splice(this.cities.indexOf(value), 1);
            }
        }
    }
</script>
