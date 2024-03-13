<script setup lang="ts">

import { Icon } from '@iconify/vue';

</script>

<template>
    <Icon icon="material-symbols:menu" class="icon" />
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