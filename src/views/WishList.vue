<script setup lang="ts">

import { useCatalogueStore } from '@/stores/CatalogueStore';
import type { Product } from '@/types/CatalogueTypes';
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
        <div class="wishListItems-container">
            <div class="wishListItem" v-for="wishListItem in wishListItems" :key="wishListItem.id">
                <div class="image-container">
                    <img :src="`/images` + wishListItem.image_source" alt="wishListItem.image_alt">
                </div>
                <p>{{ wishListItem.brand }} {{ wishListItem.model }}</p>
            </div>
        </div>
    </div>
</template>