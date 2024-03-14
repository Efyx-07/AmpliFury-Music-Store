<script setup lang="ts">

import type { Product } from '@/types/CatalogueTypes';
import { Icon } from '@iconify/vue';
import { useCatalogueStore } from '@/stores/CatalogueStore';
import { useGlobalDataStore } from '@/stores/GlobalDataStore';
import { useRouter } from 'vue-router';
import { computed } from 'vue';

const props = defineProps<{
    product: Product;
}>();

const product: Product = props.product;

const catalogueStore = useCatalogueStore();

const { currency } = useGlobalDataStore();

// vérifie si l'article est dans la wishlist et retourne un booléen 
const addedToWishlist = computed<boolean>(() =>{
    return catalogueStore.checkIsProductInWishList(product);
});

// vérifie si l'article est dans le shoppingCart et retourne un booléen 
const addedToShoppingCart = computed<boolean>(() =>{
    return catalogueStore.checkIsProductInShoppingCart(product);
});

// ajoute un article à la wishlist
const addToWishList = (): void => {
    catalogueStore.addToWishList(product);
};

// supprime un article de la wishlist
const removeFromWishList = (): void => {
    catalogueStore.removeFromWishList(product);
}

// navigue vers la page du produit selectionné
const router = useRouter();
const navigateToProduct = () => {
    router.push({
        name: 'ProductDetail',
        params: { productId: product.id }
    });
};

// ajoute un article au shoppingCart
const addToShoppingCart = (): void => {
    catalogueStore.addToShoppingCart(product);
};

// utilise méthode du store pour ouvrir shoppingCart
const toggleShoppingCart = () => catalogueStore.toggleShoppingCart();

</script>

<template>
    <div class="product-card">
        <div class="image-container" @click="navigateToProduct">
            <img :src="`/images` + product.image_source" alt="product.image_alt">
        </div>
        <div class="datas-container">
            <div class="infos-container">
                <p class="item-name">{{ product.brand }} {{ product.model }}</p>
                <p class="item-price">{{ product.price }} {{ currency }}</p>
            </div>
            <div class="icons-container">
                <Icon icon="ph:eye-light" class="icon" @click="navigateToProduct"/>
                <Icon v-if="!addedToWishlist" icon="clarity:heart-line" class="icon" @click="addToWishList" />
                <Icon v-else icon="mdi:heart" class="icon coloredIcon" @click="removeFromWishList"/>
                <Icon v-if="!addedToShoppingCart" icon="bi:cart" class="icon" @click="addToShoppingCart"/>
                <Icon v-else icon="bi:cart-fill" class="icon coloredIcon" @click="toggleShoppingCart"/>
            </div>
        </div>
    </div>
</template>

<style lang="scss" scoped>

@import '@/assets/colors.scss';

.product-card {
    border: solid 1px $blackColor;
    padding: .75rem;

    .image-container {
        width: 100%;
        display: inline-block;
        position: relative;
        overflow: hidden;
        cursor: pointer;

        &:hover > img {
            transform: scale(1.05);
        }

        img {
            width: 100%;
            display: block;
            position: relative;
            object-fit: cover;
            transition: transform .5s ease-in-out;
        }
    }

    .datas-container {
        width: 100%;
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
                cursor: pointer;

                &:hover {
                    color: $accent1;
                }
            }

            .coloredIcon {
                color: $accent1;
            }
        }
    }
}

</style>