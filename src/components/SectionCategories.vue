<script setup lang="ts">

import { useCatalogueStore } from '@/stores/CatalogueStore';
import type { Category } from '@/types/CatalogueTypes';
import { ref, onMounted } from 'vue';

const catalogueStore = useCatalogueStore();

const categories: Category[] = catalogueStore.categories;

const sliderRef = ref<HTMLElement>();

const scrollLeft = (): void => {
    if (sliderRef.value) {
        const cardElement = sliderRef.value.querySelector('.category-card') as HTMLElement | null;
        if (cardElement) {
            const cardWidth = cardElement.offsetWidth + 32;
            sliderRef.value.scrollBy({
                left: -cardWidth,
                behavior: 'smooth'
            });
        }
    }
};

const scrollRight = (): void => {
    if (sliderRef.value) {
        const cardElement = sliderRef.value.querySelector('.category-card') as HTMLElement | null;
        if (cardElement) {
            const cardWidth = cardElement.offsetWidth + 32;
            sliderRef.value.scrollBy({
                left: cardWidth,
                behavior: 'smooth'
            });
        }
    }
};

// écoute les évènements personnalisés émis par ScrollingButton
onMounted(() => {
    window.addEventListener('scrollLeft-gallery', () => {
        scrollLeft();
    });
    window.addEventListener('scrollRight-gallery', () => {
        scrollRight();
    });
});

</script>

<template>
    <div class="categoryCards-container" ref="sliderRef">
        <div class="category-card" v-for="category in categories" :key="category.id">
            <router-link :to="`/catalogue/${category.name}`" class="image-container">
                <img :src="`/images` + category.categoryImage.source" alt="category.categoryImage.alt">
            </router-link>
        </div>
    </div>
</template>

<style lang="scss" scoped>

@import '@/assets/cardImageContainer.scss';
@import '@/assets/breakpoints.scss';

.categoryCards-container {
    width: 100%;
    max-width: 75rem;
    padding: 3rem 1rem;
    display: flex;
    gap: 1rem;
    overflow-x: auto;
    scroll-behavior: smooth;
    white-space: nowrap;
    scrollbar-width: none;
    -ms-overflow-style: none;

    &::-webkit-scrollbar {
        display: none;
    }

    .category-card {
        flex: 0 0 auto;
        width: calc(100% / 1);
        display: flex;

        .image-container {
            height: 100%;

            img {
                height: 100%;
            }
        }
    }
}

@media (min-width: $breakpointSmallTablet) {

    .categoryCards-container .category-card {
        width: calc(100% / 2);
    }
}

@media (min-width: $breakpointDesktop) {

    .categoryCards-container .category-card {
        width: calc(100% / 3);
    }
}

@media (min-width: $breakpointLargeDesktop) {
    
    .categoryCards-container {
        max-width: 90rem;
    }
}



</style>