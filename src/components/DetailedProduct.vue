<script setup lang="ts">

import type { Product } from '@/types/CatalogueTypes';

const props = defineProps<{
    selectedProduct: Product | undefined;
}>();

const selectedProduct: Product | undefined = props.selectedProduct;

</script>

<template>
    <div class="detailed-product" v-if="selectedProduct">
        <div class="image-container">
            <img :src="`/images` + selectedProduct.image_source" alt="selectedProduct.image_alt">
        </div>
        <p>{{ selectedProduct.brand }} {{ selectedProduct.model }}</p>
    </div>
</template>

<style lang="scss" scoped>

.detailed-product {
    width: 20rem;

    .image-container {
        width: 100%;

        img {
            width: 100%;
        }
    }
}

</style>