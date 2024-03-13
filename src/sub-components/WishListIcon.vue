<script setup lang="ts">

import { Icon } from '@iconify/vue';
import { useCatalogueStore } from '@/stores/CatalogueStore';
import { computed } from 'vue';

// calcule et retourne le nombre d'articles présent dans la wishList
const wishListItemsCount = computed<number>(() => {
    return useCatalogueStore().wishListItems.length;
});

</script>

<template>
    <router-link to="/wishlist" class="iconAndBadge-container">
        <Icon icon="clarity:heart-line" class="icon"/>
        <div class="badge" v-if="wishListItemsCount > 0">
            <p>{{ wishListItemsCount }}</p>
        </div>
    </router-link>
</template>

<style lang="scss" scoped>

@import '@/assets/navIconsStyle.scss';

</style>