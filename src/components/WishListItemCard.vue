<script setup lang="ts">

import type { Product } from '@/types/CatalogueTypes';
import { useCatalogueStore } from '@/stores/CatalogueStore';
import { useGlobalDataStore } from '@/stores/GlobalDataStore';
import ReusablePrimaryButton from '@/sub-components/ReusablePrimaryButton.vue';
import ReusableSecondaryButton from '@/sub-components/ReusableSecondaryButton.vue';

const props = defineProps<{
    wishListItem: Product;
    index: number;
}>();

const wishListItem: Product = props.wishListItem;

const catalogueStore = useCatalogueStore();

const { currency } = useGlobalDataStore();

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
            <div class="about-container">
                <p class="item-name">{{ wishListItem.brand }} {{ wishListItem.model }}</p>
                <p class="item-price">{{ wishListItem.price }} {{ currency }}</p>
            </div>
            <div class="buttons-container">
                <ReusableSecondaryButton class="smalledButton" @click="removeFromWishList(wishListItem)">Remove</ReusableSecondaryButton>
                <ReusablePrimaryButton class="smalledButton" @click="addToShoppingCart">Add to cart</ReusablePrimaryButton>
            </div>
        </div>
    </div>
</template>

<style lang="scss" scoped>

@import '@/assets/colors.scss';
@import '@/assets/breakpoints.scss';

.wishListItem {
    border: solid 1px $blackColor;
    padding: .75rem;
    display: flex;
    flex-direction: column;
    gap: 1rem;

    h1 {
        line-height: .9;
        white-space: nowrap;
    }

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
        gap: 1rem;

        .about-container {

            .item-name {
                font-size: 1.25rem;
            }

            .item-price {
                font-size: 1.5rem;
                font-weight: 600;
            }
        }

        .buttons-container {
            display: flex;
            flex-direction: column;
            gap: .5rem;

            .smalledButton {
                width: 100%;
                height: 2rem;
                font-size: .8rem;
            }
        }
    }
}

@media (min-width: $breakpointDesktop) {

    .wishListItem {
        display: grid;
        grid-template-columns: .25fr 2fr 2fr;

        .infos-container {
            position: relative;

            .buttons-container { 
                position: absolute;
                top: 50%;
                width: 100%;
            }
        }
    }
}

</style>