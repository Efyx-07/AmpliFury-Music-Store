import { defineStore } from 'pinia';
import * as api from '@/services/CatalogueApi';
import type { Category, Product } from '@/types/CatalogueTypes';

type State = {
    categories: Category[];
    wishListItems: Product[]
}

export const useCatalogueStore = defineStore('catalogue', {

    state: (): State => ({
        categories: [],
        wishListItems: [],
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
            return products;
        },

        // sauvegarde dans le Local Storage après chaque modification
        saveInLocalStorage(): void {
            localStorage.setItem('wishListItems', JSON.stringify(this.wishListItems));
        },

        // ajoute un produit à la wishlist
        addToWishList(product: Product): void {
            this.wishListItems.push(product);
            this.saveInLocalStorage();
        }
    },
});