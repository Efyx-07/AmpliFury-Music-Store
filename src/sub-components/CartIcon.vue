<script setup lang="ts">

import { Icon } from '@iconify/vue';

const toggleShoppingCart = (): void => {
    // crée un évènement personnalisé
    const showShoppingCart: Event = new Event('show-shoppingCart');
    // déclenche l'évènement sur l'objet window
    window.dispatchEvent(showShoppingCart);
    const showModalOverlay: Event = new Event('show-modalOverlay');
    window.dispatchEvent(showModalOverlay);
};

</script>

<template>
    <Icon icon="bi:cart" @click="toggleShoppingCart"/>
</template>