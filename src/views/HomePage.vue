<script setup lang="ts">

import HeadBanner from '@/components/HeadBanner.vue';
import SectionCategories from '@/components/SectionCategories.vue';
import { useGlobalDataStore } from '@/stores/GlobalDataStore';

const companyName: string = useGlobalDataStore().companyName;

</script>

<template>
    <div class="page">
        <div class="section-container">
            <div class="section-heading head-section">
                <div class="head-content">
                    <h1>Right now at {{ companyName }} !</h1>
                </div>
            </div>
            <div class="content">
                <HeadBanner />
            </div>
        </div>
        <div class="section-container">
            <div class="section-heading">
                <div class="head-content">
                    <h1>Our categories</h1>
                </div>
            </div>
            <div class="content">
                <SectionCategories />
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

    .section-container {
        width: 100%;
        display: flex;
        flex-direction: column;
        align-items: center;

        .section-heading {
            width: 100%;
            display: flex;
            justify-content: center;

            .head-content {
                width: 100%;
                max-width: 90rem;
                padding: .5rem 1rem;
                display: flex;
                justify-content: space-between;
                align-items: center;

                h1 {
                    font-size: clamp(3rem, 7vw, 5rem);
                    line-height: .75;
                }
            }
        }

        .head-section {
            border-bottom: solid 1px $blackColor;
        }

        .content {
            padding: 3rem 1rem;
            width: 100%;
            max-width: 90rem;
        }
    }
}

</style>