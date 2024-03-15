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
        <div class="content">
            <NewsletterForm />
            <FooterContactSection />
            <ToTopButton class="toTop-button"/>
        </div>
        <div class="bottom-content">
            <div class="content-container">
                <p>© {{ currentYear }} {{ companyName }}</p>
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
    
    .content {
        position: relative;
        width: 100%;
        max-width: 75rem;
        padding: 3rem 1rem;
        display: flex;
        flex-direction: column;
        gap: 2rem;

        .toTop-button {
            position: absolute;
            bottom: -3rem;
            right: 1rem;
        }
    }

    .bottom-content {
        width: 100%;
        background: $blackColor;
        color: $whiteColor;
        padding: 2rem;
        display: flex;
        justify-content: center;

        .content-container {
            width: 100%;
            max-width: 75rem;
            display: flex;
            justify-content: center;

            p {
                font-size: 1.25rem;
            }
        }
    }
}

@media (min-width: $breakpointSmallTablet) {
    footer .content {
        padding: 4.5rem 1rem;
        display: grid;
        grid-template-columns: 1fr 1fr; 
        gap: 3rem;
    }
}

@media (min-width: $breakpointLargeDesktop) {

    footer .content, 
    footer .bottom-content .content-container {
        max-width: 90rem;
    }
}

</style>