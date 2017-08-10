import Vue from 'vue';
import Vuex from 'vuex';
Vue.use(Vuex);

const state = {
    sectionList: [
    {
        name: 'Попка',
        url: 'ass',
        image: '//cdn.apixu.com/weather/64x64/night/113.png',
        children: [
            {
                name: 'Приседания',
                image: '',
                description: ''
            },
            {
                name: 'Выпады',
                image: '',
                description: ''
            }
        ]
    },
    {
        name: 'Ноги',
        url: 'trotters',
        image: '//cdn.apixu.com/weather/64x64/night/113.png',
        children: [
            {
                name: 'Приседания со штангой',
                image: '',
                description: ''
            }
        ]
    },
    {
        name: 'Пресс',
        url: 'press',
        image: '//cdn.apixu.com/weather/64x64/night/113.png',
        children: [
            {
                name: 'Скручивания',
                image: '',
                description: ''
            }
        ]
    },
    
] };

const mutations = {
    // removeCity(state,city) {
    //     state.favouriteCityList.splice(state.favouriteCityList.indexOf(city), 1);
    // }
};

const store = new Vuex.Store({
    state
    /*,mutations*/
});


export default store