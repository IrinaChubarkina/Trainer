<template>

    <div class="sections-list">
        <div class="section-card" v-for="section in getDetails">
            <div class="section-card__content section-card__content--with-bg">
                <div class="section-card__content__image"
                     v-bind:style="{ 'background-image': 'url(' + section.image + ')' }"></div>
                <div class="section-card__content__title">{{ section.name }}</div>
                <div class="section-card__content__description">{{ section.description }}</div>
                <div class="section-card__content__fav"
                     v-on:click="addToFav(section)"
                     v-bind:class="{ 'section-card__content__fav--active': section.is_fav }"></div>
            </div>
        </div>
    </div>
</template>


<script>
    const id = 0;

    export default {
        methods: {
            addToFav: function (section) {
                this.$store.dispatch('addToFavourite', {id, section});
            }
        },
        computed:{
            getDetails() {
                return this.$store.state.sectionList[id].children;
            }
        }
    }
</script>