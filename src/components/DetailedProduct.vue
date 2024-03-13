<script setup lang="ts">

import type { Product } from '@/types/CatalogueTypes';
import { useGlobalDataStore } from '@/stores/GlobalDataStore';
import ReusablePrimaryButton from '@/sub-components/ReusablePrimaryButton.vue';
import ReusableSecondaryButton from '@/sub-components/ReusableSecondaryButton.vue';
import { useCatalogueStore } from '@/stores/CatalogueStore';

const props = defineProps<{
    selectedProduct: Product;
}>();

const selectedProduct: Product | undefined = props.selectedProduct;

const { currency, companyName } = useGlobalDataStore();

// ajoute l'article à la wishlist
const addToWishList = (): void => {
    useCatalogueStore().addToWishList(selectedProduct);
};

// ajoute l'article au shoppingCart
const addToShoppingCart = (): void => {
    useCatalogueStore().addToShoppingCart(selectedProduct);
};

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
                <ReusableSecondaryButton @click="addToWishList">Add to wishlist</ReusableSecondaryButton>
                <ReusablePrimaryButton @click="addToShoppingCart">Add to cart</ReusablePrimaryButton>
            </div>
        </div>
    </div>
</template>

<style lang="scss" scoped>

@import '@/assets/colors.scss';

.detailed-product {
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 3rem;

    .image-container {
        width: 100%;

        img {
            width: 100%;
        }
    }

    .infos-container {
        display: flex;
        flex-direction: column;
        gap: 2rem;

        h2 {
            font-size: 2rem;
        }

        p {
            font-family: "Poppins", sans-serif;;
            font-size: .9rem;
            font-weight: 500;
            opacity: .9;
        }

        .price, .name {
            font-family: unset;
            opacity: unset;
        }
        .price {
            font-size: 3rem;
            font-weight: 700;
        }

        .name {
            font-size: 1.75rem;
            font-weight: unset;
        }

        .buttons-container {
            display: flex;
            flex-wrap: wrap;
            gap: 1rem;
        }
    }
}

</style>