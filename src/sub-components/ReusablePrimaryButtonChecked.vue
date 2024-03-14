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
    background: $accent1;
    color: $whiteColor;
    border: solid 1px transparent;

    &:hover {
        background: $blackColor;
        border-color: $blackColor;
    }
}

</style>