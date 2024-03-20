<script setup lang="ts">

import NewsletterForm from '@/sub-components/NewsletterForm.vue';
import FooterContactSection from '@/sub-components/FooterContactSection.vue';
import { useGlobalDataStore } from '@/stores/GlobalDataStore';
import ToTopButton from '@/sub-components/ToTopButton.vue';

const { companyName } = useGlobalDataStore();

const currentYear: number = new Date().getFullYear();

</script>

<template>
    <footer>
        <div class="high-content">
            <div class="high-content-container">
                <NewsletterForm />
                <FooterContactSection />
            </div>
            <img src="/svg/waveBlack.svg" class="wave">
        </div>
        <div class="bottom-content">
            <div class="content-container">
                <p>© {{ currentYear }} {{ companyName }}</p>
                <ToTopButton class="toTop-button"/>
            </div>
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
    flex-direction: column;
    align-items: center;

    .high-content {
        width: 100%;
        display: flex;
        justify-content: center;
        position: relative;

        .wave {
            position: absolute;
            bottom: 0;
            z-index: 0;
            width: 100%;
        }

        .high-content-container {
            width: 100%;
            max-width: 75rem;
            padding: 3rem 1rem;
            display: flex;
            flex-direction: column;
            gap: 2rem;
            z-index: 1;
        }
    }
    

    .bottom-content {
        width: 100%;
        background: $blackColor;
        color: $whiteColor;
        padding: 1.5rem;
        display: flex;
        justify-content: center;

        .content-container {
            width: 100%;
            max-width: 75rem;
            display: flex;
            justify-content: center;
            position: relative;

            p {
                font-size: 1.25rem;
            }

            .toTop-button {
                position: absolute;
                bottom: 0;
                right: 0;
                color: $blackColor;
            }
        }
    }
}

@media (min-width: $breakpointSmallTablet) {
    footer .high-content .high-content-container {
        padding: 4.5rem 1rem;
        display: grid;
        grid-template-columns: 1fr 1fr; 
        gap: 3rem;
    }

    footer .bottom-content {
        padding: 2rem;
    }
}

@media (min-width: $breakpointLargeDesktop) {

    footer .high-content .high-content-container, 
    footer .bottom-content .content-container {
        max-width: 90rem;
    }
}

</style>