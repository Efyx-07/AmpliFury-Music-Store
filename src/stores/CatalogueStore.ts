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

        // vérifie si l'article est dans la wishlist et retourne un booleén
        checkIsProductInWishList(product: Product): boolean {
            return this.wishListItems.some(item => item.id === product.id);
        },

        // vérifie si l'article est dans le shoppingCart et retourne un booleén
        checkIsProductInShoppingCart(product: Product): boolean {
            return this.cartItems.some(item => item.id === product.id);
        },

        // ajoute un produit à la wishlist
        addToWishList(product: Product): void {
            // vérifie si l'article est déjà dans la wishlist
            const isAlreadyInWishList: boolean = this.checkIsProductInWishList(product);
            // verifie si l'article est déjà dans le panier (un article ne peut pas se trouver dans la wishlist si présent dans le panier) - comparaison des ID retourne un booléen 
            const isAlreadyInShoppingCart: boolean = this.checkIsProductInShoppingCart(product);
            // si article pas présent dans la wishlist ni dans le panier, envoie dans la wishlist
            if (!isAlreadyInWishList && !isAlreadyInShoppingCart) {
                product.isInWishList = true;
                this.wishListItems.push(product);
            }
            this.saveInLocalStorage();
        },

        // supprime un article de la wishlist
        removeFromWishList(product: Product): void {
            const index = this.wishListItems.findIndex(item => item.id === product.id);
            if (index !== -1) {
                this.wishListItems.splice(index, 1);
                product.isInWishList = false;
            };
            this.saveInLocalStorage();
        },

        // ajoute un article au shoppingCart
        addToShoppingCart(product: Product): void {
            // empeche l'affichage de l'article plus d'une fois dans le shoppingCart en comparant les id 
            const existingItem = this.cartItems.find(item => item.id === product.id);
            // vérifie si l'article ets présent dans la wishlist et retourne un booléen
            const isAlreadyInWishList: boolean = this.checkIsProductInWishList(product);
            if (existingItem) {
                existingItem.cartQuantity++; // si article déjà présent dans shoppingCart, alors augmente la quantité
                this.updateItemPrice(existingItem); // met à jour le prix
            } else {
                const itemToAdd = { ...product, cartQuantity: 1, initialPrice: product.price }; // initialPrice est défini ici pour maj du prix dans le shoppingCart selon la quantité
                product.isInShoppingCart = true;
                this.cartItems.push(itemToAdd);
            }
            if (isAlreadyInWishList) {
                this.removeFromWishList(product);
            }
            this.saveInLocalStorage();
        },

        // supprime un article du shoppingCart
        removeFromShoppingCart(product: Product): void {
            const index = this.cartItems.findIndex(item => item.id === product.id);
            if (index !== -1) {
                this.cartItems.splice(index, 1);
                product.isInShoppingCart = false;
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
        },

        // rebascule article du panier vers la wishlist
        toggleFromShoppingCartToWishList(product: Product): void {
            // vérifie si l'article ets présent dans la wishlist et retourne un booléen
            const isAlreadyInWishList: boolean = this.checkIsProductInWishList(product);
            // supprime article du panier
            if (!isAlreadyInWishList) {
                this.removeFromShoppingCart(product);
                // réintialise la quantité et le prix
                product.cartQuantity = 1;
                product.price = product.initialPrice;
                // ajoute l'article à la wishList
                this.addToWishList(product);
                this.saveInLocalStorage();
            };
        },

        // crée un évènement personnalisé pour ouvrir shoppingCart
        toggleShoppingCart(): void {
            // crée un évènement personnalisé
            const showShoppingCart: Event = new Event('show-shoppingCart');
            // déclenche l'évènement sur l'objet window
            window.dispatchEvent(showShoppingCart);
            const showModalOverlay: Event = new Event('show-modalOverlay');
            window.dispatchEvent(showModalOverlay); 
        },
    },

    getters: {

        // convertit le prix des articles en Number et calcul la somme total du prix des articles dans le panier
        totalPrice(): string {
            return this.cartItems.reduce((total, item) => total + parseFloat(item.price), 0).toFixed(2); 
        }
    },
});