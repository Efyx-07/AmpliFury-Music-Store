import { defineStore } from 'pinia';
import * as api from '@/services/CatalogueApi';
import type { Category, Product } from '@/types/CatalogueTypes';

type State = {
    categories: Category[];
    products: Product[];
}

export const useCatalogueStore = defineStore('catalogue', {

    state: (): State => ({
        categories: [],
        products: []
    }),

    actions: {

        // récupère les datas du catalogue fetchées dans CatalogueApi
        async loadCatalogueData(): Promise<void> {

            try {
                const catalogueData: Category[] = await api.fetchCatalogueData();
                this.categories = catalogueData;

            } catch (error) {
                console.error('Erreur lors du chargement des données: ', error);
            }
        },

        // obtient la liste de tous les produits du catalogue 
        getAllProducts(): Product[] {
            const products: Product[] = this.categories.flatMap(category => category.products);
            this.products= products
            return this.products;
        },
    },
});