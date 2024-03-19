<script setup lang="ts">

import { Icon } from '@iconify/vue';

const scrollLeft = (): void => {
    //crée un évènement personnalisé
    const scrollGalleryToLeft: Event = new Event('scrollLeft-gallery');
    // déclenche l'évènement sur l'objet window
    window.dispatchEvent(scrollGalleryToLeft);
};

const scrollRight = (): void => {
    //crée un évènement personnalisé
    const scrollGalleryToRight: Event = new Event('scrollRight-gallery');
    // déclenche l'évènement sur l'objet window
    window.dispatchEvent(scrollGalleryToRight);
};

</script>

<template>
    <div class="buttons-container">
        <div class="button" @click="scrollLeft">
            <Icon icon="solar:arrow-up-outline" style="transform: rotate(-90deg)"/>
        </div>
        <div class="button" @click="scrollRight">
            <Icon icon="solar:arrow-up-outline" style="transform: rotate(90deg)"/>
        </div>
    </div>
</template>

<style lang="scss" scoped>

@import '@/assets/colors.scss';

.buttons-container {
    display: flex;
    gap: .5rem;

    .button {
        background: $blackColor;
        color: $whiteColor;
        width: 2.5rem;
        height: 2.5rem;
        display: flex;
        justify-content: center;
        align-items: center;
        font-size: 1.5rem;
        cursor: pointer;

        &:hover {
            background: $accent1;
        }
    }
}

</style>