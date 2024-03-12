<script setup lang="ts">

import type { Product } from '@/types/CatalogueTypes';
import { Icon } from '@iconify/vue';
import { useCatalogueStore } from '@/stores/CatalogueStore';
import { useGlobalDataStore } from '@/stores/GlobalDataStore';
import { useRouter } from 'vue-router';

const props = defineProps<{
    product: Product;
}>();

const catalogueStore = useCatalogueStore();

const { currency } = useGlobalDataStore();

// ajoute un article à la wishlist
const addToWishList = (): void => {
    catalogueStore.addToWishList(props.product);
};

// navigue vers la page du produit selectionné
const router = useRouter();
const navigateToProduct = () => {
    router.push({
        name: 'ProductDetail',
        params: { productId: props.product.id }
    });
};

// ajoute un article au shoppingCart
const addToShoppingCart = (): void => {
    catalogueStore.addToShoppingCart(props.product);
};

</script>

<template>
    <div class="product-card">
        <div class="image-container" @click="navigateToProduct">
            <img :src="`/images` + props.product.image_source" alt="props.product.image_alt">
        </div>
        <p>{{ props.product.brand }} {{ props.product.model }}</p>
        <p>{{ props.product.price }} {{ currency }}</p>
        <Icon icon="clarity:heart-line" @click="addToWishList" />
        <Icon icon="ph:eye-light" @click="navigateToProduct"/>
        <Icon icon="bi:cart" @click="addToShoppingCart"/>
    </div>
</template>

<style lang="scss" scoped>

.product-card {
    width: 20rem;

    .image-container {
        width: 100%;

        img {
            width: 100%;
        }
    }
}

</style>