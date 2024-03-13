<script setup lang="ts">

import type { Product } from '@/types/CatalogueTypes';
import { useGlobalDataStore } from '@/stores/GlobalDataStore';
import ReusablePrimaryButton from '@/sub-components/ReusablePrimaryButton.vue';

const props = defineProps<{
    selectedProduct: Product | undefined;
}>();

const selectedProduct: Product | undefined = props.selectedProduct;

const { currency, companyName } = useGlobalDataStore();

</script>

<template>
    <div class="detailed-product" v-if="selectedProduct">
        <div class="image-container">
            <img :src="`/images` + selectedProduct.image_source" alt="selectedProduct.image_alt">
        </div>
        <div class="infos-container">
            <p>{{ selectedProduct.price }} {{ currency }}</p>
            <p>{{ selectedProduct.brand }} {{ selectedProduct.model }}</p>
            <h2>Description</h2>
            <p>{{ selectedProduct.description }}</p>
            <h2>Details</h2>
            <p>{{ selectedProduct.reference }}</p>
            <p>{{ selectedProduct.type }}</p>
            <p>{{ selectedProduct.reference_month }} {{ selectedProduct.reference_year }}</p>
            <p>{{ selectedProduct.color }}</p>
            <p>{{ selectedProduct.brand }} {{ companyName }}</p>
            <ReusablePrimaryButton>Add to cart</ReusablePrimaryButton>
        </div>
    </div>
</template>

<style lang="scss" scoped>

.detailed-product {
    display: grid;
    grid-template-columns: 1fr 1fr;

    .image-container {
        width: 100%;

        img {
            width: 100%;
        }
    }
}

</style>