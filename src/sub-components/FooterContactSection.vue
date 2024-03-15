<script setup lang="ts">

import ReusablePrimaryButton from './ReusablePrimaryButton.vue';
import { Icon } from '@iconify/vue';

interface socialIcon {
    social: string;
    iconName: string;
}

const icons: socialIcon[] = [
    { 
        social: 'x',
        iconName: 'simple-icons:x'
    },
    { 
        social: 'instagram',
        iconName: 'simple-icons:instagram'
    },
    { 
        social: 'facebook',
        iconName: 'simple-icons:facebook'
    },
    { 
        social: 'tiktok',
        iconName: 'simple-icons:tiktok'
    },
    { 
        social: 'youtube',
        iconName: 'simple-icons:youtube'
    },
]

</script>

<template>
    <div class="footer-section">
        <h1>Contact us</h1>
        <div class="content">
            <ReusablePrimaryButton class="button">Send us an email</ReusablePrimaryButton>
            <div class="icons-container">
                <Icon v-for="icon in icons" :key="icon.social" :icon="icon.iconName" class="icon"/>
            </div>
        </div>
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
        flex-direction: column;
        align-items: center;
        gap: .5rem;

        .button {
            width: 100%;
        }

        .icons-container {
            width: 100%;
            height: 2.75rem;
            display: flex;
            justify-content: space-around;
            align-items: center;
            border: solid 1px $blackColor;

            .icon {
                font-size: 1.5rem;
                cursor: pointer;

                &:hover {
                    color: $accent1;
                }
            }
        }
    }
}

</style>