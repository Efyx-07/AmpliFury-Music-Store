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
        <div class="datas-container">
            <div class="infos-container">
                <p class="item-name">{{ props.product.brand }} {{ props.product.model }}</p>
                <p class="item-price">{{ props.product.price }} {{ currency }}</p>
            </div>
            <div class="icons-container">
                <Icon icon="ph:eye-light" class="icon" @click="navigateToProduct"/>
                <Icon icon="clarity:heart-line" class="icon" @click="addToWishList" />
                <Icon icon="bi:cart" class="icon" @click="addToShoppingCart"/>
            </div>
        </div>
    </div>
</template>

<style lang="scss" scoped>

@import '@/assets/colors.scss';

.product-card {
    width: 20rem;
    border: solid 1px $blackColor;
    padding: 1rem;

    .image-container {
        width: 100%;
        display: inline-block;
        position: relative;

        img {
            width: 100%;
            display: block;
            position: relative;
            object-fit: cover;
        }
    }

    .datas-container {
        display: flex;
        flex-direction: column;
        gap: 1rem;

        .infos-container {

            .item-name {
                font-size: 1.25rem;
            }

            .item-price {
                font-size: 1.5rem;
                font-weight: 600;
            }
        }

        .icons-container {
            display: flex;
            justify-content: flex-end;
            gap: .5rem;

            .icon {
                font-size: 1.25rem;
            }
        }
    }
}

</style>