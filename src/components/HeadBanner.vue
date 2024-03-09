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
            <button>Explore All</button>
        </div>
        <div class="image-container">
            <img src="/images/decoration/gorilla-rocker.png" alt="gorilla-rocker">
        </div>
    </div>
</template>