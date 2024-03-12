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
    background: $blackColor;
    color: $whiteColor;
    border: solid 1px transparent;

    &:hover {
        background: $accent1;
        border-color: $accent1;
    }
}

</style>