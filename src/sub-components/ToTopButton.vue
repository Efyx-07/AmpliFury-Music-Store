<script setup lang="ts">

const scrollToTop = (): void => {
    window.scrollTo({
        top: 0,
        behavior: "smooth",
    });
};

</script>

<template>
    <div class="toTop-button" @click="scrollToTop">
        <p>TOP</p>
    </div>
</template>

<style lang="scss" scoped>

@import '@/assets/colors.scss';
@import '@/assets/breakpoints.scss';

.toTop-button {
    width: 3.5rem;
    height: 3.5rem;
    background: $whiteColor;
    border: solid .25rem $blackColor;
    border-radius: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    cursor: pointer;
    transition: transform .3s ease-in-out;

    &:hover {
        transform: rotate(360deg)
    } 

    p {
        font-size: 1.5rem;
        font-weight: 700;
        letter-spacing: 1.5px;
    }
}

@media (min-width: $breakpointSmallTablet) {

    .toTop-button {
        width: 4.5rem;
        height: 4.5rem;

        p {
            font-size: 1.75rem;
        }
    }
}

</style>