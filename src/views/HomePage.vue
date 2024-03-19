<script setup lang="ts">

import SectionHeading from '@/components/SectionHeading.vue';
import SectionCategories from '@/components/SectionCategories.vue';
import SectionCommitments from '@/components/SectionCommitments.vue';
import SectionLastArrivals from '@/components/SectionLastArrivals.vue';
import ScrollingButton from '@/sub-components/ScrollingButton.vue';

</script>

<template>
    <div class="page">
        <div class="section-container">
            <div class="content">
                <SectionHeading />
            </div>
        </div>
        <div class="section-container">
            <div class="section-heading">
                <h1>Our categories</h1>
                <ScrollingButton />
            </div>
            <div class="content">
                <div class="section-content">
                    <SectionCategories/>
                </div>
            </div>
        </div>
        <div class="section-container">
            <div class="section-heading">
                <h1>Order, get, enjoy</h1>
            </div>
            <div class="content">
                <div class="section-content">
                    <SectionCommitments />
                </div>
            </div>
        </div>
        <div class="section-container">
            <div class="section-heading">
                <h1>Last arrivals</h1>
            </div>
            <div class="content">
                <div class="section-content">
                    <SectionLastArrivals />
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
    padding-bottom: 3rem;

    .section-container {
        width: 100%;
        display: flex;
        flex-direction: column;
        align-items: center;
        padding-bottom: 3rem;

        .section-heading {
            width: 100%;
            max-width: 75rem;
            padding: 0 1rem;
            display: flex;
            flex-wrap: wrap;
            gap: 1rem;
            justify-content: space-between;
            align-items: center;

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