<script setup lang="ts">

import { Icon } from '@iconify/vue';
import { useCatalogueStore } from '@/stores/CatalogueStore';
import { computed } from 'vue';

const catalogueStore = useCatalogueStore();

// utilise méthode du store pour ouvrir shoppingCart
const toggleShoppingCart = () => catalogueStore.toggleShoppingCart();

// calcule et retourne le nombre d'articles présent dans shoppingCart
const cartItemsCount = computed<number>(() => {
    return catalogueStore.cartItems.length;
})

</script>

<template>
    <div class="iconAndBadge-container" @click="toggleShoppingCart">
        <Icon icon="bi:cart" class="icon"/>
        <div class="badge" v-if="cartItemsCount > 0">
            <p>{{ cartItemsCount }}</p>
        </div>
    </div>
</template>

<style lang="scss" scoped>

@import '@/assets/navIconsStyle.scss';

</style>