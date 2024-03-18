<script setup lang="ts">

import SectionHeading from '@/components/SectionHeading.vue';
import SectionCategories from '@/components/SectionCategories.vue';
import SectionCommitments from '@/components/SectionCommitments.vue';
//import { useGlobalDataStore } from '@/stores/GlobalDataStore';

//const companyName: string = useGlobalDataStore().companyName;

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
        </div>
        <div class="section-container">
            <div class="section-heading">
                <div class="head-content">
                    <h1>Order, get, enjoy</h1>
                </div>
            </div>
            <div class="content">
                <SectionCommitments />
            </div>
        </div> -->
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
            width: 100%;
            display: flex;
            justify-content: center;

            .head-content {
                width: 100%;
                max-width: 75rem;
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
            //padding: 3rem 1rem 3rem 1rem;
            width: 100%;
            //max-width: 75rem;
        }
    }
}

</style>