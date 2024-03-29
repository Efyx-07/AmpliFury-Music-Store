<script setup lang="ts">

import { Icon } from '@iconify/vue';
import { ref, onMounted, computed } from 'vue';
import CartItem from './CartItem.vue';
import { useCatalogueStore } from '@/stores/CatalogueStore';
import type { Product } from '@/types/CatalogueTypes';
import ShoppingCartFooter from './ShoppingCartFooter.vue';
import ReusablePrimaryButton from '@/sub-components/ReusablePrimaryButton.vue';
import ModalOverlay from '@/sub-components/ModalOverlay.vue';

const isShoppingCartVisible = ref<boolean>(false);

// ferme le shoppingCart
const closeShoppingCart = (): void => {
    isShoppingCartVisible.value = false;
}

onMounted(() => {
    // écoute l'évènement personnalisé emis par carticon
    window.addEventListener('show-shoppingCart', () => {
        isShoppingCartVisible.value = true;
    });
    // écoute l'évènement personnalisé emis par shoppingCartFooter
    window.addEventListener('hide-shoppingCart', () => {
        isShoppingCartVisible.value = false;
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

// supprime tous les articles du shoppingCart
const clearCart = (): void => {
    catalogueStore.clearCart();
}; 

</script>

<template>
    <div class="shopping-cart" :class="{ hiddenShoppingCart: !isShoppingCartVisible}">
        <header>
            <h1>Shopping Cart [{{ cartItems.length }}]</h1>
            <Icon icon="carbon:close" class="closeIcon" @click="closeShoppingCart" />
        </header>
        <div class="cartItems-container">
            <CartItem v-for="cartItem in cartItems" :key="cartItem.id" :cartItem="cartItem"/>
            <ReusablePrimaryButton class="button" v-if="cartItems.length > 1" @click="clearCart">Clear cart</ReusablePrimaryButton>
        </div>
        <ShoppingCartFooter />
    </div>
    <ModalOverlay :showModalOverlay="isShoppingCartVisible" v-show="isShoppingCartVisible"/>
</template>

<style lang="scss" scoped>

@import '@/assets/colors.scss';
@import '@/assets/breakpoints.scss';

.hiddenShoppingCart {
    transform: translateX(100%);
}

.shopping-cart {
    background: $whiteColor;
    height: 100vh;
    width: 100%;
    max-width: 31rem;
    position: fixed;
    top: 0;
    right: 0;
    z-index: 199;
    transition: transform .2s ease-in-out;

    header {
        width: 100%;
        height: 4rem;
        background: $whiteColor;
        border-bottom: solid 1px $blackColor;
        display: flex; 
        align-items: center;
        justify-content: space-between;
        padding: 0 1rem;

        .closeIcon {
            font-size: 1.75rem;
            cursor: pointer;

            &:hover {
                color: $accent1;
            }
        }
    }

    .cartItems-container {
        width: 100%;
        height: calc(100vh - 15rem); // height - taille du footer + header
        padding: 1rem;
        display: flex;
        flex-direction: column;
        gap: 1rem;
        overflow-y: auto;
        scrollbar-width: none;
        -ms-overflow-style: none;

        &::-webkit-scrollbar {
            display: none;
        }

        .button {
            align-self: flex-end;
            margin-top: 1rem;
        }
    }
}

@media (min-width: $breakpointLargeMobile) {

    .shopping-cart {
        border-left: solid 1px $blackColor;

        header {
            height: 6rem;
            padding: 0 2rem;
        }

        .cartItems-container {
            height: calc(100vh - 17rem); // height - taille du footer + header
            padding: 2rem;
        }
    }
}

</style>