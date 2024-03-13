<script setup lang="ts">

import { useCatalogueStore } from '@/stores/CatalogueStore';
import type { Category } from '@/types/CatalogueTypes';

const categories: Category[] = useCatalogueStore().categories;

// emet un évènement personnalisé quand item clické dans le burgerMenu
const closeBurgerMenu = (): void => {
    const hideBurgerMenu: Event = new Event('hide-burgerMenu');
    window.dispatchEvent(hideBurgerMenu);
};

</script>

<template>
    <div class="navItems-container">
        <div class="navItem-container">
            <router-link to="/catalogue" class="navItem" @click="closeBurgerMenu">
                <p>All products</p>
                <div class="underline" :class="{ 'active': $route.path === '/catalogue' }"></div>
            </router-link>
        </div>
        <div class="navItem-container" v-for="category in categories" :key="category.name">
            <router-link :to="`/catalogue/${category.name}`" class="navItem" @click="closeBurgerMenu">
                <p>{{ category.name }}</p>
                <div class="underline" :class="{ 'active': $route.path === `/catalogue/${category.name}` }"></div>
            </router-link>
        </div>
    </div>
</template>

<style lang="scss" scoped>

@import '@/assets/colors.scss';
@import '@/assets/breakpoints.scss';

.navItems-container {
    display: flex;
    flex-direction: column;

    .navItem-container {

        .navItem {
            height: 100%;
            display: flex;
            align-items: center;
            position: relative;
            text-decoration: none;
            color: $blackColor;
            font-size: 2.5rem;
            font-weight: 600;

            &:hover {
                color: $accent1;
            }

            .underline {
                display: none;
            }
        }
    }   
}

@media (min-width: $breakpointLargeTablet) {

    .navItems-container {
        height: 2rem;
        flex-direction: unset;
        gap: 2rem;

        .navItem-container {
            height: 100%;

            .navItem {
                font-size: 1.25rem;

                &:hover {
                    color: unset;
                }

                &:hover > .underline {
                    width: 100%;
                }

                .underline {
                    display: block;
                    position: absolute;
                    bottom: 0;
                    background: $accent1;
                    width: 0%;
                    height: .25rem;
                    transition: width .2s ease-in-out;

                    &.active {
                        width: 100%;
                    }
                }
            }
        } 
    }
}

</style>