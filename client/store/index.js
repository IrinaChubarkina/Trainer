import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

const state = {
    favouriteCityList: []
};

const mutations = {
    removeCity (state, data) {
    }
};

const actions = {
    addCity ({commit}) {

    }
};

const store = new Vuex.Store({
    state,
    mutations,
    actions
});

export default store
