<script setup lang="ts">

import type { Product } from '@/types/CatalogueTypes';
import { useCatalogueStore } from '@/stores/CatalogueStore';

const props = defineProps<{
    cartItem: Product;
}>();

const cartItem: Product = props.cartItem;

const catalogueStore = useCatalogueStore();

// supprime l'article du shoppingCart
const removeFromShoppingCart = (item: Product) => {
    catalogueStore.removeFromShoppingCart(item);
};

</script>

<template>
    <div class="cartItem">
        <div class="image-container">
            <img :src="`/images` + cartItem.image_source" alt="cartItem.image_alt">
        </div>
        <p>{{ cartItem.brand }} {{ cartItem.model }}</p>
        <Icon icon="ph:trash-light" class="icon" @click="removeFromShoppingCart(cartItem)"/>
    </div>
</template>

<style lang="scss" scoped>

.cartItem {
    width: 100%;
    display: flex;

    .image-container {
        width: 10rem;

        img {
            width: 100%;
        }
    }

    .icon {
        color: black;
        font-size: 1rem;
    }
}

</style>