<script setup lang="ts">

import { RouterView } from 'vue-router';
import SiteHeader from '@/components/SiteHeader.vue';
import ShoppingCart from './components/ShoppingCart.vue';

</script>

<template>
  <SiteHeader />
  <RouterView />
  <ShoppingCart />
</template>
