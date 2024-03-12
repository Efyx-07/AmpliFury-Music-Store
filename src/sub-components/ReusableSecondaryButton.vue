<template>
    <button>
        <slot></slot>
    </button>
</template>

<style lang="scss" scoped>

@import '@/assets/colors.scss';
@import '@/assets/reusableButtonStyle.scss';

button {
    @include reusableButtonStyle;
    background: $whiteColor;
    color: $blackColor;
    border: solid 1px $blackColor;

    &:hover {
        background: $accent1;
        border-color: $accent1;
        color: $whiteColor;
    }
}

</style>