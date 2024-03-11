<script setup lang="ts">

import type { Product } from '@/types/CatalogueTypes';

const props = defineProps<{
    product: Product;
}>();

</script>

<template>
    <div class="product-card">
        <div class="image-container">
            <img :src="`/images` + props.product.image_source" alt="props.product.image_alt">
        </div>
        <p>{{ props.product.brand }} {{ props.product.model }}</p>
    </div>
</template>

<style lang="scss" scoped>

.product-card {
    width: 20rem;

    .image-container {
        width: 100%;

        img {
            width: 100%;
        }
    }
}
</style>