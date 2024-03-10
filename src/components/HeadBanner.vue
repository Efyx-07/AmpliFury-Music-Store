<script setup lang="ts">

import { useGlobalDataStore } from '@/stores/GlobalDataStore';

const companyName: string = useGlobalDataStore().companyName;

</script>

<template>
    <div class="head-banner">
        <div class="text-container">
            <div class="titleAndSub-container">
                <h1>{{ companyName }}</h1>
                <p>Unleash Your Musical Passion</p>
            </div>
            <router-link to="/catalogue">
                <button>Explore All</button>
            </router-link>
        </div>
        <div class="image-container">
            <img src="/images/decoration/gorilla-rocker.png" alt="gorilla-rocker">
        </div>
    </div>
</template>

<style lang="scss" scoped>

@import '@/assets/colors.scss';

.head-banner {
    background: $accent1;
    border-bottom: solid 1px $blackColor; 
}

</style>