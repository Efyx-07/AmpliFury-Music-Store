<script setup lang="ts">

import ReusablePrimaryButton from './ReusablePrimaryButton.vue';

</script>

<template>
    <div class="footer-section">
        <h1>Newsletter</h1>
        <form action="" class="content">
            <input type="mail" id="email-input" name="email" placeholder= "Enter your email address">
            <div class="button-container">
                <ReusablePrimaryButton>Subscribe</ReusablePrimaryButton>
            </div>
        </form>
    </div>
</template>

<style lang="scss" scoped>

@import '@/assets/colors.scss';

.footer-section {
    display: flex;
    flex-direction: column;
    gap: 1rem;

    .content {
        display: flex;
        align-items: center;
        gap: .5rem;

        input {
            width: 20rem;
            height: 2.75rem;
            padding-left: 1rem;
            outline: none;
            border: solid 1px $blackColor;

            &:focus {
                border: solid 1px $accent1;
            }
        }
    }
}

</style>