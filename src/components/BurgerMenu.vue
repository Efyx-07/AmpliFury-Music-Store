<script setup lang="ts">

import StoreLogo from '@/sub-components/StoreLogo.vue';
import SiteNav from '@/sub-components/SiteNav.vue';
import { Icon } from '@iconify/vue';

</script>

<template>
    <div class="burger-menu">
        <header>
            <StoreLogo />
            <Icon icon="carbon:close" class="closeIcon" />
        </header>
        <div class="content">
            <SiteNav />
        </div>
    </div>
</template>

<style lang="scss" scoped>

@import '@/assets/colors.scss';
@import '@/assets/breakpoints.scss';

.burger-menu {
    background: $whiteColor;
    height: 100vh;
    width: 100%;
    position: fixed;
    top: 0;
    right: 0;
    z-index: 199;

    header {
        width: 100%;
        height: 6rem;
        background: $whiteColor;
        //border-bottom: solid 1px $blackColor;
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