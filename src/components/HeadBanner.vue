<script setup lang="ts">

import ReusablePrimaryButton from '@/sub-components/ReusablePrimaryButton.vue';

</script>

<template>
    <div class="head-banner">
        <div class="text-container">
            <h1>What's new in the garage ?</h1>
            <p>Find your next sound</p>
            <ReusablePrimaryButton>Start browing</ReusablePrimaryButton>
        </div>
        <div class="image-container">
            <img src="/images/decoration/headPic.png" alt="gorilla-rocker">
        </div>
    </div>
</template>

<style lang="scss" scoped>

@import '@/assets/colors.scss';

.head-banner {
    background: $accent1;
    border: solid 5px $blackColor; 
    display: grid;
    grid-template-columns: 1fr 1fr;
    padding: 2rem;

    .text-container {
        display: flex;
        flex-direction: column;
        justify-content: center;
        gap: 2rem;

        h1 {
            font-size: 7rem;
            font-weight: 400;
            line-height: .75;
        }

        p {
            font-size: 3rem;
        }
    }

    .image-container {
        width: 100%;
        display: inline-block;
        position: relative;
        overflow: hidden;

        img {
            width: 100%;
            display: block;
            position: relative;
            object-fit: cover;
            filter: grayscale(100%);
            animation: pulse 2s infinite;
        }
    }
}

@keyframes pulse {
	0% {
		transform: scale(0.95) rotate(5deg);
	}

	50% {
		transform: scale(1) rotate(0deg);
	}

	100% {
		transform: scale(0.95) rotate(5deg);
	}
}

</style>