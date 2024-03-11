<script setup lang="ts">

import DetailedProduct from '@/components/DetailedProduct.vue';
import { useCatalogueStore } from '@/stores/CatalogueStore';
import { useRoute } from 'vue-router';
import type { Product } from '@/types/CatalogueTypes';

const catalogueStore = useCatalogueStore();

const products: Product[] = catalogueStore.getAllProducts();

const route = useRoute();

const productId: number | undefined = route.params.productId ? Number(route.params.productId) : undefined;

const selectedProduct: Product | undefined = products.find((product: Product) => {
    return product.id === productId;
});

</script>

<template>
    <div class="page">
        <DetailedProduct :selectedProduct="selectedProduct" />
    </div>
</template>