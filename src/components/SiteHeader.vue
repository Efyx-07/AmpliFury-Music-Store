<script setup lang="ts">

import StoreLogo from '@/sub-components/StoreLogo.vue';
import SiteNav from '@/sub-components/SiteNav.vue';
import WishListIcon from '@/sub-components/WishListIcon.vue';
import CartIcon from '@/sub-components/CartIcon.vue';
import BurgerMenuIcon from '@/sub-components/BurgerMenuIcon.vue';

</script>

<template>
    <header>
        <div class="content">
            <StoreLogo />
            <SiteNav class="siteNav"/>
            <div class="icons-container">
                <WishListIcon />
                <WishListIcon />
                <CartIcon />
            </div>
            <BurgerMenuIcon class="burgerMenuIcon"/>
        </div>
    </header>
</template>

<style lang="scss" scoped>

@import '@/assets/colors.scss';
@import '@/assets/breakpoints.scss';

header {
    width: 100%;
    height: 5rem;
    background: $whiteColor;
    border-bottom: solid 1px $blackColor; 
    position: sticky;
    top: 0;
    left: 0;
    z-index: 99;
    display: flex;
    align-items: center;
    justify-content: space-around;

    .content {
        width: 100%;
        max-width: 75rem;
        padding: 0 1rem;
        display: flex;
        justify-content: space-between;
        align-items: center;

        .siteNav {
            display: none;
        }

        .icons-container {
            display: flex;
            width: 50%;
            justify-content: space-around;
        }
    }
}

@media (min-width: $breakpointLargeMobile) {

    header {
        height: 6rem;
    }
}

@media (min-width: $breakpointLargeTablet) {

    header .content {

        .siteNav {
            display: flex;
        }

        .icons-container {
            width: unset;
            justify-content: unset;
            gap: 1.5rem;
        }

        .burgerMenuIcon {
            display: none;
        }
    } 
}

@media (min-width: $breakpointLargeDesktop) {

    header .content {
        max-width: 90rem;
    }
}

</style>