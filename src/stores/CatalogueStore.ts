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

        // supprime un article de la wishlist
        removeFromWishList(product: Product): void {
            const index = this.wishListItems.findIndex(item => item.id === product.id);
            if (index !== -1) {
                this.wishListItems.splice(index, 1);
            };
            this.saveInLocalStorage();
        },

        // ajoute un article au shoppingCart
        addToShoppingCart(product: Product): void {
            // empeche l'affichage de l'article plus d'une fois dans le shoppingCart en comparant les id 
            const existingItem = this.cartItems.find(item => item.id === product.id);
            if(existingItem) {
                existingItem.cartQuantity++; // si article déjà présent dans shoppingCart, alors augmente la quantité
                this.updateItemPrice(existingItem); // met à jour le prix
            } else {
                const itemToAdd = { ...product, cartQuantity: 1, initialPrice: product.price }; // initialPrice est défini ici pour maj du prix dans le shoppingCart selon la quantité
                this.cartItems.push(itemToAdd); 
            }
            this.saveInLocalStorage();
        },

        // supprime un article du shoppingCart
        removeFromShoppingCart(product: Product): void {
            const index = this.cartItems.findIndex(item => item.id === product.id);
            if (index !== -1) {
                this.cartItems.splice(index, 1);
            };
            this.saveInLocalStorage();
        },

        // supprime tous les articles du shoppingCart
        clearCart(): void {
            this.cartItems = [];
            this.saveInLocalStorage();
        },

        // met à jour le prix des articles dans le panier selon la quantité du compteur
        updateItemPrice(item: any) {
            if (item.cartQuantity > 0) {
                item.price = (parseFloat(item.initialPrice) * item.cartQuantity).toFixed(2);
            } else {
                item.initialPrice = item.price;
            }
            this.saveInLocalStorage();
        }
    },

    getters: {

        // convertit le prix des articles en Number et calcul la somme total du prix des articles dans le panier
        totalPrice(): string {
            return this.cartItems.reduce((total, item) => total + parseFloat(item.price), 0).toFixed(2); 
        }
    },
});