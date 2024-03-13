<script setup lang="ts">

import { Icon } from '@iconify/vue';

const openBurgerMenu = (): void => {
    const showBurgerMenu: Event = new Event('show-burgerMenu');
    window.dispatchEvent(showBurgerMenu);
};

</script>

<template>
    <Icon icon="material-symbols:menu" class="icon" @click="openBurgerMenu"/>
</template>

<style lang="scss" scoped>

@import '@/assets/colors.scss';
@import '@/assets/breakpoints.scss';

.icon {
    color: $blackColor;
    font-size: 1.5rem;
    cursor: pointer;

    &:hover {
        color: $accent1;
    }
}

</style>