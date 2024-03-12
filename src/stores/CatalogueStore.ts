import { defineStore } from 'pinia';
import * as api from '@/services/CatalogueApi';
import type { Category, Product } from '@/types/CatalogueTypes';

type State = {
    categories: Category[];
    wishListItems: Product[];
    cartItems: Product[];
}

export const useCatalogueStore = defineStore('catalogue', {

    state: (): State => ({
        categories: [],
        wishListItems: [],
        cartItems: [],
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
            localStorage.setItem('cartItems', JSON.stringify(this.cartItems));
        },

        // ajoute un produit à la wishlist
        addToWishList(product: Product): void {
            // vérifie si l'article est déjà dans la wishlist
            const isAlreadyInWishList: boolean = this.wishListItems.some(item => item.id === product.id);
            if (!isAlreadyInWishList) {
                this.wishListItems.push(product);
            }
            this.saveInLocalStorage();
        },

        // retire un article de la wishlist
        removeFromWishList(product: Product): void {
            const index = this.wishListItems.findIndex(item => item.id === product.id);
            if (index !== -1) {
                this.wishListItems.splice(index, 1)
            };
            this.saveInLocalStorage();
        },

        // ajoute un article au shoppingCart
        addToShoppingCart(product: Product): void {
            this.cartItems.push(product);
            this.saveInLocalStorage();
        }
    },
});