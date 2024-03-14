<script setup lang="ts">

import { useCatalogueStore } from '@/stores/CatalogueStore';
import { useGlobalDataStore } from '@/stores/GlobalDataStore';
import { computed } from 'vue';
import ReusablePrimaryButton from '@/sub-components/ReusablePrimaryButton.vue';
import ReusableSecondaryButton from '@/sub-components/ReusableSecondaryButton.vue';

const { currency } = useGlobalDataStore();

const catalogueStore = useCatalogueStore();

// calcule le prix total des articles du shoppingCart
const totalPrice = computed<string>(() => {
    return catalogueStore.totalPrice;
});

// utilise méthode du store pour fermer shoppingCart
const closeShoppingCart = (): void => catalogueStore.closeShoppingCart();

</script>

<template>
    <div class="shoppingCart-footer">
        <div class="price-container">
            <p>Subtotal:</p>
            <h1>{{ totalPrice }} {{ currency }}</h1>
        </div>
        <div class="buttons-container">
            <ReusableSecondaryButton @click="closeShoppingCart">Keep browsing</ReusableSecondaryButton>
            <ReusablePrimaryButton>Go to checkout</ReusablePrimaryButton>
        </div>
    </div>
</template>

<style lang="scss" scoped>

@import '@/assets/colors.scss';

.shoppingCart-footer {
    background: $whiteColor;
    border-top: solid 1px $blackColor;
    width: 100%;
    max-width: 32rem;
    height: 11rem;
    padding: 2rem;
    position: fixed;
    bottom: 0;
    z-index: 99;
    display: flex;
    justify-content: space-between;

    .price-container {
        display: flex;
        flex-direction: column;

        p {
            font-size: 1.5rem;
            font-weight: 500;
        }
    }

    .buttons-container {
        display: flex;
        flex-direction: column;
        gap: .5rem;
    }
}

</style>