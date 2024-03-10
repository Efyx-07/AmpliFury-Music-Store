<script setup lang="ts">

import { useCatalogueStore } from '@/stores/CatalogueStore';
import type { Category } from '@/types/CatalogueTypes';

const categories: Category[] = useCatalogueStore().categories;

</script>

<template>
    <div class="navItems-container">
        <div class="navItem">
            <router-link to="/product-categories">
                <p>All products</p>
            </router-link>
        </div>
        <div class="navItem" v-for="category in categories" :key="category.name">
            <router-link :to="`/product-categories/${category.name}`">
                <p>{{ category.name }}</p>
            </router-link>
        </div>
    </div>
</template>

<style lang="scss" scoped>

.navItems-container {
    display: flex;
    gap: 1rem;
}

</style>