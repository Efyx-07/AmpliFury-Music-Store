<script setup lang="ts">

import type { Product } from '@/types/CatalogueTypes';
import { Icon } from '@iconify/vue';
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

@import '@/assets/colors.scss';

.cartItem {
    width: 100%;
    border: solid 1px $blackColor;
    padding: .5rem;
    display: flex;

    .image-container {
        width: 10rem;
        display: inline-block;
        position: relative;

        img {
            width: 100%;
            display: block;
            position: relative;
            object-fit: cover;
        }
    }
}

</style>