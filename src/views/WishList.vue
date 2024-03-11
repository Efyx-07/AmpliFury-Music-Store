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
        <h1>Wishlist</h1>
        <div class="wishListItems-container">
            <WishListItemCard v-for="wishListItem in wishListItems" :key="wishListItem.id" :wishListItem="wishListItem"/>
        </div>
    </div>
</template>

<style lang="scss" scoped>

.page .wishListItems-container {
    display: flex;
    flex-wrap: wrap;
    justify-content: space-around;
    gap: 3rem;
}
</style>