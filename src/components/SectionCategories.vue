<script setup lang="ts">

import { useCatalogueStore } from '@/stores/CatalogueStore';
import type { Category } from '@/types/CatalogueTypes';

const catalogueStore = useCatalogueStore();

const categories: Category[] = catalogueStore.categories;

</script>

<template>
    <div class="categoryCards-container">
        <div class="category-card" v-for="category in categories" :key="category.id">
            <router-link :to="`/catalogue/${category.name}`" class="image-container">
                <img :src="`/images` + category.categoryImage.source" alt="category.categoryImage.alt">
            </router-link>
            <!-- <p>{{ category.name }}</p> -->
        </div>
    </div>
</template>

<style lang="scss" scoped>
@import '@/assets/cardImageContainer.scss';

.categoryCards-container {
    width: 100%;
    display: grid;
    grid-template-columns: 1fr 1fr 1fr 1fr 1fr 1fr;
    gap: 1rem;

    .category-card {
        width: 100%;
        height: 25rem;
        display: inline-block;

        .image-container {
            height: 100%;
            display: block;

            img {
                height: 100%;
            }
        }
    }
}

</style>