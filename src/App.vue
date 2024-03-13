<script setup lang="ts">

import { RouterView } from 'vue-router';
import SiteHeader from '@/components/SiteHeader.vue';
import ShoppingCart from './components/ShoppingCart.vue';
import BurgerMenu from './components/BurgerMenu.vue';
import WishList from './views/WishList.vue';

import { ref } from 'vue';

// variable réactive hideWishlist à true pour le masquer initialement
const hideWishlist = ref(true);

</script>

<template>
  <SiteHeader />
  <RouterView />
  <ShoppingCart />
  <BurgerMenu />

  <!-- Ajout de la view wishlist afin qu'elle soit présente dans le DOM à l'ouverture du site et au rafraichissement de toutes les pages
    (permet de conserver la persistance des données chargées depuis LocalStorage) Masqué avec classe condtionnelle en CSS (display: none) -->
  <WishList :class="{ 'hidden': hideWishlist }" />
</template>

<style lang="scss" scoped>

.hidden {
  display: none;
}

</style>
