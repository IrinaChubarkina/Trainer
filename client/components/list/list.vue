<template>
    <div>
        <div class="fav">
            <router-link :to="{ name: 'fav'}">Мои упражнения</router-link>
        </div>
        <div class="sections-list">
            <div class="section-card" v-for="section in getSectionList">
                <router-link :to="{ name: 'section', params: { id: section.id }}"
                                class="section-card__content section-card__content--small">
                    <div class="section-card__content__image"
                        v-bind:style="{ 'background-image': 'url(' + section.image + ')' }"></div>
                    <div class="section-card__content__title">{{ section.name }}</div>
                </router-link>
            </div>
        </div>
    </div>
</template>


<script>
    export default {
        computed: {
            getSectionList() {
                return this.$store.state.sectionList;
            }
        },
        mounted() {
            this.$store.dispatch('getSections');

        }
    }
</script>
