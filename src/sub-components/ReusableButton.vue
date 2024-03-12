<template>
    <button>
        <slot></slot>
    </button>
</template>

<style lang="scss" scoped>

@import '@/assets/colors.scss';

button {
    background: $blackColor;
    color: $whiteColor;
    border: solid 1px transparent;
    width: 12rem;
    padding: .75rem;
    font-size: 1rem;
    font-weight: 600;
    letter-spacing: 1px;
    cursor: pointer;

    &:hover {
        background: $whiteColor;
        color: $blackColor;
        border-color: $blackColor;
    }
}

</style>