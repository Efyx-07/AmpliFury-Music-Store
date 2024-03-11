<script setup lang="ts">

import type { Product } from '@/types/CatalogueTypes';
import { Icon } from '@iconify/vue';
import { useCatalogueStore } from '@/stores/CatalogueStore';

const props = defineProps<{
    product: Product;
}>();

const catalogueStore = useCatalogueStore()

// ajoute un article à la wishlist
const addToWishList = (): void => {
    catalogueStore.addToWishList(props.product);
};

</script>

<template>
    <div class="product-card">
        <div class="image-container">
            <img :src="`/images` + props.product.image_source" alt="props.product.image_alt">
        </div>
        <p>{{ props.product.brand }} {{ props.product.model }}</p>
        <p>{{ props.product.price }} $</p>
        <Icon icon="clarity:heart-line" class="wishlistIcon" @click="addToWishList"/>
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