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
            <ReusableSecondaryButton @click="closeShoppingCart" class="button">Keep browsing</ReusableSecondaryButton>
            <ReusablePrimaryButton class="button">Go to checkout</ReusablePrimaryButton>
        </div>
    </div>
</template>

<style lang="scss" scoped>

@import '@/assets/colors.scss';
@import '@/assets/breakpoints.scss';

.shoppingCart-footer {
    background: $whiteColor;
    border-top: solid 1px $blackColor;
    width: 100%;
    max-width: 32rem;
    height: 11rem;
    padding: 1rem;
    position: fixed;
    bottom: 0;
    z-index: 99;
    display: flex;
    flex-direction: column;
    justify-content: space-between;

    .price-container {
        display: flex;
        align-items: center;
        gap: 1rem;

        p {
            font-size: 1.5rem;
            font-weight: 500;
        }
    }

    .buttons-container {
        display: flex;
        flex-direction: column;
        gap: .5rem;

        .button {
            width: 100%;
            min-width: 12rem;
        }
    }
}

@media (min-width: $breakpointLargeMobile) {

    .shoppingCart-footer {
        padding: 2rem;
        flex-direction: unset;

        .price-container {
            align-items: unset;
            gap: unset;
            flex-direction: column;
        }
    }
}

</style>