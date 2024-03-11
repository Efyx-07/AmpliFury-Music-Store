<script setup lang="ts">

import ProductCard from '@/components/ProductCard.vue';
import { useCatalogueStore } from '@/stores/CatalogueStore';
import type { Product } from '@/types/CatalogueTypes';
import { useRoute } from 'vue-router';
import { computed } from 'vue';

const catalogueStore = useCatalogueStore();

// importe la liste de tous les produits
const products: Product[] = catalogueStore.getAllProducts();

const route = useRoute();

// extrait la categorie de la route dynamique
const categoryFilter = computed<string | string[]>(() => route.params.category || 'all');

// change le titre de la page selon la categorie 
const pageTitle = computed<string | string[]>(() => {
    const category: string | string[] = categoryFilter.value;
    return category === 'all' ? 'All Products' : category;
}); 

// filtre les produits selon la catégorie
const filteredProducts = computed<Product[]>(() => {
    const category: string | string[] = categoryFilter.value;
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