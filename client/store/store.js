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
                image: 'http://econet.ru/uploads/pictures/271304/content_14__econet_ru.jpg',
                description: 'Обычные приседания улучшают состояние всех мышц ног. Опускайтесь так низко, насколько можете.',
                is_fav: false
            },
            {
                name: 'Выпады',
                image: 'http://upraznenia.ru/wp-content/uploads/2017/01/jagod001.jpg',
                description: '',
                is_fav: true
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
    addToFavourite (state, {id, section}) {
        const parent = state.sectionList[id];
        const current = parent.children[parent.children.indexOf(section)];

        current.is_fav = !current.is_fav;
    }
};

const actions = {
    addToFavourite ({commit}, {id, section}) {
        commit('addToFavourite', {id, section});
    }
};

const store = new Vuex.Store({
    state,
    mutations,
    actions
});


export default store