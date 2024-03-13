<script setup lang="ts">

import { Icon } from '@iconify/vue';
import { useCatalogueStore } from '@/stores/CatalogueStore';
import { computed } from 'vue';

const toggleShoppingCart = (): void => {
    // crée un évènement personnalisé
    const showShoppingCart: Event = new Event('show-shoppingCart');
    // déclenche l'évènement sur l'objet window
    window.dispatchEvent(showShoppingCart);
    const showModalOverlay: Event = new Event('show-modalOverlay');
    window.dispatchEvent(showModalOverlay);
};

// calcule et retourne le nombre d'articles présent dans shoppingCart
const cartItemsCount = computed<number>(() => {
    return useCatalogueStore().cartItems.length;
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