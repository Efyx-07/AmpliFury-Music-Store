<script setup lang="ts">

import type { Product } from '@/types/CatalogueTypes';
import { Icon } from '@iconify/vue';
import { useCatalogueStore } from '@/stores/CatalogueStore';

const props = defineProps<{
    wishListItem: Product;
    index: number;
}>();

const wishListItem: Product = props.wishListItem;

const catalogueStore = useCatalogueStore();

// supprime l'article de la wishList
const removeFromWishList = (item: Product) => {
    catalogueStore.removeFromWishList(item);
};

// ajoute l'article au shoppingCart
const addToShoppingCart = (): void => {
    catalogueStore.addToShoppingCart(wishListItem);
    removeFromWishList(wishListItem);
};

</script>

<template>
    <div class="wishListItem">
        <h1><span v-if="index <= 8">0</span> {{ index + 1 }}</h1>
        <div class="image-container">
            <img :src="`/images` + wishListItem.image_source" alt="wishListItem.image_alt">
        </div>
        <div class="infos-container">
            <p>{{ wishListItem.brand }} {{ wishListItem.model }}</p>
            <Icon icon="bi:cart" class="icon" @click="addToShoppingCart"/>
            <Icon icon="ph:trash-light" class="icon" @click="removeFromWishList(wishListItem)"/>
        </div>
    </div>
</template>

<style lang="scss" scoped>

.wishListItem {
    width: 20rem;

    .image-container {
        width: 100%;
        display: inline-block;
        position: relative;
        overflow: hidden;

        img {
            width: 100%;
            display: block;
            position: relative;
            object-fit: cover;
        }
    }
}

</style>