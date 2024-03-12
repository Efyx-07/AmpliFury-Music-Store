<script setup lang="ts">

import { ref, onMounted } from 'vue';

// visibilité par défaut de l'overlay
const showModalOverlay = ref<boolean>(false);

// ecoute l'événement personnalisé (créé sur 'CartIcon')
onMounted(() => {
    window.addEventListener('show-modalOverlay', () => {
        showModalOverlay.value = true;
    })
});

</script>

<template>
    <div class="overlay" v-if="showModalOverlay"></div>
</template>

<style lang="scss" scoped>

@import '@/assets/colors.scss';

.overlay {
    position: fixed;
    top: 0;
    left: 0;
    z-index: 198;
    width: 100%;
    height: 100vh;
    background: $blackTransparency;
    transition: transform .3s ease-in-out;
}

</style>