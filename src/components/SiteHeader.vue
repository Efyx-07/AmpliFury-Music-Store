<script setup lang="ts">

import StoreLogo from '@/sub-components/StoreLogo.vue';
import SiteNav from '@/sub-components/SiteNav.vue';

</script>

<template>
    <header>
        <StoreLogo />
        <SiteNav />
    </header>
</template>

<style lang="scss" scoped>

@import '@/assets/colors.scss';

header {
    width: 100%;
    height: 5rem;
    background: $whiteColor;
    border-bottom: solid 1px $blackColor; 
    position: sticky;
    top: 0;
    left: 0;
    z-index: 99;
    display: flex;
    align-items: center;
    justify-content: space-around;
}

</style>