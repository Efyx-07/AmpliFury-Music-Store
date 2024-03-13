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
        <div class="page-heading">
            <div class="head-content">
                <h1 v-if="selectedProduct">{{ selectedProduct.brand }} {{ selectedProduct.model }}</h1>
            </div>
        </div>
        <div class="content">
            <DetailedProduct :selectedProduct="selectedProduct" />
        </div>
    </div>
</template>

<style lang="scss" scoped>

@import '@/assets/pagesCommonStyle.scss';

</style>