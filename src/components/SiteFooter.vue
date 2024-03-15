<script setup lang="ts">

import NewsletterForm from '@/sub-components/NewsletterForm.vue';

</script>

<template>
    <footer>
        <div class="content">
            <NewsletterForm />
        </div>
    </footer>
</template>

<style lang="scss" scoped>

@import '@/assets/colors.scss';
@import '@/assets/breakpoints.scss';

footer {
    width: 100%;
    background: $whiteColor;
    border-top: solid 1px $blackColor;
    display: flex;
    align-items: center;
    justify-content: space-around;

    .content {
        width: 100%;
        max-width: 75rem;
        padding: 3rem 1rem;
        display: flex;
        justify-content: space-between;
        align-items: center;
    }
}

@media (min-width: $breakpointLargeDesktop) {

    footer .content {
        max-width: 90rem;
    }
}

</style>