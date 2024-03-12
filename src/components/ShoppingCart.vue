<script setup lang="ts">

import { Icon } from '@iconify/vue';
import { ref, onMounted } from 'vue';

const isShoppingCartVisible = ref<boolean>(false);

// ferme le shoppingCart
const closeShoppingCart = (): void => {
    isShoppingCartVisible.value = false;
}

// écoute l'évènement personnalisé emis par carticon
onMounted(() => {
    window.addEventListener('show-shoppingCart', () => {
        isShoppingCartVisible.value = true;
    });
});

</script>

<template>
    <div class="shopping-cart" :class="{ hiddenShoppingCart: !isShoppingCartVisible}">
        <Icon icon="carbon:close" class="icon" @click="closeShoppingCart" />
    </div>
</template>

<style lang="scss" scoped>

@import '@/assets/colors.scss';

.hiddenShoppingCart {
    transform: translateX(100%);
}

.shopping-cart {
    background: $whiteColor;
    border-left: solid 1px $blackColor; 
    height: 100vh;
    width: 100%;
    max-width: 32rem;
    position: fixed;
    top: 0;
    right: 0;
    z-index: 199;
    transition: transform .3s ease-in-out;

    .icon {
        position: absolute;
        top: 1rem;
        right: 1rem;
        font-size: 2rem;
    }
}

</style>