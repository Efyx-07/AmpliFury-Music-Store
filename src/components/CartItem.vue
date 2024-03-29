<script setup lang="ts">

import type { Product } from '@/types/CatalogueTypes';
import { Icon } from '@iconify/vue';
import { useCatalogueStore } from '@/stores/CatalogueStore';
import { useGlobalDataStore } from '@/stores/GlobalDataStore';
import QuantityCounter from '@/sub-components/QuantityCounter.vue';

const props = defineProps<{
    cartItem: Product;
}>();

const cartItem: Product = props.cartItem;

const catalogueStore = useCatalogueStore();

const {currency} = useGlobalDataStore();

// supprime l'article du shoppingCart
const removeFromShoppingCart = (item: Product) => {
    catalogueStore.removeFromShoppingCart(item);
};

// supprime l'article du shoppingCart et le rebascule dans la wishlist
const toggleFromShoppingCartToWishList = (item: Product) => {
    catalogueStore.toggleFromShoppingCartToWishList(item);
};

</script>

<template>
    <div class="cartItem">
        <div class="image-container">
            <img :src="`/images` + cartItem.image_source" alt="cartItem.image_alt">
        </div>
        <div class="datas-container">
            <p class="item-name">{{ cartItem.brand }} {{ cartItem.model }}</p>
            <p class="item-price">{{ cartItem.price }} {{ currency }}</p>
            <QuantityCounter :cartItem="cartItem" class="counter"/>
            <div class="icons-container">
                <Icon icon="clarity:heart-line" class="icon" @click="toggleFromShoppingCartToWishList(cartItem)"/>
                <Icon icon="ph:trash-light" class="icon" @click="removeFromShoppingCart(cartItem)"/>
            </div>
        </div>
    </div>
</template>

<style lang="scss" scoped>

@import '@/assets/colors.scss';
@import '@/assets/cardImageContainer.scss';
@import '@/assets/breakpoints.scss';

.cartItem {
    width: 100%;
    border: solid 1px $blackColor;
    padding: .5rem;
    display: flex;
    gap: 1rem;

    .image-container {
        min-height: 9rem;
        cursor: unset;

        img {
            height: 100%;
        }
    }

    .datas-container {
        width: 100%;
        position: relative;

        .item-name {
            font-size: 1.25rem;
        }

        .item-price {
            font-size: 1.5rem;
            font-weight: 600;
        }

        .icons-container {
            position: absolute;
            bottom: 0;
            right: 0;
            display: flex;
            gap: .5rem;

            .icon {
                font-size: 1.1rem;
                cursor: pointer;

                &:hover {
                    color: $accent1;
                }
            }
        }
    }
}

@media (min-width: $breakpointLargeMobile) {

    .cartItem {

        .image-container {
            min-height: unset;
            width: 10rem;
            cursor: unset;

            img {
                height: unset;
            }
        }

        .datas-container .counter {
            position: absolute;
            bottom: 0;
            left: 0;
        }
    }
}

</style>