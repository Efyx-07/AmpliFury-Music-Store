<script setup lang="ts">

import StoreLogo from '@/sub-components/StoreLogo.vue';
import SiteNav from '@/sub-components/SiteNav.vue';
import { Icon } from '@iconify/vue';
import { ref, onMounted } from 'vue';

const isBurgerMenuVisible = ref<boolean>(false);

// ferme le burgerMenu
const closeBurgerMenu = (): void => {
    isBurgerMenuVisible.value = false;
};

onMounted(() => {
    // écoute l'évènement personnalisé emis par burgerMenuIcon
    window.addEventListener('show-burgerMenu', () => {
        isBurgerMenuVisible.value = true;
    });
})

</script>

<template>
    <div class="burger-menu" :class="{ hiddenBurgerMenu: !isBurgerMenuVisible}">
        <header>
            <StoreLogo />
            <Icon icon="carbon:close" class="closeIcon" @click="closeBurgerMenu"/>
        </header>
        <div class="content">
            <SiteNav />
        </div>
    </div>
</template>

<style lang="scss" scoped>

@import '@/assets/colors.scss';
@import '@/assets/breakpoints.scss';

.hiddenBurgerMenu {
    transform: translateX(100%);
}

.burger-menu {
    background: $whiteColor;
    height: 100vh;
    width: 100%;
    position: fixed;
    top: 0;
    right: 0;
    z-index: 199;
    transition: transform .2s ease-in-out;

    header {
        width: 100%;
        height: 6rem;
        background: $whiteColor;
        display: flex; 
        align-items: center;
        justify-content: space-between;
        padding: 0 2rem;

        .closeIcon {
            font-size: 1.75rem;
            cursor: pointer;

            &:hover {
                color: $accent1;
            }
        }
    }

    .content {
        width: 100%;
        height: 100%;
        display: flex;
        padding: 2rem;
    }
}

@media (min-width: $breakpointLargeTablet) {
    .burger-menu {
        display: none;
    }
}

</style>