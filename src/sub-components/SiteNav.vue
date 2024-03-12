<script setup lang="ts">

import { useCatalogueStore } from '@/stores/CatalogueStore';
import type { Category } from '@/types/CatalogueTypes';

const categories: Category[] = useCatalogueStore().categories;

</script>

<template>
    <div class="navItems-container">
        <div class="navItem-container">
            <router-link to="/catalogue" class="navItem">
                <p>All products</p>
                <div class="underline" :class="{ 'active': $route.path === '/catalogue' }"></div>
            </router-link>
        </div>
        <div class="navItem-container" v-for="category in categories" :key="category.name">
            <router-link :to="`/catalogue/${category.name}`" class="navItem">
                <p>{{ category.name }}</p>
                <div class="underline" :class="{ 'active': $route.path === `/catalogue/${category.name}` }"></div>
            </router-link>
        </div>
    </div>
</template>

<style lang="scss" scoped>

@import '@/assets/colors.scss';

.navItems-container {
    height: 2rem;
    display: flex;
    gap: 3rem;

    .navItem-container {
        height: 100%;

        .navItem {
            height: 100%;
            display: flex;
            align-items: center;
            position: relative;
            text-decoration: none;
            color: $blackColor;
            font-size: 1.25rem;
            font-weight: 600;

            &:hover > .underline {
                width: 100%;
            }

            .underline {
                position: absolute;
                bottom: 0;
                background: $blackColor;
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

</style>