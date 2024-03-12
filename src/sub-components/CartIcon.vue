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

@import '@/assets/colors.scss';

.iconAndBadge-container {
    position: relative;
    height: 2rem;
    display: flex;
    justify-content: center;
    align-items: center;
    cursor: pointer;

    &:hover > .icon {
        color: $accent1;
    }

    .icon {
        font-size: 1.4rem;
    }

    .badge {
        position: absolute;
        top: 0;
        right: 0;
        width: 1rem;
        height: 1rem;
        background:  $accent1;
        border-radius: 100%;
        display: flex;
        justify-content: center;
        align-items: center;

        p {
            color: $whiteColor;
            font-size: .8rem;
            font-weight: 600;
        }
    }
}
</style>