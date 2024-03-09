import { defineStore } from 'pinia';
import * as api from '@/services/CatalogueApi';
import type { Category } from '@/types/CatalogueTypes';

type State = {
    products: Category[];
}

export const useCatalogueStore = defineStore('catalogue', {

    state: (): State => ({
        products: [],
    }),

    actions: {

        async loadCatalogueData(): Promise<void> {

            try {
                const catalogueData: Category[] = await api.fetchCatalogueData();
                this.products = catalogueData;

            } catch (error) {
                console.error('Erreur lors du chargement des données: ', error);
            }
        },
    }
})