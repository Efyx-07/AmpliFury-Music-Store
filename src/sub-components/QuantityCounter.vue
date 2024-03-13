<script setup lang="ts">

import type { Product } from '@/types/CatalogueTypes';
import { useCatalogueStore } from '@/stores/CatalogueStore';

const props = defineProps<{
    cartItem: Product;
}>();

const cartItem: Product = props.cartItem;

// incrémente ou décremente la quantité dans le compteur et met à jour le prix
const increaseQuantity = (item: any) => {
    item.quantity++;
    useCatalogueStore().updateItemPrice(item);
};
const decreaseQuantity = (item: any) => {
    if (item.quantity > 1) {
        item.quantity--;
        useCatalogueStore().updateItemPrice(item);
    }
};

</script>

<template>
    <div class="quantity-counter">
        <div class="decrementor" @click="decreaseQuantity(cartItem)"><p>-</p></div>
        <div class="quantity"><p>{{ cartItem.quantity }}</p></div>
        <div class="incrementor" @click="increaseQuantity(cartItem)"><p>+</p></div>
    </div>
</template>

<style lang="scss" scoped>

@import '@/assets/colors.scss';

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
            background: $accent1;
            color: $whiteColor;
            border-color: transparent;
        }
    }
}

</style>