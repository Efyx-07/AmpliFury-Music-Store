<template>
    <router-link to="/" class="logo-container">
        <img src="/images/logo/AmpliFury.png" alt="AmpliFury-logo">
    </router-link >
</template>

<style lang="scss" scoped>

@import '@/assets/breakpoints.scss';

.logo-container {
    height: 3.5rem;
    display: inline-block;
    position: relative;
    overflow: hidden;

    img {
        height: 100%;
        display: block;
        position: relative;
        object-fit: cover;
    }
}

@media (min-width: $breakpointLargeMobile) {
    
    .logo-container {
        height: 4rem;
    }
}

</style>