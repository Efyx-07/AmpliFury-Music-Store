<script setup lang="ts">

import { useCatalogueStore } from '@/stores/CatalogueStore';
import type { Product } from '@/types/CatalogueTypes';
import { ref, onUnmounted, watch } from 'vue';
import { useGlobalDataStore } from '@/stores/GlobalDataStore';
import { useRouter } from 'vue-router';
import ReusablePrimaryButton from '@/sub-components/ReusablePrimaryButton.vue';
import ReusableSecondaryButton from '@/sub-components/ReusableSecondaryButton.vue';

const products: Product[] = useCatalogueStore().getAllProducts();

const { currency } = useGlobalDataStore();

const productToDisplay = ref<Product>(products[Math.floor(Math.random() * products.length)]);

const changeProduct = (): void => {
    productToDisplay.value = products[Math.floor(Math.random() * products.length)];
};

const intervalId: number = setInterval(changeProduct, 4000);

onUnmounted(() => {
    clearInterval(intervalId);
});

const productToDisplayId = ref<number>(productToDisplay.value.id);

// navigue vers la page du produit selectionné
const router = useRouter();
const navigateToProduct = () => {
    router.push({
        name: 'ProductDetail',
        params: { productId: productToDisplayId.value }
    });
};

watch(productToDisplay, (newVal) => {
    productToDisplayId.value = newVal.id;
});

</script>

<template>
    <div class="head-banner">
        <div class="content">
            <div class="infos-container">
                <div class="text-container">
                    <h1>AmpliFury</h1>
                    <p class="subTitle">Find your next sound here</p>
                    <p class="item-name">>> {{ productToDisplay.brand }} {{ productToDisplay.model }} at <span>{{ productToDisplay.price }} {{ currency }}</span></p>
                </div>
                <div class="buttons-container">
                    <ReusablePrimaryButton @click="navigateToProduct">View product</ReusablePrimaryButton>
                    <ReusableSecondaryButton>Start browsing</ReusableSecondaryButton>  
                </div>
            </div>
            <div class="image-container">
                <img :src="`/images` + productToDisplay.image_source" alt="productToDisplay.image_alt">
            </div>
        </div>
    </div>
</template>

<style lang="scss" scoped>

@import '@/assets/colors.scss';

.head-banner {
    background: $accent1;
    border-bottom: solid 1px $blackColor; 
    display: flex;
    justify-content: center;

    .content {
        width: 100%;
        max-width: 75rem;
        display: grid;
        grid-template-columns: 1.5fr 1fr;
        padding: 3rem 1rem;

        .infos-container {
            display: flex;
            flex-direction: column;
            gap: 6rem;

            .text-container {
                display: flex;
                flex-direction: column;
                gap: 1rem;

                h1 {
                    font-size: 10rem;
                    font-weight: 700;
                    line-height: .75;
                    white-space: nowrap;
                }

                .subTitle {
                    font-size: 5rem;
                    font-weight: 200;
                }

                .item-name {
                    font-family: "Poppins", sans-serif;
                    font-size: 1.25rem;
                }
            }

            .buttons-container {
                display: flex;
                gap: 1rem;
            }
        }

        .image-container {
            width: 100%;
            display: inline-block;
            position: relative;
            overflow: hidden;
            border-radius: 100%;

            img {
                width: 100%;
                display: block;
                position: relative;
                object-fit: cover;
                border-radius: inherit;
            }
        }
    }

    
}

</style>