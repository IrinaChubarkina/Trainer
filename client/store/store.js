import Vue from 'vue';
import Vuex from 'vuex';
import axios from 'axios';

Vue.use(Vuex);

const state = {
    sectionList: [], 
    details: []
};

const mutations = {
    setSections (state, data) {
        state.sectionList = data;
    },
    setDetails (state, data) {
        state.details = data;
    },
    addToFavourite (state, {id, exercises}) {

    }
};

const actions = {
    getSections ({commit}) {
        api.get((res) => {
            commit('setSections', res.data);
        }, () => commit('setNotFound'));
    },
    getDetails ({commit}, id) {
        api.details(id, (res) => {
            commit('setDetails', res.data);
        }, () => commit('setNotFound'));
    },
    addToFavourite ({commit}, {id, exercises}) {
        exercises.is_fav = !exercises.is_fav;

        api.update (id, exercises, (res) => {
            commit('addToFavourite', res.data);
        })
    }
};

const api = {
    get: (resolve, reject) => {
        axios
            .get(`http://localhost:3000/sections`)
            .then(resolve)
            .catch(reject);
    },
    details: (id, resolve, reject) => {
        axios
            .get(`http://localhost:3000/sections/${id}/exercises`)
            .then(resolve)
            .catch(reject);
    },
    update: (id, exercises, resolve, reject) => {
        axios
            .put(`http://localhost:3000/exercises/${exercises.id}`, exercises)
            .then(resolve)
            .catch(reject);
    },
};

const store = new Vuex.Store({
    state,
    mutations,
    actions
});


export default store