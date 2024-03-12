<script setup lang="ts">

import type { Product } from '@/types/CatalogueTypes';
import { Icon } from '@iconify/vue';
import { useCatalogueStore } from '@/stores/CatalogueStore';
import { useGlobalDataStore } from '@/stores/GlobalDataStore';

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

// incrémente ou décremente la quantité dans le compteur et met à jour le prix
const increaseQuantity = (item: any) => {
    item.quantity++;
    catalogueStore.updateItemPrice(item);
};
const decreaseQuantity = (item: any) => {
    if (item.quantity > 1) {
        item.quantity--;
        catalogueStore.updateItemPrice(item);
    }
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
            <div class="quantity-counter">
                <div class="decrementor" @click="decreaseQuantity(cartItem)"><p>-</p></div>
                <div class="quantity"><p>{{ cartItem.quantity }}</p></div>
                <div class="incrementor" @click="increaseQuantity(cartItem)"><p>+</p></div>
            </div>
            <div class="icons-container">
                <Icon icon="ph:trash-light" class="icon" @click="removeFromShoppingCart(cartItem)"/>
            </div>
        </div>
    </div>
</template>

<style lang="scss" scoped>

@import '@/assets/colors.scss';

.cartItem {
    width: 100%;
    border: solid 1px $blackColor;
    padding: .5rem;
    display: flex;
    gap: 1rem;

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

    .datas-container {

        .quantity-counter {
            display: flex;
            align-items: center;
            gap: 1rem;
            font-size: 1.5rem;

            .decrementor, .incrementor {
                background: $whiteColor;
                color: $blackColor;
                border: solid 1px $blackColor;
                width: 1.5rem;
                height: 1.5rem;
                display: flex;
                justify-content: center;
                align-items: center;
                cursor: pointer;

                &:hover {
                    background: $blackColor;
                    color: $whiteColor;
                    border-color: transparent;
                }
            }
        }
    }
}

</style>