<script setup lang="ts">

import ProductCard from '@/components/ProductCard.vue';
import { useCatalogueStore } from '@/stores/CatalogueStore';
import type { Product } from '@/types/CatalogueTypes';
import { useRoute } from 'vue-router';
import { computed, ref, watch } from 'vue';

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
    return category === 'all' ? products : products.filter(product => product.type === category);
});

// interface pour le bouton select
interface SelectOption {
    value: string;
    mention: string;
};

const selectOptions: SelectOption [] = [
    {
        value: 'random',
        mention: 'Random'
    },
    {
        value: 'priceAsc',
        mention: 'Price: low to high'
    },
    {
        value: 'priceDesc',
        mention: 'Price: high to low'
    },
    {
        value: 'alphaAsc',
        mention: 'Alphabet: A to Z'
    },
    {
        value: 'alphaDesc',
        mention: 'Alphabet: Z to A'
    },
];

// stocke la valeur du bouton select de manière réactive
const selectedSortOption = ref<string>('random');

// crée une propriété calculée sortedProducts qui retourne les produits triés en fonction de l'option de tri
const sortedProducts = computed<Product[]>(() => {
    const option = selectedSortOption.value;
    // ordre aléatoire
    if (option === 'random') {
        return filteredProducts.value.slice().sort(() => Math.random() - 0.5);
    // prix ascendant
    } else if (option === 'priceAsc') {
        return filteredProducts.value.slice().sort((a, b) => Number(a.price) - Number(b.price));
    // prix descendant
    } else if (option === 'priceDesc') {
        return filteredProducts.value.slice().sort((a, b) => Number(b.price) - Number(a.price));
    // A to Z
    } else if (option === 'alphaAsc') {
        return filteredProducts.value.slice().sort((a, b) => a.brand.localeCompare(b.brand));
    // Z to A
    } else if (option === 'alphaDesc') {
        return filteredProducts.value.slice().sort((a, b) => b.brand.localeCompare(a.brand));
    } else {
        return filteredProducts.value;
    }
});

// met à jour la liste triée des produits lorsque l'option de tri change
watch(selectedSortOption, () => {
    sortedProducts.value;
});

</script>

<template>
    <div class="page">
        <h1>{{ pageTitle }}</h1>
        <select class="sortSelectButton" v-model="selectedSortOption">
            <option v-for="selectOption in selectOptions" :key="selectOption.value" :value="selectOption.value">{{ selectOption.mention }}</option>
        </select>
        <div class="productCards-container">
            <ProductCard v-for="product in sortedProducts" :key="product.id" :product="product"/>
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