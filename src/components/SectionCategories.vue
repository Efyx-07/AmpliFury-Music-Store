<script setup lang="ts">

import { useCatalogueStore } from '@/stores/CatalogueStore';
import type { Category } from '@/types/CatalogueTypes';

const catalogueStore = useCatalogueStore();

const categories: Category[] = catalogueStore.categories;

</script>

<template>
    <div class="section">
        <h1>Our categories</h1>
        <div class="categoryCards-container">
            <div class="category-card" v-for="category in categories" :key="category.id">
                <router-link :to="`/catalogue/${category.name}`">
                    <img :src="`/images` + category.categoryImage.source" alt="category.categoryImage.alt">
                </router-link>
                <p>{{ category.name }}</p>
            </div>
        </div>
    </div>
</template>