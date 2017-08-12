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


    export default {
        methods: {
            addToFav: function (exercises) {                
                this.$store.dispatch('addToFavourite', {id: this.$route.params.id, exercises});
            }
        },
        computed:{
            getDetails() {
                return this.$store.state.details;
            }
        },
        mounted() {
            this.$store.dispatch('getDetails', this.$route.params.id);
        }
    }
</script>