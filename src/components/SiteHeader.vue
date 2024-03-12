<script setup lang="ts">

import StoreLogo from '@/sub-components/StoreLogo.vue';
import SiteNav from '@/sub-components/SiteNav.vue';
import WishListIcon from '@/sub-components/WishListIcon.vue';
import CartIcon from '@/sub-components/CartIcon.vue';

</script>

<template>
    <header>
        <div class="content">
            <StoreLogo />
            <SiteNav />
            <div class="icons-container">
                <WishListIcon />
                <CartIcon />
            </div>
        </div>
    </header>
</template>

<style lang="scss" scoped>

@import '@/assets/colors.scss';

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
        max-width: 90rem;
        display: flex;
        justify-content: space-between;
        align-items: center;

        .icons-container {
            display: flex;
            gap: 2rem;
        }
    }

}

</style>