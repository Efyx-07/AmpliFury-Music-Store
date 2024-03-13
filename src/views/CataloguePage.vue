<script setup lang="ts">

import ProductCard from '@/components/ProductCard.vue';
import { useCatalogueStore } from '@/stores/CatalogueStore';
import type { Product } from '@/types/CatalogueTypes';
import { useRoute } from 'vue-router';
import { computed, ref, watch } from 'vue';
import { Icon } from '@iconify/vue';

const catalogueStore = useCatalogueStore();

// importe la liste de tous les produits
const products: Product[] = catalogueStore.getAllProducts();

const route = useRoute();

// extrait la categorie de la route dynamique
const categoryFilter = computed<string | string[]>(() => route.params.category || 'all');

// change le titre de la page selon la categorie 
const pageTitle = computed<string | string[]>(() => {
    const category: string | string[] = categoryFilter.value;
    return category === 'all' ? 'All products' : category;
}); 

// filtre les produits selon la catégorie
const filteredProducts = computed<Product[]>(() => {
    const category: string | string[] = categoryFilter.value;
    return category === 'all' ? products : products.filter(product => product.type === category);
});

// interface pour le bouton select
interface SelectOption {
    value: string;
    mention: string;
};

const selectOptions: SelectOption [] = [
    {
        value: 'random',
        mention: 'Random'
    },
    {
        value: 'priceAsc',
        mention: 'Price: low to high'
    },
    {
        value: 'priceDesc',
        mention: 'Price: high to low'
    },
    {
        value: 'alphaAsc',
        mention: 'Alphabet: A to Z'
    },
    {
        value: 'alphaDesc',
        mention: 'Alphabet: Z to A'
    },
];

// stocke la valeur du bouton select de manière réactive
const selectedSortOption = ref<string>('random');

// crée une propriété calculée sortedProducts qui retourne les produits triés en fonction de l'option de tri
const sortedProducts = computed<Product[]>(() => {
    const option = selectedSortOption.value;
    // ordre aléatoire
    if (option === 'random') {
        return filteredProducts.value.slice().sort(() => Math.random() - 0.5);
    // prix ascendant
    } else if (option === 'priceAsc') {
        return filteredProducts.value.slice().sort((a, b) => Number(a.price) - Number(b.price));
    // prix descendant
    } else if (option === 'priceDesc') {
        return filteredProducts.value.slice().sort((a, b) => Number(b.price) - Number(a.price));
    // A to Z
    } else if (option === 'alphaAsc') {
        return filteredProducts.value.slice().sort((a, b) => a.brand.localeCompare(b.brand));
    // Z to A
    } else if (option === 'alphaDesc') {
        return filteredProducts.value.slice().sort((a, b) => b.brand.localeCompare(a.brand));
    } else {
        return filteredProducts.value;
    }
});

// met à jour la liste triée des produits lorsque l'option de tri change
watch(selectedSortOption, () => {
    sortedProducts.value;
});

</script>

<template>
    <div class="page">
        <div class="page-heading">
            <div class="head-content">
                <h1>{{ pageTitle }}</h1>
                <div class="selectButton-container">
                    <select class="sortSelectButton" v-model="selectedSortOption">
                        <option v-for="selectOption in selectOptions" :key="selectOption.value" :value="selectOption.value">{{ selectOption.mention }}</option>
                    </select>
                    <Icon icon="material-symbols-light:play-arrow" class="icon" />
                </div>
            </div>
        </div>
        <div class="content">
            <transition-group name="list" tag="div" class="productCards-container">  
                <ProductCard v-for="product in sortedProducts" :key="product.id" :product="product"/>
            </transition-group> 
        </div>
    </div>
</template>

<style lang="scss" scoped>

@import '@/assets/colors.scss';
@import '@/assets/breakpoints.scss';

.page {
    display: flex;
    flex-direction: column;
    align-items: center;

    .page-heading {
        border-bottom: solid 1px $blackColor;
        width: 100%;
        display: flex;
        justify-content: center;

        .head-content {
            width: 100%;
            max-width: 75rem;
            max-height: 5rem;
            padding: 0 1rem;
            display: flex;
            justify-content: space-between;
            align-items: center;

            h1 {
                font-size: clamp(3rem, 7vw,5rem);
                white-space: nowrap;
            }

            .selectButton-container {
                position: relative;
                width: 14rem;
                height: 2.5rem;

                &:hover > .icon {
                    color: $accent1;
                }

                select {
                    appearance: none;
                    background: none;
                    border: solid 1px $blackColor;
                    outline: none;
                    height: 100%;
                    width: 100%;
                    font-size: 1rem;
                    padding: 0 1rem;
                    z-index: 1;
                    cursor: pointer;

                    &:hover > option, .icon {
                        color: $accent1;
                    }
                }

                .icon {
                    position: absolute;
                    top: 50%;
                    right: 1rem;
                    transform: translateY(-50%) rotate(90deg);
                    font-size: 2rem;
                    z-index: -1;
                }
            }
        }
    }

    .content {
        padding: 3rem 1rem;
        width: 100%;
        max-width: 75rem;

        .productCards-container {
            display: grid;
            grid-template-columns: 1fr;
            gap: 1rem;
        }
    }

    .list-move {
        transition: all .5s ease-in-out;
    }
}

@media (min-width: $breakpointLargeMobile) {

    .page .content .productCards-container {
        grid-template-columns: 1fr 1fr;
    }
}

@media (min-width: $breakpointSmallTablet) {

    .page .content .productCards-container {
        grid-template-columns: 1fr 1fr 1fr;
    }
}

@media (min-width: $breakpointTablet) {

    .page .content .productCards-container {
        grid-template-columns: 1fr 1fr 1fr 1fr;
    }
}

@media (min-width: $breakpointLargeDesktop) {

    .page {
        .page-heading .head-content {
            max-width: 90rem;
        }

        .content {
            max-width: 90rem;
        }
    } 
}

</style>