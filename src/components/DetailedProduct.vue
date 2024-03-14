<script setup lang="ts">

import type { Product } from '@/types/CatalogueTypes';
import { useGlobalDataStore } from '@/stores/GlobalDataStore';
import ReusablePrimaryButton from '@/sub-components/ReusablePrimaryButton.vue';
import ReusableSecondaryButton from '@/sub-components/ReusableSecondaryButton.vue';
import { useCatalogueStore } from '@/stores/CatalogueStore';
import { computed } from 'vue';

const props = defineProps<{
    selectedProduct: Product;
}>();

const selectedProduct: Product | undefined = props.selectedProduct;

const { currency, companyName } = useGlobalDataStore();

const catalogueStore = useCatalogueStore()

// ajoute l'article à la wishlist
const addToWishList = (): void => {
    catalogueStore.addToWishList(selectedProduct); 
};

// ajoute l'article au shoppingCart
const addToShoppingCart = (): void => {
    catalogueStore.addToShoppingCart(selectedProduct); 
};

// Utilise la propriété isInWishList du produit sélectionné
const isProductInWishList = computed<boolean>(() =>
    selectedProduct ? catalogueStore.checkIsProductInWishList(selectedProduct) : false
);

const isProductInShoppingCart = computed<boolean>(() =>
    selectedProduct ? catalogueStore.checkIsProductInShoppingCart(selectedProduct) : false
);

</script>

<template>
    <div class="detailed-product" v-if="selectedProduct">
        <div class="image-container">
            <img :src="`/images` + selectedProduct.image_source" alt="selectedProduct.image_alt">
        </div>
        <div class="infos-container">
            <div class="section">
                <p class="price">{{ selectedProduct.price }} {{ currency }}</p>
                <p class="name">{{ selectedProduct.brand }} {{ selectedProduct.model }}</p>
            </div>
            <div class="section">
                <h2>Description</h2>
                <p>{{ selectedProduct.description }}</p>
            </div>
            <div class="section">
                <h2>Details</h2>
                <p>Item reference: {{ selectedProduct.reference }}</p>
                <p>Category: {{ selectedProduct.type }}</p>
                <p>Added to catalogue since: {{ selectedProduct.reference_month }} {{ selectedProduct.reference_year }}</p>
                <p>Color: {{ selectedProduct.color }}</p>
                <p>Warranty: 1 year {{ selectedProduct.brand }} / 3 years {{ companyName }}</p>
            </div>
            <div class="buttons-container">
                <ReusableSecondaryButton v-if="isProductInWishList && !isProductInShoppingCart">View wishlist</ReusableSecondaryButton> 
                <ReusableSecondaryButton v-else @click="addToWishList">Add to wishlist</ReusableSecondaryButton>
                <ReusablePrimaryButton @click="addToShoppingCart">Add to cart</ReusablePrimaryButton>
            </div>
        </div>
    </div>
</template>

<style lang="scss" scoped>

@import '@/assets/colors.scss';
@import '@/assets/breakpoints.scss';

.detailed-product {
    display: flex;
    flex-direction: column;
    gap: 2rem;

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

    .infos-container {
        display: flex;
        flex-direction: column;
        gap: 2rem;

        h2 {
            font-size: clamp(1.75rem, 4vw, 2rem);
        }

        p {
            font-family: "Poppins", sans-serif;;
            font-size: .9rem;
            font-weight: 500;
            opacity: .75;
        }

        .price, .name {
            font-family: unset;
            opacity: unset;
        }
        .price {
            font-size: clamp(2.5rem, 5vw,3rem);
            font-weight: 700;
        }

        .name {
            font-size: clamp(1.5rem, 3vw, 1.75rem);
            font-weight: unset;
        }

        .buttons-container {
            display: flex;
            flex-wrap: wrap;
            gap: 1rem;
        }
    }
}

@media (min-width: $breakpointSmallTablet) {

    .detailed-product {
        display: grid;
        grid-template-columns: 1fr 1fr;
        gap: 3rem;
    }
}

</style>