<script setup lang="ts">

import { useCatalogueStore } from '@/stores/CatalogueStore';
import type { Product } from '@/types/CatalogueTypes';

const catalogueStore = useCatalogueStore();

const products: Product[] = catalogueStore.getAllProducts();

</script>

<template>
    <div class="product-card" v-for="product in products" :key="product.id">
        <div class="image-container">
            <img :src="`/images` + product.image_source" alt="product.image_alt">
        </div>
        <p>{{ product.brand }}</p>
    </div>
</template>