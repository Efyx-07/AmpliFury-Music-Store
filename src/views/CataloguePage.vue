<script setup lang="ts">

import ProductCard from '@/components/ProductCard.vue';
import { useCatalogueStore } from '@/stores/CatalogueStore';
import type { Product } from '@/types/CatalogueTypes';
import { useRoute } from 'vue-router';
import { computed } from 'vue';

const catalogueStore = useCatalogueStore();

const products: Product[] = catalogueStore.getAllProducts();

const route = useRoute();

const categoryFilter = computed(() => route.params.category || 'all');

const pageTitle = computed<string | string[]>(() => {
    const category = categoryFilter.value;
    return category === 'all' ? 'All Products' : category;
}); 

const filteredProducts = computed<Product[]>(() => {
    const category = categoryFilter.value;
    if (category && category !== 'all') {
        return products.filter(product => product.type === category);
    } else {
        return products;
    }
});

</script>

<template>
    <div class="page">
        <h1>{{ pageTitle }}</h1>
        <div class="productCards-container">
            <ProductCard v-for="product in filteredProducts" :key="product.id" :product="product"/>
        </div>
    </div>
</template>

<style lang="scss" scoped>

.page .productCards-container {
    display: flex;
    flex-wrap: wrap;
    justify-content: space-around;
    gap: 3rem;
}
</style>