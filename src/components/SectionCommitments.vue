<script setup lang="ts">

import ReusablePrimaryButtonChecked from '@/sub-components/ReusablePrimaryButtonChecked.vue';

interface Commitment {
    title: string;
    text: string;
}

const commitments: Commitment[] = [
    {
        title: 'Free shipping',
        text: 'Now you can shop for it and enjoy a good deal on AmpliFury store. Starting from 149 $.'
    },
    {
        title: '30 days return',
        text: 'When returning the items, we do a refund of the order. If you wish to exchange for another item.'
    },
    {
        title: 'Best price guaranteed',
        text: 'Our price match applies to the retailers that have identical product available.'
    },

]

</script>

<template>
    <div class="commitments-container">
        <div class="commitmentCard" v-for="commitment in commitments" :key="commitment.title">
            <h3>{{ commitment.title }}</h3>
            <p class="text">{{ commitment.text }}</p>
            <ReusablePrimaryButtonChecked class="button">Know more</ReusablePrimaryButtonChecked>
        </div>
    </div>
</template>

<style lang="scss" scoped>

@import '@/assets/colors.scss';

.commitments-container {
    width: 100%;
    display: flex;
    flex-direction: column;
    gap: 1rem;
    padding: 3rem 1rem;


    .commitmentCard {
        width: 100%;
        border: solid 1px $blackColor;
        padding: 2rem;
        display: flex;
        flex-direction: column;
        gap: 1rem;

        h3 {
            font-size: 2rem;

        }

        p {
            font-family: "Poppins", sans-serif;
            font-size: .9rem;
            font-weight: 500;
            opacity: .75;
        }

        .button {
            width: 100%;
        }
    }
}

</style>