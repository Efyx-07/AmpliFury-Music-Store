<script setup lang="ts">

import { useCatalogueStore } from '@/stores/CatalogueStore';
import type { Product } from '@/types/CatalogueTypes';
import WishListItemCard from '@/components/WishListItemCard.vue';
import { computed } from 'vue';
import ReusablePrimaryButton from '@/sub-components/ReusablePrimaryButton.vue';
import ReusableSecondaryButton from '@/sub-components/ReusableSecondaryButton.vue';

const catalogueStore = useCatalogueStore();

// ajoute les articles à la wishList
const wishListItems = computed<Product[]>(() => {
    return catalogueStore.wishListItems;
});

// utilise méthode du store pour vider la wishList de tous ses articles 
const clearWishList = (): void => catalogueStore.clearWishList();

// utilise méthode du store pour ajouter tous les articles de la wishlist dans le shoppingCart
const addAllToShoppingCart = (): void => catalogueStore.addAllItemsFromWishListToShoppingCart()

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
                <WishListItemCard v-for="(wishListItem, index) in wishListItems" :key="wishListItem.id" :wishListItem="wishListItem" :index="index"/>
            </div>
            <div class="buttons-container" v-if="wishListItems.length >= 1">
                <ReusableSecondaryButton @click="clearWishList">Clear wishlist</ReusableSecondaryButton>
                <ReusablePrimaryButton @click="addAllToShoppingCart">Add all to cart</ReusablePrimaryButton>
            </div>
        </div>
    </div>
</template>

<style lang="scss" scoped>

@import '@/assets/colors.scss';
@import '@/assets/breakpoints.scss';
@import '@/assets/pagesCommonStyle.scss';

.content {
    display: flex;
    flex-direction: column;
    gap: 3rem;
}

.wishListItems-container {
    display: grid;
    grid-template-columns: 1fr;
    gap: 1rem;
}

.buttons-container {
    display: flex;
    flex-direction: column;
    gap: .5rem;
    align-self: flex-end;
}

@media (min-width: $breakpointLargeMobile) {

    .wishListItems-container {
        grid-template-columns: 1fr 1fr;
    }

    .buttons-container {
        flex-direction: row;
    }
}

@media (min-width: $breakpointSmallTablet) {

    .wishListItems-container {
        grid-template-columns: 1fr 1fr 1fr;
    }
}

@media (min-width: $breakpointDesktop) {

    .wishListItems-container {
        grid-template-columns: 1fr 1fr;
    }
}

</style>