<script setup lang="ts">

import { useCatalogueStore } from '@/stores/CatalogueStore';
import type { Product } from '@/types/CatalogueTypes';
import WishListItemCard from '@/components/WishListItemCard.vue';
import { computed } from 'vue';

const catalogueStore = useCatalogueStore();

// ajoute les articles à la wishList
const wishListItems = computed<Product[]>(() => {
    return catalogueStore.wishListItems;
});

// récupère les données stockées dans le localStorage
const savedWishListItemsJSON = localStorage.getItem('wishListItems');
const savedWishListItems: Product[] = savedWishListItemsJSON ? JSON.parse(savedWishListItemsJSON) : [];
if (savedWishListItems.length > 0) {
    catalogueStore.wishListItems = savedWishListItems;
};

</script>

<template>
    <div class="page">
        <div class="page-heading">
            <div class="head-content">
                <h1>Wishlist</h1>
            </div>
        </div>
        <div class="content">
            <div class="wishListItems-container">
                <WishListItemCard v-for="wishListItem in wishListItems" :key="wishListItem.id" :wishListItem="wishListItem"/>
            </div>
        </div>
    </div>
</template>

<style lang="scss" scoped>

@import '@/assets/colors.scss';
@import '@/assets/breakpoints.scss';
@import '@/assets/pagesCommonStyle.scss';

</style>