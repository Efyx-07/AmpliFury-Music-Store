<script setup lang="ts">

import SectionHeading from '@/components/SectionHeading.vue';
//import SectionCategories from '@/components/SectionCategories.vue';
import SectionCommitments from '@/components/SectionCommitments.vue';

</script>

<template>
    <div class="page">
        <div class="section-container">
            <div class="content">
                <SectionHeading />
            </div>
        </div>
        <!-- <div class="section-container">
            <div class="section-heading">
                <div class="head-content">
                    <h1>Our categories</h1>
                </div>
            </div>
            <div class="content">
                <SectionCategories />
            </div>
        </div> -->
        <div class="section-container">
            <div class="section-heading">
                <h1>Order, get, enjoy</h1>>
            </div>
            <div class="content">
                <div class="section-content">
                    <SectionCommitments />
                </div>
            </div>
        </div>
    </div>
</template>

<style lang="scss" scoped>

@import '@/assets/colors.scss';
@import '@/assets/breakpoints.scss';

.page {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 3rem;
    padding-bottom: 6rem;

    .section-container {
        width: 100%;
        display: flex;
        flex-direction: column;
        align-items: center;

        .section-heading {
            padding: 0 1rem;
            width: 100%;
            display: flex;
            max-width: 75rem;

            h1 {
                font-size: clamp(3rem, 7vw, 5rem);
                line-height: .75;
            }
        }

        .content {
            width: 100%;

            .section-content {
                width: 100%;
                display: flex;
                justify-content: center;
            }
        }
    }
}

@media (min-width: $breakpointLargeDesktop) {

    .page .section-container .section-heading   {
        max-width: 90rem;
    }
}

</style>