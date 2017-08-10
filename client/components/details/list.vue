<template>

    <div class="sections-list">
        <div class="section-card" v-for="section in getSectionList">
            <div class="section-card__content">
                <div class="section-card__content__icon"
                     v-bind:style="{ 'background-image': 'url(' + section.icon + ')' }"></div>
                <div class="section-card__content__title">{{ section.name }}</div>
            </div>
        </div>
    </div>
</template>


<script>
    export default {
        computed:{
            getSectionList() {
                return this.$store.state.sectionList;
            }
        }
    }
</script>