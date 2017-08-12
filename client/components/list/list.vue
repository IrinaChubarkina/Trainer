<template>

    <div class="sections-list">
        <div class="section-card" v-for="section in getSectionList">
            <router-link :to="{ name: 'section', params: { id: section.id }}" class="section-card__content">
                <div class="section-card__content__icon"
                     v-bind:style="{ 'background-image': 'url(' + section.image + ')' }"></div>
                <div class="section-card__content__title">{{ section.name }}</div>
                <div class="section-card__content__link">
                </div>
            </router-link>
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
