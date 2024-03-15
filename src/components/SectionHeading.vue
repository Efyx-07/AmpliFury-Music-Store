<script setup lang="ts">

import ReusablePrimaryButton from '@/sub-components/ReusablePrimaryButton.vue';
import ReusableSecondaryButton from '@/sub-components/ReusableSecondaryButton.vue';

</script>

<template>
    <div class="head-banner">
        <div class="content">
            <div class="infos-container">
                <div class="text-container">
                    <h1>AmpliFury</h1>
                    <p class="subTitle">Find your next sound here</p>
                    <p class="item-name">>> Diamond Manchester at <span>3299.00 $</span></p>
                </div>
                <div class="buttons-container">
                    <ReusablePrimaryButton>View product</ReusablePrimaryButton>
                    <ReusableSecondaryButton>Start browsing</ReusableSecondaryButton>  
                </div>
            </div>
            <div class="image-container">
                <img src="/images/catalogue/products/drums/diamond manchester.jpg">
            </div>
        </div>
    </div>
</template>

<style lang="scss" scoped>

@import '@/assets/colors.scss';

.head-banner {
    background: $accent1;
    border-bottom: solid 1px $blackColor; 
    display: flex;
    justify-content: center;

    .content {
        width: 100%;
        max-width: 75rem;
        display: grid;
        grid-template-columns: 1.5fr 1fr;
        padding: 3rem 1rem;

        .infos-container {
            display: flex;
            flex-direction: column;
            gap: 6rem;

            .text-container {
                display: flex;
                flex-direction: column;
                gap: 1rem;

                h1 {
                    font-size: 10rem;
                    font-weight: 700;
                    line-height: .75;
                    white-space: nowrap;
                }

                .subTitle {
                    font-size: 5rem;
                    font-weight: 200;
                }

                .item-name {
                    font-family: "Poppins", sans-serif;
                    font-size: 1.25rem;
                }
            }

            .buttons-container {
                display: flex;
                gap: 1rem;
            }
        }

        .image-container {
            width: 100%;
            display: inline-block;
            position: relative;
            overflow: hidden;
            border-radius: 100%;

            img {
                width: 100%;
                display: block;
                position: relative;
                object-fit: cover;
                border-radius: inherit;
                animation: pulse 2s infinite;
            }
        }
    }

    
}

@keyframes pulse {
	0% {
		transform: scale(1);
	}

	50% {
		transform: scale(1.025);
	}

	100% {
		transform: scale(1) rotate;
	}
}

</style>