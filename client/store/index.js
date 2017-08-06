import Vue from 'vue';
import Vuex from 'vuex';
import {DELETE_CITY} from './mutation-types';
import {ADD_CITY} from './action-types';

Vue.use(Vuex);

const state = {
    favouriteCityList: [
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
};

const mutations = {
    [DELETE_CITY] (state, city) {
        state.favouriteCityList.splice(state.favouriteCityList.indexOf(city), 1);
    }
};

const actions = {
    [ADD_CITY] ({state}, city) {
        const addCity =  new Promise((resolve, reject) => {
            setTimeout(() => {
                resolve({
                    name: 'Самара',
                    temp: '-17',
                    condition: 'Snow',
                    icon: '//cdn.apixu.com/weather/64x64/night/113.png'
                });
            }, 300);
        });

        addCity.then((res) => {
            state.favouriteCityList.push(res);
        });
    }
};

const store = new Vuex.Store({
    state,
    mutations,
    actions
});

export default store
