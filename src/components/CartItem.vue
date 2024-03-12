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

</script>

<template>
    <div class="cartItem">
        <div class="image-container">
            <img :src="`/images` + cartItem.image_source" alt="cartItem.image_alt">
        </div>
        <div class="datas-container">
            <p class="item-name">{{ cartItem.brand }} {{ cartItem.model }}</p>
            <p class="item-price">{{ cartItem.price }} {{ currency }}</p>
            <QuantityCounter :cartItem="cartItem"/>
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
}

</style>