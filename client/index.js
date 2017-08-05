import 'styles/style.scss';

const app = new Vue({
    el: '#app',
    data: {
        title: 'Weather',
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
            },
        ],
        foundedCities: []
    }
});