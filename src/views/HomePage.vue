<script setup lang="ts">
import { useCatalogueStore } from '@/stores/CatalogueStore';
import HeadBanner from '@/components/HeadBanner.vue';
import SectionCategories from '@/components/SectionCategories.vue';

const catalogueStore = useCatalogueStore();

console.log(catalogueStore.products);

</script>

<template>
    <div class="page">
        <HeadBanner />
        <SectionCategories />
    </div>
</template>