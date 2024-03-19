<script setup lang="ts">

import ReusablePrimaryButton from './ReusablePrimaryButton.vue';

</script>

<template>
    <div class="footer-section">
        <h1>Newsletter</h1>
        <form class="content">
            <input type="mail" id="email-input" name="email" placeholder= "Enter your email address">
            <ReusablePrimaryButton class="button">Subscribe</ReusablePrimaryButton>
        </form>
    </div>
</template>

<style lang="scss" scoped>

@import '@/assets/colors.scss';

.footer-section {
    display: flex;
    flex-direction: column;
    gap: 3rem;

    h1 {
        font-size: clamp(3rem, 7vw, 5rem);
        line-height: .75;
    }

    .content {
        display: flex;
        flex-direction: column;
        align-items: center;
        gap: .5rem;

        input {
            width: 100%;
            height: 2.75rem;
            padding-left: 1rem;
            outline: none;
            border: solid 1px $blackColor;

            &:focus {
                border: solid 1px $accent1;
            }
        }

        .button {
            width: 100%;
        }
    }
}

</style>