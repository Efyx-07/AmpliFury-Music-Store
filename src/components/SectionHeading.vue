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

// choisit au hasard le produit à afficher dans le tableau de produits et stocke en ref
const productToDisplay = ref<Product>(products[Math.floor(Math.random() * products.length)]);

// change au hasard le produit à afficher
const changeProduct = (): void => {
    productToDisplay.value = products[Math.floor(Math.random() * products.length)];
};

// définit un intervalle pour le changement de produit à afficher
const intervalId: number = setInterval(changeProduct, 4000);

// nettoie l'intervalle à la destruction du composant
onUnmounted(() => {
    clearInterval(intervalId);
});

// extrait et stocke en ref l'id du produit affiché
const producDisplayedId = ref<number>(productToDisplay.value.id);

// navigue vers la page du produit selectionné
const router = useRouter();
const navigateToProduct = (): void => {
    router.push({
        name: 'ProductDetail',
        params: { productId: producDisplayedId.value }
    });
};

// surveille les changements de l'id du produit affiché pour rendre réactive la route vers la page du produit affiché
watch(productToDisplay, (newVal) => {
    producDisplayedId.value = newVal.id;
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
                <div class="buttons-container-desktop"> 
                    <ReusablePrimaryButton @click="navigateToProduct" class="button">View product</ReusablePrimaryButton>
                    <router-link to="/catalogue" class="buttonLink">
                        <ReusableSecondaryButton class="button">Start browsing</ReusableSecondaryButton>
                    </router-link>  
                </div>
            </div>
            <div class="image-container image-container-mobile-desktop" @click="navigateToProduct">
                <img :src="`/images` + productToDisplay.image_source" alt="productToDisplay.image_alt">
            </div>

            <!-- visible sur version tablet -->
            <div class="imageAndButtons-container-tablet">
                <div class="image-container image-container-tablet" @click="navigateToProduct">
                    <img :src="`/images` + productToDisplay.image_source" alt="productToDisplay.image_alt">
                </div>
                <div class="buttons-container-tablet-wrapper">
                    <div class="buttons-container-tablet">
                        <ReusablePrimaryButton @click="navigateToProduct" class="button">View product</ReusablePrimaryButton>
                        <router-link to="/catalogue" class="buttonLink">
                            <ReusableSecondaryButton class="button">Start browsing</ReusableSecondaryButton>
                        </router-link>  
                    </div>
                </div>
            </div>

            <!-- visible sur version mobile -->
            <div class="buttons-container-mobile">
                <ReusablePrimaryButton @click="navigateToProduct" class="button">View product</ReusablePrimaryButton>
                <router-link to="/catalogue" class="buttonLink">
                    <ReusableSecondaryButton class="button">Start browsing</ReusableSecondaryButton>
                </router-link>  
            </div>
        </div>
    </div>
</template>

<style lang="scss" scoped>

@import '@/assets/colors.scss';
@import '@/assets/cardImageContainer.scss';
@import '@/assets/breakpoints.scss';

.head-banner {
    background: $accent1;
    border-bottom: solid 1px $blackColor; 
    display: flex;
    justify-content: center;

    .content {
        width: 100%;
        max-width: 75rem;
        padding: 3rem 1rem;
        display: flex;
        flex-direction: column;
        align-items: center;
        gap: 2rem;

        .infos-container {
            display: flex;
            flex-direction: column;
            gap: 6rem;

            .text-container {
                display: flex;
                flex-direction: column;
                align-items: center;
                gap: 1rem;

                h1 {
                    font-size: clamp(4rem, 17vw, 8rem);
                    font-weight: 700;
                    line-height: .75;
                    white-space: nowrap;
                }

                .subTitle {
                    font-size: clamp(2rem, 7.5vw, 4rem);
                    font-weight: 200;
                }

                .item-name {
                    font-family: "Poppins", sans-serif;
                    font-size: clamp(.75rem, 3.75vw, 1.25rem);
                }
            }

            .buttons-container-desktop {
                display: none;
            }
        }

        .imageAndButtons-container-tablet {
            display: none;
        }

        .image-container {
            border-radius: 100%;
            max-width: 25rem;

            img {
                border-radius: inherit;
                border: solid 1px $blackColor;
            }
        }

        .buttons-container-mobile {
            width: 100%;
            display: flex;
            flex-wrap: wrap;
            justify-content: center;
            gap: .5rem;

            .button {
                width: 100%;

                &:hover {
                    border: solid 1px $blackColor;
                }
            }

            .buttonLink {
                text-decoration: none;
                width: 100%;
            }
        }
    }   
}

@media (min-width: $breakpointTablet) {
    .head-banner .content {
        .image-container-mobile-desktop, .buttons-container-mobile {
            display: none;
        }

        .imageAndButtons-container-tablet {
            display: grid;
            grid-template-columns: 1fr 1fr;
            gap: 2rem;

            .image-container-tablet {
                max-width: 25rem;
            }

            .buttons-container-tablet-wrapper {
                display: flex;
                justify-content: center;
                align-items: center;

                .buttons-container-tablet {
                    display: flex;
                    flex-wrap: wrap;
                    justify-content: center;
                    align-items: center;
                    gap: .5rem;

                    .button {
                        max-height: 2.5rem;
                        &:hover {
                            border: solid 1px $blackColor;
                        }
                    }

                    .buttonLink {
                        text-decoration: none;
                    }
                }
            }
        }
    }
}

@media (min-width: $breakpointDesktop) {

    .head-banner {

        .content {
            display: grid;
            grid-template-columns: 1.5fr 1fr;

            .imageAndButtons-container-tablet {
                display: none;
            }

            .infos-container {

                .text-container {
                    align-items: flex-start;
                }

                .buttons-container-desktop {
                    display: flex;
                    gap: 1rem;

                    .button {
                        &:hover {
                            border: solid 1px $blackColor;
                        }
                    }

                    .buttonLink {
                        text-decoration: none;
                    }
                }
            }

            .image-container-mobile-desktop {
                display: block;
            }

            .image-container {
                max-width: 35rem;
            }
        }   
    }
}

@media (min-width: $breakpointLargeDesktop) {
    .head-banner .content {
        max-width: 90rem;

        .infos-container .text-container {

            h1 {
                font-size: 10rem;
            }

            .subTitle {
                font-size: 5rem;
            }
        }
    }
}

</style>