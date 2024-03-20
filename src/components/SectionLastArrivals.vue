<script setup lang="ts">

import ProductCard from '@/components/ProductCard.vue';
import { useCatalogueStore } from '@/stores/CatalogueStore';
import type { Product } from '@/types/CatalogueTypes';
import ReusablePrimaryButtonChecked from '@/sub-components/ReusablePrimaryButtonChecked.vue';

const catalogueStore = useCatalogueStore();

// importe la liste de tous les produits
const products: Product[] = catalogueStore.getAllProducts();

// trie les produits par année et mois de référence (du plus récent au plus ancien)
const sortedProducts = products.sort((a, b) => {
    // convertit la référence de mois et d'année en un format de date 
    const dateA = new Date(`${a.reference_year}-${a.reference_month}`);
    const dateB = new Date(`${b.reference_year}-${b.reference_month}`);
    
    // trie les produits par date de référence, les plus récents d'abord
    if (dateA > dateB) {
        return -1; // si dateA plus récente se place avant dateB
    } else if (dateA < dateB) {
        return 1; // si dateB plus récente se place avant dateA
    } else {
        return products.indexOf(a) - products.indexOf(b); // si dates identiques, se placent dans l'ordre de leurs index
    }
});

// conserve les 4 produits les plus récents pour les afficher
const latestProducts = sortedProducts.slice(0, 6);

</script> 

<template>
    <div class="section-content">
        <div class="products-container">
            <ProductCard v-for="product in latestProducts" :key="product.id" :product="product"/>
        </div>
        <router-link to="/catalogue" class="button-link">
            <ReusablePrimaryButtonChecked class="button">View all products</ReusablePrimaryButtonChecked>
        </router-link>
    </div>
</template>

<style lang="scss" scoped>

@import '@/assets/breakpoints.scss';

.section-content {
    width: 100%;
    max-width: 75rem;
    padding: 3rem 1rem;
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 3rem;

    .products-container {
        display: grid;
        grid-template-columns: 1fr;
        gap: 1rem;
    }

    .button-link {
        text-decoration: none;
        width: 100%;
        display: flex;
        justify-content: end;

        .button {
            width: 100%;
        }
    }
}

@media (min-width: $breakpointLargeMobile) {
    .section-content .products-container {
        grid-template-columns: 1fr 1fr;
    }
}

@media (min-width: $breakpointSmallTablet) {
    
    .section-content {

        .products-container {
            grid-template-columns: 1fr 1fr 1fr;
        }

        .button-link {
            
            .button {
                width: 12rem;
            }
        }
    }
}

@media (min-width: $breakpointLargeDesktop) {

    .section-content {
        max-width: 90rem;
    }
}


</style>