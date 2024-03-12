<script setup lang="ts">

import { Icon } from '@iconify/vue';
import { ref, onMounted, computed } from 'vue';
import CartItem from './CartItem.vue';
import { useCatalogueStore } from '@/stores/CatalogueStore';
import type { Product } from '@/types/CatalogueTypes';

const isShoppingCartVisible = ref<boolean>(false);

// ferme le shoppingCart
const closeShoppingCart = (): void => {
    isShoppingCartVisible.value = false;
}

// écoute l'évènement personnalisé emis par carticon
onMounted(() => {
    window.addEventListener('show-shoppingCart', () => {
        isShoppingCartVisible.value = true;
    });
});

const catalogueStore = useCatalogueStore();

// ajoute les articles au shoppingCart
const cartItems = computed<Product[]>(() => {
    return catalogueStore.cartItems;
});

// récupère les données stockées dans le localStorage
const savedCartItemsJSON = localStorage.getItem('cartItems');
const savedCartItems: Product[] = savedCartItemsJSON ? JSON.parse(savedCartItemsJSON) : [];
if (savedCartItems.length > 0) {
    catalogueStore.cartItems = savedCartItems;
};

</script>

<template>
    <div class="shopping-cart" :class="{ hiddenShoppingCart: !isShoppingCartVisible}">
        <Icon icon="carbon:close" class="icon" @click="closeShoppingCart" />
        <div class="cartItems-container">
            <CartItem v-for="cartItem in cartItems" :key="cartItem.id" :cartItem="cartItem"/>
        </div>
    </div>
</template>

<style lang="scss" scoped>

@import '@/assets/colors.scss';

.hiddenShoppingCart {
    transform: translateX(100%);
}

.shopping-cart {
    background: $whiteColor;
    border-left: solid 1px $blackColor; 
    height: 100vh;
    width: 100%;
    max-width: 32rem;
    position: fixed;
    top: 0;
    right: 0;
    z-index: 199;
    transition: transform .3s ease-in-out;

    .icon {
        position: absolute;
        top: 1rem;
        right: 1rem;
        font-size: 2rem;
    }
}

</style>